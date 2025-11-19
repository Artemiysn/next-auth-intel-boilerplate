import 'server-only';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;
const TOKEN_EXPIRATION = '7d'; 

type UserPayload = {
  id: string;
  email: string;
};

export function signToken(payload: UserPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
}

export function verifyToken(token: string): UserPayload | null {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload as UserPayload;
  } catch (error) {
    return null; 
  }
}