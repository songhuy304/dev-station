import { locales, type Locale } from '@/shared/i18n/i18n'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLanguage() {
  const { locale } = useI18n()

  const flagImages: Record<Locale, string> = {
    en: 'https://flagcdn.com/w20/gb.png',
    vi: 'https://flagcdn.com/w20/vn.png',
  }

  const savedLocale = localStorage.getItem('locale') as Locale | null
  if (savedLocale && locales.includes(savedLocale)) {
    locale.value = savedLocale
  }

  const currentLanguage = computed(() => locale.value as Locale)
  const currentLanguageName = computed(() => {
    const languageNames: Record<Locale, string> = {
      en: 'EN',
      vi: 'VI',
    }
    return languageNames[currentLanguage.value]
  })
  const currentFlag = computed(() => flagImages[currentLanguage.value])

  const changeLanguage = () => {
    if (locale.value === 'en') {
      locale.value = 'vi'
    } else {
      locale.value = 'en'
    }
    localStorage.setItem('locale', locale.value)
  }

  return {
    currentLanguage,
    currentLanguageName,
    currentFlag,
    changeLanguage,
  }
}
