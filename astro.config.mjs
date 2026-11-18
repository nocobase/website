import mdx from '@astrojs/mdx';
import { defineConfig, passthroughImageService } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';
import dotenv from 'dotenv';
import staticSite from './src/build/static-site';

// Load environment variables
dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: 'https://nocode.nocobase.com',
  integrations: [mdx(), staticSite()],
  devToolbar: {
    enabled: false
  },
  image: {
    service: passthroughImageService()
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    },
    syntaxHighlight: 'shiki',
    remarkPlugins: [remarkDirective],
    rehypePlugins: [rehypeSlug
      //   [rehypeToc, { headings: ['h1', 'h2', 'h3', 'h4', 'h5'] }]
    ]
  },
  // Built to static files, uploaded to OSS and served by the CDN (see .github/workflows/site.yml). Every page is
  // written as `<path>/index.html`; the CDN serves it at `<path>` and `<path>/` alike. `trailingSlash: 'never'` keeps
  // the URLs pages render for themselves (canonical, hreflang, og:url) without a trailing slash, as before.
  output: "static",
  trailingSlash: "never",
  build: {
    format: "directory"
  },
  vite: {
    define: {
      'import.meta.env.USE_LOCAL_CONTENT': JSON.stringify(process.env.USE_LOCAL_CONTENT)
    },
    optimizeDeps: {
      include: ['cytoscape'],
      exclude: ['mermaid']
    },
    ssr: {
      noExternal: ['mermaid', 'cytoscape']
    }
  }
});
