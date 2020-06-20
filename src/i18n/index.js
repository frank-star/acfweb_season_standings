import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { en } from './locales'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en
    },
    interpolation: {
      escapeValue: false
    },
    debug: false,
    fallbackLng: 'en',
    react: {
      wait: true,
      useSuspense: false,
      transSupportBasicHtmlNodes: true
    },
    detection: {
      order: ['htmlTag'],
      lookupQuerystring: 'lang',
      htmlTag: document.documentElement
    }
  })

export default i18n
