import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import kh from './kh.json';

i18n
  .use(LanguageDetector) // auto-detect user language
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      kh: { translation: kh }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already protects from xss
    }
  });

export default i18n;
