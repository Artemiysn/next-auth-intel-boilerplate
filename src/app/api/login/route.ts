import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { signToken } from '@/lib/jwt';

const COOKIE_NAME = 'auth_token';

const MOCK_USER = {
  id: 'mock-user-123',
  email: 'user@example.com',
};

export async function POST(request: Request) {
   
  // Проверка логина/пароля на беке тут - Артем

  const token = signToken(MOCK_USER);

  //@ts-ignore
  await cookies().set(COOKIE_NAME, token, {
    httpOnly: true, 
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, 
    path: '/',
  });

  return NextResponse.json({
    success: true,
    user: MOCK_USER,
  }, { status: 200 });
}