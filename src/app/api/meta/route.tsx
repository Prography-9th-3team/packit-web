import { getMetaData } from '@/lib/meta';

/**
 * Route Handlers
 * GET : /api/meta
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url') ?? '';

  try {
    const html = await fetch(url).then((res) => res.text());
    const meta = getMetaData(html, url);

    return Response.json({ result: { meta } });
  } catch {
    console.error('북마크를 할 수 없는 페이지입니다');
  }
}
