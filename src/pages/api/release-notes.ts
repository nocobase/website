import type { APIRoute } from 'astro';
import { listReleaseNotes, processor } from '../../utils';

export const GET: APIRoute = async ({ request }) => {
  // Parse query parameters
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const pageSize = parseInt(url.searchParams.get('pageSize') || '8');
  const lang = url.searchParams.get('lang') || 'en'; // 默认英文
  
  try {
    // Fetch paginated release notes
    const { data, meta } = await listReleaseNotes({ page, pageSize });
    
    // Process the content for each note
    const processedItems = await Promise.all(data.map(async (article) => {
      let content = '';
      let title = article.title;
      let description = article.description;
      
      // 根据语言选择内容
      if (lang === 'cn') {
        content = article.content_cn || article.content || '';
        title = article.title_cn || article.title;
        description = article.description_cn || article.description;
      } else if (lang === 'ja') {
        content = article.content_ja || article.content || '';
        title = article.title_ja || article.title;
        description = article.description_ja || article.description;
      } else {
        content = article.content || '';
      }
      
      // Process markdown content
      const renderedContent = await processMarkdown(content);
      
      return {
        ...article,
        title,
        description,
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