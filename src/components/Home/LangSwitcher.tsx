'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cookieLang, i18n } from '@/lib/i18n-config';
import Cookies from 'js-cookie';

export default function LangSwitcher({ linkText }: { linkText: string }) {

  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale; 
    return segments.join('/');
  };

  const handleSwitch = () => {
    Cookies.set(cookieLang, targetLocale, { expires: 365, path: '/' });
  };
  
  const currentLocale = pathName.split('/')[1];
  const targetLocale = i18n.locales.find(l => l !== currentLocale) || 'en';

  return (
    <Link
      href={redirectedPathName(targetLocale)}
      onClick={handleSwitch}
      className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors border border-blue-200 px-4 py-2 rounded-md bg-white"
    >
      {linkText}
    </Link>
  );
}