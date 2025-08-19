const axios = require('axios');
const {Buffer} = require('buffer');
const {setTimeout} = require('timers');

// Configuration
const baseURL = 'Your cms system url';
const token = 'Your cms system token';
// Define hours as a constant and calculate timeWindow from it
const defaultHours = 15;
let timeWindow = defaultHours * 60 * 60 * 1000; // Default: 15 hours in milliseconds

// GitHub configuration
const githubToken = 'Your GitHub token';
const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 60000,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${githubToken}`,
    'User-Agent': `NocoBase-Content-Sync-Script/1.0`
  }
});

const owner = 'nocobase';
const repo = 'website';
const branch = 'main';

const GITHUB_COMMITTER = {
  name: 'NocoBase',
  email: 'scripts@nocobase.com'
};

// Config parameters
const CONFIG = {
  batchSize: 5,
  maxRetries: 3,
  retryDelay: 1000,
  debugMode: true
};

// API client with timeout and retry
const api = axios.create({
  timeout: 30000, // 30-second timeout
  headers: {
    'User-Agent': `NocoBase-Content-Sync-Script/1.0`,
  },
  // Add request interceptor for debugging
  ...(CONFIG.debugMode ? {
    interceptors: {
      request: [(config) => {
        console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      }]
    }
  } : {})
});

// Add response interceptor for API access logging
api.interceptors.response.use(
  (response) => {
    if (CONFIG.debugMode) {
      console.log(`API Response: ${response.status} from ${response.config.url}`);
    }
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`API Error ${error.response.status}: ${error.message}`);
    } else if (error.request) {
      console.error(`API Request Error: ${error.message}`);
    } else {
      console.error(`Error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

// Cache for GitHub tree data
let repoTreeCache = null;
let contentsBlobCache = {};
let pendingUpdates = [];
let apiRequestCount = 0;
let githubRequestCount = 0;

// Helper function: track API request count
function trackApiRequest() {
  apiRequestCount++;
}

// Helper function: track GitHub request count
function trackGithubRequest() {
  githubRequestCount++;
}

// Helper function to get content created or updated in the last 15 hours
async function getRecentContent(endpoint, options = {}) {
  return withRetry(async () => {
    let url = `${baseURL}${endpoint}?pageSize=100`;
    let finalFilter = null;
    let formattedDate = null;
    
    // Check if we should skip time filter
    if (!options.skipTimeFilter) {
      // Calculate the time 15 hours ago
      const timeAgo = new Date(Date.now() - timeWindow);
      
      // Format to "YYYY-MM-DD HH:MM:SS" format
      formattedDate = timeAgo.toISOString()
        .replace('T', ' ')
        .replace(/\.\d+Z$/, '');
      
      // Create OR condition for createdAt and updatedAt
      const timeFilter = {
        "$or": [
          { "createdAt": { "$dateAfter": formattedDate } },
          { "updatedAt": { "$dateAfter": formattedDate } }
        ]
      };
      
      finalFilter = timeFilter;
    }
    
    // Merge user-provided custom filter conditions
    if (options.filter) {
      try {
        const customFilter = typeof options.filter === 'string' 
          ? JSON.parse(options.filter) 
          : options.filter;
        
        if (finalFilter) {
          // If we have a time filter, combine it with custom filter
          finalFilter = {
            "$and": [finalFilter, customFilter]
          };
        } else {
          // If no time filter, use custom filter only
          finalFilter = customFilter;
        }
      } catch (err) {
        console.error('Error parsing custom filter:', err.message);
      }
    }
    
    // Add filter condition to URL if we have any filters
    if (finalFilter) {
      url += `&filter=${encodeURIComponent(JSON.stringify(finalFilter))}`;
    }
    
    // Add additional parameters
    if (options.appends) {
      if (Array.isArray(options.appends)) {
        // If it's an array, handle multiple appends
        for (const append of options.appends) {
          url += `&appends[]=${append}`;
        }
      } else {
        // Single append in string format
        url += `&appends=${options.appends}`;
      }
    }
    
    // Add sorting condition to URL
    if (options.sort) {
      if (Array.isArray(options.sort)) {
        // If it's an array, handle multiple sorting conditions
        for (const sortItem of options.sort) {
          url += `&sort[]=${sortItem}`;
        }
      } else {
        // Single sorting condition in string format
        url += `&sort=${options.sort}`;
      }
    }
    
    if (!options.skipTimeFilter) {
      console.log(`Fetching content from ${endpoint} modified after ${formattedDate}`);
    } else {
      console.log(`Fetching ALL content from ${endpoint} (no time filter)`);
    }
    // Hide full URL, do not show token
    console.log(`API Endpoint: ${endpoint}`);
    
    // Add token to URL (but do not log it)
    url += `&token=${token}`;
    
    // Track API request
    trackApiRequest();
    
    const response = await api.get(url);
    const data = response.data.data;
    
    console.log(`Retrieved ${data.length} items from ${endpoint}`);
    return data;
  }, CONFIG.maxRetries, CONFIG.retryDelay);
}

// Helper function to get repository tree
async function getRepoTree(recursive = true) {
  if (repoTreeCache) {
    return repoTreeCache;
  }

  return withRetry(async () => {
    console.log('Fetching repository tree structure...');
    
    // Track GitHub request
    trackGithubRequest();
    
    // First get the latest commit on the branch
    const refData = await githubApi.get(`/repos/${owner}/${repo}/git/refs/heads/${branch}`);
    
    const commitSha = refData.data.object.sha;
    
    // Track GitHub request
    trackGithubRequest();
    
    // Then get the tree using this commit
    const treeData = await githubApi.get(`/repos/${owner}/${repo}/git/trees/${commitSha}`, {
      params: {
        recursive: recursive ? 1 : 0
      }
    });
    
    // Index the tree for faster lookups
    const treeIndex = {};
    for (const item of treeData.data.tree) {
      treeIndex[item.path] = item;
    }
    
    repoTreeCache = {
      tree: treeData.data.tree,
      index: treeIndex,
      sha: commitSha
    };
    
    console.log(`Successfully fetched repository tree with ${treeData.data.tree.length} items`);
    return repoTreeCache;
  }, CONFIG.maxRetries, CONFIG.retryDelay);
}

// Helper function to check if a file exists in the repo using the cached tree
async function fileExistsInTree(filePath) {
  const treeData = await getRepoTree();
  
  if (treeData.index[filePath]) {
    return { 
      exists: true, 
      sha: treeData.index[filePath].sha,
      url: treeData.index[filePath].url,
      size: treeData.index[filePath].size
    };
  }
  
  return { exists: false };
}

// Helper function to get a file's content from GitHub
async function getFileContent(filePath) {
  if (contentsBlobCache[filePath]) {
    return contentsBlobCache[filePath];
  }
  
  return withRetry(async () => {
    const fileInfo = await fileExistsInTree(filePath);
    
    if (!fileInfo.exists) {
      return null;
    }
    
    try {
      // Track GitHub request
      trackGithubRequest();
      
      const response = await githubApi.get(`/repos/${owner}/${repo}/git/blobs/${fileInfo.sha}`);
      
      const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
      contentsBlobCache[filePath] = content;
      return content;
    } catch (error) {
      console.error(`Error fetching content for ${filePath}:`, error.message);
      return null;
    }
  }, CONFIG.maxRetries, CONFIG.retryDelay);
}

// Helper function to create or update a file in GitHub
async function updateGitHubFile(filePath, content, existingFile = null) {
  return withRetry(async () => {
    // If the file exists, first compare the content to see if it's the same, and skip updating if it is
    if (existingFile && existingFile.exists) {
      const existingContent = await getFileContent(filePath);
      if (existingContent === content) {
        console.log(`Skipping ${filePath}: content unchanged`);
        return null;
      }
    }
  
    const message = existingFile ? `update: ${filePath}` : `create: ${filePath}`;
    const payload = {
      message,
      content: Buffer.from(content).toString('base64'),
      branch,
      author: GITHUB_COMMITTER,
      committer: GITHUB_COMMITTER
    };
    
    if (existingFile && existingFile.sha) {
      payload.sha = existingFile.sha;
    }
    
    try {
      // Track GitHub request
      trackGithubRequest();
      
      const response = await githubApi.put(`/repos/${owner}/${repo}/contents/${filePath}`, payload);
      console.log(`Successfully ${existingFile ? 'updated' : 'created'} ${filePath}`);
      
      // Record the path to be updated
      pendingUpdates.push(filePath);
      
      return response.data;
    } catch (error) {
      console.error(`Error ${existingFile ? 'updating' : 'creating'} ${filePath}:`, error.message);
      throw error;
    }
  }, CONFIG.maxRetries, CONFIG.retryDelay);
}

// Helper function to recursively merge objects
function deepMerge(target, source) {
  const result = { ...target };
  
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        // If property is an object, recursively merge
        if (result[key] && typeof result[key] === 'object' && !Array.isArray(result[key])) {
          result[key] = deepMerge(result[key], source[key]);
        } else {
          // If target doesn't have this property or it's not an object, assign it
          result[key] = source[key];
        }
      } else {
        // For arrays and primitives, just replace
        result[key] = source[key];
      }
    }
  }
  
  return result;
}

// Flush cache after processing
async function flushCache() {
  if (pendingUpdates.length > 0) {
    console.log(`Refreshing cache after ${pendingUpdates.length} updates...`);
    // Clear cache
    repoTreeCache = null;
    for (const path of pendingUpdates) {
      delete contentsBlobCache[path];
    }
    
    // Get tree structure again
    await getRepoTree();
    pendingUpdates = [];
  }
}

// Add retry mechanism wrapper function
async function withRetry(operation, maxRetries = 3, delay = 1000) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      console.error(`Attempt ${attempt}/${maxRetries} failed: ${error.message}`);
      
      if (attempt < maxRetries) {
        const waitTime = delay * Math.pow(2, attempt - 1); // 指数退避
        console.log(`Retrying after ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }
  
  throw lastError;
}

// Batch processing function
async function processBatch(items, processFunction, batchSize = 5) {
  const batches = [];
  for (let i = 0; i < items.length; i += batchSize) {
    batches.push(items.slice(i, i + batchSize));
  }
  
  let processedCount = 0;
  for (const batch of batches) {
    // Process each item in the batch in parallel
    await Promise.all(batch.map(async (item) => {
      await processFunction(item);
      processedCount++;
    }));
    
    console.log(`Processed ${processedCount}/${items.length} items`);
  }
  
  return processedCount;
}

// Process articles
async function syncRecentArticles() {
  console.log('Syncing articles...');
  
  const articles = await getRecentContent('articles:list', {
    appends: ['cover', 'tags', 'category', 'sub_tags'],
    sort: ['-updatedAt']
  });
  
  if (!articles.length) {
    console.log('No articles found to sync');
    return 0;
  }
  
  console.log(`Found ${articles.length} articles to sync`);
  
  // Make sure we have the repo tree
  await getRepoTree();
  
  // Use batch processing function to process articles
  const syncedCount = await processBatch(articles, async (article) => {
    try {
      if (!article.slug) {
        console.log(`Skipping article with missing slug: ${article.title || 'Untitled'}`);
        return;
      }
      
      // Prepare metadata for the article
      const metadata = {
        id: article.id,
        title: article.title,
        title_cn: article.title_cn,
        title_ja: article.title_ja,
        description: article.description,
        description_cn: article.description_cn,
        description_ja: article.description_ja,
        slug: article.slug,
        publishedAt: article.publishedAt,
        status: article.status,
        tags: article.tags || [],
        sub_tags: article.sub_tags || [],
        category: article.category || null,
        cover: article.cover || null,
        hideOnListPage: article.hideOnListPage || false,
        hideOnBlog: article.hideOnBlog || false,
        author: article.author || null,
        ai_generated: article.ai_generated || false,
        ai_generated_cn: article.ai_generated_cn || null,
        ai_generated_ja: article.ai_generated_ja || null,
        updatedAt: article.updatedAt
      };
      
      // Check if metadata file exists in GitHub
      const metadataPath = `content/articles/${article.slug}/metadata.json`;
      const metadataFileStatus = await fileExistsInTree(metadataPath);
      
      let finalMetadata = metadata;
      if (metadataFileStatus.exists) {
        // If file exists, merge properties
        const existingContent = await getFileContent(metadataPath);
        if (existingContent) {
          try {
            const existingMetadata = JSON.parse(existingContent);
            finalMetadata = deepMerge(existingMetadata, metadata);
          } catch (error) {
            console.error(`Error parsing existing metadata for ${article.slug}:`, error.message);
          }
        }
      }
      
      // Update metadata file
      await updateGitHubFile(
        metadataPath,
        JSON.stringify(finalMetadata, null, 2),
        metadataFileStatus.exists ? metadataFileStatus : null
      );
      
      // Process content files
      if (article.content) {
        const contentPath = `content/articles/${article.slug}/index.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists) {
          await updateGitHubFile(
            contentPath,
            article.content,
            null
          );
        } else { 
          // 如果文件存在，直接更新，因为API已经过滤了时间窗口
          await updateGitHubFile(
            contentPath,
            article.content,
            contentFileStatus
          );
        }
      }
      
      // Process Chinese content
      if (article.content_cn) {
        const contentPath = `content/articles/${article.slug}/index.cn.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists) {
          await updateGitHubFile(
            contentPath,
            article.content_cn,
            null
          );
        } else {
          await updateGitHubFile(
            contentPath,
            article.content_cn,
            contentFileStatus
          );
        }
      }
      
      // Process Japanese content
      if (article.content_ja) {
        const contentPath = `content/articles/${article.slug}/index.ja.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists) {
          await updateGitHubFile(
            contentPath,
            article.content_ja,
            null
          );
        } else {
          await updateGitHubFile(
            contentPath,
            article.content_ja,
            contentFileStatus
          );
        }
      }
      
      console.log(`Synced article: ${article.title} (${article.slug})`);
    } catch (error) {
      console.error(`Error syncing article ${article?.title || article?.id || 'unknown'}:`, error.message);
    }
  }, CONFIG.batchSize);
  
  // Flush cache after processing all articles
  await flushCache();
  return syncedCount;
}

// Process tutorials
async function syncRecentTutorials() {
  console.log('Syncing tutorials...');
  
  const tutorials = await getRecentContent('tutorialArticles:list', {
    appends: ['serials', 'keywords'],
    sort: ['-updatedAt']
  });
  
  if (!tutorials.length) {
    console.log('No tutorials found to sync');
    return 0;
  }
  
  console.log(`Found ${tutorials.length} tutorials to sync`);
  
  for (const tutorial of tutorials) {
    try {
      if (!tutorial.slug) {
        console.log(`Skipping tutorial with missing slug: ${tutorial.title || 'Untitled'}`);
        continue;
      }
      
      // Prepare metadata for the tutorial
      const metadata = {
        id: tutorial.id,
        title: tutorial.title,
        title_cn: tutorial.title_cn,
        title_ja: tutorial.title_ja,
        description: tutorial.description,
        description_cn: tutorial.description_cn,
        description_ja: tutorial.description_ja,
        slug: tutorial.slug,
        publishedAt: tutorial.publishedAt,
        status: tutorial.status,
        serials: tutorial.serials || null,
        serialsSort: tutorial.serialsSort || 0,
        keywords: tutorial.keywords || [],
        updatedAt: tutorial.updatedAt
      };
      
      // Check if metadata file exists in GitHub
      const metadataPath = `content/tutorials/${tutorial.slug}/metadata.json`;
      const metadataFileStatus = await fileExistsInTree(metadataPath);
      
      let finalMetadata = metadata;
      if (metadataFileStatus.exists) {
        // If file exists, merge properties
        const existingContent = await getFileContent(metadataPath);
        if (existingContent) {
          try {
            const existingMetadata = JSON.parse(existingContent);
            finalMetadata = deepMerge(existingMetadata, metadata);
          } catch (error) {
            console.error(`Error parsing existing metadata for ${tutorial.slug}:`, error.message);
          }
        }
      }
      
      // Update metadata file
      await updateGitHubFile(
        metadataPath,
        JSON.stringify(finalMetadata, null, 2),
        metadataFileStatus.exists ? metadataFileStatus : null
      );
      
      // Process content files
      if (tutorial.content) {
        const contentPath = `content/tutorials/${tutorial.slug}/index.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        await updateGitHubFile(
          contentPath,
          tutorial.content,
          contentFileStatus.exists ? contentFileStatus : null
        );
      }
      
      // Process Chinese content
      if (tutorial.content_cn) {
        const contentPath = `content/tutorials/${tutorial.slug}/index.cn.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        await updateGitHubFile(
          contentPath,
          tutorial.content_cn,
          contentFileStatus.exists ? contentFileStatus : null
        );
      }
      
      // Process Japanese content
      if (tutorial.content_ja) {
        const contentPath = `content/tutorials/${tutorial.slug}/index.ja.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        await updateGitHubFile(
          contentPath,
          tutorial.content_ja,
          contentFileStatus.exists ? contentFileStatus : null
        );
      }
      
      console.log(`Synced tutorial: ${tutorial.title} (${tutorial.slug})`);
    } catch (error) {
      console.error(`Error syncing tutorial ${tutorial?.title || tutorial?.id || 'unknown'}:`, error.message);
    }
  }
  
  // Flush cache after processing all tutorials
  await flushCache();
  return tutorials.length;
}

// Process releases
async function syncRecentReleases() {
  console.log('Syncing releases...');
  
  const releases = await getRecentContent('releases:list', {
    appends: ['tags'],
    sort: ['-updatedAt']
  });
  
  if (!releases.length) {
    console.log('No releases found to sync');
    return 0;
  }
  
  console.log(`Found ${releases.length} releases to sync`);
  
  for (const release of releases) {
    try {
      if (!release.slug) {
        console.log(`Skipping release with missing slug: ${release.title || 'Untitled'}`);
        continue;
      }
      
      // Prepare metadata for the release
      const metadata = {
        id: release.id,
        title: release.title,
        title_cn: release.title_cn,
        title_ja: release.title_ja,
        description: release.description,
        description_cn: release.description_cn,
        description_ja: release.description_ja,
        slug: release.slug,
        publishedAt: release.publishedAt,
        status: release.status,
        tags: release.tags || [],
        updatedAt: release.updatedAt
      };
      
      // Check if metadata file exists in GitHub
      const metadataPath = `content/releases/${release.slug}/metadata.json`;
      const metadataFileStatus = await fileExistsInTree(metadataPath);
      
      let finalMetadata = metadata;
      if (metadataFileStatus.exists) {
        // If file exists, merge properties
        const existingContent = await getFileContent(metadataPath);
        if (existingContent) {
          try {
            const existingMetadata = JSON.parse(existingContent);
            finalMetadata = deepMerge(existingMetadata, metadata);
          } catch (error) {
            console.error(`Error parsing existing metadata for ${release.slug}:`, error.message);
          }
        }
      }
      
      // Update metadata file
      await updateGitHubFile(
        metadataPath,
        JSON.stringify(finalMetadata, null, 2),
        metadataFileStatus.exists ? metadataFileStatus : null
      );
      
      // Process content files
      if (release.content) {
        const contentPath = `content/releases/${release.slug}/index.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        await updateGitHubFile(
          contentPath,
          release.content,
          contentFileStatus.exists ? contentFileStatus : null
        );
      }
      
      // Process Chinese content
      if (release.content_cn) {
        const contentPath = `content/releases/${release.slug}/index.cn.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        await updateGitHubFile(
          contentPath,
          release.content_cn,
          contentFileStatus.exists ? contentFileStatus : null
        );
      }
      
      // Process Japanese content
      if (release.content_ja) {
        const contentPath = `content/releases/${release.slug}/index.ja.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        await updateGitHubFile(
          contentPath,
          release.content_ja,
          contentFileStatus.exists ? contentFileStatus : null
        );
      }
      
      console.log(`Synced release: ${release.title} (${release.slug})`);
    } catch (error) {
      console.error(`Error syncing release ${release?.title || release?.id || 'unknown'}:`, error.message);
    }
  }
  
  // Flush cache after processing all releases
  await flushCache();
  return releases.length;
}

// Process pages
async function syncRecentPages() {
  console.log('Syncing pages...');
  
  const pages = await getRecentContent('pages:list', {
    sort: ['-updatedAt']
  });
  
  if (!pages.length) {
    console.log('No pages found to sync');
    return 0;
  }
  
  console.log(`Found ${pages.length} pages to sync`);
  
  for (const page of pages) {
    try {
      if (!page.slug) {
        console.log(`Skipping page with missing slug: ${page.title || 'Untitled'}`);
        continue;
      }
      
      // Prepare metadata for the page with all required properties
      const metadata = {
        id: page.id,
        title: page.title,
        title_cn: page.title_cn,
        title_ja: page.title_ja,
        description: page.description,
        description_cn: page.description_cn,
        description_ja: page.description_ja,
        keywords: page.keywords,
        keywords_cn: page.keywords_cn,
        keywords_ja: page.keywords_ja,
        slug: page.slug,
        createdAt: page.createdAt,
        updatedAt: page.updatedAt,
        createdById: page.createdById,
        updatedById: page.updatedById
      };
      
      // Check if metadata file exists in GitHub
      const metadataPath = `content/pages/${page.slug}/metadata.json`;
      const metadataFileStatus = await fileExistsInTree(metadataPath);
      
      let finalMetadata = metadata;
      if (metadataFileStatus.exists) {
        // If file exists, merge properties
        const existingContent = await getFileContent(metadataPath);
        if (existingContent) {
          try {
            const existingMetadata = JSON.parse(existingContent);
            finalMetadata = deepMerge(existingMetadata, metadata);
          } catch (error) {
            console.error(`Error parsing existing metadata for ${page.slug}:`, error.message);
          }
        }
      }
      
      // Update metadata file
      await updateGitHubFile(
        metadataPath,
        JSON.stringify(finalMetadata, null, 2),
        metadataFileStatus.exists ? metadataFileStatus : null
      );
      
      // Process content files
      if (page.content) {
        const contentPath = `content/pages/${page.slug}/index.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        await updateGitHubFile(
          contentPath,
          page.content,
          contentFileStatus.exists ? contentFileStatus : null
        );
      }
      
      // Process Chinese content
      if (page.content_cn) {
        const contentPath = `content/pages/${page.slug}/index.cn.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        await updateGitHubFile(
          contentPath,
          page.content_cn,
          contentFileStatus.exists ? contentFileStatus : null
        );
      }
      
      // Process Japanese content
      if (page.content_ja) {
        const contentPath = `content/pages/${page.slug}/index.ja.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        await updateGitHubFile(
          contentPath,
          page.content_ja,
          contentFileStatus.exists ? contentFileStatus : null
        );
      }
      
      console.log(`Synced page: ${page.title} (${page.slug})`);
    } catch (error) {
      console.error(`Error syncing page ${page?.title || page?.id || 'unknown'}:`, error.message);
    }
  }
  
  // Flush cache after processing all pages
  await flushCache();
  return pages.length;
}

// Process article tags
async function syncRecentArticleTags() {
  console.log('Syncing article tags...');
  
  const tags = await getRecentContent('articleTags:list', {
    sort: ['sort']
  });
  
  if (!tags.length) {
    console.log('No article tags found to sync');
    return 0;
  }
  
  console.log(`Found ${tags.length} article tags to sync`);
  
  // Process all tags to a single JSON file
  const allTagsPath = 'content/tags/article-tags.json';
  
  // Get existing tags file (if it exists)
  const tagsFileStatus = await fileExistsInTree(allTagsPath);
  let existingTags = [];
  
  if (tagsFileStatus.exists) {
    const existingContent = await getFileContent(allTagsPath);
    if (existingContent) {
      try {
        existingTags = JSON.parse(existingContent);
      } catch (error) {
        console.error(`Error parsing existing tags file: ${error.message}`);
      }
    }
  }
  
  // Merge new and old tags, replace old with new (based on id)
  const mergedTags = [...existingTags];
  let updated = false;
  
  for (const tag of tags) {
    const existingIndex = mergedTags.findIndex(t => t.id === tag.id);
    if (existingIndex >= 0) {
      mergedTags[existingIndex] = tag;
      updated = true;
    } else {
      mergedTags.push(tag);
      updated = true;
    }
  }
  
  // Only save if there are updates
  if (updated) {
    await updateGitHubFile(
      allTagsPath,
      JSON.stringify(mergedTags, null, 2),
      tagsFileStatus.exists ? tagsFileStatus : null
    );
    console.log(`Updated all article tags file with ${tags.length} changes`);
  } else {
    console.log('No changes to article tags');
  }
  
  // Process individual tag files
  for (const tag of tags) {
    if (!tag.slug) continue;
    
    try {
      const tagDir = `content/tags/${tag.slug}`;
      const tagFilePath = `${tagDir}/tag.json`;
      
      const tagFileStatus = await fileExistsInTree(tagFilePath);
      
      await updateGitHubFile(
        tagFilePath,
        JSON.stringify(tag, null, 2),
        tagFileStatus.exists ? tagFileStatus : null
      );
      
      console.log(`Synced article tag: ${tag.title || tag.slug}`);
    } catch (error) {
      console.error(`Error syncing tag ${tag?.title || tag?.slug || tag?.id}: ${error.message}`);
    }
  }
  
  // Flush cache after processing all tags
  await flushCache();
  return tags.length;
}

// Process article categories
async function syncRecentArticleCategories() {
  console.log('Syncing article categories...');
  
  const categories = await getRecentContent('articleCategories:list', {
    sort: ['sort']
  });
  
  if (!categories.length) {
    console.log('No article categories found to sync');
    return 0;
  }
  
  console.log(`Found ${categories.length} article categories to sync`);
  
  // Process all categories to a single JSON file
  const allCategoriesPath = 'content/categories/article-categories.json';
  
  // Get existing categories file (if it exists)
  const categoriesFileStatus = await fileExistsInTree(allCategoriesPath);
  let existingCategories = [];
  
  if (categoriesFileStatus.exists) {
    const existingContent = await getFileContent(allCategoriesPath);
    if (existingContent) {
      try {
        existingCategories = JSON.parse(existingContent);
      } catch (error) {
        console.error(`Error parsing existing categories file: ${error.message}`);
      }
    }
  }
  
  // Merge new and old categories, replace old with new (based on id)
  const mergedCategories = [...existingCategories];
  let updated = false;
  
  for (const category of categories) {
    const existingIndex = mergedCategories.findIndex(c => c.id === category.id);
    if (existingIndex >= 0) {
      mergedCategories[existingIndex] = category;
      updated = true;
    } else {
      mergedCategories.push(category);
      updated = true;
    }
  }
  
  // Only save if there are updates
  if (updated) {
    await updateGitHubFile(
      allCategoriesPath,
      JSON.stringify(mergedCategories, null, 2),
      categoriesFileStatus.exists ? categoriesFileStatus : null
    );
    console.log(`Updated all article categories file with ${categories.length} changes`);
  } else {
    console.log('No changes to article categories');
  }
  
  // Process individual category files
  for (const category of categories) {
    if (!category.slug) continue;
    
    try {
      const categoryDir = `content/categories/${category.slug}`;
      const categoryFilePath = `${categoryDir}/category.json`;
      
      const categoryFileStatus = await fileExistsInTree(categoryFilePath);
      
      await updateGitHubFile(
        categoryFilePath,
        JSON.stringify(category, null, 2),
        categoryFileStatus.exists ? categoryFileStatus : null
      );
      
      console.log(`Synced article category: ${category.title || category.slug}`);
    } catch (error) {
      console.error(`Error syncing category ${category?.title || category?.slug || category?.id}: ${error.message}`);
    }
  }
  
  // Flush cache after processing all categories
  await flushCache();
  return categories.length;
}

// Process release tags
async function syncRecentReleaseTags() {
  console.log('Syncing release tags...');
  
  const tags = await getRecentContent('releaseTags:list', {
    sort: ['sort']
  });
  
  if (!tags.length) {
    console.log('No release tags found to sync');
    return 0;
  }
  
  console.log(`Found ${tags.length} release tags to sync`);
  
  // Process all tags to a single JSON file
  const allTagsPath = 'content/tags/release-tags.json';
  
  // Get existing tags file (if it exists)
  const tagsFileStatus = await fileExistsInTree(allTagsPath);
  let existingTags = [];
  
  if (tagsFileStatus.exists) {
    const existingContent = await getFileContent(allTagsPath);
    if (existingContent) {
      try {
        existingTags = JSON.parse(existingContent);
      } catch (error) {
        console.error(`Error parsing existing release tags file: ${error.message}`);
      }
    }
  }
  
  // Merge new and old tags, replace old with new (based on id)
  const mergedTags = [...existingTags];
  let updated = false;
  
  for (const tag of tags) {
    const existingIndex = mergedTags.findIndex(t => t.id === tag.id);
    if (existingIndex >= 0) {
      mergedTags[existingIndex] = tag;
      updated = true;
    } else {
      mergedTags.push(tag);
      updated = true;
    }
  }
  
  // Only save if there are updates
  if (updated) {
    await updateGitHubFile(
      allTagsPath,
      JSON.stringify(mergedTags, null, 2),
      tagsFileStatus.exists ? tagsFileStatus : null
    );
    console.log(`Updated all release tags file with ${tags.length} changes`);
  } else {
    console.log('No changes to release tags');
  }
  
  // Process individual tag files
  for (const tag of tags) {
    if (!tag.slug) continue;
    
    try {
      const tagDir = `content/tags/release-tags/${tag.slug}`;
      const tagFilePath = `${tagDir}/tag.json`;
      
      const tagFileStatus = await fileExistsInTree(tagFilePath);
      
      await updateGitHubFile(
        tagFilePath,
        JSON.stringify(tag, null, 2),
        tagFileStatus.exists ? tagFileStatus : null
      );
      
      console.log(`Synced release tag: ${tag.title || tag.slug}`);
    } catch (error) {
      console.error(`Error syncing release tag ${tag?.title || tag?.slug || tag?.id}: ${error.message}`);
    }
  }
  
  // Flush cache after processing all tags
  await flushCache();
  return tags.length;
}

// Process help center content
async function syncRecentHelpCenter() {
  console.log('Syncing help center items...');
  
  const helpCenterItems = await getRecentContent('help_center_tree:list', {
    sort: ['item_sort'],
    filter: {
      status: 'published'
    }
  });
  
  if (!helpCenterItems.length) {
    console.log('No help center items found to sync');
    return 0;
  }
  
  console.log(`Found ${helpCenterItems.length} help center items to sync`);
  
  // Save to a single JSON file
  const helpCenterPath = 'content/help-center/help-center-tree.json';
  
  // Get existing help center file (if it exists)
  const helpCenterFileStatus = await fileExistsInTree(helpCenterPath);
  let existingData = [];
  
  if (helpCenterFileStatus.exists) {
    const existingContent = await getFileContent(helpCenterPath);
    if (existingContent) {
      try {
        existingData = JSON.parse(existingContent);
      } catch (error) {
        console.error(`Error parsing existing help center file: ${error.message}`);
      }
    }
  }
  
  // Merge help center data
  // For tree structure data, use full replacement strategy
  await updateGitHubFile(
    helpCenterPath,
    JSON.stringify(helpCenterItems, null, 2),
    helpCenterFileStatus.exists ? helpCenterFileStatus : null
  );
  
  console.log(`Updated help center data with ${helpCenterItems.length} items`);
  
  // Flush cache after processing
  await flushCache();
  return helpCenterItems.length;
}

// Process plugin data
async function syncRecentPlugins() {
  console.log('Syncing plugins...');
  
  const plugins = await getRecentContent('plugins_2025:list', {
    appends: ['category'],
    sort: ['sort']
  });
  
  if (!plugins.length) {
    console.log('No plugins found to sync');
    return 0;
  }
  
  console.log(`Found ${plugins.length} plugins to sync`);
  
  // Save to a single JSON file
  const pluginsPath = 'content/plugins/plugins.json';
  
  // Get existing plugins file (if it exists)
  const pluginsFileStatus = await fileExistsInTree(pluginsPath);
  let existingPlugins = [];
  
  if (pluginsFileStatus.exists) {
    const existingContent = await getFileContent(pluginsPath);
    if (existingContent) {
      try {
        existingPlugins = JSON.parse(existingContent);
      } catch (error) {
        console.error(`Error parsing existing plugins file: ${error.message}`);
      }
    }
  }
  
  // Merge new and old plugins data, replace old with new (based on id)
  const mergedPlugins = [...existingPlugins];
  let updated = false;
  
  for (const plugin of plugins) {
    const existingIndex = mergedPlugins.findIndex(p => p.id === plugin.id);
    if (existingIndex >= 0) {
      mergedPlugins[existingIndex] = plugin;
      updated = true;
    } else {
      mergedPlugins.push(plugin);
      updated = true;
    }
  }
  
  // Only save if there are updates
  if (updated) {
    await updateGitHubFile(
      pluginsPath,
      JSON.stringify(mergedPlugins, null, 2),
      pluginsFileStatus.exists ? pluginsFileStatus : null
    );
    console.log(`Updated plugins file with ${plugins.length} changes`);
  } else {
    console.log('No changes to plugins');
  }
  
  // Flush cache after processing
  await flushCache();
  return plugins.length;
}

// Process task data
async function syncRecentTasks() {
  console.log('Syncing tasks...');
  
  // For tasks, we need to get ALL categories because tasks might be updated
  // even if the category itself wasn't modified
  const taskCategories = await getRecentContent('taskCategories:list', {
    appends: ['tasks', 'tasks.status'],
    sort: ['sort'],
    skipTimeFilter: true  // Get all task categories regardless of update time
  });
  
  if (!taskCategories.length) {
    console.log('No task categories found to sync');
    return 0;
  }
  
  console.log(`Found ${taskCategories.length} task categories to sync`);
  
  // Save to a single JSON file
  const tasksPath = 'content/tasks/task-categories.json';
  
  // Get existing task categories file (if it exists)
  const tasksFileStatus = await fileExistsInTree(tasksPath);
  let existingTaskCategories = [];
  
  if (tasksFileStatus.exists) {
    const existingContent = await getFileContent(tasksPath);
    if (existingContent) {
      try {
        existingTaskCategories = JSON.parse(existingContent);
      } catch (error) {
        console.error(`Error parsing existing task categories file: ${error.message}`);
      }
    }
  }
  
  // Merge new and old task categories data, replace old with new (based on id)
  const mergedTaskCategories = [...existingTaskCategories];
  let updated = false;
  
  for (const category of taskCategories) {
    const existingIndex = mergedTaskCategories.findIndex(c => c.id === category.id);
    if (existingIndex >= 0) {
      mergedTaskCategories[existingIndex] = category;
      updated = true;
    } else {
      mergedTaskCategories.push(category);
      updated = true;
    }
  }
  
  // Only save if there are updates
  if (updated) {
    await updateGitHubFile(
      tasksPath,
      JSON.stringify(mergedTaskCategories, null, 2),
      tasksFileStatus.exists ? tasksFileStatus : null
    );
    console.log(`Updated task categories file with ${taskCategories.length} changes`);
  } else {
    console.log('No changes to task categories');
  }
  
  // Flush cache after processing
  await flushCache();
  return taskCategories.length;
}

// Main function
async function main() {
  try {
    // Parse command line arguments - removing process.argv
    // Instead, we'll hardcode for the CodeMirror environment
    // Replace with:
    const args = [];
    const contentTypes = ['all']; // Default to syncing all content types
    
    // Process command line arguments - simplified for CodeMirror
    let hours = defaultHours; // Default hours from the constant
    // Update timeWindow with hours value if needed
    timeWindow = hours * 60 * 60 * 1000;
    
    console.log('Starting content synchronization...');
    console.log(`Synchronizing content created or updated in the last ${hours} hours`);
    if (CONFIG.debugMode) console.log('Debug mode: enabled');
    console.log(`Batch size: ${CONFIG.batchSize}`);
    console.log(`Max retries: ${CONFIG.maxRetries}`);
    
    // Add performance statistics
    const startTime = Date.now();
    let totalSyncedItems = 0;
    
    // Get repository tree structure before starting
    await getRepoTree();
    
    // Run all sync operations, collect the number of synced items
    if (contentTypes.includes('all') || contentTypes.includes('articles')) {
      const articleCount = await syncRecentArticles();
      totalSyncedItems += articleCount || 0;
    }
    
    if (contentTypes.includes('all') || contentTypes.includes('tutorials')) {
      const tutorialCount = await syncRecentTutorials();
      totalSyncedItems += tutorialCount || 0;
    }
    
    if (contentTypes.includes('all') || contentTypes.includes('releases')) {
      const releaseCount = await syncRecentReleases();
      totalSyncedItems += releaseCount || 0;
    }
    
    if (contentTypes.includes('all') || contentTypes.includes('pages')) {
      const pageCount = await syncRecentPages();
      totalSyncedItems += pageCount || 0;
    }
    
    if (contentTypes.includes('all') || contentTypes.includes('tags')) {
      const tagCount = await syncRecentArticleTags();
      totalSyncedItems += tagCount || 0;
    }
    
    if (contentTypes.includes('all') || contentTypes.includes('categories')) {
      const categoryCount = await syncRecentArticleCategories();
      totalSyncedItems += categoryCount || 0;
    }
    
    if (contentTypes.includes('all') || contentTypes.includes('releasetags')) {
      const releaseTagCount = await syncRecentReleaseTags();
      totalSyncedItems += releaseTagCount || 0;
    }
    
    if (contentTypes.includes('all') || contentTypes.includes('helpcenter')) {
      const helpCenterCount = await syncRecentHelpCenter();
      totalSyncedItems += helpCenterCount || 0;
    }
    
    if (contentTypes.includes('all') || contentTypes.includes('plugins')) {
      const pluginCount = await syncRecentPlugins();
      totalSyncedItems += pluginCount || 0;
    }
    
    if (contentTypes.includes('all') || contentTypes.includes('tasks')) {
      const taskCount = await syncRecentTasks();
      totalSyncedItems += taskCount || 0;
    }
    
    const endTime = Date.now();
    const durationSeconds = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log('Content synchronization complete!');
    console.log(`Synced ${totalSyncedItems} items in ${durationSeconds} seconds`);
    console.log(`API requests: ${apiRequestCount}, GitHub requests: ${githubRequestCount}`);
  } catch (error) {
    console.error('Fatal error during content synchronization:', error.message);
    if (error.stack && CONFIG.debugMode) {
      console.error(error.stack);
    }
  }
}

// Run the script
main();