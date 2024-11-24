import rss from '@astrojs/rss';
import { getPage, getRssItems } from '../../utils';

export async function GET() {
  const pageData = await getPage("blog");
  const title = pageData.title_ja || pageData.title;
  const description = pageData.description_ja || pageData.description;
  return rss({
    title: 'NocoBaseブログ',
    description,
    site: 'https://www.nocobase.com/',
    items: await getRssItems('ja'),
    customData: `<language>ja-JP</language>`,
  });
}


