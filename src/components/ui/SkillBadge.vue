<script setup lang="ts">
import type { SkillLevel } from '@/types'
import { useLanguage } from '@/composables/useLanguage'

interface Props {
  name: string
  level: SkillLevel
}

defineProps<Props>()

const { t } = useLanguage()

const levelColors: Record<SkillLevel, string> = {
  expert: '#14b8a6',
  advanced: '#06b6d4',
  intermediate: '#f59e0b'
}
</script>

<template>
  <span
    class="skill-badge"
    :style="{ '--level-color': levelColors[level] }"
  >
    <span class="skill-name">{{ name }}</span>
    <span class="skill-level">{{ t.skills.levels[level] }}</span>
  </span>
</template>

<style scoped>
.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-3);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
}

.skill-badge:hover {
  border-color: var(--level-color);
  background: color-mix(in srgb, var(--level-color) 10%, transparent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--level-color) 30%, transparent);
}

.skill-name {
  color: var(--color-text-primary);
  font-weight: 500;
}

.skill-level {
  color: var(--level-color);
  font-size: var(--font-size-xs);
  font-weight: 600;
}
</style>
