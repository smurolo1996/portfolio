<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation';

interface Props {
  animate?: boolean
}

withDefaults(defineProps<Props>(), {
  animate: true
})

const { elementRef, isVisible } = useScrollAnimation()
</script>

<template>
  <div
    ref="elementRef"
    :class="['base-card', { 'fade-in': animate, visible: isVisible || !animate }]"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.base-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.base-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-accent-gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.base-card:hover {
  border-color: var(--color-border-glow);
  box-shadow: 0 8px 32px rgba(20, 184, 166, 0.15), 0 0 0 1px var(--color-border-glow);
  transform: translateY(-2px);
}

.base-card:hover::before {
  opacity: 1;
}
</style>
