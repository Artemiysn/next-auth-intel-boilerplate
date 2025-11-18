// src/app/api/logout/route.ts

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'auth_token';

export async function POST(request: Request) {
  //@ts-ignore   
  await cookies().delete(COOKIE_NAME);

  return NextResponse.json({ success: true }, { status: 200 });
}