# Content Management

This directory contains all multilingual content for the website, maintained using Git.

## Directory Structure

```
/content
  /articles         # Blog posts
    /{slug}
      index.md      # English content
      index.cn.md   # Chinese content  
      index.ja.md   # Japanese content
      metadata.json # Metadata (title, date, tags, etc.)
  /tutorials        # Tutorials
    /{slug}/...     # Same as above
  /releases         # Release notes
    /{slug}/...     # Same as above
  /pages            # Static pages
    /{slug}/...     # Same as above
```

## How to Edit Content

1. Each content entry (articles, tutorials, etc.) is stored in a directory named after its slug.
2. Content for each language is stored in separate Markdown files, named according to the language (e.g., index.md, index.cn.md, index.ja.md).
3. Metadata (such as title, publish date, tags, etc.) is stored in the metadata.json file.

## How to Download Content from the CMS

### 1. Install Dependencies

First, ensure that you have installed the necessary dependencies:

```bash
npm install dotenv node-fetch
```

### 2. Set Environment Variables

Create a `.env` file in the project root and set the following environment variables:

```
NOCOBASE_URL=https://your-cms-url.com/
NOCOBASE_TOKEN=your_api_token_here
```

### 3. Run the Download Script

```bash
node scripts/download-content.js
```

## Content Source Configuration

The website can obtain content from local files or the CMS API. By default, it is set to read from local files. To switch to the CMS API, modify the configuration in `src/utils/config.ts`:

```typescript
// Set to false to use the CMS API
export const contentConfig = {
  useLocalContent: false
};
``` 