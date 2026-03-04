<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useLanguage } from '@/composables/useLanguage'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useLanguage()
const { elementRef: titleRef, isVisible } = useScrollAnimation()

const contactInfo = {
  email: 'sal.murolo@outlook.it',
  linkedin: 'https://www.linkedin.com/in/salvatore-murolo-5168593b4/',
  github: 'https://github.com/smurolo1996',
  location: 'Grumo Nevano (NA), Italia'
}

// Form state
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

async function handleSubmit(): Promise<void> {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    // Create mailto link with form data
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.value.subject)}&body=${encodeURIComponent(
      `Name: ${formData.value.name}\nEmail: ${formData.value.email}\n\n${formData.value.message}`
    )}`
    
    window.location.href = mailtoLink
    submitStatus.value = 'success'
    
    // Reset form after success
    formData.value = { name: '', email: '', subject: '', message: '' }
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    class="contact section"
  >
    <div class="container">
      <div class="contact-content">
        <h2
          ref="titleRef"
          :class="['section-title', 'fade-in', { visible: isVisible }]"
        >
          {{ t.contact.title }}
        </h2>
        <p class="contact-subtitle">
          {{ t.contact.subtitle }}
        </p>

        <div class="contact-layout">
          <!-- Contact Info -->
          <div class="contact-info-grid">
            <a
              :href="`mailto:${contactInfo.email}`"
              class="contact-item"
            >
              <div class="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div class="contact-info">
                <span class="contact-label">{{ t.contact.email }}</span>
                <span class="contact-value">{{ contactInfo.email }}</span>
              </div>
            </a>

            <a
              :href="contactInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-item"
            >
              <div class="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div class="contact-info">
                <span class="contact-label">LinkedIn</span>
                <span class="contact-value">Salvatore Murolo</span>
              </div>
            </a>

            <a
              :href="contactInfo.github"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-item"
            >
              <div class="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0a12 12 0 0 0-3.793 23.389c.6.111.82-.261.82-.58 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.004-.404c1.02.005 2.048.138 3.004.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.623-5.475 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.879-.015 3.27 0 .322.216.697.825.579A12 12 0 0 0 12 0z" />
                </svg>
              </div>
              <div class="contact-info">
                <span class="contact-label">GitHub</span>
                <span class="contact-value">smurolo1996</span>
              </div>
            </a>

            <div class="contact-item">
              <div class="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  />
                </svg>
              </div>
              <div class="contact-info">
                <span class="contact-label">{{ t.contact.location }}</span>
                <span class="contact-value">{{ contactInfo.location }}</span>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <form
            class="contact-form"
            @submit.prevent="handleSubmit"
          >
            <div class="form-row">
              <div class="form-group">
                <label
                  for="name"
                  class="form-label"
                >{{ t.contact.form.name }}</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="form-input"
                  :placeholder="t.contact.form.namePlaceholder"
                  required
                />
              </div>
              <div class="form-group">
                <label
                  for="email"
                  class="form-label"
                >{{ t.contact.form.email }}</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  :placeholder="t.contact.form.emailPlaceholder"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label
                for="subject"
                class="form-label"
              >{{ t.contact.form.subject }}</label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                class="form-input"
                :placeholder="t.contact.form.subjectPlaceholder"
                required
              />
            </div>

            <div class="form-group">
              <label
                for="message"
                class="form-label"
              >{{ t.contact.form.message }}</label>
              <textarea
                id="message"
                v-model="formData.message"
                class="form-textarea"
                :placeholder="t.contact.form.messagePlaceholder"
                rows="5"
                required
              ></textarea>
            </div>

            <div class="form-actions">
              <BaseButton
                type="submit"
                variant="primary"
                size="lg"
                :disabled="isSubmitting"
              >
                <svg
                  v-if="!isSubmitting"
                  class="btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line
                    x1="22"
                    y1="2"
                    x2="11"
                    y2="13"
                  />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <svg
                  v-else
                  class="btn-icon spinning"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke-dasharray="60"
                    stroke-dashoffset="20"
                  />
                </svg>
                {{ isSubmitting ? t.contact.form.sending : t.contact.form.send }}
              </BaseButton>
            </div>

            <p
              v-if="submitStatus === 'success'"
              class="form-message success"
            >
              {{ t.contact.form.success }}
            </p>
            <p
              v-if="submitStatus === 'error'"
              class="form-message error"
            >
              {{ t.contact.form.error }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: linear-gradient(180deg, var(--color-bg-secondary), var(--color-bg-primary));
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-accent-gradient);
}

.contact-content {
  max-width: 1000px;
  margin: 0 auto;
}

.contact-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-12);
  text-align: center;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--spacing-12);
  align-items: start;
}

.contact-info-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-item:hover {
  border-color: var(--color-accent);
  transform: translateX(4px);
  box-shadow: 0 4px 16px var(--color-glow);
}

.contact-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent-light);
  border-radius: var(--radius-md);
  color: var(--color-accent);
  flex-shrink: 0;
}

.contact-icon svg {
  width: 22px;
  height: 22px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-value {
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  font-weight: 500;
}

/* Form Styles */
.contact-form {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4);
}

.form-group {
  margin-bottom: var(--spacing-4);
}

.form-label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-2);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--color-glow);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text-muted);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: var(--spacing-6);
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.form-message {
  margin-top: var(--spacing-4);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  text-align: center;
}

.form-message.success {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.form-message.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .contact-info-grid {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .contact-item {
    flex: 1 1 200px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
