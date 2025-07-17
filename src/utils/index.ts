import { createMarkdownProcessor as coreCreateMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import * as localContent from './local-content';
import path from 'path';
import fs from 'fs';

// Configuration constants
const CONFIG = {
  baseURL: (import.meta.env.NOCOBASE_URL || process.env.NOCOBASE_URL) + 'api/',
  token: import.meta.env.NOCOBASE_TOKEN || process.env.NOCOBASE_TOKEN,
  useLocalContent: true,
  contentRoot: path.join(process.cwd(), 'content'),
  cacheTimeout: 5 * 60 * 1000, // 5 minutes
} as const;

// Common language configuration for easy extension
export const SUPPORTED_LANGUAGES = {
  en: { code: 'en', locale: 'en-US', name: 'English', default: true },
  cn: { code: 'cn', locale: 'zh-CN', name: 'Chinese' },
  ja: { code: 'ja', locale: 'ja-JP', name: 'Japanese' },
  ru: { code: 'ru', locale: 'ru-RU', name: 'Russian' }
} as const;

export const DEFAULT_LANGUAGE = 'en';

// Cache management
const caches = {
  articles: new Map<string, { data: any; timestamp: number }>(),
  processor: null as any,
  lastUpdated: new Map<string, { time: string; timestamp: number }>()
};

// Utility functions
// For local content mode: permanent cache (always valid)
// For API mode: time-based cache (5 minutes timeout)
const isValidCacheEntry = (entry: { timestamp: number }) => 
  CONFIG.useLocalContent ? true : Date.now() - entry.timestamp < CONFIG.cacheTimeout;

const getCacheKey = (id: string, updatedAt?: string, locale?: string) => 
  `${id}-${updatedAt || 'latest'}-${locale || DEFAULT_LANGUAGE}`;

// Get content field based on locale
export function getLocalizedContent(data: any, field: string, locale: string = DEFAULT_LANGUAGE): string {
  if (locale === DEFAULT_LANGUAGE) {
    return data[field] || '';
  }
  
  const localizedField = `${field}_${locale}`;
  return data[localizedField] || data[field] || '';
}

export function url(path: string): string {
  if (path.startsWith('https')) {
    return path;
  }
  return (import.meta.env.NOCOBASE_URL || process.env.NOCOBASE_URL) + path;
}

// Optimized markdown processor creation with caching
export async function createMarkdownProcessor() {
  if (caches.processor) {
    return caches.processor;
  }
  
  caches.processor = await coreCreateMarkdownProcessor({
    shikiConfig: { theme: 'github-light' },
    syntaxHighlight: 'shiki',
    remarkPlugins: [remarkDirective],
    rehypePlugins: [rehypeSlug]
  });
  
  return caches.processor;
}

export const processor = await createMarkdownProcessor();

// Generic API fetch function
async function fetchFromAPI(endpoint: string, params: Record<string, any> = {}): Promise<any> {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => searchParams.append(`${key}[]`, v));
    } else if (typeof value === 'object') {
      searchParams.append(key, JSON.stringify(value));
    } else {
      searchParams.append(key, value);
    }
  });
  
  searchParams.append('token', CONFIG.token);
  
  try {
    const response = await fetch(`${CONFIG.baseURL}${endpoint}?${searchParams}`);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from API endpoint ${endpoint}:`, error);
    throw error;
  }
}

// Get last updated time with caching
async function getLastUpdatedWithCache(collection: string): Promise<string> {
  const cacheEntry = caches.lastUpdated.get(collection);
  if (cacheEntry && isValidCacheEntry(cacheEntry)) {
    return cacheEntry.time;
  }

  let lastUpdated: string;
  
  if (CONFIG.useLocalContent) {
    lastUpdated = await getLocalLastUpdated(collection);
  } else {
    const { data } = await fetchFromAPI(`${collection}:get`, { sort: '-updatedAt' });
    lastUpdated = data.updatedAt;
  }

  caches.lastUpdated.set(collection, {
    time: lastUpdated,
    timestamp: Date.now()
  });
  
  return lastUpdated;
}

// Local content last updated helper
async function getLocalLastUpdated(collection: string): Promise<string> {
  try {
    const pathMap: Record<string, string> = {
      articles: path.join(CONFIG.contentRoot, 'articles'),
      plugins_2025: path.join(CONFIG.contentRoot, 'plugins', 'plugins.json'),
      tutorialArticles: path.join(CONFIG.contentRoot, 'tutorials'),
      tasks: path.join(CONFIG.contentRoot, 'tasks', 'task-categories.json')
    };

    const filePath = pathMap[collection];
    if (!filePath || !fs.existsSync(filePath)) {
          return new Date().toISOString();
      }
      
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      return getDirectoryLastModified(filePath);
    } else {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      return getLatestUpdatedFromData(data);
    }
  } catch (error) {
    console.error(`Error getting local last updated for ${collection}:`, error);
    return new Date().toISOString();
  }
}

function getDirectoryLastModified(dirPath: string): string {
  const files = fs.readdirSync(dirPath);
          let latestTime = 0;
          
          for (const file of files) {
    const fullPath = path.join(dirPath, file);
            const stat = fs.statSync(fullPath);
    if (stat.mtime.getTime() > latestTime) {
      latestTime = stat.mtime.getTime();
            }
          }
          
          return latestTime ? new Date(latestTime).toISOString() : new Date().toISOString();
}

function getLatestUpdatedFromData(data: any[]): string {
  if (!Array.isArray(data) || data.length === 0) {
    return new Date().toISOString();
  }
  
  const latestItem = data.reduce((latest, current) => {
    const currentTime = new Date(current.updatedAt || 0).getTime();
    const latestTime = latest ? new Date(latest.updatedAt || 0).getTime() : 0;
    return currentTime > latestTime ? current : latest;
            }, null);
            
            return latestItem?.updatedAt || new Date().toISOString();
          }

// Public API functions with improved caching
export async function getTaskLastUpdatedAt(): Promise<string> {
  return getLastUpdatedWithCache('tasks');
}

export async function getLastUpdatedAt(collection: string): Promise<string> {
  return getLastUpdatedWithCache(collection);
}

export async function listTaskCategories() {
  if (CONFIG.useLocalContent) {
    try {
      const taskCategoriesFile = path.join(CONFIG.contentRoot, 'tasks', 'task-categories.json');
      if (fs.existsSync(taskCategoriesFile)) {
        return JSON.parse(fs.readFileSync(taskCategoriesFile, 'utf-8'));
      }
      return [];
    } catch (error) {
      console.error('Error reading task categories:', error);
      return [];
    }
  }

  const { data } = await fetchFromAPI('taskCategories:list', {
    pageSize: 200,
    appends: 'tasks(sort=sort),tasks.status',
    sort: 'sort'
  });
  return data;
}

export async function listPluginCategories() {
  if (CONFIG.useLocalContent) {
    try {
      const pluginsFile = path.join(CONFIG.contentRoot, 'plugins', 'plugins.json');
      if (fs.existsSync(pluginsFile)) {
        const plugins = JSON.parse(fs.readFileSync(pluginsFile, 'utf-8'));
        return groupPluginsByCategory(plugins);
      }
      return [];
    } catch (error) {
      console.error('Error reading plugin categories:', error);
      return [];
    }
  }

  const { data } = await fetchFromAPI('plugins_2025:list', {
    pageSize: 400,
    sort: ['sort'],
    appends: ['category'],
    filter: {}
  });
  
  return groupPluginsByCategory(data);
}

function groupPluginsByCategory(plugins: any[]): any[] {
        const groupMap = new Map<number, any>();
        
        // List of plugin names to be intercepted and hidden
        const blockedPlugins = ['Migration manager', 'Password policy'];

        for (const plugin of plugins) {
          const cat = plugin.category;
    if (!cat) continue;
    
          // Check if this plugin should be blocked
          if (blockedPlugins.includes(plugin.name)) {
            continue; // Skip this plugin
          }

          if (!groupMap.has(cat.id)) {
            groupMap.set(cat.id, {
              id: cat.id,
              title: cat.title,
              title_cn: cat.title_cn,
              title_ja: cat.title_ja,
              title_ru: cat.title_ru,
              slug: cat.slug,
              sort: cat.sort,
              plugins: [],
            });
          }
          groupMap.get(cat.id).plugins.push(plugin);
        }

        return Array.from(groupMap.values());
}

// Simplified list functions that delegate to local content when needed
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
  if (CONFIG.useLocalContent) {
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

  // 正常处理支持的过滤条件
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
    if (customFilter) {
      filterConditions.push(...(customFilter.$and || [customFilter]));
    }

    const { data, meta } = await fetchFromAPI('articles:list', {
      page,
      pageSize,
      appends,
      sort,
      filter: { $and: filterConditions }
    });

  return { data, meta };
}

export async function listTutorialArticles(options?: { pageSize?: number, slug?: string; serialsSlug?: string; page?: number; }) {
  if (CONFIG.useLocalContent) {
    return localContent.listTutorialArticles(options);
  }

  const { slug, serialsSlug, page = 1, pageSize = 9 } = options || {};
  
  const params: any = {
    page,
    pageSize,
    appends: 'serials',
    sort: 'serialsSort',
    'filter[serials.status]': 'published',
    'filter[status]': 'published'
  };
  
  if (slug) params.slug = slug;
  if (serialsSlug) params['filter[serials.slug]'] = serialsSlug;

  return await fetchFromAPI('tutorialArticles:list', params);
}

export async function listHelpCenterItems(options?: { pageSize?: number, page?: number, tree?: boolean}) {
  if (CONFIG.useLocalContent) {
    return localContent.listHelpCenterItems(options);
  }

  const { tree = true, page = 1, pageSize = 20 } = options || {};
  
  return await fetchFromAPI('help_center_tree:list', {
    page,
    pageSize,
    sort: 'item_sort',
    tree,
    'filter[status]': 'published'
  });
}

// RSS items generation with improved performance
export async function getRssItems(locale = '*') {
  const { data } = await listArticles({ pageSize: 5000, hideOnBlog: false });
  const items = [];

  const langConfigs = locale === '*' 
    ? Object.values(SUPPORTED_LANGUAGES)
    : [SUPPORTED_LANGUAGES[locale as keyof typeof SUPPORTED_LANGUAGES] || SUPPORTED_LANGUAGES[DEFAULT_LANGUAGE]];

  for (const post of data) {
    for (const lang of langConfigs) {
        const content = getLocalizedContent(post, 'content', lang.code);
        const title = getLocalizedContent(post, 'title', lang.code);
        const description = getLocalizedContent(post, 'description', lang.code);
        
        const { code: processedContent } = await processor.render(content);
        
        items.push({
          title,
          description,
          content: processedContent,
          link: `/${lang.code}/blog/${post.slug}`,
          pubDate: post.publishedAt,
          customData: `<language>${lang.locale}</language>`,
        author: post.author,
      });
    }
  }
  
  return items;
}

// Simplified category and tag functions
const createSimpleListFunction = (endpoint: string, localFunction?: Function) => 
  async (options?: any) => {
    if (CONFIG.useLocalContent && localFunction) {
      return localFunction(options);
    }
    
    const { filter, ...otherOptions } = options || {};
    const params = {
      pageSize: 200,
      sort: 'sort',
      ...otherOptions
    };
    
    if (filter) {
      params.filter = JSON.stringify(filter);
    }
    
    const { data } = await fetchFromAPI(endpoint, params);
    return data;
  };

export const listArticleCategories = createSimpleListFunction('articleCategories:list', localContent.listArticleCategories);
export const listArticleTags = createSimpleListFunction('articleTags:list', localContent.listArticleTags);

// Get functions with improved caching
async function getWithCache<T>(
  cacheMap: Map<string, { data: T; timestamp: number }>,
  key: string,
  fetcher: () => Promise<T>
): Promise<T> {
  const cached = cacheMap.get(key);
  if (cached && isValidCacheEntry(cached)) {
    return cached.data;
  }

  const data = await fetcher();
  cacheMap.set(key, { data, timestamp: Date.now() });
  return data;
}

export async function getPage(slug?: string, locale = DEFAULT_LANGUAGE) {
  if (CONFIG.useLocalContent) {
    return localContent.getPage(slug, locale);
  }

  if (!slug) return {};

  return getWithCache(caches.articles, `page-${slug}-${locale}`, async () => {
    const { data } = await fetchFromAPI('pages:get', { 'filter[slug]': slug });
    
    if (!data.id) return {};
    
  const content = getLocalizedContent(data, 'content', locale);
  if (content) {
    const { code } = await processor.render(content);
    data.html = code;
  }
  
  return data;
  });
}

export async function getArticleCategory(slug?: string) {
  if (CONFIG.useLocalContent) {
    return localContent.getArticleCategory(slug);
  }

  if (!slug) return {};
  
  const { data } = await fetchFromAPI('articleCategories:get', { 'filter[slug]': slug });
  return data || {};
}

export async function getArticleTag(slug?: string) {
  if (CONFIG.useLocalContent) {
    return localContent.getArticleTag(slug);
  }

  if (!slug) return {};
  
  const { data } = await fetchFromAPI('articleTags:get', { 'filter[slug]': slug });
  return data || {};
}

export async function getArticle(slug?: string, locale = DEFAULT_LANGUAGE) {
  if (CONFIG.useLocalContent) {
    return localContent.getArticle(slug, locale);
  }

  if (!slug) return {};

  return getWithCache(caches.articles, `article-${slug}-${locale}`, async () => {
    const { data } = await fetchFromAPI('articles:get', {
      appends: 'cover,tags',
      'filter[slug]': slug
    });
    
    if (!data.id) return {};
  
  const content = getLocalizedContent(data, 'content', locale);
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
    
    return { data, headings, html: code };
  });
}

export async function getTutorialArticle(slug?: string, locale = DEFAULT_LANGUAGE) {
  if (CONFIG.useLocalContent) {
    return localContent.getTutorialArticle(slug, locale);
  }

  if (!slug) return {};

  return getWithCache(caches.articles, `tutorial-${slug}-${locale}`, async () => {
    const { data } = await fetchFromAPI('tutorialArticles:get', {
      appends: 'serials,keywords',
      'filter[slug]': slug
    });
    
    if (!data.id) return {};
  
  const content = getLocalizedContent(data, 'content', locale);
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
    
    return { data, headings, html: code };
  });
}

export async function listReleases(options?: any) {
  if (CONFIG.useLocalContent) {
    return localContent.listReleases(options);
  }

  const { page = 1, tagSlug } = options || {};
  const params: any = {
    page,
    pageSize: 20,
    sort: '-publishedAt',
    'filter[status]': 'published'
  };
  
  if (tagSlug) {
    params['filter[tags.slug]'] = tagSlug;
  }

  return await fetchFromAPI('releases:list', params);
}

export async function getRelease(slug?: string, locale = DEFAULT_LANGUAGE) {
  if (CONFIG.useLocalContent) {
    return localContent.getRelease(slug, locale);
  }

  if (!slug) return {};

  return getWithCache(caches.articles, `release-${slug}-${locale}`, async () => {
    const { data } = await fetchFromAPI('releases:get', {
      appends: 'tags',
      'filter[slug]': slug
    });
    
    if (!data.id) return {};
  
  const content = getLocalizedContent(data, 'content', locale);
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
    
    return { data, headings, html: code };
  });
}

export async function getReleaseTag(slug?: string) {
  if (CONFIG.useLocalContent) {
    return localContent.getReleaseTag(slug);
  }

  if (!slug) return {};
  
  const { data } = await fetchFromAPI('releaseTags:get', { 'filter[slug]': slug });
  return data || {};
}

export async function getSitemapLinks() {
  if (CONFIG.useLocalContent) {
    return localContent.getSitemapLinks();
  }

  const generateLanguageLinks = (path: string) => {
    return Object.values(SUPPORTED_LANGUAGES).map(lang => ({
      lang: lang.locale as string,
      url: `/${lang.code}${path}`
    })).concat([{ lang: 'x-default', url: `/${DEFAULT_LANGUAGE}${path}` }]);
  };

  const [tags, articles, tutorials] = await Promise.all([
    fetchFromAPI('articleTags:list', { sort: 'sort', paginate: false }),
    fetchFromAPI('articles:list', { 'filter[status]': 'published', sort: '-publishedAt', paginate: false }),
    fetchFromAPI('tutorialArticles:list', { 'filter[status]': 'published', sort: '-publishedAt', paginate: false })
  ]);

  const [tasksLastUpdated, articlesLastUpdated, pluginsLastUpdated, tutorialsLastUpdated] = await Promise.all([
    getTaskLastUpdatedAt(),
    getLastUpdatedAt('articles'),
    getLastUpdatedAt('plugins_2025'),
    getLastUpdatedAt('tutorialArticles')
  ]);

  const baseLinks = [
    {
      url: '/',
      links: Object.values(SUPPORTED_LANGUAGES).map(lang => ({
        lang: lang.locale as string,
        url: `/${lang.code}/`
      })).concat([{ lang: 'x-default', url: `/` }]),
    },
    { url: '/en/roadmap', lastmod: tasksLastUpdated, links: generateLanguageLinks('/roadmap') },
    { url: '/en/plugins', lastmod: pluginsLastUpdated, links: generateLanguageLinks('/plugins') },
    { url: '/en/plugins-commercial', links: generateLanguageLinks('/plugins-commercial') },
    { url: '/en/plugins-bundles', links: generateLanguageLinks('/plugins-bundles') },
    { url: '/en/commercial', links: generateLanguageLinks('/commercial') },
    { url: '/en/community', links: generateLanguageLinks('/community') },
    { url: '/en/contact', links: generateLanguageLinks('/contact') },
    { url: '/en/agreement', links: generateLanguageLinks('/agreement') },
    { url: '/en/blog', lastmod: articlesLastUpdated, links: generateLanguageLinks('/blog') },
    { url: '/en/tutorials', lastmod: tutorialsLastUpdated, links: generateLanguageLinks('/tutorials') },
  ];

  const tagLinks = tags.data.filter((item: any) => item.slug).map((item: any) => ({
      url: `/en/blog/tags/${item.slug}`,
      lastmod: item.updatedAt,
      links: generateLanguageLinks(`/blog/tags/${item.slug}`),
  }));

  const articleLinks = articles.data.map((item: any) => ({
      url: `/en/blog/${item.slug}`,
      lastmod: item.updatedAt,
      links: generateLanguageLinks(`/blog/${item.slug}`),
  }));

  const tutorialLinks = tutorials.data.map((item: any) => ({
      url: `/en/tutorials/${item.slug}`,
      lastmod: item.updatedAt,
      links: generateLanguageLinks(`/tutorials/${item.slug}`),
  }));

  return baseLinks.concat(tagLinks).concat(articleLinks).concat(tutorialLinks);
}

export async function listReleaseNotes(options?: { page?: number, pageSize?: number, milestoneOnly?: boolean, locale?: string }) {
  const { page = 1, pageSize = 10, milestoneOnly = false, locale = DEFAULT_LANGUAGE } = options || {};
  
  const filterConditions: any[] = [
    { 'tags.title': { $eq: 'Release Notes' } },
    { status: { $eq: 'published' } }
  ];
  
  if (milestoneOnly) {
    filterConditions.push({ 'sub_tags.title': { $eq: 'Milestone' } });
  } else {
    filterConditions.push({
      $or: [
        { 'sub_tags.title': { $eq: 'Milestone' } },
        { 'tags.title': { $ne: 'News & Updates' } }
      ]
    });
  }
  
  const { data, meta } = await listArticles({ 
    page,
    pageSize,
    sort: ['-publishedAt'],
    appends: ['sub_tags', 'cover'],
    filter: {
      $and: filterConditions
    }
  });

  const processedData = (data || []).map((article: any) => {
    const subTags = Array.isArray(article.sub_tags) ? article.sub_tags : [];
    const primaryTag = subTags[0]?.title || 'Latest';
    const allTags = subTags.map((t: any) => t.title?.toLowerCase() || '');


    
    // Use localized content based on locale parameter
    const localizedContent = getLocalizedContent(article, 'content', locale);
    const localizedTitle = getLocalizedContent(article, 'title', locale);
    const localizedDescription = getLocalizedContent(article, 'description', locale);

    return {
      ...article,
      title: localizedTitle,
      description: localizedDescription,
      content: localizedContent,
      tags: allTags,
      isMilestone: subTags.some((t: any) => t.title === 'Milestone'),
      priority: ['Milestone', 'Latest', 'Beta', 'Alpha'].indexOf(primaryTag) + 1,
      publishedAt: article.publishedAt ? new Date(article.publishedAt) : new Date(),
      cover: article.cover?.url ? { url: article.cover.url } : null
    };
  }).sort((a: any, b: any) => b.publishedAt.getTime() - a.publishedAt.getTime());

  const totalItems = meta?.total || 0;
  const currentCount = (page - 1) * pageSize + processedData.length;
  const hasMore = currentCount < totalItems;

  return { 
    data: processedData, 
    meta: {
      ...meta,
      hasMore,
      pageCount: Math.ceil(totalItems / pageSize)
    } 
  };
}

export async function listMilestoneNotes(options?: { page?: number, pageSize?: number, locale?: string }) {
  return listReleaseNotes({ ...options, milestoneOnly: true });
}
