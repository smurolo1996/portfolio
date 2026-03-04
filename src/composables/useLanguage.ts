import { computed } from 'vue'
import { useAppStore } from '@/stores/useAppStore'
import itTranslations from '@/locales/it.json'
import enTranslations from '@/locales/en.json'
import type { TranslationStrings } from '@/types'

const translations: Record<'it' | 'en', TranslationStrings> = {
  it: itTranslations as TranslationStrings,
  en: enTranslations as TranslationStrings
}

export function useLanguage() {
  const store = useAppStore()

  const currentLanguage = computed(() => store.language)
  const isItalian = computed(() => store.isItalian)

  const t = computed<TranslationStrings>(() => translations[store.language])

  function toggleLanguage(): void {
    store.toggleLanguage()
  }

  function getLocalizedText(it: string, en: string): string {
    return store.isItalian ? it : en
  }

  return {
    currentLanguage,
    isItalian,
    t,
    toggleLanguage,
    getLocalizedText
  }
}
