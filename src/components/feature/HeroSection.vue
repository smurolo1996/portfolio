<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

const currentRoleIndex = ref(0)
const displayedText = ref('')
const isTyping = ref(true)

let typingInterval: number | null = null
let roleTimeout: number | null = null

function typeRole(): void {
  const roles = t.value.hero.roles
  const currentRole = roles[currentRoleIndex.value]

  if (isTyping.value) {
    if (displayedText.value.length < currentRole.length) {
      displayedText.value = currentRole.slice(0, displayedText.value.length + 1)
    } else {
      isTyping.value = false
      roleTimeout = window.setTimeout(() => {
        isTyping.value = false
        deleteRole()
      }, 2000)
    }
  }
}

function deleteRole(): void {
  if (displayedText.value.length > 0) {
    displayedText.value = displayedText.value.slice(0, -1)
    roleTimeout = window.setTimeout(deleteRole, 50)
  } else {
    currentRoleIndex.value = (currentRoleIndex.value + 1) % t.value.hero.roles.length
    isTyping.value = true
  }
}

function scrollToContact(): void {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  typingInterval = window.setInterval(typeRole, 100)
})

onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval)
  if (roleTimeout) clearTimeout(roleTimeout)
})
</script>

<template>
  <section id="hero" class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <p class="hero-greeting">
          {{ t.hero.greeting }}
        </p>
        <h1 class="hero-name">
          SALVATORE<br />MUROLO
        </h1>
        <div class="hero-role">
          <span class="role-text">{{ displayedText }}</span>
          <span class="cursor">|</span>
        </div>
        <p class="hero-tagline">
          {{ t.hero.tagline }}
        </p>
        <div class="hero-actions">
          <BaseButton variant="primary" size="lg" href="/Salvatore-Murolo-CV.pdf" download>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            {{ t.hero.downloadCv }}
          </BaseButton>
          <BaseButton variant="outline" size="lg" @click="scrollToContact">
            {{ t.hero.contactMe }}
          </BaseButton>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-wrapper">
          <img src="/fototessera Salvatore Murolo.png" alt="Salvatore Murolo" class="profile-photo" />
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: var(--spacing-16);
  background: radial-gradient(ellipse at top right, rgba(20, 184, 166, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at bottom left, rgba(6, 182, 212, 0.06) 0%, transparent 50%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-16);
  align-items: center;
}

.hero-greeting {
  font-size: var(--font-size-xl);
  color: var(--color-accent);
  font-weight: 500;
  margin-bottom: var(--spacing-2);
}

.hero-name {
  font-size: var(--font-size-7xl);
  font-weight: 800;
  line-height: 1;
  margin-bottom: var(--spacing-4);
  background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 50%, var(--color-accent-secondary) 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 4s ease infinite;
}

.hero-role {
  font-size: var(--font-size-2xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-6);
  min-height: 2.5rem;
}

.role-text {
  color: var(--color-accent);
  font-weight: 600;
}

.cursor {
  animation: blink 1s infinite;
  color: var(--color-accent);
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.hero-tagline {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-8);
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-4);
  flex-wrap: wrap;
}

.btn-icon {
  width: 20px;
  height: 20px;
}

.hero-image {
  display: flex;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 350px;
  height: 350px;
  margin-top: var(--spacing-8);
}

.image-wrapper::before {
  content: '';
  position: absolute;
  inset: -6px;
  background: var(--color-accent-gradient);
  background-size: 200% 200%;
  border-radius: 50%;
  animation: rotate 6s linear infinite, gradient-shift 3s ease infinite;
  transition: all 0.4s ease;
}

.image-wrapper:hover::before {
  inset: -10px;
  filter: blur(6px);
  opacity: 0.85;
}

.image-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.image-wrapper:hover::after {
  opacity: 1;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.profile-photo {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  border-radius: 50%;
  border: 4px solid var(--color-bg-primary);
  transition: transform 0.4s ease, box-shadow 0.4s ease, filter 0.4s ease;
  filter: saturate(1) brightness(1);
}

.image-wrapper:hover .profile-photo {
  transform: scale(1.03);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3), 0 0 30px var(--color-glow);
  filter: saturate(1.1) brightness(1.05);
}

.scroll-indicator {
  position: absolute;
  bottom: var(--spacing-8);
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-indicator svg {
  width: 32px;
  height: 32px;
  color: var(--color-text-muted);
}

@keyframes bounce {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-name {
    font-size: var(--font-size-5xl);
  }

  .hero-tagline {
    margin: 0 auto var(--spacing-8);
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image {
    order: -1;
  }

  .image-wrapper {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: var(--font-size-4xl);
  }

  .hero-role {
    font-size: var(--font-size-xl);
  }

  .hero-actions {
    flex-direction: column;
  }
}
</style>
