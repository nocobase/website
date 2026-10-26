import rss from '@astrojs/rss';
import { getPage, getRssItems } from '../../utils';

export async function GET() {
  const pageData = await getPage("blog");
  const title = pageData.title;
  const description = pageData.description;
  return rss({
    title: 'Blog NocoBase',
    description,
    site: 'https://nocode.nocobase.com/',
    items: await getRssItems('vi'),
    customData: `<language>vi-VN</language>`,
  });
}
