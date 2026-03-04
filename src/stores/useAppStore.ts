import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Language, Theme } from '@/types'

export const useAppStore = defineStore('app', () => {
  // State
  const language = ref<Language>(getInitialLanguage())
  const theme = ref<Theme>(getInitialTheme())

  // Getters
  const isItalian = computed(() => language.value === 'it')
  const isDark = computed(() => theme.value === 'dark')

  // Actions
  function toggleLanguage(): void {
    language.value = language.value === 'it' ? 'en' : 'it'
  }

  function setLanguage(lang: Language): void {
    language.value = lang
  }

  function toggleTheme(): void {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function setTheme(newTheme: Theme): void {
    theme.value = newTheme
  }

  // Watchers for persistence
  watch(language, (newLang) => {
    localStorage.setItem('portfolio-language', newLang)
  })

  watch(theme, (newTheme) => {
    localStorage.setItem('portfolio-theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }, { immediate: true })

  return {
    language,
    theme,
    isItalian,
    isDark,
    toggleLanguage,
    setLanguage,
    toggleTheme,
    setTheme
  }
})

function getInitialLanguage(): Language {
  const stored = localStorage.getItem('portfolio-language')
  if (stored === 'it' || stored === 'en') {
    return stored
  }
  const browserLang = navigator.language.toLowerCase()
  return browserLang.startsWith('it') ? 'it' : 'en'
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('portfolio-theme')
  if (stored === 'dark' || stored === 'light') {
    return stored
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
