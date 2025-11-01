import { createMarkdownProcessor as coreCreateMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import path from 'path';
import fs from 'fs';
import sift from 'sift';

// Configuration
const CONFIG = {
  contentRoot: path.join(process.cwd(), 'content'),
} as const;

// Language configuration
export const SUPPORTED_LANGUAGES = {
  en: { code: 'en', locale: 'en-US', name: 'English', default: true },
  cn: { code: 'cn', locale: 'zh-CN', name: 'Chinese' },
  ja: { code: 'ja', locale: 'ja-JP', name: 'Japanese' },
  ru: { code: 'ru', locale: 'ru-RU', name: 'Russian' }
} as const;

export const DEFAULT_LANGUAGE = 'en';

// Simplified cache structure (permanent cache for local content)
const caches = {
  articles: new Map<string, any>(),
  tutorials: new Map<string, any>(),
  releases: new Map<string, any>(),
  pages: new Map<string, any>(),
  processor: null as any,
  directoryCache: new Map<string, string[]>(),
  categoryTagCache: new Map<string, any>()
};

// Markdown processor with caching
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

// File operations
function readFileOrNull(filePath: string): string | null {
  try {
    return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : null;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

function readJsonFile(filePath: string): any {
  try {
    const content = readFileOrNull(filePath);
    return content ? JSON.parse(content) : null;
  } catch (error) {
    console.error(`Error parsing JSON file ${filePath}:`, error);
    return null;
  }
}

// List subdirectories with caching
function listSubdirectories(dirPath: string): string[] {
  if (caches.directoryCache.has(dirPath)) {
    return caches.directoryCache.get(dirPath)!;
  }

  if (!fs.existsSync(dirPath)) {
    return [];
  }

  try {
    const files = fs.readdirSync(dirPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    caches.directoryCache.set(dirPath, files);
    return files;
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

// Extract frontmatter metadata
async function extractFrontmatter(content: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);

  if (!match?.[1]) {
    return { metadata: {}, content };
  }

  try {
    const frontmatterStr = match[1];
    const lines = frontmatterStr.split('\n');
    const metadata: Record<string, any> = {};

    lines.forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        let value: any = line.substring(colonIndex + 1).trim();

        // Parse arrays
        if (value.startsWith('[') && value.endsWith(']')) {
          try {
            value = JSON.parse(value);
          } catch (e) {
            value = value.substring(1, value.length - 1)
              .split(',')
              .map((item: string) => item.trim())
              .filter(Boolean);
          }
        }

        metadata[key] = value;
      }
    });

    return {
      metadata,
      content: content.replace(frontmatterRegex, '')
    };
  } catch (error) {
    console.error('Error parsing frontmatter:', error);
    return { metadata: {}, content };
  }
}

// Custom condition evaluator for unsupported sift operators
function evaluateCondition(item: any, condition: any): boolean {
  for (const [key, value] of Object.entries(condition)) {
    if (key === '$and') {
      return (value as any[]).every(subCondition => evaluateCondition(item, subCondition));
    }
    if (key === '$or') {
      return (value as any[]).some(subCondition => evaluateCondition(item, subCondition));
    }

    // Handle nested key paths like 'tags.title'
    const keys = key.split('.');
    let currentValue = item;
    for (const k of keys) {
      if (currentValue && typeof currentValue === 'object') {
        currentValue = currentValue[k];
      } else {
        currentValue = undefined;
        break;
      }
    }

    if (typeof value === 'object' && value !== null) {
      for (const [op, expected] of Object.entries(value)) {
        if (op === '$eq') {
          if (currentValue !== expected) return false;
        } else if (op === '$ne') {
          if (currentValue === expected) return false;
        } else if (op === '$notIncludes') {
          if (Array.isArray(currentValue)) {
            const hasMatch = currentValue.some(tag =>
              typeof tag === 'object' && tag.title === expected
            );
            if (hasMatch) return false;
          } else if (typeof currentValue === 'string') {
            if (currentValue.includes(expected as string)) return false;
          }
        } else if (op === '$in') {
          const expectedArray = Array.isArray(expected) ? expected : [expected];
          if (Array.isArray(currentValue)) {
            const hasMatch = currentValue.some(val => expectedArray.includes(val));
            if (!hasMatch) return false;
          } else {
            if (!expectedArray.includes(currentValue)) return false;
          }
        }
      }
    } else {
      if (currentValue !== value) return false;
    }
  }
  return true;
}

// Generic content loader with caching
async function loadContent(
  slug: string,
  contentType: 'articles' | 'tutorials' | 'releases' | 'pages',
  locale = 'en'
) {
  if (!slug) return {};

  const cacheKey = `${slug}-${locale}`;
  const cache = caches[contentType];

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const contentDir = path.join(CONFIG.contentRoot, contentType, slug);
  if (!fs.existsSync(contentDir)) {
    return {};
  }

  // Determine content file based on locale
  const contentFiles: Record<string, string> = {
    en: 'index.md',
    cn: 'index.cn.md',
    ja: 'index.ja.md',
    ru: 'index.ru.md'
  };

  const contentFile = contentFiles[locale] || contentFiles.en;
  const contentPath = path.join(contentDir, contentFile);
  const fallbackContentPath = path.join(contentDir, 'index.md');

  // Read content
  let content = readFileOrNull(contentPath) || readFileOrNull(fallbackContentPath) || '';

  // Read JSON metadata
  const jsonMetadata = readJsonFile(path.join(contentDir, 'metadata.json')) || {};

  // Extract frontmatter
  const { metadata: frontMatterMetadata, content: cleanContent } = await extractFrontmatter(content);

  // Merge metadata
  const metadata = { ...jsonMetadata, ...frontMatterMetadata };

  let result: any;

  if (contentType === 'pages') {
    // Pages don't need headings
    const { code } = await processor.render(cleanContent);
    result = {
      ...metadata,
      content: cleanContent,
      html: code
    };
  } else {
    // Articles, tutorials, releases need headings
    const { code, metadata: mdMetadata } = await processor.render(cleanContent);
    const headings: any[] = mdMetadata.headings || [];
    result = {
      data: metadata,
      headings,
      html: code
    };
  }

  cache.set(cacheKey, result);
  return result;
}

// Simplified list function with filtering and pagination
async function listContentItems(
  contentType: 'articles' | 'tutorials' | 'releases',
  options: any = {}
) {
  const {
    page = 1,
    pageSize = 9,
    sort = ['-publishedAt'],
    filter = {},
    hideOnBlog,
    categorySlug,
    tagSlug,
    slug,
    serialsSlug
  } = options;

  // Get content directory
  const contentDir = path.join(CONFIG.contentRoot, contentType);
  if (!fs.existsSync(contentDir)) {
    return { data: [], meta: { total: 0, count: 0, pageSize, currentPage: page, totalPages: 0 } };
  }

  const slugs = listSubdirectories(contentDir);

  // Read all items metadata
  const items = [];

  for (const itemSlug of slugs) {
    try {
      const metadataPath = path.join(contentDir, itemSlug, 'metadata.json');
      const metadata = readJsonFile(metadataPath);

      if (!metadata?.title) continue;

      // Read content in different languages for articles
      if (contentType === 'articles') {
        const languages = ['', '.cn', '.ja', '.ru'];
        languages.forEach(lang => {
          const suffix = lang || '';
          const contentPath = path.join(contentDir, itemSlug, `index${suffix}.md`);
          const field = lang ? `content${lang.replace('.', '_')}` : 'content';

          if (fs.existsSync(contentPath)) {
            metadata[field] = fs.readFileSync(contentPath, 'utf-8');
          }
        });

        // Fallback to default content
        ['content_cn', 'content_ja', 'content_ru'].forEach(field => {
          if (!metadata[field] && metadata.content) {
            metadata[field] = metadata.content;
          }
        });
      }

      // Ensure tags is always an array
      if (!Array.isArray(metadata.tags)) {
        metadata.tags = [];
      }

      items.push(metadata);
    } catch (error) {
      console.error(`Error processing ${contentType} ${itemSlug}:`, error);
    }
  }

  // Build filter conditions
  const filterConditions: any[] = [
    { status: { $eq: 'published' } }
  ];

  // Content-specific filters
  if (contentType === 'articles') {
    filterConditions.push({ hideOnListPage: { $ne: true } });

    if (hideOnBlog === false) {
      filterConditions.push({ hideOnBlog: { $ne: true } });
    }
    if (tagSlug) {
      filterConditions.push({ 'tags.slug': { $eq: tagSlug } });
    }
    if (categorySlug) {
      filterConditions.push({ 'category.slug': { $eq: categorySlug } });
    }
  }

  if (contentType === 'tutorials') {
    if (slug) {
      filterConditions.push({ slug: { $eq: slug } });
    }
    if (serialsSlug) {
      filterConditions.push({
        'serials.slug': { $eq: serialsSlug },
        'serials.status': { $eq: 'published' }
      });
    }
  }

  if (contentType === 'releases' && tagSlug) {
    filterConditions.push({ 'tags.slug': { $eq: tagSlug } });
  }

  // Merge custom filters
  if (filter && Object.keys(filter).length > 0) {
    filterConditions.push(...(filter.$and || [filter]));
  }

  // Apply filters
  let filteredItems = items;
  if (filterConditions.length > 0) {
    const combinedFilter = { $and: filterConditions };
    const filterStr = JSON.stringify(combinedFilter);
    const hasUnsupportedOps = filterStr.includes('$notIncludes');

    if (hasUnsupportedOps) {
      filteredItems = items.filter(item =>
        filterConditions.every(condition => evaluateCondition(item, condition))
      );
    } else {
      try {
        const siftFilter = sift(combinedFilter);
        filteredItems = items.filter(siftFilter);
      } catch (error) {
        console.error(`Error applying ${contentType} filter:`, error);
        filteredItems = items.filter(item => item.status === 'published');
      }
    }
  }

  // Sort items
  const sortField = sort[0]?.startsWith('-') ? sort[0].substring(1) : sort[0];
  const isDesc = sort[0]?.startsWith('-');

  if (contentType === 'tutorials' && sortField === 'serialsSort') {
    filteredItems.sort((a, b) => (a.serialsSort || 0) - (b.serialsSort || 0));
  } else {
    filteredItems.sort((a, b) => {
      if (!a[sortField] && !b[sortField]) return 0;
      if (!a[sortField]) return isDesc ? -1 : 1;
      if (!b[sortField]) return isDesc ? 1 : -1;

      const aDate = new Date(a[sortField]).getTime();
      const bDate = new Date(b[sortField]).getTime();

      return isDesc ? bDate - aDate : aDate - bDate;
    });
  }

  // Pagination
  const startIndex = (page - 1) * pageSize;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedItems,
    meta: {
      total: filteredItems.length,
      count: filteredItems.length,
      pageSize,
      currentPage: page,
      totalPages: Math.ceil(filteredItems.length / pageSize),
      totalPage: Math.ceil(filteredItems.length / pageSize)
    }
  };
}

// Task and Plugin functions
export async function getTaskLastUpdatedAt(): Promise<string> {
  try {
    const taskCategoriesFile = path.join(CONFIG.contentRoot, 'tasks', 'task-categories.json');
    if (fs.existsSync(taskCategoriesFile)) {
      const data = JSON.parse(fs.readFileSync(taskCategoriesFile, 'utf-8'));
      if (Array.isArray(data) && data.length > 0) {
        const latestItem = data.reduce((latest, current) => {
          const currentTime = new Date(current.updatedAt || 0).getTime();
          const latestTime = latest ? new Date(latest.updatedAt || 0).getTime() : 0;
          return currentTime > latestTime ? current : latest;
        }, null);
        return latestItem?.updatedAt || new Date().toISOString();
      }
    }
    return new Date().toISOString();
  } catch (error) {
    console.error('Error getting task last updated:', error);
    return new Date().toISOString();
  }
}

export async function getLastUpdatedAt(collection: string): Promise<string> {
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
      const files = fs.readdirSync(filePath);
      let latestTime = 0;

      for (const file of files) {
        const fullPath = path.join(filePath, file);
        const stat = fs.statSync(fullPath);
        if (stat.mtime.getTime() > latestTime) {
          latestTime = stat.mtime.getTime();
        }
      }

      return latestTime ? new Date(latestTime).toISOString() : new Date().toISOString();
    } else {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      if (Array.isArray(data) && data.length > 0) {
        const latestItem = data.reduce((latest, current) => {
          const currentTime = new Date(current.updatedAt || 0).getTime();
          const latestTime = latest ? new Date(latest.updatedAt || 0).getTime() : 0;
          return currentTime > latestTime ? current : latest;
        }, null);
        return latestItem?.updatedAt || new Date().toISOString();
      }
      return new Date().toISOString();
    }
  } catch (error) {
    console.error(`Error getting last updated for ${collection}:`, error);
    return new Date().toISOString();
  }
}

export async function listTaskCategories() {
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

export async function listPluginCategories() {
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

// Get plugins grouped by status (newly, coming, normal categories)
export async function getPluginsGrouped() {
  const data = await listPluginCategories();
  const allPlugins = data.flatMap((group: any) => group.plugins);

  // Filter different types of plugins
  const newlyPlugins = allPlugins.filter((p: any) => p.newly && !p.internal);
  const comingPlugins = allPlugins.filter((p: any) => p.coming && !p.internal);

  // Remove special plugins from categories, keep only normal ones
  const normalCategories = data
    .map((group: any) => ({
      ...group,
      plugins: group.plugins.filter((p: any) =>
        !p.newly && !p.coming && !p.internal && !p.user_specific
      )
    }))
    .filter((group: any) => group.plugins.length > 0);

  // Build final groups array: newly -> coming -> normal categories
  const finalGroups = [];

  if (newlyPlugins.length > 0) {
    finalGroups.push({
      id: 'newly-launched',
      title: 'Newly Launched',
      title_cn: '最新发布',
      title_ja: '新着リリース',
      title_ru: 'Недавно запущенные',
      plugins: newlyPlugins,
    });
  }

  if (comingPlugins.length > 0) {
    finalGroups.push({
      id: 'coming-soon',
      title: 'Coming Soon',
      title_cn: '即将发布',
      title_ja: '近日公開',
      title_ru: 'Скоро',
      plugins: comingPlugins,
    });
  }

  finalGroups.push(...normalCategories);

  return {
    finalGroups,
    allPlugins,
    newlyPlugins,
    comingPlugins,
    normalCategories
  };
}

function groupPluginsByCategory(plugins: any[]): any[] {
  const groupMap = new Map<number, any>();
  const blockedPlugins = ['Migration manager', 'Password policy'];

  for (const plugin of plugins) {
    const cat = plugin.category;
    if (!cat || blockedPlugins.includes(plugin.name)) continue;

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

// List functions
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
  return listContentItems('articles', options);
}

export async function listTutorialArticles(options?: {
  pageSize?: number,
  slug?: string;
  serialsSlug?: string;
  page?: number;
}) {
  return listContentItems('tutorials', options);
}

export async function listHelpCenterItems(_options?: {
  pageSize?: number,
  page?: number,
  tree?: boolean
}) {
  const helpCenterPath = path.join(CONFIG.contentRoot, 'help-center', 'help-center-tree.json');
  const items = readJsonFile(helpCenterPath) || [];

  return {
    data: items,
    meta: {
      total: items.length
    }
  };
}

// RSS items generation
export async function getRssItems(locale = '*') {
  const { data } = await listArticles({ pageSize: 5000, hideOnBlog: false });
  const items = [];

  const locales = locale === '*' ? ['en', 'cn', 'ja', 'ru'] : [locale];

  for (const post of data) {
    for (const currentLocale of locales) {
      const contentField = currentLocale === 'en' ? 'content' : `content_${currentLocale}`;
      const titleField = currentLocale === 'en' ? 'title' : `title_${currentLocale}`;
      const descField = currentLocale === 'en' ? 'description' : `description_${currentLocale}`;

      const content = post[contentField] || post.content || '';
      const title = post[titleField] || post.title;
      const description = post[descField] || post.description;

      const { code } = await processor.render(content);

      const localeMap: Record<string, string> = {
        en: 'en-US',
        cn: 'zh-CN',
        ja: 'ja-JP',
        ru: 'ru-RU'
      };

      items.push({
        title,
        description,
        content: code,
        link: `/${currentLocale}/blog/${post.slug}`,
        pubDate: post.publishedAt,
        customData: `<language>${localeMap[currentLocale]}</language>`,
        author: post.author,
      });
    }
  }

  return items;
}

// Category and tag functions with caching
async function getCategoryOrTag(type: 'categories' | 'tags', slug?: string, subPath?: string) {
  if (!slug) return {};

  const cacheKey = `${type}-${slug}-${subPath || ''}`;

  if (caches.categoryTagCache.has(cacheKey)) {
    return caches.categoryTagCache.get(cacheKey);
  }

  let result = {};

  // Try individual file first
  const itemFile = path.join(
    CONFIG.contentRoot,
    type,
    subPath || '',
    slug,
    type === 'categories' ? 'category.json' : 'tag.json'
  );

  if (fs.existsSync(itemFile)) {
    result = readJsonFile(itemFile) || {};
  } else {
    // Try from collection file
    const collectionFile = path.join(
      CONFIG.contentRoot,
      type,
      subPath ? `${subPath}.json` : `article-${type}.json`
    );

    if (fs.existsSync(collectionFile)) {
      const collection = readJsonFile(collectionFile) || [];
      const item = collection.find((item: any) => item.slug === slug);
      result = item || {};
    }
  }

  caches.categoryTagCache.set(cacheKey, result);
  return result;
}

export async function listArticleCategories() {
  const categoriesPath = path.join(CONFIG.contentRoot, 'categories', 'article-categories.json');
  return readJsonFile(categoriesPath) || [];
}

export async function listArticleTags(options?: any) {
  const tagsPath = path.join(CONFIG.contentRoot, 'tags', 'article-tags.json');
  const tags = readJsonFile(tagsPath) || [];

  const { filter } = options || {};
  if (filter && Object.keys(filter).length > 0) {
    try {
      const siftFilter = sift(filter);
      return tags.filter(siftFilter);
    } catch (error) {
      console.error('Error applying tag filter:', error);
      return tags;
    }
  }

  return tags;
}

// Get functions
export async function getPage(slug?: string, locale = DEFAULT_LANGUAGE) {
  return loadContent(slug || '', 'pages', locale);
}

export async function getArticleCategory(slug?: string) {
  return getCategoryOrTag('categories', slug);
}

export async function getArticleTag(slug?: string) {
  return getCategoryOrTag('tags', slug);
}

export async function getArticle(slug?: string, locale = DEFAULT_LANGUAGE) {
  return loadContent(slug || '', 'articles', locale);
}

export async function getTutorialArticle(slug?: string, locale = DEFAULT_LANGUAGE) {
  return loadContent(slug || '', 'tutorials', locale);
}

export async function listReleases(options?: any) {
  return listContentItems('releases', options);
}

export async function getRelease(slug?: string, locale = DEFAULT_LANGUAGE) {
  return loadContent(slug || '', 'releases', locale);
}

export async function getReleaseTag(slug?: string) {
  return getCategoryOrTag('tags', slug, 'release-tags');
}

// Sitemap generation
export async function getSitemapLinks() {
  const [tags, articles, tutorials] = await Promise.all([
    listArticleTags(),
    listArticles({ pageSize: 5000 }),
    listTutorialArticles({ pageSize: 5000 })
  ]);

  const generateLanguageLinks = (path: string) => [
    { lang: 'en-US', url: `/en${path}` },
    { lang: 'zh-CN', url: `/cn${path}` },
    { lang: 'ja-JP', url: `/ja${path}` },
    { lang: 'ru-RU', url: `/ru${path}` },
    { lang: 'x-default', url: `/en${path}` },
  ];

  const baseLinks = [
    {
      url: '/',
      links: [
        { lang: 'en-US', url: `/en/` },
        { lang: 'zh-CN', url: `/cn/` },
        { lang: 'ja-JP', url: `/ja/` },
        { lang: 'ru-RU', url: `/ru/` },
        { lang: 'x-default', url: `/` },
      ],
    },
  ];

  const tagLinks = tags.map((tag: any) => ({
    url: `/en/blog/tags/${tag.slug}`,
    lastmod: tag.updatedAt,
    links: generateLanguageLinks(`/blog/tags/${tag.slug}`),
  }));

  const articleLinks = articles.data.map((article: any) => ({
    url: `/en/blog/${article.slug}`,
    lastmod: article.updatedAt,
    links: generateLanguageLinks(`/blog/${article.slug}`),
  }));

  const tutorialLinks = tutorials.data.map((tutorial: any) => ({
    url: `/en/tutorials/${tutorial.slug}`,
    lastmod: tutorial.updatedAt,
    links: generateLanguageLinks(`/tutorials/${tutorial.slug}`),
  }));

  return baseLinks.concat(tagLinks).concat(articleLinks).concat(tutorialLinks);
}

// Release notes functions
export async function listReleaseNotes(options?: {
  page?: number,
  pageSize?: number,
  milestoneOnly?: boolean,
  locale?: string
}) {
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

    const contentField = locale === 'en' ? 'content' : `content_${locale}`;
    const titleField = locale === 'en' ? 'title' : `title_${locale}`;
    const descField = locale === 'en' ? 'description' : `description_${locale}`;

    return {
      ...article,
      title: article[titleField] || article.title,
      description: article[descField] || article.description,
      content: article[contentField] || article.content,
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

export async function listMilestoneNotes(options?: {
  page?: number,
  pageSize?: number,
  locale?: string
}) {
  return listReleaseNotes({ ...options, milestoneOnly: true });
}

// Legacy url helper (kept for compatibility, but now just returns the path)
export function url(path: string): string {
  return path.startsWith('https') ? path : path;
}
