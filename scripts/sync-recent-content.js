import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { Octokit } from '@octokit/rest';

// Configuration
const baseURL = 'your-cms-url.com/api/';
const token = 'your_api_token_here';
const timeWindow = 15 * 60 * 60 * 1000; // 15 hours in milliseconds

// GitHub configuration
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || 'your-github-token-here'
});
const owner = process.env.GITHUB_OWNER || 'your-github-username';
const repo = process.env.GITHUB_REPO || 'your-github-repo';
const branch = process.env.GITHUB_BRANCH || 'main';

// API client with timeout
const api = axios.create({
  timeout: 30000, // 30 seconds timeout
});

// Cache for GitHub tree data
let repoTreeCache = null;
let contentsBlobCache = {};

// Helper function to get content created or updated in the last 15 hours
async function getRecentContent(endpoint, options = {}) {
  try {
    // Calculate the time 15 hours ago
    const timeAgo = new Date(Date.now() - timeWindow);
    
    // Format to "YYYY-MM-DD HH:MM:SS" format
    const formattedDate = timeAgo.toISOString()
      .replace('T', ' ')
      .replace(/\.\d+Z$/, '');
    
    let url = `${baseURL}${endpoint}?pageSize=100&token=${token}`;
    
    // Create an OR condition for createdAt and updatedAt
    const timeFilter = {
      "$or": [
        { "createdAt": { "$dateAfter": formattedDate } },
        { "updatedAt": { "$dateAfter": formattedDate } }
      ]
    };
    
    // Merge user-provided custom filter
    let finalFilter = timeFilter;
    if (options.filter) {
      try {
        const customFilter = typeof options.filter === 'string' 
          ? JSON.parse(options.filter) 
          : options.filter;
          
        finalFilter = {
          "$and": [timeFilter, customFilter]
        };
      } catch (err) {
        console.error('Error parsing custom filter:', err.message);
      }
    }
    
    // Append filter to URL
    url += `&filter=${encodeURIComponent(JSON.stringify(finalFilter))}`;
    
    // Append additional parameters
    if (options.appends) {
      if (Array.isArray(options.appends)) {
        // If an array, process multiple appends
        for (const append of options.appends) {
          url += `&appends[]=${append}`;
        }
      } else {
        // Single append in string form
        url += `&appends=${options.appends}`;
      }
    }
    
    // Append sorting parameters
    if (options.sort) {
      if (Array.isArray(options.sort)) {
        // If an array, process multiple sort conditions
        for (const sortItem of options.sort) {
          url += `&sort[]=${sortItem}`;
        }
      } else {
        // Single sort condition in string form
        url += `&sort=${options.sort}`;
      }
    }
    
    console.log(`Fetching content from ${endpoint} modified after ${formattedDate}`);
    console.log(`API URL: ${url}`);
    
    const response = await api.get(url);
    const data = response.data.data;
    
    console.log(`Retrieved ${data.length} items from ${endpoint}`);
    return data;
  } catch (error) {
    console.error(`Error fetching content from ${endpoint}:`, error.message);
    if (error.response) {
      console.error(`Status code: ${error.response.status}`);
      console.error(`Response data:`, error.response.data);
    }
    return [];
  }
}

// Helper function to get repository tree
async function getRepoTree(recursive = true) {
  if (repoTreeCache) {
    return repoTreeCache;
  }

  try {
    console.log('Fetching repository tree structure...');
    
    // First get the latest commit on the branch
    const { data: refData } = await octokit.git.getRef({
      owner,
      repo,
      ref: `heads/${branch}`
    });
    
    const commitSha = refData.object.sha;
    
    // Then get the tree using this commit
    const { data: treeData } = await octokit.git.getTree({
      owner,
      repo,
      tree_sha: commitSha,
      recursive: recursive ? '1' : '0'
    });
    
    // Index the tree for faster lookups
    const treeIndex = {};
    for (const item of treeData.tree) {
      treeIndex[item.path] = item;
    }
    
    repoTreeCache = {
      tree: treeData.tree,
      index: treeIndex,
      sha: commitSha
    };
    
    console.log(`Successfully fetched repository tree with ${treeData.tree.length} items`);
    return repoTreeCache;
  } catch (error) {
    console.error('Error fetching repository tree:', error.message);
    throw error;
  }
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
  
  const fileInfo = await fileExistsInTree(filePath);
  
  if (!fileInfo.exists) {
    return null;
  }
  
  try {
    const { data } = await octokit.git.getBlob({
      owner,
      repo,
      file_sha: fileInfo.sha
    });
    
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    contentsBlobCache[filePath] = content;
    return content;
  } catch (error) {
    console.error(`Error fetching content for ${filePath}:`, error.message);
    return null;
  }
}

// Helper function to create or update a file in GitHub
async function updateGitHubFile(filePath, content, existingFile = null) {
  const message = existingFile ? `Update ${filePath}` : `Create ${filePath}`;
  const params = {
    owner,
    repo,
    path: filePath,
    message,
    content: Buffer.from(content).toString('base64'),
    branch
  };
  
  if (existingFile && existingFile.sha) {
    params.sha = existingFile.sha;
  }
  
  try {
    const response = await octokit.repos.createOrUpdateFileContents(params);
    console.log(`Successfully ${existingFile ? 'updated' : 'created'} ${filePath}`);
    
    // Invalidate caches
    repoTreeCache = null;
    delete contentsBlobCache[filePath];
    
    return response.data;
  } catch (error) {
    console.error(`Error ${existingFile ? 'updating' : 'creating'} ${filePath}:`, error.message);
    throw error;
  }
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

// Process articles
async function syncRecentArticles() {
  console.log('Syncing articles...');
  
  const articles = await getRecentContent('articles:list', {
    appends: ['cover', 'tags', 'category', 'sub_tags'],
    sort: ['-updatedAt']
  });
  
  if (!articles.length) {
    console.log('No articles found to sync');
    return;
  }
  
  console.log(`Found ${articles.length} articles to sync`);
  
  // Make sure we have the repo tree
  await getRepoTree();
  
  for (const article of articles) {
    try {
      if (!article.slug) {
        console.log(`Skipping article with missing slug: ${article.title || 'Untitled'}`);
        continue;
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
        if (!contentFileStatus.exists || article.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            article.content,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      // Process Chinese content
      if (article.content_cn) {
        const contentPath = `content/articles/${article.slug}/index.cn.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists || article.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            article.content_cn,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      // Process Japanese content
      if (article.content_ja) {
        const contentPath = `content/articles/${article.slug}/index.ja.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists || article.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            article.content_ja,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      console.log(`Synced article: ${article.title} (${article.slug})`);
    } catch (error) {
      console.error(`Error syncing article ${article?.title || article?.id || 'unknown'}:`, error.message);
    }
  }
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
    return;
  }
  
  console.log(`Found ${tutorials.length} tutorials to sync`);
  
  // Make sure we have the repo tree
  await getRepoTree();
  
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
        if (!contentFileStatus.exists || tutorial.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            tutorial.content,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      // Process Chinese content
      if (tutorial.content_cn) {
        const contentPath = `content/tutorials/${tutorial.slug}/index.cn.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists || tutorial.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            tutorial.content_cn,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      // Process Japanese content
      if (tutorial.content_ja) {
        const contentPath = `content/tutorials/${tutorial.slug}/index.ja.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists || tutorial.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            tutorial.content_ja,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      console.log(`Synced tutorial: ${tutorial.title} (${tutorial.slug})`);
    } catch (error) {
      console.error(`Error syncing tutorial ${tutorial?.title || tutorial?.id || 'unknown'}:`, error.message);
    }
  }
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
    return;
  }
  
  console.log(`Found ${releases.length} releases to sync`);
  
  // Make sure we have the repo tree
  await getRepoTree();
  
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
        if (!contentFileStatus.exists || release.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            release.content,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      // Process Chinese content
      if (release.content_cn) {
        const contentPath = `content/releases/${release.slug}/index.cn.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists || release.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            release.content_cn,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      // Process Japanese content
      if (release.content_ja) {
        const contentPath = `content/releases/${release.slug}/index.ja.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists || release.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            release.content_ja,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      console.log(`Synced release: ${release.title} (${release.slug})`);
    } catch (error) {
      console.error(`Error syncing release ${release?.title || release?.id || 'unknown'}:`, error.message);
    }
  }
}

// Process pages
async function syncRecentPages() {
  console.log('Syncing pages...');
  
  const pages = await getRecentContent('pages:list', {
    sort: ['-updatedAt']
  });
  
  if (!pages.length) {
    console.log('No pages found to sync');
    return;
  }
  
  console.log(`Found ${pages.length} pages to sync`);
  
  // Make sure we have the repo tree
  await getRepoTree();
  
  for (const page of pages) {
    try {
      if (!page.slug) {
        console.log(`Skipping page with missing slug: ${page.title || 'Untitled'}`);
        continue;
      }
      
      // Prepare metadata for the page
      const metadata = {
        id: page.id,
        title: page.title,
        title_cn: page.title_cn,
        title_ja: page.title_ja,
        slug: page.slug,
        updatedAt: page.updatedAt
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
        if (!contentFileStatus.exists || page.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            page.content,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      // Process Chinese content
      if (page.content_cn) {
        const contentPath = `content/pages/${page.slug}/index.cn.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists || page.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            page.content_cn,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      // Process Japanese content
      if (page.content_ja) {
        const contentPath = `content/pages/${page.slug}/index.ja.md`;
        const contentFileStatus = await fileExistsInTree(contentPath);
        if (!contentFileStatus.exists || page.updatedAt > new Date(Date.now() - timeWindow).toISOString()) {
          await updateGitHubFile(
            contentPath,
            page.content_ja,
            contentFileStatus.exists ? contentFileStatus : null
          );
        }
      }
      
      console.log(`Synced page: ${page.title} (${page.slug})`);
    } catch (error) {
      console.error(`Error syncing page ${page?.title || page?.id || 'unknown'}:`, error.message);
    }
  }
}

// Main function
async function main() {
  try {
    console.log('Starting content synchronization...');
    console.log(`Synchronizing content created or updated in the last ${timeWindow / (60 * 60 * 1000)} hours`);
    
    // Run all sync operations
    await syncRecentArticles();
    await syncRecentTutorials();
    await syncRecentReleases();
    await syncRecentPages();
    
    console.log('Content synchronization complete!');
  } catch (error) {
    console.error('Fatal error during content synchronization:', error.message);
    process.exit(1);
  }
}

// Run the script
main();