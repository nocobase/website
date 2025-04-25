import fs from 'fs';
import path from 'path';
import { createMarkdownProcessor as coreCreateMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';

// Content caches
const articlesCache: Record<string, any> = {};
const tutorialsCache: Record<string, any> = {};
const releasesCache: Record<string, any> = {};
const pagesCache: Record<string, any> = {};

const contentRoot = path.join(process.cwd(), 'content');

// Create a custom markdown processor to avoid circular dependency
async function createMarkdownProcessor() {
  return await coreCreateMarkdownProcessor({
    shikiConfig: {
      theme: 'github-light'
    },
    syntaxHighlight: 'shiki',
    remarkPlugins: [remarkDirective],
    rehypePlugins: [rehypeSlug]
  });
}

// Create markdown processor
const processor = await createMarkdownProcessor();

// Read file content; if the file does not exist, return null
function readFileOrNull(filePath: string): string | null {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8');
  }
  return null;
}

// Read JSON file
function readJsonFile(filePath: string): any {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  }
  return null;
}

// List all subdirectories in a given directory
function listSubdirectories(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  return fs.readdirSync(dirPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

// Extract metadata from Markdown frontmatter
async function extractFrontmatter(content: string) {
  // Simple frontmatter extraction
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);
  
  if (match && match[1]) {
    try {
      // Parse YAML formatted frontmatter
      const frontmatterStr = match[1];
      const lines = frontmatterStr.split('\n');
      const metadata: Record<string, any> = {};
      
      lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
          const key = line.substring(0, colonIndex).trim();
          let value: any = line.substring(colonIndex + 1).trim();
          
          // Attempt to parse array
          if (value.startsWith('[') && value.endsWith(']')) {
            try {
              value = JSON.parse(value);
            } catch (e) {
              // Simple array parsing
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
    }
  }
  
  return { metadata: {}, content };
}

// Get article
export async function getArticle(slug?: string, locale = 'en') {
  if (!slug) {
    return {};
  }

  const cacheKey = `${slug}-${locale}`;
  if (articlesCache[cacheKey]) {
    return articlesCache[cacheKey];
  }

  const articleDir = path.join(contentRoot, 'articles', slug);
  if (!fs.existsSync(articleDir)) {
    return {};
  }

  // Read content file for the specified language
  let contentFile = 'index.md';
  if (locale === 'cn') {
    contentFile = 'index.cn.md';
  } else if (locale === 'ja') {
    contentFile = 'index.ja.md';
  }

  const contentPath = path.join(articleDir, contentFile);
  const fallbackContentPath = path.join(articleDir, 'index.md');
  
  // Try to read Markdown content
  let content = readFileOrNull(contentPath) || readFileOrNull(fallbackContentPath) || '';
  
  // Read JSON metadata as backup
  const jsonMetadata = readJsonFile(path.join(articleDir, 'metadata.json')) || {};
  
  // Extract frontmatter metadata from Markdown
  const { metadata: frontMatterMetadata, content: cleanContent } = await extractFrontmatter(content);
  
  // Merge metadata, prioritizing Markdown metadata over JSON
  const metadata = { ...jsonMetadata, ...frontMatterMetadata };
  
  // Process Markdown content
  const { code, metadata: mdMetadata } = await processor.render(cleanContent);
  const headings: any[] = mdMetadata.headings || [];

  // Cache result
  const result = { 
    data: metadata, 
    headings, 
    html: code 
  };
  articlesCache[cacheKey] = result;
  
  return result;
}

// Get tutorial article
export async function getTutorialArticle(slug?: string, locale = 'en') {
  if (!slug) {
    return {};
  }

  const cacheKey = `${slug}-${locale}`;
  if (tutorialsCache[cacheKey]) {
    return tutorialsCache[cacheKey];
  }

  const tutorialDir = path.join(contentRoot, 'tutorials', slug);
  if (!fs.existsSync(tutorialDir)) {
    return {};
  }

  // Read content file for the specified language
  let contentFile = 'index.md';
  if (locale === 'cn') {
    contentFile = 'index.cn.md';
  } else if (locale === 'ja') {
    contentFile = 'index.ja.md';
  }

  const contentPath = path.join(tutorialDir, contentFile);
  const fallbackContentPath = path.join(tutorialDir, 'index.md');
  
  // Try to read Markdown content
  let content = readFileOrNull(contentPath) || readFileOrNull(fallbackContentPath) || '';
  
  // Read JSON metadata as backup
  const jsonMetadata = readJsonFile(path.join(tutorialDir, 'metadata.json')) || {};
  
  // Extract frontmatter metadata from Markdown
  const { metadata: frontMatterMetadata, content: cleanContent } = await extractFrontmatter(content);
  
  // Merge metadata, prioritizing Markdown metadata over JSON
  const metadata = { ...jsonMetadata, ...frontMatterMetadata };
  
  // Process Markdown content
  const { code, metadata: mdMetadata } = await processor.render(cleanContent);
  const headings: any[] = mdMetadata.headings || [];

  // Cache result
  const result = { 
    data: metadata, 
    headings, 
    html: code 
  };
  tutorialsCache[cacheKey] = result;
  
  return result;
}

// Get release
export async function getRelease(slug?: string, locale = 'en') {
  if (!slug) {
    return {};
  }

  const cacheKey = `${slug}-${locale}`;
  if (releasesCache[cacheKey]) {
    return releasesCache[cacheKey];
  }

  const releaseDir = path.join(contentRoot, 'releases', slug);
  if (!fs.existsSync(releaseDir)) {
    return {};
  }

  // Read content file for the specified language
  let contentFile = 'index.md';
  if (locale === 'cn') {
    contentFile = 'index.cn.md';
  } else if (locale === 'ja') {
    contentFile = 'index.ja.md';
  }

  const contentPath = path.join(releaseDir, contentFile);
  const fallbackContentPath = path.join(releaseDir, 'index.md');
  
  // Try to read Markdown content
  let content = readFileOrNull(contentPath) || readFileOrNull(fallbackContentPath) || '';
  
  // Read JSON metadata as backup
  const jsonMetadata = readJsonFile(path.join(releaseDir, 'metadata.json')) || {};
  
  // Extract frontmatter metadata from Markdown
  const { metadata: frontMatterMetadata, content: cleanContent } = await extractFrontmatter(content);
  
  // Merge metadata, prioritizing Markdown metadata over JSON
  const metadata = { ...jsonMetadata, ...frontMatterMetadata };
  
  // Process Markdown content
  const { code, metadata: mdMetadata } = await processor.render(cleanContent);
  const headings: any[] = mdMetadata.headings || [];

  // Cache result
  const result = { 
    data: metadata, 
    headings, 
    html: code 
  };
  releasesCache[cacheKey] = result;
  
  return result;
}

// Get page
export async function getPage(slug?: string, locale = 'en') {
  if (!slug) {
    return {};
  }

  const cacheKey = `${slug}-${locale}`;
  if (pagesCache[cacheKey]) {
    return pagesCache[cacheKey];
  }

  const pageDir = path.join(contentRoot, 'pages', slug);
  if (!fs.existsSync(pageDir)) {
    return {};
  }

  // Read content file for the specified language
  let contentFile = 'index.md';
  if (locale === 'cn') {
    contentFile = 'index.cn.md';
  } else if (locale === 'ja') {
    contentFile = 'index.ja.md';
  }

  const contentPath = path.join(pageDir, contentFile);
  const fallbackContentPath = path.join(pageDir, 'index.md');
  
  // Try to read Markdown content
  let content = readFileOrNull(contentPath) || readFileOrNull(fallbackContentPath) || '';
  
  // Read JSON metadata as backup
  const jsonMetadata = readJsonFile(path.join(pageDir, 'metadata.json')) || {};
  
  // Extract frontmatter metadata from Markdown
  const { metadata: frontMatterMetadata, content: cleanContent } = await extractFrontmatter(content);
  
  // Merge metadata, prioritizing Markdown metadata over JSON
  const metadata = { ...jsonMetadata, ...frontMatterMetadata };
  
  // Process Markdown content
  const { code } = await processor.render(cleanContent);

  // Create a complete result object with all expected page properties
  const result = { 
    ...metadata, 
    id: metadata.id,
    title: metadata.title,
    title_cn: metadata.title_cn,
    title_ja: metadata.title_ja,
    description: metadata.description,
    description_cn: metadata.description_cn,
    description_ja: metadata.description_ja,
    keywords: metadata.keywords,
    keywords_cn: metadata.keywords_cn,
    keywords_ja: metadata.keywords_ja,
    slug: metadata.slug,
    createdAt: metadata.createdAt,
    updatedAt: metadata.updatedAt,
    createdById: metadata.createdById,
    updatedById: metadata.updatedById,
    content: locale === 'en' ? content : null,
    content_cn: locale === 'cn' ? content : null,
    content_ja: locale === 'ja' ? content : null,
    html: code 
  };
  
  pagesCache[cacheKey] = result;
  
  return result;
}

// List articles
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
  const { 
    hideOnBlog, 
    categorySlug, 
    tagSlug, 
    page = 1, 
    pageSize = 9,
    sort = ['-publishedAt']
  } = options || {};

  // Get all articles directories
  const articlesDir = path.join(contentRoot, 'articles');
  const articleSlugs = listSubdirectories(articlesDir);
  
  // Read all articles metadata
  const articles = articleSlugs.map(slug => {
    const metadataPath = path.join(articlesDir, slug, 'metadata.json');
    return readJsonFile(metadataPath) || null;
  }).filter(Boolean);

  // Filter conditions
  let filteredArticles = articles.filter(article => 
    article.status === 'published' && 
    !article.hideOnListPage
  );

  if (hideOnBlog === false) {
    filteredArticles = filteredArticles.filter(article => !article.hideOnBlog);
  }

  if (tagSlug) {
    filteredArticles = filteredArticles.filter(article => 
      article.tags && article.tags.some((tag: any) => tag.slug === tagSlug)
    );
  }

  if (categorySlug) {
    filteredArticles = filteredArticles.filter(article => 
      article.category && article.category.slug === categorySlug
    );
  }

  // Sorting
  filteredArticles.sort((a, b) => {
    for (const sortField of sort) {
      const desc = sortField.startsWith('-');
      const field = desc ? sortField.substring(1) : sortField;
      
      if (a[field] < b[field]) return desc ? 1 : -1;
      if (a[field] > b[field]) return desc ? -1 : 1;
    }
    return 0;
  });

  // Pagination
  const startIndex = (page - 1) * pageSize;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedArticles,
    meta: {
      total: filteredArticles.length,
      pageSize,
      currentPage: page,
      totalPages: Math.ceil(filteredArticles.length / pageSize)
    }
  };
}

// List tutorial articles
export async function listTutorialArticles(options?: { 
  pageSize?: number, 
  slug?: string; 
  serialsSlug?: string; 
  page?: number; 
}) {
  const { 
    slug, 
    serialsSlug, 
    page = 1, 
    pageSize = 9 
  } = options || {};

  // Get all tutorials directories
  const tutorialsDir = path.join(contentRoot, 'tutorials');
  const tutorialSlugs = listSubdirectories(tutorialsDir);
  
  // Read all tutorials metadata
  let tutorials = tutorialSlugs.map(slug => {
    const metadataPath = path.join(tutorialsDir, slug, 'metadata.json');
    return readJsonFile(metadataPath) || null;
  }).filter(Boolean);

  // Filter conditions
  tutorials = tutorials.filter(tutorial => tutorial.status === 'published');

  if (slug) {
    tutorials = tutorials.filter(tutorial => tutorial.slug === slug);
  }

  if (serialsSlug) {
    tutorials = tutorials.filter(tutorial => 
      tutorial.serials && tutorial.serials.slug === serialsSlug && 
      tutorial.serials.status === 'published'
    );
  }

  // Sort by serialsSort
  tutorials.sort((a, b) => (a.serialsSort || 0) - (b.serialsSort || 0));

  // Pagination
  const startIndex = (page - 1) * pageSize;
  const paginatedTutorials = tutorials.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedTutorials,
    meta: {
      total: tutorials.length,
      pageSize,
      currentPage: page,
      totalPages: Math.ceil(tutorials.length / pageSize)
    }
  };
}

// List releases
export async function listReleases(options?: any) {
  const { 
    page = 1, 
    pageSize = 20,
    tagSlug
  } = options || {};

  // Get all releases directories
  const releasesDir = path.join(contentRoot, 'releases');
  const releaseSlugs = listSubdirectories(releasesDir);
  
  // Read all releases metadata
  let releases = releaseSlugs.map(slug => {
    const metadataPath = path.join(releasesDir, slug, 'metadata.json');
    return readJsonFile(metadataPath) || null;
  }).filter(Boolean);

  // Filter conditions
  releases = releases.filter(release => release.status === 'published');

  if (tagSlug) {
    releases = releases.filter(release => 
      release.tags && release.tags.some((tag: any) => tag.slug === tagSlug)
    );
  }

  // Sort by published date descending
  releases.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Pagination
  const startIndex = (page - 1) * pageSize;
  const paginatedReleases = releases.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedReleases,
    meta: {
      total: releases.length,
      pageSize,
      currentPage: page,
      totalPages: Math.ceil(releases.length / pageSize)
    }
  };
}

// Read article categories
export async function listArticleCategories() {
  const categoriesPath = path.join(contentRoot, 'categories', 'article-categories.json');
  return readJsonFile(categoriesPath) || [];
}

// Get article category by slug
export async function getArticleCategory(slug?: string) {
  if (!slug) {
    return {};
  }

  const categoryFile = path.join(contentRoot, 'categories', slug, 'category.json');
  if (!fs.existsSync(categoryFile)) {
    // Attempt to find from the complete list of categories
    const allCategoriesFile = path.join(contentRoot, 'categories', 'article-categories.json');
    if (fs.existsSync(allCategoriesFile)) {
      const allCategories = readJsonFile(allCategoriesFile) || [];
      const category = allCategories.find((c: any) => c.slug === slug);
      return category || {};
    }
    return {};
  }

  return readJsonFile(categoryFile) || {};
}

// Read article tags
export async function listArticleTags(options?: any) {
  const tagsPath = path.join(contentRoot, 'tags', 'article-tags.json');
  const tags = readJsonFile(tagsPath) || [];
  
  // Process filter conditions
  const { filter } = options || {};
  if (filter) {
    // You can implement filtering logic based on the filter parameter here,
    // e.g. filter: { slug: 'tag-slug' }
    return tags.filter((tag: any) => {
      for (const key in filter) {
        if (tag[key] !== filter[key]) {
          return false;
        }
      }
      return true;
    });
  }
  
  return tags;
}

// Get article tag by slug
export async function getArticleTag(slug?: string) {
  if (!slug) {
    return {};
  }

  const tagFile = path.join(contentRoot, 'tags', slug, 'tag.json');
  if (!fs.existsSync(tagFile)) {
    // Attempt to find from the complete list of tags
    const allTagsFile = path.join(contentRoot, 'tags', 'article-tags.json');
    if (fs.existsSync(allTagsFile)) {
      const allTags = readJsonFile(allTagsFile) || [];
      const tag = allTags.find((t: any) => t.slug === slug);
      return tag || {};
    }
    return {};
  }

  return readJsonFile(tagFile) || {};
}

// Get release tag by slug
export async function getReleaseTag(slug?: string) {
  if (!slug) {
    return {};
  }

  const tagFile = path.join(contentRoot, 'tags', 'release-tags', slug, 'tag.json');
  if (!fs.existsSync(tagFile)) {
    // Attempt to find from the complete list of release tags
    const allTagsFile = path.join(contentRoot, 'tags', 'release-tags.json');
    if (fs.existsSync(allTagsFile)) {
      const allTags = readJsonFile(allTagsFile) || [];
      const tag = allTags.find((t: any) => t.slug === slug);
      return tag || {};
    }
    return {};
  }

  return readJsonFile(tagFile) || {};
}

// Get help center items
export async function listHelpCenterItems(options?: { pageSize?: number, page?: number, tree?: boolean }) {
  const { tree = true } = options || {};
  
  const helpCenterPath = path.join(contentRoot, 'help-center', 'help-center-tree.json');
  const items = readJsonFile(helpCenterPath) || [];
  
  // If a tree structure is not needed, you can flatten the structure here
  
  return {
    data: items,
    meta: {
      total: items.length
    }
  };
}

// Get RSS items
export async function getRssItems(locale = '*') {
  // Retrieve all articles data
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

// Get sitemap links
export async function getSitemapLinks() {
  // This function is relatively complex and may require reading from multiple data sources; simplified implementation
  const tags = await listArticleTags();
  const articles = (await listArticles({ pageSize: 5000 })).data;
  const tutorials = (await listTutorialArticles({ pageSize: 5000 })).data;
  
  // Base links
  const baseLinks = [
    {
      url: '/',
      links: [
        { lang: 'en-US', url: `/en/` },
        { lang: 'zh-CN', url: `/cn/` },
        { lang: 'ja-JP', url: `/ja/` },
        { lang: 'x-default', url: `/` },
      ],
    },
    // Additional base links can be added as needed
  ];
  
  // Tag links
  const tagLinks = tags.map((tag: any) => ({
    url: `/en/blog/tags/${tag.slug}`,
    lastmod: tag.updatedAt,
    links: [
      { lang: 'en-US', url: `/en/blog/tags/${tag.slug}` },
      { lang: 'zh-CN', url: `/cn/blog/tags/${tag.slug}` },
      { lang: 'ja-JP', url: `/ja/blog/tags/${tag.slug}` },
      { lang: 'x-default', url: `/en/blog/tags/${tag.slug}` },
    ],
  }));
  
  // Article links
  const articleLinks = articles.map((article: any) => ({
    url: `/en/blog/${article.slug}`,
    lastmod: article.updatedAt,
    links: [
      { lang: 'en-US', url: `/en/blog/${article.slug}` },
      { lang: 'zh-CN', url: `/cn/blog/${article.slug}` },
      { lang: 'ja-JP', url: `/ja/blog/${article.slug}` },
      { lang: 'x-default', url: `/en/blog/${article.slug}` },
    ],
  }));
  
  // Tutorial links
  const tutorialLinks = tutorials.map((tutorial: any) => ({
    url: `/en/tutorials/${tutorial.slug}`,
    lastmod: tutorial.updatedAt,
    links: [
      { lang: 'en-US', url: `/en/tutorials/${tutorial.slug}` },
      { lang: 'zh-CN', url: `/cn/tutorials/${tutorial.slug}` },
      { lang: 'ja-JP', url: `/ja/tutorials/${tutorial.slug}` },
      { lang: 'x-default', url: `/en/tutorials/${tutorial.slug}` },
    ],
  }));
  
  return baseLinks.concat(tagLinks).concat(articleLinks).concat(tutorialLinks);
}

// List release notes
export async function listReleaseNotes(options?: { page?: number, pageSize?: number }) {
  const { page = 1, pageSize = 10 } = options || {};
  
  // Retrieve all articles with the "Release Notes" tag
  const { data: allArticles } = await listArticles({
    page: 1,
    pageSize: 5000,  // Retrieve all articles first
    sort: ['-publishedAt'],
    filter: {
      // Retrieve articles with the "Release Notes" tag
    }
  });
  
  // Filter articles that include the "Release Notes" tag
  const releaseNotes = allArticles.filter((article: any) => {
    return article.tags && article.tags.some((tag: any) => tag.title === 'Release Notes');
  });
  
  // Process each article and add the required special fields
  const processedData = releaseNotes.map((article: any) => {
    // Get sub-tags
    const subTags = Array.isArray(article.sub_tags) ? article.sub_tags : [];
    
    // Take the first valid tag; default to 'Latest' if absent
    const primaryTag = subTags[0]?.title || 'Latest';
    
    // All tags
    const allTags = (article.sub_tags || []).map((t: any) => t.title.toLowerCase());
    
    // Filter out weekly updates
    if (primaryTag === 'Weekly Updates') return null;
    
    return {
      ...article,
      tags: allTags,
      content: article.content || '',
      isMilestone: (article.sub_tags || []).some((t: any) => t.title === 'Milestone'),
      priority: ['Milestone', 'Latest', 'Beta', 'Alpha'].indexOf(primaryTag) + 1,
      publishedAt: article.publishedAt ? new Date(article.publishedAt) : new Date(),
      cover: article.cover?.url ? { url: article.cover.url } : null
    };
  }).filter(Boolean);
  
  // Sort by date in descending order
  processedData.sort((a: any, b: any) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  // Pagination
  const startIndex = (page - 1) * pageSize;
  const paginatedData = processedData.slice(startIndex, startIndex + pageSize);
  
  // Determine if there are more items
  const totalItems = processedData.length;
  const currentCount = (page - 1) * pageSize + paginatedData.length;
  const hasMore = currentCount < totalItems;
  
  return {
    data: paginatedData,
    meta: {
      total: totalItems,
      pageSize,
      currentPage: page,
      totalPages: Math.ceil(totalItems / pageSize),
      hasMore,
      pageCount: Math.ceil(totalItems / pageSize)
    }
  };
}

// Implement other required methods, such as listArticleCategories, listArticleTags, according to the original API's behavior