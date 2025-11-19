import 'server-only';
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { resources } from '@/i18n/resources';
import type { Locale } from './i18n-config';
import { cache } from 'react';

const initI18n = cache(async (lang: Locale) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .init({
      lng: lang,
      resources: resources,
      fallbackLng: 'en',
      defaultNS: 'translation', 
      ns: ['translation']
    });
  return i18nInstance;
});

export async function useTranslation(lang: Locale) {

  const i18nInstance = await initI18n(lang);
  
  return {
    t: i18nInstance.getFixedT(lang, 'translation'),
  };
}