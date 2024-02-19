import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import translationEN from './locales/en/translation.json'
import translationRU from './locales/ru/translation.json'
import translationSR from './locales/sr/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  sr: {
    translation: translationSR,
  },
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
