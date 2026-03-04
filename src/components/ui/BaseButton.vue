<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  download?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  download: false
})

const isLink = !!props.href
</script>

<template>
  <component v-if="download === true" :is="isLink ? 'a' : 'button'" :href="href" download
    :class="['base-button', `variant-${variant}`, `size-${size}`]">
    <slot></slot>
  </component>

  <component v-else-if="download" :is="isLink ? 'a' : 'button'" :href="href" :download="download"
    :class="['base-button', `variant-${variant}`, `size-${size}`]">
    <slot></slot>
  </component>

  <component v-else :is="isLink ? 'a' : 'button'" :href="href"
    :class="['base-button', `variant-${variant}`, `size-${size}`]">
    <slot></slot>
  </component>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  font-family: var(--font-family);
  font-weight: 600;
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
  cursor: pointer;
  text-decoration: none;
}

/* Sizes */
.size-sm {
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-sm);
}

.size-md {
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--font-size-base);
}

.size-lg {
  padding: var(--spacing-4) var(--spacing-8);
  font-size: var(--font-size-lg);
}

/* Variants */
.variant-primary {
  background: var(--color-accent-gradient);
  background-size: 200% 200%;
  color: white;
  border: none;
  animation: gradient-shift 3s ease infinite;
}

.variant-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px var(--color-glow), 0 0 0 2px var(--color-accent-light);
}

.variant-primary:active {
  transform: translateY(-1px);
}

.variant-secondary {
  background: var(--color-bg-card);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.variant-secondary:hover {
  background: var(--color-bg-secondary);
  border-color: var(--color-accent);
  box-shadow: 0 4px 16px var(--color-glow);
}

.variant-outline {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
  position: relative;
  overflow: hidden;
}

.variant-outline::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-accent-gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.variant-outline:hover {
  color: white;
  border-color: transparent;
}

.variant-outline:hover::before {
  opacity: 1;
}
</style>
