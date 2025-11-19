'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cookieLang, i18n } from '@/lib/i18n-config';
import Cookies from 'js-cookie';
import { buttonClass } from '../ui/Button';

export default function LangSwitcher({ linkText }: { linkText: string }) {

  const pathName = usePathname();
    
  const currentLocale = pathName.split('/')[1];
  const targetLocale = i18n.locales.find(l => l !== currentLocale) || 'en';

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale; 
    return segments.join('/');
  };

  const handleSwitch = () => {
    Cookies.set(cookieLang, targetLocale, { expires: 365, path: '/' });
  };


  return (
    <Link
      href={redirectedPathName(targetLocale)}
      onClick={handleSwitch}
      className={buttonClass}
    >
      {linkText}
    </Link>
  );
}