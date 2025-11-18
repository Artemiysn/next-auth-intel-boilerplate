import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookieLang, i18n, Locale } from './lib/i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {

  const cookieLocale = request.cookies.get(cookieLang)?.value as Locale;
  if (cookieLocale && i18n.locales.includes(cookieLocale)) {
    return cookieLocale; 
  }

  const negotiatorHeaders: Record<string, string> = {};

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;

  let languages= new Negotiator({ headers: negotiatorHeaders }).languages(
    //@ts-ignore
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {

  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Исключаем системные файлы из обработки middleware
  // взято из Документации - Артем
    matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};