import type { APIRoute } from 'astro';
import { listReleaseNotes, listMilestoneNotes, processor } from '../../../../utils';

// The release notes the timeline (/{en,cn,ja}/blog/timeline) loads in the browser, built as static files:
// /api/release-notes/<lang>/page-<n>.json holds page n of every release note, 20 per page, the size the timeline asks
// for, and /api/release-notes/<lang>/milestones.json the newest 50 milestones. Page 1 is rendered into the timeline
// itself; its file exists too. Each item carries only the fields the timeline's script reads.
const LANGS = ['en', 'cn', 'ja'];
const PAGE_SIZE = 20;
const MILESTONE_PAGE_SIZE = 50;

export async function getStaticPaths() {
  const { meta } = await listReleaseNotes({ pageSize: PAGE_SIZE });
  const pages = Math.max(1, meta.pageCount || 0);
  return LANGS.flatMap((lang) => [
    { params: { lang, name: 'milestones' } },
    ...Array.from({ length: pages }, (_, i) => ({ params: { lang, name: `page-${i + 1}` } })),
  ]);
}

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as string;
  const { data, meta } = params.name === 'milestones'
    ? await listMilestoneNotes({ page: 1, pageSize: MILESTONE_PAGE_SIZE, locale: lang })
    : await listReleaseNotes({ page: Number(params.name!.replace('page-', '')), pageSize: PAGE_SIZE, locale: lang });

  const items = await Promise.all(data.map(async (article: any) => ({
    slug: article.slug,
    title: article.title,
    description: article.description,
    cover: article.cover,
    tags: article.tags,
    isMilestone: article.isMilestone,
    priority: article.priority,
    publishedAt: article.publishedAt,
    hideDetailPage: article.hideDetailPage,
    renderedContent: await processMarkdown(article.content || ''),
  })));

  return new Response(JSON.stringify({ items, meta }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

// Markdown to HTML with every heading moved down two levels, as the timeline renders its first page.
async function processMarkdown(content: string) {
  const { code } = await processor.render(content);
  return code
    .replace(/<h1/g, '<h3')
    .replace(/<\/h1>/g, '</h3>')
    .replace(/<h2/g, '<h4')
    .replace(/<\/h2>/g, '</h4>')
    .replace(/<h3/g, '<h5')
    .replace(/<\/h3>/g, '</h5>')
    .replace(/<h4/g, '<h6')
    .replace(/<\/h4>/g, '</h6>')
    .replace(/<h5/g, '<h6')
    .replace(/<\/h5>/g, '</h6>');
}
