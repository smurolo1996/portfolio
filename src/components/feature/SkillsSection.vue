<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import { useLanguage } from '@/composables/useLanguage'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { skillCategories } from '@/data/skills'

const { t, getLocalizedText } = useLanguage()
const { elementRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    id="skills"
    class="skills section"
  >
    <div class="container">
      <h2
        ref="elementRef"
        :class="['section-title', 'fade-in', { visible: isVisible }]"
      >
        {{ t.skills.title }}
      </h2>

      <div class="skills-grid">
        <BaseCard
          v-for="category in skillCategories"
          :key="category.id"
          class="skill-category"
        >
          <h3 class="category-title">
            {{ getLocalizedText(category.labelIt, category.labelEn) }}
          </h3>
          <div class="skills-list">
            <SkillBadge
              v-for="skill in category.skills"
              :key="skill.name"
              :name="skill.name"
              :level="skill.level"
            />
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.skill-category {
  padding: var(--spacing-8);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-4px);
}

.category-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--spacing-6);
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.category-title::before {
  content: '';
  width: 4px;
  height: 24px;
  background: var(--color-accent-gradient);
  border-radius: var(--radius-full);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}
</style>
