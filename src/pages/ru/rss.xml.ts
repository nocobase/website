import rss from '@astrojs/rss';
import { getPage, getRssItems } from '../../utils';

export async function GET() {
  const pageData = await getPage("blog");
  const title = pageData.title;
  const description = pageData.description;
  return rss({
    title: 'NocoBase Блог',
    description,
    site: 'https://www.nocobase.com/',
    items: await getRssItems('ru'),
    customData: `<language>ru-RU</language>`,
  });
}
