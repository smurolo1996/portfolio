<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import { useLanguage } from '@/composables/useLanguage'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { experiences } from '@/data/experiences'

const { t, getLocalizedText } = useLanguage()
const { elementRef, isVisible } = useScrollAnimation()

const expandedId = ref<string | null>(null)

function toggleExpand(id: string): void {
  expandedId.value = expandedId.value === id ? null : id
}
</script>

<template>
  <section
    id="experience"
    class="experience section"
  >
    <div class="container">
      <h2
        ref="elementRef"
        :class="['section-title', 'fade-in', { visible: isVisible }]"
      >
        {{ t.experience.title }}
      </h2>

      <div class="timeline">
        <BaseCard
          v-for="exp in experiences"
          :key="exp.id"
          :class="['timeline-item', { expanded: expandedId === exp.id }]"
          @click="toggleExpand(exp.id)"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="client-name">
                  {{ exp.client }}
                </h3>
                <p class="role">
                  {{ exp.role }}
                </p>
              </div>
              <span class="period">{{ getLocalizedText(exp.periodIt, exp.periodEn) }}</span>
            </div>

            <div class="stack-tags">
              <span
                v-for="tech in exp.stack"
                :key="tech"
                class="stack-tag"
              >
                {{ tech }}
              </span>
            </div>

            <div
              v-if="expandedId === exp.id"
              class="projects-list"
            >
              <div
                v-for="project in exp.projects"
                :key="project.nameIt"
                class="project-item"
              >
                <h4 class="project-name">
                  {{ getLocalizedText(project.nameIt, project.nameEn) }}
                </h4>
                <p class="project-system">
                  {{ getLocalizedText(project.descriptionIt, project.descriptionEn) }}
                </p>
                <p
                  v-if="project.activityIt && project.activityEn"
                  class="project-activity"
                >
                  <span class="activity-label">{{ t.experience.activities }}</span>
                  {{ getLocalizedText(project.activityIt!, project.activityEn!) }}
                </p>
              </div>
            </div>

            <button class="expand-btn">
              <svg
                :class="['expand-icon', { rotated: expandedId === exp.id }]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-accent-gradient);
  background-size: 100% 200%;
  animation: gradient-shift 3s ease infinite;
}

.timeline-item {
  margin-left: var(--spacing-12);
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(4px);
}

.timeline-marker {
  position: absolute;
  left: calc(-1 * var(--spacing-12) - 12px);
  top: var(--spacing-8);
  width: 12px;
  height: 12px;
  background: var(--color-accent);
  border-radius: 50%;
  border: 3px solid var(--color-bg-primary);
  box-shadow: 0 0 0 3px var(--color-accent), 0 0 15px var(--color-glow);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.3);
  box-shadow: 0 0 0 4px var(--color-accent), 0 0 25px var(--color-glow);
}

.timeline-content {
  position: relative;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-4);
  flex-wrap: wrap;
  gap: var(--spacing-4);
}

.client-name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-1);
}

.role {
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  font-weight: 500;
}

.period {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  background: var(--color-bg-secondary);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.stack-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-4);
}

.stack-tag {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  background: var(--color-bg-secondary);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-sm);
}

.stack-more {
  font-size: var(--font-size-xs);
  color: var(--color-accent);
  font-weight: 600;
}

.projects-list {
  margin-top: var(--spacing-6);
  padding-top: var(--spacing-6);
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.project-item {
  padding-left: var(--spacing-4);
  border-left: 2px solid var(--color-accent-light);
}

.project-name {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-2);
}

.project-system {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-2);
}

.project-activity {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
  padding-left: var(--spacing-3);
  border-left: 2px solid var(--color-accent);
  margin-top: var(--spacing-2);
}

.activity-label {
  font-weight: 600;
  color: var(--color-accent);
  margin-right: var(--spacing-1);
}

.expand-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: var(--spacing-2);
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.expand-btn:hover {
  color: var(--color-accent);
}

.expand-icon {
  width: 20px;
  height: 20px;
  transition: transform var(--transition-fast);
}

.expand-icon.rotated {
  transform: rotate(180deg);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 12px;
  }

  .timeline-item {
    margin-left: var(--spacing-8);
  }

  .timeline-marker {
    left: calc(-1 * var(--spacing-8) - 8px);
    width: 8px;
    height: 8px;
  }

  .timeline-header {
    flex-direction: column;
  }
}
</style>
