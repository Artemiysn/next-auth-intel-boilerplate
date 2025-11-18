import 'server-only';
import { cookies } from 'next/headers';
import { verifyToken } from './jwt';

const COOKIE_NAME = 'auth_token';

type AuthStatus = {
  isLoggedIn: boolean;
  email?: string;
  userId?: string;
};

export async function getAuthStatusJWT(): Promise<AuthStatus> {
  //@ts-ignore
  const token = await cookies().get(COOKIE_NAME)?.value;

  if (!token) {
    return { isLoggedIn: false };
  }

  const userPayload = verifyToken(token);

  if (userPayload) {
    return {
      isLoggedIn: true,
      email: userPayload.email,
      userId: userPayload.id,
    };
  }

  //@ts-ignore
  await cookies().delete(COOKIE_NAME);
  
  return { isLoggedIn: false };
}