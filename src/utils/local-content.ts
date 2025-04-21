import fs from 'fs';
import path from 'path';
import { createMarkdownProcessor as coreCreateMarkdownProcessor } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';

// 内容缓存
const articlesCache: Record<string, any> = {};
const tutorialsCache: Record<string, any> = {};
const releasesCache: Record<string, any> = {};
const pagesCache: Record<string, any> = {};

const contentRoot = path.join(process.cwd(), 'content');

// 创建自己的markdown处理器，避免循环依赖
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

// 创建markdown处理器
const processor = await createMarkdownProcessor();

// 读取文件内容，如果文件不存在则返回null
function readFileOrNull(filePath: string): string | null {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8');
  }
  return null;
}

// 读取JSON文件
function readJsonFile(filePath: string): any {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  }
  return null;
}

// 列出目录下的所有子目录
function listSubdirectories(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  return fs.readdirSync(dirPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

// 从Markdown前置元数据中提取元数据信息
async function extractFrontmatter(content: string) {
  // 简单的前置元数据提取
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);
  
  if (match && match[1]) {
    try {
      // 解析YAML格式的前置元数据
      const frontmatterStr = match[1];
      const lines = frontmatterStr.split('\n');
      const metadata: Record<string, any> = {};
      
      lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
          const key = line.substring(0, colonIndex).trim();
          let value: any = line.substring(colonIndex + 1).trim();
          
          // 尝试解析数组
          if (value.startsWith('[') && value.endsWith(']')) {
            try {
              value = JSON.parse(value);
            } catch (e) {
              // 简单的数组解析
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

// 获取文章
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

  // 读取对应语言的内容文件
  let contentFile = 'index.md';
  if (locale === 'cn') {
    contentFile = 'index.cn.md';
  } else if (locale === 'ja') {
    contentFile = 'index.ja.md';
  }

  const contentPath = path.join(articleDir, contentFile);
  const fallbackContentPath = path.join(articleDir, 'index.md');
  
  // 尝试读取Markdown内容
  let content = readFileOrNull(contentPath) || readFileOrNull(fallbackContentPath) || '';
  
  // 读取JSON元数据作为备份
  const jsonMetadata = readJsonFile(path.join(articleDir, 'metadata.json')) || {};
  
  // 从Markdown提取前置元数据
  const { metadata: frontMatterMetadata, content: cleanContent } = await extractFrontmatter(content);
  
  // 合并元数据，优先使用Markdown中的元数据
  const metadata = { ...jsonMetadata, ...frontMatterMetadata };
  
  // 处理Markdown内容
  const { code, metadata: mdMetadata } = await processor.render(cleanContent);
  const headings: any[] = mdMetadata.headings || [];

  // 缓存结果
  const result = { 
    data: metadata, 
    headings, 
    html: code 
  };
  articlesCache[cacheKey] = result;
  
  return result;
}

// 获取教程文章
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

  // 读取对应语言的内容文件
  let contentFile = 'index.md';
  if (locale === 'cn') {
    contentFile = 'index.cn.md';
  } else if (locale === 'ja') {
    contentFile = 'index.ja.md';
  }

  const contentPath = path.join(tutorialDir, contentFile);
  const fallbackContentPath = path.join(tutorialDir, 'index.md');
  
  // 尝试读取Markdown内容
  let content = readFileOrNull(contentPath) || readFileOrNull(fallbackContentPath) || '';
  
  // 读取JSON元数据作为备份
  const jsonMetadata = readJsonFile(path.join(tutorialDir, 'metadata.json')) || {};
  
  // 从Markdown提取前置元数据
  const { metadata: frontMatterMetadata, content: cleanContent } = await extractFrontmatter(content);
  
  // 合并元数据，优先使用Markdown中的元数据
  const metadata = { ...jsonMetadata, ...frontMatterMetadata };
  
  // 处理Markdown内容
  const { code, metadata: mdMetadata } = await processor.render(cleanContent);
  const headings: any[] = mdMetadata.headings || [];

  // 缓存结果
  const result = { 
    data: metadata, 
    headings, 
    html: code 
  };
  tutorialsCache[cacheKey] = result;
  
  return result;
}

// 获取发布说明
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

  // 读取对应语言的内容文件
  let contentFile = 'index.md';
  if (locale === 'cn') {
    contentFile = 'index.cn.md';
  } else if (locale === 'ja') {
    contentFile = 'index.ja.md';
  }

  const contentPath = path.join(releaseDir, contentFile);
  const fallbackContentPath = path.join(releaseDir, 'index.md');
  
  // 尝试读取Markdown内容
  let content = readFileOrNull(contentPath) || readFileOrNull(fallbackContentPath) || '';
  
  // 读取JSON元数据作为备份
  const jsonMetadata = readJsonFile(path.join(releaseDir, 'metadata.json')) || {};
  
  // 从Markdown提取前置元数据
  const { metadata: frontMatterMetadata, content: cleanContent } = await extractFrontmatter(content);
  
  // 合并元数据，优先使用Markdown中的元数据
  const metadata = { ...jsonMetadata, ...frontMatterMetadata };
  
  // 处理Markdown内容
  const { code, metadata: mdMetadata } = await processor.render(cleanContent);
  const headings: any[] = mdMetadata.headings || [];

  // 缓存结果
  const result = { 
    data: metadata, 
    headings, 
    html: code 
  };
  releasesCache[cacheKey] = result;
  
  return result;
}

// 获取页面
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

  // 读取对应语言的内容文件
  let contentFile = 'index.md';
  if (locale === 'cn') {
    contentFile = 'index.cn.md';
  } else if (locale === 'ja') {
    contentFile = 'index.ja.md';
  }

  const contentPath = path.join(pageDir, contentFile);
  const fallbackContentPath = path.join(pageDir, 'index.md');
  
  // 尝试读取Markdown内容
  let content = readFileOrNull(contentPath) || readFileOrNull(fallbackContentPath) || '';
  
  // 读取JSON元数据作为备份
  const jsonMetadata = readJsonFile(path.join(pageDir, 'metadata.json')) || {};
  
  // 从Markdown提取前置元数据
  const { metadata: frontMatterMetadata, content: cleanContent } = await extractFrontmatter(content);
  
  // 合并元数据，优先使用Markdown中的元数据
  const metadata = { ...jsonMetadata, ...frontMatterMetadata };
  
  // 处理Markdown内容
  const { code } = await processor.render(cleanContent);

  // 缓存并返回结果
  const result = { ...metadata, html: code };
  pagesCache[cacheKey] = result;
  
  return result;
}

// 列出文章
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

  // 获取所有文章目录
  const articlesDir = path.join(contentRoot, 'articles');
  const articleSlugs = listSubdirectories(articlesDir);
  
  // 读取所有文章的元数据
  const articles = articleSlugs.map(slug => {
    const metadataPath = path.join(articlesDir, slug, 'metadata.json');
    return readJsonFile(metadataPath) || null;
  }).filter(Boolean);

  // 过滤条件
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

  // 排序
  filteredArticles.sort((a, b) => {
    for (const sortField of sort) {
      const desc = sortField.startsWith('-');
      const field = desc ? sortField.substring(1) : sortField;
      
      if (a[field] < b[field]) return desc ? 1 : -1;
      if (a[field] > b[field]) return desc ? -1 : 1;
    }
    return 0;
  });

  // 分页
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

// 列出教程
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

  // 获取所有教程目录
  const tutorialsDir = path.join(contentRoot, 'tutorials');
  const tutorialSlugs = listSubdirectories(tutorialsDir);
  
  // 读取所有教程的元数据
  let tutorials = tutorialSlugs.map(slug => {
    const metadataPath = path.join(tutorialsDir, slug, 'metadata.json');
    return readJsonFile(metadataPath) || null;
  }).filter(Boolean);

  // 过滤条件
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

  // 按serialsSort排序
  tutorials.sort((a, b) => (a.serialsSort || 0) - (b.serialsSort || 0));

  // 分页
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

// 列出发布说明
export async function listReleases(options?: any) {
  const { 
    page = 1, 
    pageSize = 20,
    tagSlug
  } = options || {};

  // 获取所有发布说明目录
  const releasesDir = path.join(contentRoot, 'releases');
  const releaseSlugs = listSubdirectories(releasesDir);
  
  // 读取所有发布说明的元数据
  let releases = releaseSlugs.map(slug => {
    const metadataPath = path.join(releasesDir, slug, 'metadata.json');
    return readJsonFile(metadataPath) || null;
  }).filter(Boolean);

  // 过滤条件
  releases = releases.filter(release => release.status === 'published');

  if (tagSlug) {
    releases = releases.filter(release => 
      release.tags && release.tags.some((tag: any) => tag.slug === tagSlug)
    );
  }

  // 按发布时间排序
  releases.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // 分页
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

// 读取文章分类
export async function listArticleCategories() {
  const categoriesPath = path.join(contentRoot, 'categories', 'article-categories.json');
  return readJsonFile(categoriesPath) || [];
}

// 获取指定slug的分类
export async function getArticleCategory(slug?: string) {
  if (!slug) {
    return {};
  }

  const categoryFile = path.join(contentRoot, 'categories', slug, 'category.json');
  if (!fs.existsSync(categoryFile)) {
    // 尝试从全部分类列表中查找
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

// 读取文章标签
export async function listArticleTags(options?: any) {
  const tagsPath = path.join(contentRoot, 'tags', 'article-tags.json');
  const tags = readJsonFile(tagsPath) || [];
  
  // 处理过滤条件
  const { filter } = options || {};
  if (filter) {
    // 这里可以实现基于filter参数的过滤逻辑
    // 例如：filter: { slug: 'tag-slug' }
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

// 获取指定slug的标签
export async function getArticleTag(slug?: string) {
  if (!slug) {
    return {};
  }

  const tagFile = path.join(contentRoot, 'tags', slug, 'tag.json');
  if (!fs.existsSync(tagFile)) {
    // 尝试从全部标签列表中查找
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

// 获取发布说明标签
export async function getReleaseTag(slug?: string) {
  if (!slug) {
    return {};
  }

  const tagFile = path.join(contentRoot, 'tags', 'release-tags', slug, 'tag.json');
  if (!fs.existsSync(tagFile)) {
    // 尝试从全部发布说明标签列表中查找
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

// 获取帮助中心项目
export async function listHelpCenterItems(options?: { pageSize?: number, page?: number, tree?: boolean }) {
  const { tree = true } = options || {};
  
  const helpCenterPath = path.join(contentRoot, 'help-center', 'help-center-tree.json');
  const items = readJsonFile(helpCenterPath) || [];
  
  // 如果不需要树结构，可以在这里展平结构
  
  return {
    data: items,
    meta: {
      total: items.length
    }
  };
}

// 获取RSS内容
export async function getRssItems(locale = '*') {
  // 获取所有文章数据
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

// 获取站点地图链接
export async function getSitemapLinks() {
  // 这个函数比较复杂，可能需要读取多个数据源，简化实现
  const tags = await listArticleTags();
  const articles = (await listArticles({ pageSize: 5000 })).data;
  const tutorials = (await listTutorialArticles({ pageSize: 5000 })).data;
  
  // 基础链接
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
    // 其他基础链接...可以根据需要添加
  ];
  
  // 标签链接
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
  
  // 文章链接
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
  
  // 教程链接
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

// 列出发布笔记
export async function listReleaseNotes(options?: { page?: number, pageSize?: number }) {
  const { page = 1, pageSize = 10 } = options || {};
  
  // 获取所有带有"Release Notes"标签的文章
  const { data: allArticles } = await listArticles({
    page: 1,
    pageSize: 5000,  // 先获取所有文章
    sort: ['-publishedAt'],
    filter: {
      // 获取带有"Release Notes"标签的文章
    }
  });
  
  // 过滤出带有"Release Notes"标签的文章
  const releaseNotes = allArticles.filter((article: any) => {
    return article.tags && article.tags.some((tag: any) => tag.title === 'Release Notes');
  });
  
  // 处理每个文章，添加所需的特殊字段
  const processedData = releaseNotes.map((article: any) => {
    // 获取子标签
    const subTags = Array.isArray(article.sub_tags) ? article.sub_tags : [];
    
    // 取第一个有效标签，否则默认为 Latest
    const primaryTag = subTags[0]?.title || 'Latest';
    
    // 所有标签
    const allTags = (article.sub_tags || []).map((t: any) => t.title.toLowerCase());
    
    // 过滤周报
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
  
  // 按时间倒序排序
  processedData.sort((a: any, b: any) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  // 分页
  const startIndex = (page - 1) * pageSize;
  const paginatedData = processedData.slice(startIndex, startIndex + pageSize);
  
  // 确定是否还有更多内容
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

// 实现其他需要的方法，如listArticleCategories, listArticleTags等
// 根据原有API的行为进行类似实现 