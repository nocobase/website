import { createMarkdownProcessor as coreCreateMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';

const baseURL = (import.meta.env.NOCOBASE_URL || process.env.NOCOBASE_URL) + 'api/';
const token = import.meta.env.NOCOBASE_TOKEN || process.env.NOCOBASE_TOKEN;

export function url(path: string) {
  if (path.startsWith('https')) {
    return path;
  }
  return (import.meta.env.NOCOBASE_URL || process.env.NOCOBASE_URL) + path;
}

export const processor = await createMarkdownProcessor();

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

export async function getTaskLastUpdatedAt() {
  const res = await fetch(`${baseURL}tasks:get?sort=-updatedAt&token=${token}`);
  const { data } = await res.json() as { data: any };
  return data.updatedAt;
}

export async function getLastUpdatedAt(collection: string) {
  const res = await fetch(`${baseURL}${collection}:get?sort=-updatedAt&token=${token}`);
  const { data } = await res.json() as { data: any };
  return data.updatedAt;
}

export async function listTaskCategories() {
  const res = await fetch(`${baseURL}taskCategories:list?pageSize=200&appends=tasks(sort=sort),tasks.status&sort=sort&token=${token}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function listPluginCategories() {
  const res = await fetch(
      `${baseURL}plugins_2025:list?pageSize=400&sort[]=sort&appends[]=category&filter={}&token=${token}`
  );
  const { data } = await res.json() as { data: any[] };
  // data 是插件列表，每个插件都带有 category 字段
  // 下面将它们按照 category.id 分组，并返回和原来结构类似的结果
  // 用 Map 来管理分组
  const groupMap = new Map<number, any>();

  for (const plugin of data) {
    const cat = plugin.category;
    if (!cat) {
      // 如果 plugin 没有分类，就跳过或放到一个「无分类」分组里，看你业务需求
      continue;
    }

    if (!groupMap.has(cat.id)) {
      // 先在分组里放上分类的基础信息（包括中文标题等）
      groupMap.set(cat.id, {
        id: cat.id,
        title: cat.title,
        title_cn: cat.title_cn,
        title_ja: cat.title_ja,
        slug: cat.slug,
        sort: cat.sort,
        // 关键：一定要加上一个 plugins 数组用来存放该分类下所有插件
        plugins: [],
      });
    }
    // 把该插件放入对应分类的 plugins 列表里
    groupMap.get(cat.id).plugins.push(plugin);
  }

  // 最后把 Map 转成原来那种数组结构
  return Array.from(groupMap.values());
}


export async function listArticles(options?: { hideOnBlog?: boolean, pageSize?: number, categorySlug?: string; tagSlug?: string; page?: number; }) {
  const { hideOnBlog, categorySlug, tagSlug, page = 1, pageSize = 9 } = options || { page: 1, pageSize: 9 };
  let url = `${baseURL}articles:list?page=${page}&pageSize=${pageSize}&appends=cover&sort=-publishedAt&token=${token}&filter[hideOnListPage.$isFalsy]=true&filter[status]=published`;
  if (tagSlug) {
    url += `&filter[tags.slug]=${tagSlug}`;
  }
  if (categorySlug) {
    url += `&filter[category.slug]=${categorySlug}`;
  }
  if (hideOnBlog === false) {
    url += `&filter[hideOnBlog.$isFalsy]=true`;
  }
  const res = await fetch(url);
  const { data, meta } = await res.json() as { data: any[], meta: any };
  return { data, meta };
}

export async function listTutorialArticles(options?: { pageSize?: number, slug?: string; serialsSlug?: string; page?: number; }) {
  const { slug, serialsSlug, page = 1, pageSize = 9 } = options || { page: 1, pageSize: 9 };
  let url = `${baseURL}tutorialArticles:list?page=${page}&pageSize=${pageSize}&appends=serials&sort=serialsSort&token=${token}&filter[serials.status]=published&filter[status]=published`;
  if (slug) {
    url += `&slug=${slug}`;
  }
  if (serialsSlug) {
    url += `&filter[serials.slug]=${serialsSlug}`;
  }
  const res = await fetch(url);
  const { data, meta } = await res.json() as { data: any[], meta: any };
  return { data, meta };
}

export async function getRssItems(locale = '*') {
  const { data } = await listArticles({ pageSize: 5000, hideOnBlog: false });
  const items = [];

  for (const post of data) {
    const { code: content } = await processor.render(post.content || '');
    const { code: content_cn } = await processor.render(post.content_cn || '');
    const { code: content_ja } = await processor.render(post.content_ja || '');

    if (locale === 'en' || locale === '*' || locale === 'ja') {
      items.push({
        title: post.title,
        description: post.description,
        content: locale === 'ja' && post.content_ja ? content_ja : content,
        link: `/${locale === 'ja' ? 'ja' : 'en'}/blog/${post.slug}`,
        pubDate: post.publishedAt,
        customData: `<language>${locale === 'ja' ? 'ja-JP' : 'en-US'}</language>`,
        author: post.author,
      });
    }

    if (locale === 'cn' || locale === '*') {
      items.push({
        title: post.title_cn || post.title,
        description: post.title_cn || post.title,
        content: content_cn || content,
        link: `/cn/blog/${post.slug}`,
        pubDate: post.publishedAt,
        customData: `<language>zh-CN</language>`,
        author: post.author,
      });
    }

    // 添加对日语的支持
    if (locale === 'ja' || locale === '*') {
      items.push({
        title: post.title_ja || post.title,
        description: post.description_ja || post.description,
        content: content_ja || content,
        link: `/ja/blog/${post.slug}`,
        pubDate: post.publishedAt,
        customData: `<language>ja-JP</language>`,
        author: post.author,
      });
    }
  }
  return items;
}

export async function listArticleCategories() {
  const res = await fetch(`${baseURL}articleCategories:list?pageSize=200&sort=sort&token=${token}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function listArticleTags(options?: any) {
  const { filter } = options || {};
  const res = await fetch(`${baseURL}articleTags:list?pageSize=200&sort=sort&token=${token}&filter=${JSON.stringify(filter)}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function getPage(slug?: string) {
  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}pages:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  return data;
}

export async function getArticleCategory(slug?: string) {
  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}articleCategories:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  return data;
}

export async function getArticleTag(slug?: string) {
  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}articleTags:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  return data;
}

const articles: Record<string, any> = {};

export async function getArticle(slug?: string, locale = 'en') {
  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}articles:get?appends=cover,tags&filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  if (!data.id) {
    return {};
  }
  const key = `${data.id}-${data.updatedAt}-${locale}`;
  if (articles[key]) {
    return articles[key];
  }
  let content = data?.content || '';
  if (locale === 'cn' && data?.content_cn) {
    content = data?.content_cn;
  }
  // 添加对日语的支持
  if (locale === 'ja' && data?.content_ja) {
    content = data?.content_ja;
  }
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
  articles[key] = { data, headings, html: code };
  return articles[key];
}

export async function getTutorialArticle(slug?: string, locale = 'en') {
  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}tutorialArticles:get?appends=serials&filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  if (!data.id) {
    return {};
  }
  const key = `${data.id}-${data.updatedAt}-${locale}`;
  if (articles[key]) {
    return articles[key];
  }
  let content = data?.content || '';
  if (locale === 'cn' && data?.content_cn) {
    content = data?.content_cn;
  }
  // 添加对日语的支持
  if (locale === 'ja' && data?.content_ja) {
    content = data?.content_ja;
  }
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
  articles[key] = { data, headings, html: code };
  return articles[key];
}

export async function listReleases(options?: any) {
  const { page = 1, tagSlug } = options || {};
  let url = `${baseURL}releases:list?page=${page}&pageSize=20&sort=-publishedAt&token=${token}&filter[status]=published`;
  if (tagSlug) {
    url += `&filter[tags.slug]=${tagSlug}`;
  }
  const res = await fetch(url);
  const { data, meta } = await res.json() as { meta?: any; data: any[] };
  return { data, meta };
}

const releases: Record<string, any> = {};

export async function getRelease(slug?: string, locale = 'en') {
  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}releases:get?appends=tags&filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  if (!data.id) {
    return {};
  }
  const key = `${data.id}-${data.updatedAt}-${locale}`;
  if (releases[key]) {
    return releases[key];
  }
  let content = data?.content || '';
  if (locale === 'cn' && data?.content_cn) {
    content = data?.content_cn;
  }
  // 添加对日语的支持
  if (locale === 'ja' && data?.content_ja) {
    content = data?.content_ja;
  }
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
  releases[key] = { data, headings, html: code };
  return releases[key];
}

export async function getReleaseTag(slug?: string) {
  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}releaseTags:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  return data;
}

export async function getSitemapLinks() {
  const items1 = await fetch(`${baseURL}articleTags:list?sort=sort&paginate=false&token=${token}`)
    .then(res => res.json())
    .then(body => body.data);
  const items2 = await fetch(`${baseURL}articles:list?filter[status]=published&sort=-publishedAt&paginate=false&token=${token}`)
    .then(res => res.json())
    .then(body => body.data);
  const items3 = await fetch(`${baseURL}tutorialArticles:list?filter[status]=published&sort=-publishedAt&paginate=false&token=${token}`)
    .then(res => res.json())
    .then(body => body.data);
  const tasksLastUpdatedAt = await getTaskLastUpdatedAt();
  const articlesLastUpdatedAt = await getLastUpdatedAt('articles');
  const pluginsLastUpdatedAt = await getLastUpdatedAt('plugins_2025');
  const tutorialsLastUpdatedAt = await getLastUpdatedAt('tutorialArticles');

  // 基本的站点链接，添加日语版本
  const baseLinks = [
    {
      url: '/',
      links: [
        { lang: 'en-US', url: `/en/` },
        { lang: 'zh-CN', url: `/cn/` },
        { lang: 'ja-JP', url: `/ja/` }, // 日语链接
        { lang: 'x-default', url: `/` },
      ],
    },
    {
      url: '/en/roadmap',
      lastmod: tasksLastUpdatedAt,
      links: [
        { lang: 'en-US', url: `/en/roadmap` },
        { lang: 'zh-CN', url: `/cn/roadmap` },
        { lang: 'ja-JP', url: `/ja/roadmap` }, // 日语链接
        { lang: 'x-default', url: `/en/roadmap` },
      ],
    },
    {
      url: '/en/plugins',
      lastmod: pluginsLastUpdatedAt,
      links: [
        { lang: 'en-US', url: `/en/plugins` },
        { lang: 'zh-CN', url: `/cn/plugins` },
        { lang: 'ja-JP', url: `/ja/plugins` }, // 日语链接
        { lang: 'x-default', url: `/en/plugins` },
      ],
    },
    {
      url: '/en/plugins-commercial',
      links: [
        { lang: 'en-US', url: `/en/plugins-commercial` },
        { lang: 'zh-CN', url: `/cn/plugins-commercial` },
        { lang: 'ja-JP', url: `/ja/plugins-commercial` }, // 日语链接
        { lang: 'x-default', url: `/en/plugins-commercial`, },
      ],
    },
    {
      url: '/en/plugins-bundles',
      links: [
        { lang: 'en-US', url: `/en/plugins-bundles` },
        { lang: 'zh-CN', url: `/cn/plugins-bundles` },
        { lang: 'ja-JP', url: `/ja/plugins-bundles` }, // 日语链接
        { lang: 'x-default', url: `/en/plugins-bundles`, },
      ],
    },
    {
      url: '/en/commercial',
      links: [
        { lang: 'en-US', url: `/en/commercial` },
        { lang: 'zh-CN', url: `/cn/commercial` },
        { lang: 'ja-JP', url: `/ja/commercial` }, // 日语链接
        { lang: 'x-default', url: `/en/commercial` },
      ],
    },
    {
      url: '/en/community',
      links: [
        { lang: 'en-US', url: `/en/community` },
        { lang: 'zh-CN', url: `/cn/community` },
        { lang: 'ja-JP', url: `/ja/community` }, // 日语链接
        { lang: 'x-default', url: `/en/community`, },
      ],
    },
    {
      url: '/en/contact',
      links: [
        { lang: 'en-US', url: `/en/contact` },
        { lang: 'zh-CN', url: `/cn/contact` },
        { lang: 'ja-JP', url: `/ja/contact` }, // 日语链接
        { lang: 'x-default', url: `/en/contact`, },
      ],
    },
    {
      url: '/en/agreement',
      links: [
        { lang: 'en-US', url: `/en/agreement` },
        { lang: 'zh-CN', url: `/cn/agreement` },
        { lang: 'ja-JP', url: `/ja/agreement` }, // 日语链接
        { lang: 'x-default', url: `/en/agreement`, },
      ],
    },
    {
      url: '/en/blog',
      lastmod: articlesLastUpdatedAt,
      links: [
        { lang: 'en-US', url: `/en/blog` },
        { lang: 'zh-CN', url: `/cn/blog` },
        { lang: 'ja-JP', url: `/ja/blog` }, // 日语链接
        { lang: 'x-default', url: `/en/blog`, },
      ],
    },
    {
      url: '/en/tutorials',
      lastmod: tutorialsLastUpdatedAt,
      links: [
        { lang: 'en-US', url: `/en/tutorials` },
        { lang: 'zh-CN', url: `/cn/tutorials` },
        { lang: 'ja-JP', url: `/ja/tutorials` }, // 日语链接
        { lang: 'x-default', url: `/en/tutorials`, },
      ],
    },
  ];

  // 添加标签页的链接，支持日语
  const tagLinks = await Promise.all(items1.filter((item: any) => item.slug).map(async (item: any) => {
    return {
      url: `/en/blog/tags/${item.slug}`,
      lastmod: item.updatedAt,
      links: [
        { lang: 'en-US', url: `/en/blog/tags/${item.slug}` },
        { lang: 'zh-CN', url: `/cn/blog/tags/${item.slug}` },
        { lang: 'ja-JP', url: `/ja/blog/tags/${item.slug}` }, // 日语链接
        { lang: 'x-default', url: `/en/blog/tags/${item.slug}` },
      ],
    };
  }));

  // 添加文章页的链接，支持日语
  const articleLinks = items2.map((item: any) => {
    return {
      url: `/en/blog/${item.slug}`,
      lastmod: item.updatedAt,
      links: [
        { lang: 'en-US', url: `/en/blog/${item.slug}` },
        { lang: 'zh-CN', url: `/cn/blog/${item.slug}` },
        { lang: 'ja-JP', url: `/ja/blog/${item.slug}` }, // 日语链接
        { lang: 'x-default', url: `/en/blog/${item.slug}` },
      ],
    };
  });

  const tutorialLinks = items3.map((item: any) => {
    return {
      url: `/en/tutorials/${item.slug}`,
      lastmod: item.updatedAt,
      links: [
        { lang: 'en-US', url: `/en/tutorials/${item.slug}` },
        { lang: 'zh-CN', url: `/cn/tutorials/${item.slug}` },
        { lang: 'ja-JP', url: `/ja/tutorials/${item.slug}` }, // 日语链接
        { lang: 'x-default', url: `/en/tutorials/${item.slug}` },
      ],
    };
  });

  return baseLinks.concat(tagLinks).concat(articleLinks).concat(tutorialLinks);
}
