import { defineMiddleware } from 'astro:middleware';

// Define which Russian pages should redirect to English
const RUSSIAN_REDIRECT_PAGES = [
  '/ru/tutorials',
  '/ru/blog',
  '/ru/tutorials/',
  '/ru/blog/',
  '/ru/partners',
  '/ru/highlights',
  '/ru/highlights/'
];

// Define patterns for dynamic routes that should redirect
const RUSSIAN_REDIRECT_PATTERNS = [
  /^\/ru\/tutorials\/.*$/,
  /^\/ru\/blog\/.*$/,
  /^\/ru\/highlights\/.*$/
];

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

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Redirect old top-level module pages to their new all-in-one sub-route
  const moduleMove = pathname.match(/^\/([a-z]{2})\/solutions\/(sales-management|asset-management|hr-management)\/?$/);
  if (moduleMove) {
    const [, lang, slug] = moduleMove;
    return context.redirect(`/${lang}/solutions/${MODULE_PAGE_MOVES[slug]}`, 301);
  }

  // Check if the current path is a Russian page that should redirect
  if (RUSSIAN_REDIRECT_PAGES.includes(pathname)) {
    // Redirect to the English version
    const englishPath = pathname.replace('/ru/', '/en/');
    return context.redirect(englishPath, 301); // 301 for permanent redirect
  }
  
  // Check if the current path matches any Russian redirect patterns
  for (const pattern of RUSSIAN_REDIRECT_PATTERNS) {
    if (pattern.test(pathname)) {
      // Redirect to the English version
      const englishPath = pathname.replace('/ru/', '/en/');
      return context.redirect(englishPath, 301); // 301 for permanent redirect
    }
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
  
  // Continue with normal request processing
  return next();
}); 