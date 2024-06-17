import type { APIContext } from 'astro';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { getSitemapLinks } from '../utils';

export async function GET(context: APIContext) {

  const links = await getSitemapLinks();
  const stream = new SitemapStream({ hostname: context.url.toString() })
  const data = await streamToPromise(Readable.from(links).pipe(stream));

  return new Response(data.toString(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
