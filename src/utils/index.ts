import { createMarkdownProcessor as coreCreateMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';

const baseURL = (import.meta.env.NOCOBASE_URL || process.env.NOCOBASE_URL) + 'api/';
const token = import.meta.env.NOCOBASE_TOKEN || process.env.NOCOBASE_TOKEN;

console.log(baseURL);
console.log(token);

export function url(path: string) {
  return (import.meta.env.NOCOBASE_URL || process.env.NOCOBASE_URL) + path
}

export async function createMarkdownProcessor() {
  return await coreCreateMarkdownProcessor({
    shikiConfig: {
      theme: 'github-light'
    },
    syntaxHighlight: 'shiki',
    remarkPlugins: [remarkDirective],
    rehypePlugins: [rehypeSlug
      //   [rehypeToc, { headings: ['h1', 'h2', 'h3', 'h4', 'h5'] }]
    ]
  });
}

export async function listTaskCategories() {
  const res = await fetch(`${baseURL}taskCategories:list?pageSize=200&appends=tasks,tasks.status&token=${token}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function listPluginCategories() {
  const res = await fetch(`${baseURL}pluginCategories:list?pageSize=200&appends=plugins&token=${token}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function listArticles(options?: { page?: number }) {
  const { page = 1 } = options || { page: 1 };
  const res = await fetch(`${baseURL}articles:list?page=${page}&pageSize=9&appends=cover&token=${token}`);
  const { data, meta } = await res.json() as { data: any[], meta: any };
  return { data, meta };
}

export async function getArticle(slug?: string) {
  const res = await fetch(`${baseURL}articles:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  const processor = await createMarkdownProcessor();
  const { code, metadata } = await processor.render(data?.content || '');
  const headings: any[] = metadata.headings || [];
  return { data, headings, html: code };
}


export async function listReleases() {
  const res = await fetch(`${baseURL}releases:list?pageSize=2000&token=${token}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function getRelease(slug?: string) {
  const res = await fetch(`${baseURL}releases:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  const processor = await createMarkdownProcessor();
  const { code, metadata } = await processor.render(data?.content || '');
  const headings: any[] = metadata.headings || [];
  return { data, headings, html: code };
}

