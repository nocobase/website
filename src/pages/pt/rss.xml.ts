import rss from '@astrojs/rss';
import { getPage, getRssItems } from '../../utils';

export async function GET() {
  const pageData = await getPage("blog");
  const title = pageData.title;
  const description = pageData.description;
  return rss({
    title: 'Blog da NocoBase',
    description,
    site: 'https://www.nocobase.com/',
    // pt blog was removed — feed keeps working but links to English posts
    items: await getRssItems('en'),
    customData: `<language>pt-BR</language>`,
  });
}
