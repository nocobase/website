// getStaticPaths for the site's dynamic routes. The site is built to static files (see astro.config.mjs), so every URL
// a dynamic route answers has to be listed here; anything not listed is a 404 on the CDN.
//
// Each list reproduces what the route served when the site was rendered on request:
// - a blog post: every folder in content/articles with a metadata.json, unless the post is deleted or has no detail
//   page (the page itself answered those with 404). Drafts have a page too, as before.
// - a tag: every tag with a title, except internal/test tags (see internal-taxonomy).
// - a list (the blog, a tag): pages 1 to the last page, at least page 1.
//
// The blog exists in en/cn/ja only and AI Blueprints are retired; those routes use `noPaths`.
import fs from 'node:fs';
import path from 'node:path';

import { getArticleTag, listArticles } from './index';
import { isInternalTaxonomySlug } from './internal-taxonomy';

const CONTENT = path.join(process.cwd(), 'content');

function readJson(file: string): any {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
  } catch {
    return null;
  }
}

function pageNumbers(totalPages: number) {
  return Array.from({ length: Math.max(1, totalPages || 0) }, (_, i) => String(i + 1));
}

export function noPaths() {
  return [];
}

export function articlePaths() {
  const dir = path.join(CONTENT, 'articles');
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => {
      const metadata = readJson(path.join(dir, entry.name, 'metadata.json'));
      return metadata && !metadata.hideDetailPage && metadata.status !== 'deleted';
    })
    .map((entry) => ({ params: { slug: entry.name } }));
}

export async function blogPagePaths() {
  const { meta } = await listArticles({ hideOnBlog: false });
  return pageNumbers(meta.totalPages).map((page) => ({ params: { page } }));
}

async function tagSlugs() {
  const slugs = new Set<string>();
  for (const tag of readJson(path.join(CONTENT, 'tags', 'article-tags.json')) || []) {
    if (typeof tag?.slug === 'string') slugs.add(tag.slug);
  }
  for (const entry of fs.readdirSync(path.join(CONTENT, 'tags'), { withFileTypes: true })) {
    if (entry.isDirectory() && fs.existsSync(path.join(CONTENT, 'tags', entry.name, 'tag.json'))) slugs.add(entry.name);
  }
  const result: string[] = [];
  for (const slug of slugs) {
    if (!slug.trim() || isInternalTaxonomySlug(slug)) continue;
    const tag: any = await getArticleTag(slug);
    if (tag?.title) result.push(slug);
  }
  return result;
}

export async function tagPaths() {
  return (await tagSlugs()).map((slug) => ({ params: { slug } }));
}

export async function tagPagePaths() {
  const paths = [];
  for (const slug of await tagSlugs()) {
    const { meta } = await listArticles({ tagSlug: slug });
    for (const page of pageNumbers(meta.totalPages)) paths.push({ params: { slug, page } });
  }
  return paths;
}
