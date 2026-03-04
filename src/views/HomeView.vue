<script setup lang="ts">
import TheHeader from '@/components/feature/TheHeader.vue'
import HeroSection from '@/components/feature/HeroSection.vue'
import AboutSection from '@/components/feature/AboutSection.vue'
import SkillsSection from '@/components/feature/SkillsSection.vue'
import ExperienceSection from '@/components/feature/ExperienceSection.vue'
import ProjectsSection from '@/components/feature/ProjectsSection.vue'
import EducationSection from '@/components/feature/EducationSection.vue'
import CertificationsSection from '@/components/feature/CertificationsSection.vue'
import ContactSection from '@/components/feature/ContactSection.vue'
</script>

<template>
  <div class="home-view">
    <TheHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </main>
    <footer class="footer">
      <div class="container">
        <p class="footer-text">
          &copy; {{ new Date().getFullYear() }} Salvatore Murolo. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.footer {
  padding: var(--spacing-8) 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.footer-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}
</style>
