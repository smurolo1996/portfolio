import { computed } from 'vue'
import { useAppStore } from '@/stores/useAppStore'

export function useTheme() {
  const store = useAppStore()

  const currentTheme = computed(() => store.theme)
  const isDark = computed(() => store.isDark)

  function toggleTheme(): void {
    store.toggleTheme()
  }

  return {
    currentTheme,
    isDark,
    toggleTheme
  }
}
