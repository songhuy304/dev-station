import { createI18n } from 'vue-i18n'
import vi from './locales/vi.json'
import en from './locales/en.json'

export const locales = ['en', 'vi'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

type MessageSchema = typeof en

export const i18n = createI18n<[MessageSchema], Locale>({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: {
    vi: vi as MessageSchema,
    en: en,
  },
})
