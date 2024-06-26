import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import { defineConfig, passthroughImageService } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import remarkDirective from 'remark-directive';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nocobase.com',
  integrations: [mdx()],
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
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});
