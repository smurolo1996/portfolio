<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageToggle from '@/components/ui/LanguageToggle.vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { id: 'about', labelKey: 'about' },
  { id: 'skills', labelKey: 'skills' },
  { id: 'experience', labelKey: 'experience' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'education', labelKey: 'education' },
  { id: 'certifications', labelKey: 'certifications' },
  { id: 'contact', labelKey: 'contact' }
] as const

function handleScroll(): void {
  isScrolled.value = window.scrollY > 50
}

function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}

function toggleMobileMenu(): void {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <div class="container header-content">
      <a
        href="#"
        class="logo"
        @click.prevent="scrollToSection('hero')"
      >
        <span class="logo-wrapper">
          <span class="logo-text">SM</span>
        </span>
      </a>

      <nav :class="['nav', { open: isMobileMenuOpen }]">
        <ul class="nav-list">
          <li
            v-for="item in navItems"
            :key="item.id"
          >
            <a
              :href="`#${item.id}`"
              class="nav-link"
              @click.prevent="scrollToSection(item.id)"
            >
              {{ t.nav[item.labelKey] }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <LanguageToggle />
        <ThemeToggle />
        <button
          class="mobile-menu-btn"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
          @click="toggleMobileMenu"
        >
          <span :class="['hamburger', { open: isMobileMenuOpen }]"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: var(--spacing-4) 0;
  background: transparent;
  transition: all var(--transition-base);
}

.header.scrolled {
  background: rgba(10, 14, 20, 0.95);
  backdrop-filter: blur(12px);
  padding: var(--spacing-3) 0;
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

[data-theme="light"] .header.scrolled {
  background: rgba(248, 250, 252, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-8);
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-wrapper {
  position: relative;
  padding: 8px 16px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg-card));
  border: 2px solid transparent;
  background-clip: padding-box;
  transition: all var(--transition-base);
}

.logo-wrapper::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: var(--radius-lg);
  background: var(--color-accent-gradient);
  z-index: -1;
  opacity: 0.8;
  transition: opacity var(--transition-base);
}

.logo-wrapper:hover::before {
  opacity: 1;
}

.logo-wrapper:hover {
  box-shadow: 0 0 20px var(--color-glow);
}

.logo-text {
  font-size: var(--font-size-xl);
  font-weight: 800;
  letter-spacing: 2px;
  background: var(--color-accent-gradient);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
}

.nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  gap: var(--spacing-8);
}

.nav-link {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent-gradient);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.mobile-menu-btn {
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.hamburger {
  position: relative;
  width: 20px;
  height: 2px;
  background: var(--color-text-primary);
  transition: all var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-text-primary);
  transition: all var(--transition-fast);
}

.hamburger::before {
  top: -6px;
}

.hamburger::after {
  top: 6px;
}

.hamburger.open {
  background: transparent;
}

.hamburger.open::before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger.open::after {
  top: 0;
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--color-bg-primary);
    border-bottom: 1px solid var(--color-border);
    padding: var(--spacing-6);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
  }

  .nav.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-list {
    flex-direction: column;
    gap: var(--spacing-4);
  }

  .nav-link {
    font-size: var(--font-size-lg);
  }
}
</style>
