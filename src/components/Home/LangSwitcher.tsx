'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/lib/i18n-config';

export default function LangSwitcher({ linkText }: { linkText: string }) {

  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale; 
    return segments.join('/');
  };
  
  const currentLocale = pathName.split('/')[1];
  const targetLocale = i18n.locales.find(l => l !== currentLocale) || 'en';

  return (
    <Link
      href={redirectedPathName(targetLocale)}
      className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors border border-blue-200 px-4 py-2 rounded-md bg-white"
    >
      {linkText}
    </Link>
  );
}