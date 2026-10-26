import type { APIRoute } from 'astro';

export const GET: APIRoute = (context) => {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://nocode.nocobase.com/sitemap.xml
`.trim();
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};