import { createMarkdownProcessor as coreCreateMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import * as localContent from './local-content';
import path from 'path';
import fs from 'fs';

const baseURL = (import.meta.env.NOCOBASE_URL || process.env.NOCOBASE_URL) + 'api/';
const token = import.meta.env.NOCOBASE_TOKEN || process.env.NOCOBASE_TOKEN;
const useLocalContent = import.meta.env.USE_LOCAL_CONTENT === 'true' || process.env.USE_LOCAL_CONTENT === 'true';

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

// 使用本地内容源或CMS API源
export async function getTaskLastUpdatedAt() {
  // 根据配置切换内容源
  if (useLocalContent) {
    // 从本地文件获取最后更新时间
    // 可以读取task-categories.json文件获取最后更新时间
    try {
      const taskCategoriesFile = path.join(process.cwd(), 'content', 'tasks', 'task-categories.json');
      if (fs.existsSync(taskCategoriesFile)) {
        const data = JSON.parse(fs.readFileSync(taskCategoriesFile, 'utf-8'));
        // 从所有任务中找出最新的更新时间
        const latestTask = data.reduce((latest: any, current: any) => {
          const currentUpdated = new Date(current.updatedAt || 0).getTime();
          const latestUpdated = latest ? new Date(latest.updatedAt || 0).getTime() : 0;
          return currentUpdated > latestUpdated ? current : latest;
        }, null);
        
        return latestTask?.updatedAt || new Date().toISOString();
      }
    } catch (error) {
      console.error('Error reading task last updated at:', error);
    }
    return new Date().toISOString(); // 默认返回当前时间
  }

  const res = await fetch(`${baseURL}tasks:get?sort=-updatedAt&token=${token}`);
  const { data } = await res.json() as { data: any };
  return data.updatedAt;
}

export async function getLastUpdatedAt(collection: string) {
  // 根据配置切换内容源
  if (useLocalContent) {
    // 从本地文件获取最后更新时间
    try {
      let filePath = '';
      switch (collection) {
        case 'articles':
          filePath = path.join(process.cwd(), 'content', 'articles');
          break;
        case 'plugins_2025':
          filePath = path.join(process.cwd(), 'content', 'plugins', 'plugins.json');
          break;
        case 'tutorialArticles':
          filePath = path.join(process.cwd(), 'content', 'tutorials');
          break;
        default:
          return new Date().toISOString();
      }
      
      if (fs.existsSync(filePath)) {
        if (fs.statSync(filePath).isDirectory()) {
          // 如果是目录，找出目录中最新的文件
          const files = fs.readdirSync(filePath);
          let latestTime = 0;
          
          for (const file of files) {
            const fullPath = path.join(filePath, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory() || stat.isFile()) {
              const mtime = stat.mtime.getTime();
              if (mtime > latestTime) {
                latestTime = mtime;
              }
            }
          }
          
          return latestTime ? new Date(latestTime).toISOString() : new Date().toISOString();
        } else {
          // 如果是文件，直接返回文件修改时间
          const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          if (Array.isArray(data) && data.length > 0) {
            // 尝试从数据中获取最新更新时间
            const latestItem = data.reduce((latest: any, current: any) => {
              const currentUpdated = new Date(current.updatedAt || 0).getTime();
              const latestUpdated = latest ? new Date(latest.updatedAt || 0).getTime() : 0;
              return currentUpdated > latestUpdated ? current : latest;
            }, null);
            
            return latestItem?.updatedAt || new Date().toISOString();
          }
          return new Date(fs.statSync(filePath).mtime).toISOString();
        }
      }
    } catch (error) {
      console.error(`Error reading ${collection} last updated at:`, error);
    }
    return new Date().toISOString(); // 默认返回当前时间
  }

  const res = await fetch(`${baseURL}${collection}:get?sort=-updatedAt&token=${token}`);
  const { data } = await res.json() as { data: any };
  return data.updatedAt;
}

export async function listTaskCategories() {
  // 根据配置切换内容源
  if (useLocalContent) {
    try {
      const taskCategoriesFile = path.join(process.cwd(), 'content', 'tasks', 'task-categories.json');
      if (fs.existsSync(taskCategoriesFile)) {
        return JSON.parse(fs.readFileSync(taskCategoriesFile, 'utf-8'));
      }
      return [];
    } catch (error) {
      console.error('Error reading task categories:', error);
      return [];
    }
  }

  const res = await fetch(`${baseURL}taskCategories:list?pageSize=200&appends=tasks(sort=sort),tasks.status&sort=sort&token=${token}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function listPluginCategories() {
  // 根据配置切换内容源
  if (useLocalContent) {
    try {
      const pluginsFile = path.join(process.cwd(), 'content', 'plugins', 'plugins.json');
      if (fs.existsSync(pluginsFile)) {
        const plugins = JSON.parse(fs.readFileSync(pluginsFile, 'utf-8'));
        
        // 与在线版本相同的处理逻辑
        const groupMap = new Map<number, any>();

        for (const plugin of plugins) {
          const cat = plugin.category;
          if (!cat) {
            continue;
          }

          if (!groupMap.has(cat.id)) {
            groupMap.set(cat.id, {
              id: cat.id,
              title: cat.title,
              title_cn: cat.title_cn,
              title_ja: cat.title_ja,
              slug: cat.slug,
              sort: cat.sort,
              plugins: [],
            });
          }
          groupMap.get(cat.id).plugins.push(plugin);
        }

        return Array.from(groupMap.values());
      }
      return [];
    } catch (error) {
      console.error('Error reading plugin categories:', error);
      return [];
    }
  }

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

export async function listArticles(options?: { 
  hideOnBlog?: boolean, 
  pageSize?: number, 
  categorySlug?: string; 
  tagSlug?: string; 
  page?: number;
  filter?: Record<string, any>;
  sort?: string[];
  appends?: string[];
}) {
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.listArticles(options);
  }

  const { 
    hideOnBlog, 
    categorySlug, 
    tagSlug, 
    page = 1, 
    pageSize = 9,
    filter: customFilter,
    sort = ['-publishedAt'],
    appends = ['cover']
  } = options || {};

  let url = `${baseURL}articles:list?page=${page}&pageSize=${pageSize}&token=${token}`;

  // Add appends
  if (appends.length) {
    url += appends.map(append => `&appends[]=${append}`).join('');
  }

  // Add sorting
  if (sort.length) {
    url += sort.map(s => `&sort[]=${s}`).join('');
  }

  // Build filter object
  const filterConditions: any[] = [
    { status: 'published' },
    { hideOnListPage: { $isFalsy: true } }
  ];

  if (hideOnBlog === false) {
    filterConditions.push({ hideOnBlog: { $isFalsy: true } });
  }

  if (tagSlug) {
    filterConditions.push({ 'tags.slug': tagSlug });
  }

  if (categorySlug) {
    filterConditions.push({ 'category.slug': categorySlug });
  }

  // Merge custom filter if provided
  if (customFilter) {
    if (customFilter.$and) {
      filterConditions.push(...customFilter.$and);
    } else {
      filterConditions.push(customFilter);
    }
  }

  const filter = { $and: filterConditions };
  url += `&filter=${encodeURIComponent(JSON.stringify(filter))}`;

  const res = await fetch(url);
  const { data, meta } = await res.json() as { data: any[], meta: any };
  return { data, meta };
}

export async function listTutorialArticles(options?: { pageSize?: number, slug?: string; serialsSlug?: string; page?: number; }) {
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.listTutorialArticles(options);
  }

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

export async function listHelpCenterItems(options?: { pageSize?: number,  page?: number, tree?: boolean}) {
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.listHelpCenterItems(options);
  }

  const { tree=true, page = 1, pageSize = 20 } = options || { page: 1, pageSize: 20 };
  let url = `${baseURL}help_center_tree:list?page=${page}&pageSize=${pageSize}&sort=item_sort&tree=${tree}&token=${token}&filter[status]=published`;
  const res = await fetch(url);
  const { data, meta } = await res.json() as { data: any[], meta: any };
  return { data, meta };
}

export async function getRssItems(locale = '*') {
  // 根据配置切换内容源
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
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.listArticleCategories();
  }

  const res = await fetch(`${baseURL}articleCategories:list?pageSize=200&sort=sort&token=${token}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function listArticleTags(options?: any) {
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.listArticleTags(options);
  }

  const { filter } = options || {};
  const res = await fetch(`${baseURL}articleTags:list?pageSize=200&sort=sort&token=${token}&filter=${JSON.stringify(filter)}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function getPage(slug?: string) {
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.getPage(slug);
  }

  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}pages:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  return data;
}

export async function getArticleCategory(slug?: string) {
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.getArticleCategory(slug);
  }

  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}articleCategories:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  return data;
}

export async function getArticleTag(slug?: string) {
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.getArticleTag(slug);
  }

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
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.getArticle(slug, locale);
  }

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
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.getTutorialArticle(slug, locale);
  }

  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}tutorialArticles:get?appends=serials,keywords&filter[slug]=${slug}&token=${token}`);
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
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.listReleases(options);
  }

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
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.getRelease(slug, locale);
  }

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
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.getReleaseTag(slug);
  }

  if (!slug) {
    return {};
  }
  const res = await fetch(`${baseURL}releaseTags:get?filter[slug]=${slug}&token=${token}`);
  const body = await res.json();
  const data = body.data || {};
  return data;
}

export async function getSitemapLinks() {
  // 根据配置切换内容源
  if (useLocalContent) {
    return localContent.getSitemapLinks();
  }

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

export async function listReleaseNotes(options?: { page?: number, pageSize?: number }) {
  const { page = 1, pageSize = 10 } = options || {};
  
  const { data, meta } = await listArticles({ 
    page,
    pageSize,
    sort: ['-publishedAt'], // 使用发布时间排序更合理
    appends: ['sub_tags', 'cover'],
    filter: {
      $and: [
        { 'tags.title': { $eq: 'Release Notes' } },
        { status: { $eq: 'published' } }
      ]
    }
  });

  // 安全处理管道
  const processedData = (data || []).map(article => {
    // 安全访问 sub_tags（处理 undefined/null/非数组情况）
    const subTags = Array.isArray(article.sub_tags) ? article.sub_tags : [];
    
    // 原始逻辑：取第一个有效标签，否则默认为 Latest
    const primaryTag = subTags[0]?.title || 'Latest';
    
    // 保留所有标签（兼容原始数据）
    const allTags = article.sub_tags.map((t: any) => t.title.toLowerCase());

    // 原始周报过滤逻辑
    if (primaryTag === 'Weekly Updates') return null;

    return {
      ...article,
      // 保留原始数据结构
      tags: allTags,
      content: article.content || '',
      // 兼容原始 milestone 判断逻辑
      isMilestone: (article.sub_tags || []).some((t: any) => t.title === 'Milestone'),
      // 保持原始优先级逻辑
      priority: ['Milestone', 'Latest', 'Beta', 'Alpha'].indexOf(primaryTag) + 1,
      // 安全处理日期
      publishedAt: article.publishedAt ? new Date(article.publishedAt) : new Date(),
      // 安全处理封面
      cover: article.cover?.url ? { url: article.cover.url } : null
    };
  })
  .filter(Boolean) // 过滤掉周报
  .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()); // 按时间倒序

  // 确定是否还有更多内容可加载
  const totalItems = meta?.total || 0;
  const currentCount = (page - 1) * pageSize + processedData.length;
  const hasMore = currentCount < totalItems;

  return { 
    data: processedData, 
    meta: {
      ...meta,
      hasMore, // 添加hasMore标志
      pageCount: Math.ceil(totalItems / pageSize)
    } 
  };
}