import type { APIRoute } from 'astro';

export const GET: APIRoute = (context) => {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap.xml', context.request.url).href}
`.trim();
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};