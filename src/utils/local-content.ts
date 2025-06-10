import fs from 'fs';
import path from 'path';
import { createMarkdownProcessor as coreCreateMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import sift from 'sift';

// Configuration
const CONFIG = {
  contentRoot: path.join(process.cwd(), 'content'),
  cacheTimeout: 5 * 60 * 1000, // 5 minutes
} as const;

// Content caches with timestamps
const caches = {
  articles: new Map<string, { data: any; timestamp: number }>(),
  tutorials: new Map<string, { data: any; timestamp: number }>(),
  releases: new Map<string, { data: any; timestamp: number }>(),
  pages: new Map<string, { data: any; timestamp: number }>(),
  processor: null as any,
  directoryCache: new Map<string, { files: string[]; timestamp: number }>(),
};

// Utility functions - permanent cache for local content
const isValidCacheEntry = (entry: { timestamp: number }) => 
  true; // Always valid for local content - permanent cache

// Create markdown processor with caching
async function createMarkdownProcessor() {
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

const processor = await createMarkdownProcessor();

// Safe file operations
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
    if (!content) return null;
    
    return JSON.parse(content);
  } catch (parseError) {
    console.error(`Error parsing JSON file ${filePath}:`, parseError);
    const content = readFileOrNull(filePath);
    console.error(`File content begins with: ${content?.slice(0, 100) || 'null'}...`);
    return null;
  }
}

// List subdirectories with caching
function listSubdirectories(dirPath: string): string[] {
  const cacheEntry = caches.directoryCache.get(dirPath);
  if (cacheEntry && isValidCacheEntry(cacheEntry)) {
    return cacheEntry.files;
  }

  if (!fs.existsSync(dirPath)) {
    return [];
  }

  try {
    const files = fs.readdirSync(dirPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

    caches.directoryCache.set(dirPath, {
      files,
      timestamp: Date.now()
    });

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
          // Handle $notIncludes for both arrays and nested objects
          if (Array.isArray(currentValue)) {
            // currentValue is array like tags: [{title: "News"}, {title: "Updates"}]
            const hasMatch = currentValue.some(tag => 
              typeof tag === 'object' && tag.title === expected
            );
            if (hasMatch) return false;
          } else if (typeof currentValue === 'string') {
                        // currentValue is string
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
      // Direct value comparison
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
  const cached = cache.get(cacheKey);
  
  if (cached && isValidCacheEntry(cached)) {
    return cached.data;
  }

  const contentDir = path.join(CONFIG.contentRoot, contentType, slug);
  if (!fs.existsSync(contentDir)) {
    return {};
  }

  // Determine content file based on locale
  const contentFiles = {
    en: 'index.md',
    cn: 'index.cn.md',
    ja: 'index.ja.md',
    ru: 'index.ru.md'
  };

  const contentFile = contentFiles[locale as keyof typeof contentFiles] || contentFiles.en;
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

  // Cache the result
  cache.set(cacheKey, { data: result, timestamp: Date.now() });
  
  return result;
}

// Public API functions using the generic loader
export async function getArticle(slug?: string, locale = 'en') {
  return loadContent(slug || '', 'articles', locale);
}

export async function getTutorialArticle(slug?: string, locale = 'en') {
  return loadContent(slug || '', 'tutorials', locale);
}

export async function getRelease(slug?: string, locale = 'en') {
  return loadContent(slug || '', 'releases', locale);
}

export async function getPage(slug?: string, locale = 'en') {
  return loadContent(slug || '', 'pages', locale);
}

// Generic list function with filtering and pagination
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
    serialsSlug,
    customFilter
  } = options;

  // Get content directory
  const contentDir = path.join(CONFIG.contentRoot, contentType);
  if (!fs.existsSync(contentDir)) {
    console.error(`Content directory does not exist: ${contentDir}`);
    return { data: [], meta: { total: 0, count: 0, pageSize, currentPage: page, totalPages: 0 } };
  }
  
  const slugs = listSubdirectories(contentDir);
  console.log(`Found ${slugs.length} ${contentType} directories`);
  
  // Read all items metadata
  const items = [];
  
  for (const itemSlug of slugs) {
    try {
      const metadataPath = path.join(contentDir, itemSlug, 'metadata.json');
      const metadata = readJsonFile(metadataPath);
      
      if (!metadata?.title) {
        console.log(`${contentType} missing title: ${itemSlug}`);
        continue;
      }
      
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
  if (customFilter) {
    filterConditions.push(...(customFilter.$and || [customFilter]));
  }

  // Apply filters
  let filteredItems = items;
  if (filterConditions.length > 0) {
    const combinedFilter = { $and: filterConditions };
    
    // Check if we have unsupported operators like $notIncludes
    const filterStr = JSON.stringify(combinedFilter);
    const hasUnsupportedOps = filterStr.includes('$notIncludes');
    
    if (hasUnsupportedOps) {
      // Handle unsupported operators manually
      filteredItems = items.filter(item => {
        const result = filterConditions.every(condition => {
          return evaluateCondition(item, condition);
        });
        return result;
      });
      console.log(`After custom filtering: ${filteredItems.length} ${contentType}`);
    } else {
    try {
      const siftFilter = sift(combinedFilter);
        filteredItems = items.filter(siftFilter);
        console.log(`After sift filtering: ${filteredItems.length} ${contentType}`);
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

// Export list functions
export async function listArticles(options?: any) {
  return listContentItems('articles', options);
}

export async function listTutorialArticles(options?: any) {
  return listContentItems('tutorials', options);
}

export async function listReleases(options?: any) {
  return listContentItems('releases', options);
}

// Category and tag functions with caching
const categoryTagCache = new Map<string, { data: any; timestamp: number }>();

async function getCategoryOrTag(type: 'categories' | 'tags', slug?: string, subPath?: string) {
  if (!slug) return {};

  const cacheKey = `${type}-${slug}-${subPath || ''}`;
  const cached = categoryTagCache.get(cacheKey);
  // Use permanent cache for local content
  if (cached && isValidCacheEntry(cached)) {
    return cached.data;
  }

  let result = {};
  
  // Try individual file first
  const itemFile = path.join(CONFIG.contentRoot, type, subPath || '', slug, 
    type === 'categories' ? 'category.json' : 'tag.json');
  
  if (fs.existsSync(itemFile)) {
    result = readJsonFile(itemFile) || {};
    } else {
    // Try from collection file
    const collectionFile = path.join(CONFIG.contentRoot, type, 
      subPath ? `${subPath}.json` : `article-${type}.json`);
    
    if (fs.existsSync(collectionFile)) {
      const collection = readJsonFile(collectionFile) || [];
      const item = collection.find((item: any) => item.slug === slug);
      result = item || {};
    }
  }

  categoryTagCache.set(cacheKey, { data: result, timestamp: Date.now() });
  return result;
}

export async function listArticleCategories() {
  const categoriesPath = path.join(CONFIG.contentRoot, 'categories', 'article-categories.json');
  return readJsonFile(categoriesPath) || [];
}

export async function getArticleCategory(slug?: string) {
  return getCategoryOrTag('categories', slug);
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

export async function getArticleTag(slug?: string) {
  return getCategoryOrTag('tags', slug);
}

export async function getReleaseTag(slug?: string) {
  return getCategoryOrTag('tags', slug, 'release-tags');
}

export async function listHelpCenterItems(options?: { pageSize?: number, page?: number, tree?: boolean }) {
  const helpCenterPath = path.join(CONFIG.contentRoot, 'help-center', 'help-center-tree.json');
  const items = readJsonFile(helpCenterPath) || [];
  
  return {
    data: items,
    meta: {
      total: items.length
    }
  };
}

// RSS and sitemap generation
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
