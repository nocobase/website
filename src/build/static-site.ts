// Finishes the static build (`astro build`) for the OSS bucket the CDN serves the site from.
//
// While the site was rendered on request, src/middleware.ts decided some answers per request. Most of those decisions
// are fixed redirects and now live in the CDN's EdgeScript (cdn/redirects.es). Two are settled here, after the pages
// are written:
//
// - Pages that answer 404: the blog outside en/cn/ja and the retired AI Blueprints. Their dynamic routes build no
//   page (see utils/static-paths); this removes the index and timeline pages that are not dynamic.
// - Pages that moved to www.nocobase.com (see utils/moved-to-www): which posts moved depends on the content of this
//   build, so it cannot be a CDN rule. Each such page is replaced with one that points at its new address: a canonical
//   link, a meta refresh, and a script that keeps the query string and fragment.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';

import { MOVED_TO_WWW_LIVE, wwwTarget } from '../utils/moved-to-www';

const NO_BLOG_LOCALES = ['de', 'es', 'fr', 'id', 'pt', 'tw', 'vi'];
const LOCALES = ['en', 'cn', 'tw', 'ja', 'fr', 'es', 'de', 'pt', 'id', 'vi'];

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function movedPage(target: string) {
  const href = escapeHtml(target);
  // JSON.stringify quotes the string for the script; `<` is escaped so the value cannot close the script element.
  const js = JSON.stringify(target).replace(/</g, '\\u003c');
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Redirecting to ${href}</title>
<link rel="canonical" href="${href}">
<meta http-equiv="refresh" content="0;url=${href}">
<script>location.replace(${js} + location.search + location.hash);</script>
</head>
<body><a href="${href}">${href}</a></body>
</html>
`;
}

// Every `<dir>/index.html` below `dir`, as the site path that serves it: `en/partner/index.html` -> `/en/partner`.
function* pagesUnder(root: string, dir: string): Generator<[string, string]> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* pagesUnder(root, full);
    else if (entry.name === 'index.html') yield ['/' + path.relative(root, dir).split(path.sep).join('/'), full];
  }
}

export default function staticSite(): AstroIntegration {
  return {
    name: 'static-site',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const root = fileURLToPath(dir);

        const removed = [
          ...NO_BLOG_LOCALES.map((locale) => path.join(root, locale, 'blog')),
          path.join(root, 'ai-blueprints'),
          ...LOCALES.map((locale) => path.join(root, locale, 'ai-blueprints')),
        ].filter((target) => fs.existsSync(target));
        for (const target of removed) fs.rmSync(target, { recursive: true });
        logger.info(`Removed ${removed.length} directories of pages that answer 404.`);

        if (!MOVED_TO_WWW_LIVE) return;
        let moved = 0;
        for (const locale of ['en', 'cn']) {
          const localeDir = path.join(root, locale);
          if (!fs.existsSync(localeDir)) continue;
          for (const [pathname, file] of pagesUnder(root, localeDir)) {
            const target = wwwTarget(pathname);
            if (!target) continue;
            fs.writeFileSync(file, movedPage(target));
            moved++;
          }
        }
        logger.info(`Pointed ${moved} pages that moved to www.nocobase.com at their new address.`);
      },
    },
  };
}
