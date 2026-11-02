// English and Chinese blog posts, customer stories, blog lists and the partner, find-partner and contact pages now
// live on the new site at www.nocobase.com (see the page-destination list of 2026-10-26). The middleware 301s them
// straight to their new address there (/en/blog/x -> /blog/x/, /cn/blog/x -> /zh-CN/blog/x/) and the sitemap stops
// listing them.
//
// Only posts the new site has move; anything else stays here, so a link never ends on a 404 on www:
// - the slugs in v3-blog.json (taken from www's sitemap on 2026-10-26, including its hand-written posts), and
// - every CMS article the new site builds itself: the CMS workflow Website_v3_github_sync pushes the same articles to
//   nocobase/website-v3 every hour (website-v3 homepage/scripts/cms-import.mjs). Same rules as there: published, with a
//   detail page and text, and the newest folder of its CMS id (a renamed article leaves its old folder behind).
//   An article edited in the last 90 minutes stays here until the new site has surely rebuilt with it.
// Drafts, Japanese, pagination, tag pages and the timeline stay here.
import fs from 'node:fs';
import path from 'node:path';
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

const ARTICLES = path.join(process.cwd(), 'content', 'articles');
const SETTLE_MS = 90 * 60 * 1000;
type Article = { status?: string; hideDetailPage?: boolean; updatedAt?: string; story: boolean };
let cms: Map<string, Article> | null = null;
// slug -> article, newest folder per CMS id only; the content changes only with a new deployment, so read it once.
function cmsArticles(): Map<string, Article> {
  if (cms) return cms;
  const newest = new Map<unknown, [string, Article]>();
  for (const slug of fs.existsSync(ARTICLES) ? fs.readdirSync(ARTICLES) : []) {
    const dir = path.join(ARTICLES, slug);
    try {
      const m = JSON.parse(fs.readFileSync(path.join(dir, 'metadata.json'), 'utf-8'));
      if (!fs.existsSync(path.join(dir, 'index.md')) && !fs.existsSync(path.join(dir, 'index.cn.md'))) continue;
      const story = (m.tags || []).some((t: { title?: string }) => t && t.title === 'Customer Stories');
      const article = { status: m.status, hideDetailPage: m.hideDetailPage, updatedAt: m.updatedAt || '', story };
      const prev = newest.get(m.id);
      if (!prev || article.updatedAt > (prev[1].updatedAt || '')) newest.set(m.id, [slug, article]);
    } catch {
      // no or unreadable metadata.json: not an article the new site builds
    }
  }
  cms = new Map([...newest.values()]);
  return cms;
}
function onNewSite(slug: string): Article | null {
  const a = cmsArticles().get(slug);
  if (!a || a.status !== 'published' || a.hideDetailPage) return null;
  if (!a.updatedAt || Date.now() - Date.parse(a.updatedAt) < SETTLE_MS) return null;
  return a;
}

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
  const article = onNewSite(name);
  if (article) return `${base}/${article.story ? 'customers' : 'blog'}/${slug}/`;
  return null;
}
