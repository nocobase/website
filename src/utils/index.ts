import { createMarkdownProcessor as coreCreateMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import * as localContent from './local-content';
import path from 'path';
import fs from 'fs';

// Common language configuration for easy extension
export const SUPPORTED_LANGUAGES = {
  en: {
    code: 'en',
    locale: 'en-US',
    name: 'English',
    default: true
  },
  cn: {
    code: 'cn',
    locale: 'zh-CN',
    name: 'Chinese'
  },
  ja: {
    code: 'ja',
    locale: 'ja-JP',
    name: 'Japanese'
  }
};

// Default language
export const DEFAULT_LANGUAGE = 'en';

// Get content field based on locale
export function getLocalizedContent(data: any, field: string, locale: string = DEFAULT_LANGUAGE) {
  if (locale === DEFAULT_LANGUAGE) {
    return data[field] || '';
  }
  
  const localizedField = `${field}_${locale}`;
  return data[localizedField] || data[field] || '';
}

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

// Use local content source or CMS API source
export async function getTaskLastUpdatedAt() {
  // Switch content source based on configuration
  if (useLocalContent) {
    // Get the last updated time from a local file
    // You can read the task-categories.json file to obtain the last updated time
    try {
      const taskCategoriesFile = path.join(process.cwd(), 'content', 'tasks', 'task-categories.json');
      if (fs.existsSync(taskCategoriesFile)) {
        const data = JSON.parse(fs.readFileSync(taskCategoriesFile, 'utf-8'));
        // Find the most recent update time from all tasks
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
    return new Date().toISOString(); // Default to returning the current time
  }

  const res = await fetch(`${baseURL}tasks:get?sort=-updatedAt&token=${token}`);
  const { data } = await res.json() as { data: any };
  return data.updatedAt;
}

export async function getLastUpdatedAt(collection: string) {
  // Switch content source based on configuration
  if (useLocalContent) {
    // Get the last updated time from a local file
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
          // If it's a directory, find the most recently modified file within it
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
          // If it's a file, directly return its modification time
          const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          if (Array.isArray(data) && data.length > 0) {
            // Attempt to get the latest updated time from the data
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
    return new Date().toISOString(); // Default to returning the current time
  }

  const res = await fetch(`${baseURL}${collection}:get?sort=-updatedAt&token=${token}`);
  const { data } = await res.json() as { data: any };
  return data.updatedAt;
}

export async function listTaskCategories() {
  // Switch content source based on configuration
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
  // Switch content source based on configuration
  if (useLocalContent) {
    try {
      const pluginsFile = path.join(process.cwd(), 'content', 'plugins', 'plugins.json');
      if (fs.existsSync(pluginsFile)) {
        const plugins = JSON.parse(fs.readFileSync(pluginsFile, 'utf-8'));
        
        // Use the same processing logic as the online version
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
  // data is a list of plugins, each with a category field
  // Group them by category.id and return a structure similar to the original
  // Use a Map to manage the groups
  const groupMap = new Map<number, any>();

  for (const plugin of data) {
    const cat = plugin.category;
    if (!cat) {
      // If the plugin has no category, skip or place it into an "uncategorized" group as per business requirements
      continue;
    }

    if (!groupMap.has(cat.id)) {
      // First, add the basic information of the category (including Chinese title, etc.) to the group
      groupMap.set(cat.id, {
        id: cat.id,
        title: cat.title,
        title_cn: cat.title_cn,
        title_ja: cat.title_ja,
        slug: cat.slug,
        sort: cat.sort,
        // Important: Ensure to include a 'plugins' array to store all plugins under that category
        plugins: [],
      });
    }
    // Add the plugin to the corresponding category's plugins list
    groupMap.get(cat.id).plugins.push(plugin);
  }

  // Finally, convert the Map to an array structure
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
  // Switch content source based on configuration
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
  // Switch content source based on configuration
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
  // Switch content source based on configuration
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
  // Switch content source based on configuration
  const { data } = await listArticles({ pageSize: 5000, hideOnBlog: false });
  const items = [];

  for (const post of data) {
    // Process each language version
    if (locale === '*') {
      // Add items for all supported languages
      for (const lang of Object.values(SUPPORTED_LANGUAGES)) {
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
    } else {
      // Process only the requested language
      const langConfig = SUPPORTED_LANGUAGES[locale as keyof typeof SUPPORTED_LANGUAGES] || SUPPORTED_LANGUAGES[DEFAULT_LANGUAGE];
      const content = getLocalizedContent(post, 'content', locale);
      const title = getLocalizedContent(post, 'title', locale);
      const description = getLocalizedContent(post, 'description', locale);
      
      const { code: processedContent } = await processor.render(content);
      
      items.push({
        title,
        description,
        content: processedContent,
        link: `/${langConfig.code}/blog/${post.slug}`,
        pubDate: post.publishedAt,
        customData: `<language>${langConfig.locale}</language>`,
        author: post.author,
      });
    }
  }
  return items;
}

export async function listArticleCategories() {
  // Switch content source based on configuration
  if (useLocalContent) {
    return localContent.listArticleCategories();
  }

  const res = await fetch(`${baseURL}articleCategories:list?pageSize=200&sort=sort&token=${token}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function listArticleTags(options?: any) {
  // Switch content source based on configuration
  if (useLocalContent) {
    return localContent.listArticleTags(options);
  }

  const { filter } = options || {};
  const res = await fetch(`${baseURL}articleTags:list?pageSize=200&sort=sort&token=${token}&filter=${JSON.stringify(filter)}`);
  const { data } = await res.json() as { data: any[] };
  return data;
}

export async function getPage(slug?: string) {
  // Switch content source based on configuration
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
  // Switch content source based on configuration
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
  // Switch content source based on configuration
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

export async function getArticle(slug?: string, locale = DEFAULT_LANGUAGE) {
  // Switch content source based on configuration
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
  
  const content = getLocalizedContent(data, 'content', locale);
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
  articles[key] = { data, headings, html: code };
  return articles[key];
}

export async function getTutorialArticle(slug?: string, locale = DEFAULT_LANGUAGE) {
  // Switch content source based on configuration
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
  
  const content = getLocalizedContent(data, 'content', locale);
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
  articles[key] = { data, headings, html: code };
  return articles[key];
}

export async function listReleases(options?: any) {
  // Switch content source based on configuration
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

export async function getRelease(slug?: string, locale = DEFAULT_LANGUAGE) {
  // Switch content source based on configuration
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
  
  const content = getLocalizedContent(data, 'content', locale);
  const { code, metadata } = await processor.render(content);
  const headings: any[] = metadata.headings || [];
  releases[key] = { data, headings, html: code };
  return releases[key];
}

export async function getReleaseTag(slug?: string) {
  // Switch content source based on configuration
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
  // Switch content source based on configuration
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

  // Helper function to generate language links for a page
  const generateLanguageLinks = (path: string) => {
    return Object.values(SUPPORTED_LANGUAGES).map(lang => ({
      lang: lang.locale,
      url: `/${lang.code}${path}`
    })).concat({ lang: 'x-default', url: `/${DEFAULT_LANGUAGE}${path}` });
  };

  // Basic site links with all supported languages
  const baseLinks = [
    {
      url: '/',
      links: Object.values(SUPPORTED_LANGUAGES).map(lang => ({
        lang: lang.locale,
        url: `/${lang.code}/`
      })).concat({ lang: 'x-default', url: `/` }),
    },
    {
      url: '/en/roadmap',
      lastmod: tasksLastUpdatedAt,
      links: generateLanguageLinks('/roadmap'),
    },
    {
      url: '/en/plugins',
      lastmod: pluginsLastUpdatedAt,
      links: generateLanguageLinks('/plugins'),
    },
    {
      url: '/en/plugins-commercial',
      links: generateLanguageLinks('/plugins-commercial'),
    },
    {
      url: '/en/plugins-bundles',
      links: generateLanguageLinks('/plugins-bundles'),
    },
    {
      url: '/en/commercial',
      links: generateLanguageLinks('/commercial'),
    },
    {
      url: '/en/community',
      links: generateLanguageLinks('/community'),
    },
    {
      url: '/en/contact',
      links: generateLanguageLinks('/contact'),
    },
    {
      url: '/en/agreement',
      links: generateLanguageLinks('/agreement'),
    },
    {
      url: '/en/blog',
      lastmod: articlesLastUpdatedAt,
      links: generateLanguageLinks('/blog'),
    },
    {
      url: '/en/tutorials',
      lastmod: tutorialsLastUpdatedAt,
      links: generateLanguageLinks('/tutorials'),
    },
  ];

  // Add tag page links with all supported languages
  const tagLinks = await Promise.all(items1.filter((item: any) => item.slug).map(async (item: any) => {
    return {
      url: `/en/blog/tags/${item.slug}`,
      lastmod: item.updatedAt,
      links: generateLanguageLinks(`/blog/tags/${item.slug}`),
    };
  }));

  // Add article page links with all supported languages
  const articleLinks = items2.map((item: any) => {
    return {
      url: `/en/blog/${item.slug}`,
      lastmod: item.updatedAt,
      links: generateLanguageLinks(`/blog/${item.slug}`),
    };
  });

  const tutorialLinks = items3.map((item: any) => {
    return {
      url: `/en/tutorials/${item.slug}`,
      lastmod: item.updatedAt,
      links: generateLanguageLinks(`/tutorials/${item.slug}`),
    };
  });

  return baseLinks.concat(tagLinks).concat(articleLinks).concat(tutorialLinks);
}

export async function listReleaseNotes(options?: { page?: number, pageSize?: number }) {
  const { page = 1, pageSize = 10 } = options || {};
  
  const { data, meta } = await listArticles({ 
    page,
    pageSize,
    sort: ['-publishedAt'], // Sorting by published date is more appropriate
    appends: ['sub_tags', 'cover'],
    filter: {
      $and: [
        { 'tags.title': { $eq: 'Release Notes' } },
        { status: { $eq: 'published' } }
      ]
    }
  });

  // Safely process the pipeline
  const processedData = (data || []).map(article => {
    // Safely access sub_tags (handle undefined, null, or non-array cases)
    const subTags = Array.isArray(article.sub_tags) ? article.sub_tags : [];
    
    // Original logic: use the first valid tag, otherwise default to 'Latest'
    const primaryTag = subTags[0]?.title || 'Latest';
    
    // Retain all tags (for compatibility with original data)
    const allTags = article.sub_tags.map((t: any) => t.title.toLowerCase());

    // Original weekly update filtering logic
    if (primaryTag === 'Weekly Updates') return null;

    return {
      ...article,
      // Maintain original data structure
      tags: allTags,
      content: article.content || '',
      // Compatible with original milestone determination logic
      isMilestone: (article.sub_tags || []).some((t: any) => t.title === 'Milestone'),
      // Maintain original priority logic
      priority: ['Milestone', 'Latest', 'Beta', 'Alpha'].indexOf(primaryTag) + 1,
      // Safely process the date
      publishedAt: article.publishedAt ? new Date(article.publishedAt) : new Date(),
      // Safely process the cover
      cover: article.cover?.url ? { url: article.cover.url } : null
    };
  })
  .filter(Boolean) // Filter out weekly updates
  .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()); // Sort in descending order by time

  // Determine if there is more content to load
  const totalItems = meta?.total || 0;
  const currentCount = (page - 1) * pageSize + processedData.length;
  const hasMore = currentCount < totalItems;

  return { 
    data: processedData, 
    meta: {
      ...meta,
      hasMore, // Add the 'hasMore' flag
      pageCount: Math.ceil(totalItems / pageSize)
    } 
  };
}