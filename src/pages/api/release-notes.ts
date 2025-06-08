import type { APIRoute } from 'astro';
import { listReleaseNotes, listMilestoneNotes, processor } from '../../utils';

export const GET: APIRoute = async ({ request }) => {
  // Parse query parameters
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const pageSize = parseInt(url.searchParams.get('pageSize') || '8');
  const lang = url.searchParams.get('lang') || 'en'; // 默认英文
  const milestoneOnly = url.searchParams.get('milestoneOnly') === 'true'; // 是否只获取milestone
  
  try {
    // 根据参数选择不同的数据获取方式
    const { data, meta } = milestoneOnly 
      ? await listMilestoneNotes({ page, pageSize, locale: lang })
      : await listReleaseNotes({ page, pageSize, locale: lang });
    
    // Process the content for each note (listReleaseNotes already handled localization)
    const processedItems = await Promise.all(data.map(async (article: any) => {
      // Process markdown content
      const renderedContent = await processMarkdown(article.content || '');
      
      return {
        ...article,
        renderedContent
      };
    }));
    
    // Return JSON response
    return new Response(
      JSON.stringify({
        items: processedItems,
        meta: {
          ...meta,
          hasMore: meta.hasMore // 确保返回hasMore标志
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    );
  } catch (error) {
    console.error('[API] 获取发布日志错误:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: 'Failed to fetch release notes', message: errorMessage }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};

// Helper function to process markdown content
async function processMarkdown(content: string) {
  // Process with existing processor
  const { code } = await processor.render(content);
  
  // Adjust heading levels
  const adjustedCode = code
    .replace(/<h1/g, '<h3')
    .replace(/<\/h1>/g, '</h3>')
    .replace(/<h2/g, '<h4')
    .replace(/<\/h2>/g, '</h4>')
    .replace(/<h3/g, '<h5')
    .replace(/<\/h3>/g, '</h5>')
    .replace(/<h4/g, '<h6')
    .replace(/<\/h4>/g, '</h6>')
    .replace(/<h5/g, '<h6')
    .replace(/<\/h5>/g, '</h6>')
    .replace(/<h6/g, '<h6')
    .replace(/<\/h6>/g, '</h6>');
    
  return adjustedCode;
} 