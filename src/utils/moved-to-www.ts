// Pages that move to the new site on www.nocobase.com at the same address (see the page-destination list of
// 2026-10-26): the en/cn/ja blog (posts, list pages, tag pages) and the partner, find-partner and contact pages.
// The middleware 301s them to www and the sitemap stops listing them.
//
// Keep this switch off until www actually serves those paths: www sends every path it does not have to this site,
// so turning it on first would bounce visitors between the two domains.
export const MOVED_TO_WWW_LIVE = false;
export const WWW = 'https://www.nocobase.com';

const MOVED_BLOG = /^\/(en|cn|ja)\/blog(\/.*)?$/;
const MOVED_PAGES = /^\/(en|cn|tw|ja|fr|es|de|pt|id|vi)\/(partner|find-partner|contact)\/?$/;
// Tags the new blog does not open: they go to the blog list of the same language instead.
const CLOSED_BLOG_TAGS = new Set(['news-updates', 'nocobase-tutorials', 'serials-title', 'task-management']);

// Where a path of this site now lives on www, or null when it stays here.
export function wwwTarget(pathname: string): string | null {
  const path = pathname.replace(/\/$/, '');
  const blog = path.match(MOVED_BLOG);
  if (blog) {
    const rest = blog[2] || '';
    const tag = rest.match(/^\/tags\/([^/]+)/);
    if (tag && CLOSED_BLOG_TAGS.has(tag[1])) return `${WWW}/${blog[1]}/blog`;
    return WWW + path;
  }
  if (MOVED_PAGES.test(path)) return WWW + path;
  return null;
}
