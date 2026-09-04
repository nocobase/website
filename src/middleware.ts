import { defineMiddleware } from 'astro:middleware';

import { isInternalTaxonomySlug } from './utils/internal-taxonomy';

// Define French pages that should redirect to English
const FRENCH_REDIRECT_PATTERNS = [];

// Define Chinese pages that should redirect to other pages
const CHINESE_REDIRECT_PAGES = [
  '/cn/plugins-commercial',
  '/cn/plugins-commercial/'
];

// Define English pages that should redirect to other pages
const ENGLISH_REDIRECT_PAGES = [
  '/en/plugins-commercial',
  '/en/plugins-commercial/'
];

// Define Japanese pages that should redirect to other pages
const JAPANESE_REDIRECT_PAGES = [
  '/ja/plugins-commercial',
  '/ja/plugins-commercial/'
];

// Module pages moved under the all-in-one sub-route (301)
const MODULE_PAGE_MOVES: Record<string, string> = {
  'sales-management': 'all-in-one/sales',
  'asset-management': 'all-in-one/asset',
  'hr-management': 'all-in-one/hr',
};

const COMMERCIAL_LOCALES = new Set(['en', 'cn', 'tw', 'ja', 'fr', 'es', 'de', 'pt', 'id', 'vi']);

export const onRequest = defineMiddleware(async (context, next) => {
  // Russian was dropped from this site. Fold /ru/* onto its English path before
  // any rule runs, so each rule below can answer with a single 301 that lands on
  // the final URL. Matching /ru/ last instead would chain: /ru/pricing would go
  // to /en/pricing and only then to /en/commercial, and the module rule would
  // answer /ru/solutions/sales-management with another /ru/ URL.
  const requestPath = context.url.pathname;
  const isRussian = requestPath === '/ru' || requestPath.startsWith('/ru/');
  const pathname = isRussian
    ? requestPath === '/ru' ? '/en' : requestPath.replace(/^\/ru\//, '/en/')
    : requestPath;

  // Preserve common pricing URLs while keeping /commercial as the canonical
  // path. Every locale below has a corresponding commercial page.
  if (pathname === '/pricing' || pathname === '/pricing/') {
    return context.redirect('/en/commercial', 301);
  }
  const localizedPricing = pathname.match(/^\/([a-z]{2})\/pricing\/?$/);
  if (localizedPricing && COMMERCIAL_LOCALES.has(localizedPricing[1])) {
    return context.redirect(`/${localizedPricing[1]}/commercial`, 301);
  }

  // Internal/test taxonomy is not public content. Keep it out of the index even
  // when a stale CMS tag still exists. The sitemap drops the same slugs — see
  // isInternalTaxonomySlug — so a tag is never served and advertised
  // inconsistently.
  const tagPage = pathname.match(/^\/(?:en|cn|ja)\/blog\/tags\/([^/]+)\/?$/);
  if (tagPage && isInternalTaxonomySlug(decodeURIComponent(tagPage[1]))) {
    return context.rewrite('/404');
  }

  // Redirect old top-level module pages to their new all-in-one sub-route
  const moduleMove = pathname.match(/^\/([a-z]{2})\/solutions\/(sales-management|asset-management|hr-management)\/?$/);
  if (moduleMove) {
    const [, lang, slug] = moduleMove;
    return context.redirect(`/${lang}/solutions/${MODULE_PAGE_MOVES[slug]}`, 301);
  }

  // Blog only exists in en/cn/ja — other locales' blog URLs are gone (hard 404)
  if (/^\/(de|es|fr|id|pt|vi|tw)\/blog(\/.*)?$/.test(pathname)) {
    return context.rewrite('/404');
  }

  // Tutorials are retired on this site — permanently redirect every
  // /{locale}/tutorials(/...) URL to the docs site's v2 tutorials. docs serves
  // all our locales except tw, which falls back to cn.
  const tutorialMatch = pathname.match(/^\/(en|cn|tw|ja|fr|es|de|pt|id|vi)\/tutorials(\/.*)?$/);
  if (tutorialMatch) {
    const docsLang = tutorialMatch[1] === 'tw' ? 'cn' : tutorialMatch[1];
    return new Response(null, {
      status: 301,
      headers: { Location: `https://docs.nocobase.com/${docsLang}/tutorials/v2/` },
    });
  }

  // Check if the current path matches any French redirect patterns
  for (const pattern of FRENCH_REDIRECT_PATTERNS) {
    if (pattern.test(pathname)) {
      // Redirect to the English version
      const englishPath = pathname.replace('/fr/', '/en/');
      return context.redirect(englishPath, 301); // 301 for permanent redirect
    }
  }
  
  // Check if the current path is a Chinese page that should redirect
  if (CHINESE_REDIRECT_PAGES.includes(pathname)) {
    // Redirect commercial plugins to main plugins page
    if (pathname.includes('/plugins-commercial')) {
      return context.redirect('/cn/plugins', 301); // 301 for permanent redirect
    }
  }
  
  // Check if the current path is an English page that should redirect
  if (ENGLISH_REDIRECT_PAGES.includes(pathname)) {
    // Redirect commercial plugins to main plugins page
    if (pathname.includes('/plugins-commercial')) {
      return context.redirect('/en/plugins', 301); // 301 for permanent redirect
    }
  }
  
  // Check if the current path is a Japanese page that should redirect
  if (JAPANESE_REDIRECT_PAGES.includes(pathname)) {
    // Redirect commercial plugins to main plugins page
    if (pathname.includes('/plugins-commercial')) {
      return context.redirect('/ja/plugins', 301); // 301 for permanent redirect
    }
  }
  
  // No rule above claimed this Russian URL — send it to its English twin.
  if (isRussian) {
    return context.redirect(pathname, 301);
  }

  // Continue with normal request processing
  return next();
});
