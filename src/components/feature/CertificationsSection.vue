<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import { useLanguage } from '@/composables/useLanguage'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { certifications } from '@/data/certifications'

const { t, getLocalizedText } = useLanguage()
const { elementRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    id="certifications"
    class="certifications section"
  >
    <div class="container">
      <h2
        ref="elementRef"
        :class="['section-title', 'fade-in', { visible: isVisible }]"
      >
        {{ t.certifications.title }}
      </h2>

      <div class="certs-grid">
        <BaseCard
          v-for="cert in certifications"
          :key="cert.id"
          class="cert-card"
        >
          <div class="cert-badge">
            <img
              v-if="cert.badgeImageUrl"
              class="cert-badge-image"
              :src="cert.badgeImageUrl"
              :alt="getLocalizedText(cert.nameIt, cert.nameEn)"
              loading="lazy"
            />
            <svg
              v-else
              class="cert-icon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.95 9.64l-1.58 1.01-1.67-1.033-1.67 1.033-1.58-1.01v-.007l-.003.002-1.257 6.166L7.5 17l1.67-2.167L10.84 17l1.24-1.208-1.257-6.166-.003-.002v.007l-.001.006-.003.003.001-.003-.003-.003L10.84 17l1.67-2.167L14.18 17l1.24-1.208-1.257-6.166-.003-.002v.007l-.001.006-.003.003.001-.003-.003-.003.003.003z"
                fill="currentColor"
              />
              <path
                d="M12 2l-9 4.5v7.5l9 4.5 9-4.5V6.5L12 2zm7 11.5l-7 3.5-7-3.5V7l7-3.5L19 7v6.5z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div class="cert-info">
            <h3 class="cert-name">
              {{ getLocalizedText(cert.nameIt, cert.nameEn) }}
            </h3>
            <p class="cert-issuer">
              {{ cert.issuer }}
            </p>
            <div class="cert-meta">
              <span class="cert-badge-code">{{ cert.badge }}</span>
              <span class="cert-date">{{ cert.date }}</span>
            </div>
            <div class="cert-actions">
              <a
                v-if="cert.badgeExternalUrl"
                :href="cert.badgeExternalUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="cert-link"
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
                {{ t.certifications.viewBadge }}
              </a>
              <a
                v-if="cert.badgeDownloadUrl"
                :href="cert.badgeDownloadUrl"
                download
                class="cert-download"
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
                {{ t.certifications.downloadBadge }}
              </a>
              <a
                v-if="cert.pdfUrl"
                :href="cert.pdfUrl"
                download
                class="cert-download cert-download--secondary"
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
                {{ t.certifications.downloadCertificate }}
              </a>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.cert-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
  padding: var(--spacing-8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cert-card:hover {
  transform: translateY(-4px) scale(1.02);
}

.cert-card:hover .cert-badge {
  transform: scale(1.1);
  box-shadow: 0 8px 24px var(--color-glow);
}

.cert-badge {
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

.cert-icon {
  width: 48px;
  height: 48px;
}

.cert-badge-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.cert-info {
  flex: 1;
}

.cert-name {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-1);
}

.cert-issuer {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-3);
}

.cert-meta {
  display: flex;
  gap: var(--spacing-3);
  align-items: center;
  flex-wrap: wrap;
}

.cert-badge-code {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-accent);
  background: var(--color-accent-light);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-sm);
}

.cert-date {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.cert-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-top: var(--spacing-3);
}

.cert-link,
.cert-download {
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

.cert-download--secondary {
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
}

.cert-link:hover,
.cert-download:hover {
  background: var(--color-accent);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--color-glow);
}

.cert-download--secondary:hover {
  background: var(--color-text-primary);
  color: var(--color-bg-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.cert-link svg,
.cert-download svg {
  width: 16px;
  height: 16px;
}

@media (max-width: 480px) {
  .cert-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>
