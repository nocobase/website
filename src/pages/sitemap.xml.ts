import type { APIContext } from 'astro';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { getSitemapLinks } from '../utils';
import { MOVED_TO_WWW_LIVE, wwwTarget } from '../utils/moved-to-www';

export async function GET(context: APIContext) {

  // Pages that moved to www are listed by www's own sitemap, not here.
  const links = (await getSitemapLinks()).filter((link: { url: string }) => !MOVED_TO_WWW_LIVE || !wwwTarget(link.url));
  const stream = new SitemapStream({ hostname: 'https://nocode.nocobase.com' })
  const data = await streamToPromise(Readable.from(links).pipe(stream));

  return new Response(data.toString(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
