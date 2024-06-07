import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

/**
 * Route Handlers
 * DELETE : /api/auth/cookie
 */
export async function DELETE() {
  try {
    cookies().delete('accessToken');

    return NextResponse.json(true, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
