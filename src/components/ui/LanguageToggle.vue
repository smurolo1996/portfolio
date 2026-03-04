<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'

const { currentLanguage, toggleLanguage } = useLanguage()
</script>

<template>
  <button
    class="language-toggle"
    :aria-label="currentLanguage === 'it' ? 'Switch to English' : 'Passa a Italiano'"
    @click="toggleLanguage"
  >
    <span :class="['lang', { active: currentLanguage === 'it' }]">IT</span>
    <span class="divider">/</span>
    <span :class="['lang', { active: currentLanguage === 'en' }]">EN</span>
  </button>
</template>

<style scoped>
.language-toggle {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-2) var(--spacing-3);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 600;
  transition: all var(--transition-fast);
}

.language-toggle:hover {
  border-color: var(--color-accent);
}

.lang {
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.lang.active {
  color: var(--color-accent);
}

.divider {
  color: var(--color-text-muted);
}
</style>
