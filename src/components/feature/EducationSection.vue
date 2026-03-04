<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import { useLanguage } from '@/composables/useLanguage'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { education } from '@/data/education'

const { t, getLocalizedText } = useLanguage()
const { elementRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    id="education"
    class="education section"
  >
    <div class="container">
      <h2
        ref="elementRef"
        :class="['section-title', 'fade-in', { visible: isVisible }]"
      >
        {{ t.education.title }}
      </h2>

      <div class="education-grid">
        <BaseCard
          v-for="item in education"
          :key="item.id"
          class="education-card"
        >
          <div class="education-logo">
            <img
              v-if="item.logoUrl || item.badgeImageUrl"
              class="education-logo-image"
              :src="item.logoUrl || item.badgeImageUrl"
              :alt="getLocalizedText(item.titleIt, item.titleEn)"
              loading="lazy"
            />
            <svg
              v-else
              class="education-icon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 3L2 8l10 5 8-4v6h2V8L12 3z"
                fill="currentColor"
              />
              <path
                d="M6 12v5a6 6 0 0 0 12 0v-5l-6 3-6-3z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div class="education-info">
            <h3 class="education-title">
              {{ getLocalizedText(item.titleIt, item.titleEn) }}
            </h3>
            <p class="education-institution">
              {{ item.institution }}
            </p>
            <div class="education-meta">
              <span class="education-date">{{ item.date }}</span>
            </div>
            <div class="education-actions">
              <a
                v-if="item.badgeExternalUrl"
                :href="item.badgeExternalUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="education-link"
                @click.stop
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {{ t.education.viewBadge }}
              </a>
              <a
                v-if="item.badgeDownloadUrl"
                :href="item.badgeDownloadUrl"
                download
                class="education-download"
                @click.stop
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {{ t.education.downloadBadge }}
              </a>
              <a
                v-if="item.pdfUrl"
                :href="item.pdfUrl"
                download
                class="education-download education-download--secondary"
                @click.stop
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {{ t.education.downloadDocument }}
              </a>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.education-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
  padding: var(--spacing-8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.education-card:hover {
  transform: translateY(-4px) scale(1.02);
}

.education-card:hover .education-logo {
  transform: scale(1.1);
  box-shadow: 0 8px 24px var(--color-glow);
}

.education-logo {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent-gradient);
  background-size: 200% 200%;
  border-radius: var(--radius-xl);
  color: white;
  animation: gradient-shift 3s ease infinite;
  transition: all 0.3s ease;
  overflow: hidden;
}

.education-icon {
  width: 48px;
  height: 48px;
}

.education-logo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.education-info {
  flex: 1;
}

.education-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-1);
}

.education-institution {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-3);
}

.education-meta {
  display: flex;
  gap: var(--spacing-3);
  align-items: center;
  flex-wrap: wrap;
}

.education-date {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.education-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-top: var(--spacing-3);
}

.education-link,
.education-download {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-accent);
  background: var(--color-accent-light);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all var(--transition-base);
}

.education-download--secondary {
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
}

.education-link:hover,
.education-download:hover {
  background: var(--color-accent);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--color-glow);
}

.education-download--secondary:hover {
  background: var(--color-text-primary);
  color: var(--color-bg-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.education-link svg,
.education-download svg {
  width: 16px;
  height: 16px;
}

@media (max-width: 480px) {
  .education-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>
