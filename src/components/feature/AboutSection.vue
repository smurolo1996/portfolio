<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import { useLanguage } from '@/composables/useLanguage'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useLanguage()
const { elementRef, isVisible } = useScrollAnimation()

const stats = [
  { value: '6+', key: 'years' },
  { value: '15+', key: 'projects' },
  { value: '3', key: 'certifications' },
  { value: '10', key: 'clients' }
] as const
</script>

<template>
  <section
    id="about"
    class="about section"
  >
    <div class="container">
      <h2
        ref="elementRef"
        :class="['section-title', 'fade-in', { visible: isVisible }]"
      >
        {{ t.about.title }}
      </h2>

      <div class="about-content">
        <div class="about-text">
          <p class="about-description">
            {{ t.about.description }}
          </p>
        </div>

        <div class="stats-grid">
          <BaseCard
            v-for="stat in stats"
            :key="stat.key"
            class="stat-card"
          >
            <div class="stat-value">
              {{ stat.value }}
            </div>
            <div class="stat-label">
              {{ t.about.stats[stat.key] }}
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: grid;
  gap: var(--spacing-12);
}

.about-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
  max-width: 800px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-6);
}

.stat-card {
  text-align: center;
  padding: var(--spacing-8);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--color-accent-gradient);
  border-radius: var(--radius-full);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-value {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  background: var(--color-accent-gradient);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-2);
  animation: gradient-shift 4s ease infinite;
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-value {
    font-size: var(--font-size-4xl);
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
