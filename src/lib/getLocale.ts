import { NextRequest } from "next/server";
import { cookieLang, i18n, Locale } from "./i18n-config";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

export default function getLocale(request: NextRequest): string | undefined {

  const cookieLocale = request.cookies.get(cookieLang)?.value as Locale;
  
  if (cookieLocale && i18n.locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  const negotiatorHeaders: Record<string, string> = {};

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    //@ts-ignore
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}
