import fs from 'fs';
import path from 'path';
import axios from 'axios';

// Set base URL and token directly or from environment variables if available
const baseURL = 'https://your-cms-url.com/api/';
const token = 'your_api_token_here';

// Create an axios instance with a timeout setting
const api = axios.create({
  timeout: 30000, // 30-second timeout
});

// Ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Save content to file
function saveContentToFile(content, filePath) {
  ensureDirectoryExists(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

// Safely get API data
async function safeGetApiData(url, errorMessage) {
  try {
    const response = await api.get(url);
    return response.data.data;
  } catch (error) {
    console.error(`${errorMessage}: ${error.message}`);
    if (error.response) {
      console.error(`Status code: ${error.response.status}`);
      console.error(`Response data:`, error.response.data);
    }
    return null;
  }
}

// Download and save articles
async function downloadArticles() {
  console.log('Downloading articles...');
  
  // Retrieve all articles, including associated data - adjust based on index.ts
  const data = await safeGetApiData(
    `${baseURL}articles:list?pageSize=5000&appends=cover,tags,category,sub_tags&token=${token}`,
    'Error downloading articles'
  );
  
  if (!data) {
    console.log('Skipping articles due to API error');
    return;
  }
  
  const contentDir = path.join(process.cwd(), 'content', 'articles');
  ensureDirectoryExists(contentDir);
  
  let successCount = 0;
  for (const article of data) {
    try {
      // Skip articles without a slug
      if (!article.slug) {
        console.log(`Skipping article with missing slug: ${article.title || 'Untitled'}`);
        continue;
      }
      
      const articleDir = path.join(contentDir, article.slug);
      ensureDirectoryExists(articleDir);
      
      // Save metadata, ensuring all required associated data are included
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
      
      saveContentToFile(
        JSON.stringify(metadata, null, 2),
        path.join(articleDir, 'metadata.json')
      );
      
      // Save English content
      if (article.content) {
        saveContentToFile(article.content, path.join(articleDir, 'index.md'));
      }
      
      // Save Chinese content
      if (article.content_cn) {
        saveContentToFile(article.content_cn, path.join(articleDir, 'index.cn.md'));
      }
      
      // Save Japanese content
      if (article.content_ja) {
        saveContentToFile(article.content_ja, path.join(articleDir, 'index.ja.md'));
      }
      
      successCount++;
      console.log(`Downloaded article: ${article.title} (${article.slug})`);
    } catch (error) {
      console.error(`Error processing article ${article?.title || article?.id || 'unknown'}: ${error.message}`);
    }
  }
  
  console.log(`Successfully downloaded ${successCount} out of ${data.length} articles`);
}

// Download and save tutorials
async function downloadTutorials() {
  console.log('Downloading tutorials...');
  
  const data = await safeGetApiData(
    `${baseURL}tutorialArticles:list?pageSize=5000&appends=serials,keywords&token=${token}`,
    'Error downloading tutorials'
  );
  
  if (!data) {
    console.log('Skipping tutorials due to API error');
    return;
  }
  
  const contentDir = path.join(process.cwd(), 'content', 'tutorials');
  ensureDirectoryExists(contentDir);
  
  let successCount = 0;
  for (const tutorial of data) {
    try {
      // Skip tutorials without a slug
      if (!tutorial.slug) {
        console.log(`Skipping tutorial with missing slug: ${tutorial.title || 'Untitled'}`);
        continue;
      }
      
      const tutorialDir = path.join(contentDir, tutorial.slug);
      ensureDirectoryExists(tutorialDir);
      
      // Save metadata, ensuring all required associated data are included
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
      
      saveContentToFile(
        JSON.stringify(metadata, null, 2),
        path.join(tutorialDir, 'metadata.json')
      );
      
      // Save English content
      if (tutorial.content) {
        saveContentToFile(tutorial.content, path.join(tutorialDir, 'index.md'));
      }
      
      // Save Chinese content
      if (tutorial.content_cn) {
        saveContentToFile(tutorial.content_cn, path.join(tutorialDir, 'index.cn.md'));
      }
      
      // Save Japanese content
      if (tutorial.content_ja) {
        saveContentToFile(tutorial.content_ja, path.join(tutorialDir, 'index.ja.md'));
      }
      
      successCount++;
      console.log(`Downloaded tutorial: ${tutorial.title} (${tutorial.slug})`);
    } catch (error) {
      console.error(`Error processing tutorial ${tutorial?.title || tutorial?.id || 'unknown'}: ${error.message}`);
    }
  }
  
  console.log(`Successfully downloaded ${successCount} out of ${data.length} tutorials`);
}

// Download and save releases
async function downloadReleases() {
  console.log('Downloading releases...');
  
  const data = await safeGetApiData(
    `${baseURL}releases:list?pageSize=5000&appends=tags&token=${token}`,
    'Error downloading releases'
  );
  
  if (!data) {
    console.log('Skipping releases due to API error');
    return;
  }
  
  const contentDir = path.join(process.cwd(), 'content', 'releases');
  ensureDirectoryExists(contentDir);
  
  let successCount = 0;
  for (const release of data) {
    try {
      // Skip releases without a slug
      if (!release.slug) {
        console.log(`Skipping release with missing slug: ${release.title || 'Untitled'}`);
        continue;
      }
      
      const releaseDir = path.join(contentDir, release.slug);
      ensureDirectoryExists(releaseDir);
      
      // Save metadata, ensuring all required associated data are included
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
      
      saveContentToFile(
        JSON.stringify(metadata, null, 2),
        path.join(releaseDir, 'metadata.json')
      );
      
      // Save English content
      if (release.content) {
        saveContentToFile(release.content, path.join(releaseDir, 'index.md'));
      }
      
      // Save Chinese content
      if (release.content_cn) {
        saveContentToFile(release.content_cn, path.join(releaseDir, 'index.cn.md'));
      }
      
      // Save Japanese content
      if (release.content_ja) {
        saveContentToFile(release.content_ja, path.join(releaseDir, 'index.ja.md'));
      }
      
      successCount++;
      console.log(`Downloaded release: ${release.title} (${release.slug})`);
    } catch (error) {
      console.error(`Error processing release ${release?.title || release?.id || 'unknown'}: ${error.message}`);
    }
  }
  
  console.log(`Successfully downloaded ${successCount} out of ${data.length} releases`);
}

// Download and save pages
async function downloadPages() {
  console.log('Downloading pages...');
  
  const data = await safeGetApiData(
    `${baseURL}pages:list?pageSize=5000&token=${token}`,
    'Error downloading pages'
  );
  
  if (!data) {
    console.log('Skipping pages due to API error');
    return;
  }
  
  const contentDir = path.join(process.cwd(), 'content', 'pages');
  ensureDirectoryExists(contentDir);
  
  let successCount = 0;
  for (const page of data) {
    try {
      // Skip pages without a slug
      if (!page.slug) {
        console.log(`Skipping page with missing slug: ${page.title || 'Untitled'}`);
        continue;
      }
      
      const pageDir = path.join(contentDir, page.slug);
      ensureDirectoryExists(pageDir);
      
      // Save metadata
      const metadata = {
        id: page.id,
        title: page.title,
        title_cn: page.title_cn,
        title_ja: page.title_ja,
        slug: page.slug,
        updatedAt: page.updatedAt
      };
      
      saveContentToFile(
        JSON.stringify(metadata, null, 2),
        path.join(pageDir, 'metadata.json')
      );
      
      // Save English content
      if (page.content) {
        saveContentToFile(page.content, path.join(pageDir, 'index.md'));
      }
      
      // Save Chinese content
      if (page.content_cn) {
        saveContentToFile(page.content_cn, path.join(pageDir, 'index.cn.md'));
      }
      
      // Save Japanese content
      if (page.content_ja) {
        saveContentToFile(page.content_ja, path.join(pageDir, 'index.ja.md'));
      }
      
      successCount++;
      console.log(`Downloaded page: ${page.title} (${page.slug})`);
    } catch (error) {
      console.error(`Error processing page ${page?.title || page?.id || 'unknown'}: ${error.message}`);
    }
  }
  
  console.log(`Successfully downloaded ${successCount} out of ${data.length} pages`);
}

// Download article categories data
async function downloadCategories() {
  console.log('Downloading article categories...');
  
  const data = await safeGetApiData(
    `${baseURL}articleCategories:list?pageSize=200&sort=sort&token=${token}`,
    'Error downloading article categories'
  );
  
  if (!data) {
    console.log('Skipping article categories due to API error');
    return;
  }
  
  const contentDir = path.join(process.cwd(), 'content', 'categories');
  ensureDirectoryExists(contentDir);
  
  try {
    // Save all categories to a single JSON file
    saveContentToFile(
      JSON.stringify(data, null, 2),
      path.join(contentDir, 'article-categories.json')
    );
    
    console.log(`Downloaded ${data.length} article categories`);
    
    // Create individual category files
    console.log('Creating individual category files...');
    let successCount = 0;
    
    for (const category of data) {
      if (!category.slug) continue;
      
      try {
        // Create a subdirectory for each category
        const categoryDir = path.join(contentDir, category.slug);
        ensureDirectoryExists(categoryDir);
        
        // Save category details, ensure Japanese content is included
        saveContentToFile(
          JSON.stringify({
            ...category,
            title_ja: category.title_ja || category.title, // Ensure Japanese title is included if available
            description_ja: category.description_ja || category.description // Ensure Japanese description is included if available
          }, null, 2),
          path.join(categoryDir, 'category.json')
        );
        
        successCount++;
      } catch (error) {
        console.error(`Error saving category ${category.title}: ${error.message}`);
      }
    }
    
    console.log(`Successfully saved ${successCount} individual category files`);
  } catch (error) {
    console.error(`Error saving article categories: ${error.message}`);
  }
}

// Download article tags data
async function downloadTags() {
  console.log('Downloading article tags...');
  
  const data = await safeGetApiData(
    `${baseURL}articleTags:list?pageSize=200&sort=sort&token=${token}`,
    'Error downloading article tags'
  );
  
  if (!data) {
    console.log('Skipping article tags due to API error');
    return;
  }
  
  const contentDir = path.join(process.cwd(), 'content', 'tags');
  ensureDirectoryExists(contentDir);
  
  try {
    // Save all tags to a single JSON file, ensuring Japanese content is preserved
    saveContentToFile(
      JSON.stringify(data.map(tag => ({
        ...tag,
        title_ja: tag.title_ja || tag.title,
        description_ja: tag.description_ja || tag.description
      })), null, 2),
      path.join(contentDir, 'article-tags.json')
    );
    
    console.log(`Downloaded ${data.length} article tags`);
    
    // Create individual tag files for local lookup
    console.log('Creating individual tag files...');
    let successCount = 0;
    
    for (const tag of data) {
      if (!tag.slug) continue;
      
      try {
        // Create a subdirectory for each tag
        const tagDir = path.join(contentDir, tag.slug);
        ensureDirectoryExists(tagDir);
        
        // Save tag details with Japanese support
        saveContentToFile(
          JSON.stringify({
            ...tag,
            title_ja: tag.title_ja || tag.title, // Ensure Japanese title is included
            description_ja: tag.description_ja || tag.description // Ensure Japanese description is included
          }, null, 2),
          path.join(tagDir, 'tag.json')
        );
        
        successCount++;
      } catch (error) {
        console.error(`Error saving tag ${tag.title}: ${error.message}`);
      }
    }
    
    console.log(`Successfully saved ${successCount} individual tag files`);
  } catch (error) {
    console.error(`Error saving article tags: ${error.message}`);
  }
  
  // Download release tags
  console.log('Downloading release tags...');
  
  const relTagsData = await safeGetApiData(
    `${baseURL}releaseTags:list?pageSize=200&token=${token}`,
    'Error downloading release tags'
  );
  
  if (!relTagsData) {
    console.log('Skipping release tags due to API error');
    return;
  }
  
  try {
    // Save all release tags to a single JSON file
    saveContentToFile(
      JSON.stringify(relTagsData, null, 2),
      path.join(contentDir, 'release-tags.json')
    );
    
    console.log(`Downloaded ${relTagsData.length} release tags`);
    
    // Create individual release tag files
    console.log('Creating individual release tag files...');
    let releaseTagSuccessCount = 0;
    
    for (const tag of relTagsData) {
      if (!tag.slug) continue;
      
      try {
        // Create a subdirectory for each release tag
        const tagDir = path.join(contentDir, 'release-tags', tag.slug);
        ensureDirectoryExists(tagDir);
        
        // Save release tag details with Japanese support
        saveContentToFile(
          JSON.stringify({
            ...tag,
            title_ja: tag.title_ja || tag.title, // Ensure Japanese title is included
            description_ja: tag.description_ja || tag.description // Ensure Japanese description is included
          }, null, 2),
          path.join(tagDir, 'tag.json')
        );
        
        releaseTagSuccessCount++;
      } catch (error) {
        console.error(`Error saving release tag ${tag.title}: ${error.message}`);
      }
    }
    
    console.log(`Successfully saved ${releaseTagSuccessCount} individual release tag files`);
  } catch (error) {
    console.error(`Error in downloadTags:`, error.message);
  }
  
  // Download article sub tags (if available in the API)
  console.log('Downloading article sub tags...');
  
  const subTagsData = await safeGetApiData(
    `${baseURL}articleSubTags:list?pageSize=200&token=${token}`,
    'Error downloading article sub tags'
  );
  
  if (subTagsData) {
    try {
      // Save all sub tags to a single JSON file
      saveContentToFile(
        JSON.stringify(subTagsData, null, 2),
        path.join(contentDir, 'article-sub-tags.json')
      );
      
      console.log(`Downloaded ${subTagsData.length} article sub tags`);
      
      // Create individual sub tag files
      console.log('Creating individual sub tag files...');
      let subTagSuccessCount = 0;
      
      for (const tag of subTagsData) {
        if (!tag.slug) continue;
        
        try {
          // Create a subdirectory for each sub tag
          const tagDir = path.join(contentDir, 'sub-tags', tag.slug);
          ensureDirectoryExists(tagDir);
          
          // Save sub tag details with Japanese support
          saveContentToFile(
            JSON.stringify({
              ...tag,
              title_ja: tag.title_ja || tag.title, // Ensure Japanese title is included
              description_ja: tag.description_ja || tag.description // Ensure Japanese description is included
            }, null, 2),
            path.join(tagDir, 'tag.json')
          );
          
          subTagSuccessCount++;
        } catch (error) {
          console.error(`Error saving sub tag ${tag.title}: ${error.message}`);
        }
      }
      
      console.log(`Successfully saved ${subTagSuccessCount} individual sub tag files`);
    } catch (error) {
      console.error(`Error saving article sub tags: ${error.message}`);
    }
  } else {
    console.log('Skipping article sub tags due to API error');
  }
}

// Download help center items
async function downloadHelpCenter() {
  console.log('Downloading help center items...');
  
  const data = await safeGetApiData(
    `${baseURL}help_center_tree:list?pageSize=1000&sort=item_sort&tree=true&token=${token}&filter[status]=published`,
    'Error downloading help center items'
  );
  
  if (!data) {
    console.log('Skipping help center items due to API error');
    return;
  }
  
  const contentDir = path.join(process.cwd(), 'content', 'help-center');
  ensureDirectoryExists(contentDir);
  
  try {
    // Process the help center tree to ensure Japanese content is preserved
    const processHelpcenterItem = (item) => {
      const processed = {
        ...item,
        title_ja: item.title_ja || item.title,
        content_ja: item.content_ja || item.content,
        description_ja: item.description_ja || item.description,
      };
      
      // Process children recursively if they exist
      if (Array.isArray(item.children)) {
        processed.children = item.children.map(child => processHelpcenterItem(child));
      }
      
      return processed;
    };
    
    const processedData = Array.isArray(data) 
      ? data.map(item => processHelpcenterItem(item))
      : data;
    
    // Save help center data
    saveContentToFile(
      JSON.stringify(processedData, null, 2),
      path.join(contentDir, 'help-center-tree.json')
    );
    
    console.log(`Downloaded help center items`);
  } catch (error) {
    console.error(`Error saving help center items: ${error.message}`);
  }
}

// Download plugins data
async function downloadPlugins() {
  console.log('Downloading plugins data...');
  
  const data = await safeGetApiData(
    `${baseURL}plugins_2025:list?pageSize=400&sort[]=sort&appends[]=category&filter={}&token=${token}`,
    'Error downloading plugins'
  );
  
  if (!data) {
    console.log('Skipping plugins due to API error');
    return;
  }
  
  const contentDir = path.join(process.cwd(), 'content', 'plugins');
  ensureDirectoryExists(contentDir);
  
  try {
    // Process plugins to ensure Japanese content is preserved
    const processedPlugins = data.map(plugin => ({
      ...plugin,
      title_ja: plugin.title_ja || plugin.title,
      description_ja: plugin.description_ja || plugin.description,
      category: plugin.category ? {
        ...plugin.category,
        title_ja: plugin.category.title_ja || plugin.category.title
      } : null
    }));
    
    // Save plugins data
    saveContentToFile(
      JSON.stringify(processedPlugins, null, 2),
      path.join(contentDir, 'plugins.json')
    );
    
    console.log(`Downloaded ${data.length} plugins`);
  } catch (error) {
    console.error(`Error saving plugins: ${error.message}`);
  }
}

// Download tasks data
async function downloadTasks() {
  console.log('Downloading tasks data...');
  
  const data = await safeGetApiData(
    `${baseURL}taskCategories:list?pageSize=200&appends=tasks(sort=sort),tasks.status&sort=sort&token=${token}`,
    'Error downloading tasks'
  );
  
  if (!data) {
    console.log('Skipping tasks due to API error');
    return;
  }
  
  const contentDir = path.join(process.cwd(), 'content', 'tasks');
  ensureDirectoryExists(contentDir);
  
  try {
    // Process task categories to ensure Japanese content is preserved
    const processTaskCategory = (category) => {
      const processed = {
        ...category,
        title_ja: category.title_ja || category.title,
        description_ja: category.description_ja || category.description,
      };
      
      // Process tasks if they exist
      if (Array.isArray(category.tasks)) {
        processed.tasks = category.tasks.map(task => ({
          ...task,
          title_ja: task.title_ja || task.title,
          description_ja: task.description_ja || task.description,
        }));
      }
      
      return processed;
    };
    
    const processedData = Array.isArray(data) 
      ? data.map(category => processTaskCategory(category))
      : data;
    
    // Save tasks data
    saveContentToFile(
      JSON.stringify(processedData, null, 2),
      path.join(contentDir, 'task-categories.json')
    );
    
    console.log(`Downloaded task categories and their tasks`);
  } catch (error) {
    console.error(`Error saving task categories: ${error.message}`);
  }
}

// Main function
async function main() {
  try {
    // Download content data; on failure, continue to next task
    try {
      await downloadArticles();
    } catch (error) {
      console.error('Error in downloadArticles:', error.message);
    }
    
    try {
      await downloadTutorials();
    } catch (error) {
      console.error('Error in downloadTutorials:', error.message);
    }
    
    try {
      await downloadReleases();
    } catch (error) {
      console.error('Error in downloadReleases:', error.message);
    }
    
    try {
      await downloadPages();
    } catch (error) {
      console.error('Error in downloadPages:', error.message);
    }
    
    // Download related data; on failure, continue to next task
    try {
      await downloadCategories();
    } catch (error) {
      console.error('Error in downloadCategories:', error.message);
    }
    
    try {
      await downloadTags();
    } catch (error) {
      console.error('Error in downloadTags:', error.message);
    }
    
    try {
      await downloadHelpCenter();
    } catch (error) {
      console.error('Error in downloadHelpCenter:', error.message);
    }
    
    try {
      await downloadPlugins();
    } catch (error) {
      console.error('Error in downloadPlugins:', error.message);
    }
    
    try {
      await downloadTasks();
    } catch (error) {
      console.error('Error in downloadTasks:', error.message);
    }
    
    console.log('Content download complete!');
  } catch (error) {
    console.error('Fatal error downloading content:', error.message);
    process.exit(1);
  }
}

main();