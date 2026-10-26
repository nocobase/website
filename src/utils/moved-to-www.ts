// English and Chinese blog posts, customer stories, blog lists and the partner, find-partner and contact pages now
// live on the new site at www.nocobase.com (see the page-destination list of 2026-10-26). The middleware 301s them
// straight to their new address there (/en/blog/x -> /blog/x/, /cn/blog/x -> /zh-CN/blog/x/) and the sitemap stops
// listing them.
//
// Only slugs the new site publishes move (v3-blog.json, taken from www's sitemap); anything else stays here, because
// www sends every path it does not have to this site and a missing one would bounce between the two domains.
// Japanese, pagination, tag pages and the timeline stay here for now.
import V3 from './v3-blog.json';

export const MOVED_TO_WWW_LIVE = true;
export const WWW = 'https://www.nocobase.com';

const PREFIX: Record<string, string> = { en: '', cn: '/zh-CN' };
const SLUGS: Record<string, { blog: Set<string>; customers: Set<string> }> = Object.fromEntries(
  Object.entries(V3).map(([lang, s]) => [lang, { blog: new Set(s.blog), customers: new Set(s.customers) }]),
);
// Old blog categories: the new blog has no category pages, so they open the blog list (customer stories: the
// customers list).
const OLD_CATEGORIES = new Set(['release-notes', 'tech-tutorials', 'no-code-insights', 'nocode-news', 'nocobase-tutorials',
  'task-management', 'serials-title', 'news-updates', 'nocobase-stories']);

// Where a path of this site now lives on www, or null when it stays here.
export function wwwTarget(pathname: string): string | null {
  const path = pathname.replace(/\/$/, '');
  const page = path.match(/^\/(en|cn)\/(partner|find-partner|contact)$/);
  if (page) return `${WWW}${PREFIX[page[1]]}/${page[2]}/`;
  // The old customer-stories tag page (linked from the old menu) is the customers list on www.
  const stories = path.match(/^\/(en|cn)\/blog\/tags\/customer-stories$/);
  if (stories) return `${WWW}${PREFIX[stories[1]]}/customers/`;
  const blog = path.match(/^\/(en|cn)\/blog(?:\/([^/]+))?$/);
  if (!blog) return null;
  const [, lang, slug] = blog, base = WWW + PREFIX[lang];
  if (!slug || OLD_CATEGORIES.has(slug)) return `${base}/blog/`;
  if (slug === 'customer-stories') return `${base}/customers/`;
  const name = decodeURIComponent(slug);
  if (SLUGS[lang].blog.has(name)) return `${base}/blog/${slug}/`;
  if (SLUGS[lang].customers.has(name)) return `${base}/customers/${slug}/`;
  return null;
}
