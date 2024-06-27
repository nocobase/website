import rss from '@astrojs/rss';
import { getPage, getRssItems } from '../utils';

export async function GET() {
  const pageData = await getPage("blog");
  const description = pageData.description;
  return rss({
    title: 'NocoBase Blog',
    description,
    site: 'https://www.nocobase.com/',
    items: await getRssItems('en'),
    customData: `<language>multi</language>`,
  });
}
