<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import { useLanguage } from '@/composables/useLanguage'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { featuredProjects } from '@/data/projects'

const { t, getLocalizedText } = useLanguage()
const { elementRef, isVisible } = useScrollAnimation()

const currentScreen = ref<Record<string, number>>({})

function initScreenIndex(projectId: string): number {
  if (currentScreen.value[projectId] === undefined) {
    currentScreen.value[projectId] = 0
  }
  return currentScreen.value[projectId]
}

function nextScreen(projectId: string): void {
  currentScreen.value[projectId] = ((currentScreen.value[projectId] || 0) + 1) % 3
}

function prevScreen(projectId: string): void {
  currentScreen.value[projectId] = ((currentScreen.value[projectId] || 0) - 1 + 3) % 3
}
</script>

<template>
  <section
    id="projects"
    class="projects section"
  >
    <div class="container">
      <h2
        ref="elementRef"
        :class="['section-title', 'fade-in', { visible: isVisible }]"
      >
        {{ t.projects.title }}
      </h2>

      <div class="projects-grid">
        <BaseCard
          v-for="project in featuredProjects"
          :key="project.id"
          class="project-card"
        >
          <!-- SVG Illustration Carousel -->
          <div class="project-illustration">
            <button
              class="nav-btn prev"
              aria-label="Previous"
              @click.stop="prevScreen(project.id)"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            
            <div class="screens-container">
              <!-- RDT - Map with voltage monitoring -->
              <svg
                v-if="project.id === 'rdt-terna'"
                class="project-svg"
                viewBox="0 0 300 180"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="rdt-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color:var(--color-accent);stop-opacity:0.3"
                    />
                    <stop
                      offset="100%"
                      style="stop-color:var(--color-accent-secondary);stop-opacity:0.1"
                    />
                  </linearGradient>
                </defs>
                <!-- Screen 1: Map view -->
                <g v-if="initScreenIndex(project.id) === 0">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#rdt-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="180"
                    height="120"
                    rx="4"
                    fill="var(--color-bg-secondary)"
                    stroke="var(--color-border)"
                  />
                  <!-- Map elements -->
                  <path
                    d="M40 100 L80 70 L120 90 L160 50 L180 80"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="100"
                    r="5"
                    fill="var(--color-accent)"
                  />
                  <circle
                    cx="80"
                    cy="70"
                    r="5"
                    fill="var(--color-accent-secondary)"
                  />
                  <circle
                    cx="120"
                    cy="90"
                    r="5"
                    fill="var(--color-accent)"
                  />
                  <circle
                    cx="160"
                    cy="50"
                    r="5"
                    fill="var(--color-accent-secondary)"
                  />
                  <circle
                    cx="180"
                    cy="80"
                    r="5"
                    fill="var(--color-accent)"
                  />
                  <!-- Side panel -->
                  <rect
                    x="210"
                    y="20"
                    width="70"
                    height="120"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="215"
                    y="30"
                    width="60"
                    height="8"
                    rx="2"
                    fill="var(--color-accent)"
                    opacity="0.6"
                  />
                  <rect
                    x="215"
                    y="45"
                    width="40"
                    height="6"
                    rx="2"
                    fill="var(--color-text-muted)"
                  />
                  <rect
                    x="215"
                    y="60"
                    width="55"
                    height="6"
                    rx="2"
                    fill="var(--color-text-muted)"
                  />
                  <rect
                    x="215"
                    y="80"
                    width="60"
                    height="30"
                    rx="2"
                    fill="var(--color-bg-secondary)"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Real-time Map</text>
                </g>
                <!-- Screen 2: Charts -->
                <g v-else-if="currentScreen[project.id] === 1">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#rdt-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="25"
                    width="260"
                    height="100"
                    rx="4"
                    fill="var(--color-bg-secondary)"
                  />
                  <!-- Line chart -->
                  <path
                    d="M40 90 L80 70 L120 85 L160 45 L200 60 L240 40 L260 55"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                    fill="none"
                  />
                  <path
                    d="M40 95 L80 80 L120 95 L160 75 L200 85 L240 70 L260 75"
                    stroke="var(--color-accent-secondary)"
                    stroke-width="2"
                    fill="none"
                    stroke-dasharray="4"
                  />
                  <!-- Axis -->
                  <line
                    x1="35"
                    y1="30"
                    x2="35"
                    y2="115"
                    stroke="var(--color-text-muted)"
                    stroke-width="1"
                  />
                  <line
                    x1="35"
                    y1="115"
                    x2="265"
                    y2="115"
                    stroke="var(--color-text-muted)"
                    stroke-width="1"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Voltage Charts</text>
                </g>
                <!-- Screen 3: Dashboard -->
                <g v-else>
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#rdt-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="125"
                    height="65"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="155"
                    y="20"
                    width="125"
                    height="65"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="95"
                    width="260"
                    height="50"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <circle
                    cx="82"
                    cy="52"
                    r="20"
                    fill="none"
                    stroke="var(--color-accent)"
                    stroke-width="4"
                    stroke-dasharray="100"
                    stroke-dashoffset="25"
                  />
                  <text
                    x="82"
                    y="57"
                    font-size="12"
                    fill="var(--color-accent)"
                    text-anchor="middle"
                  >75%</text>
                  <circle
                    cx="217"
                    cy="52"
                    r="20"
                    fill="none"
                    stroke="var(--color-accent-secondary)"
                    stroke-width="4"
                    stroke-dasharray="100"
                    stroke-dashoffset="40"
                  />
                  <text
                    x="217"
                    y="57"
                    font-size="12"
                    fill="var(--color-accent-secondary)"
                    text-anchor="middle"
                  >60%</text>
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Dashboard</text>
                </g>
              </svg>

              <!-- Diagnostica SCADA -->
              <svg
                v-else-if="project.id === 'diagnostica-scada'"
                class="project-svg"
                viewBox="0 0 300 180"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="scada-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color:var(--color-accent);stop-opacity:0.3"
                    />
                    <stop
                      offset="100%"
                      style="stop-color:var(--color-accent-secondary);stop-opacity:0.1"
                    />
                  </linearGradient>
                </defs>
                <!-- Screen 1: Electrical diagram -->
                <g v-if="initScreenIndex(project.id) === 0">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#scada-grad)"
                    stroke="var(--color-border)"
                  />
                  <!-- Electrical diagram -->
                  <line
                    x1="50"
                    y1="60"
                    x2="250"
                    y2="60"
                    stroke="var(--color-accent)"
                    stroke-width="3"
                  />
                  <line
                    x1="50"
                    y1="120"
                    x2="250"
                    y2="120"
                    stroke="var(--color-accent-secondary)"
                    stroke-width="3"
                  />
                  <!-- Nodes -->
                  <rect
                    x="70"
                    y="45"
                    width="30"
                    height="30"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                  />
                  <rect
                    x="130"
                    y="45"
                    width="30"
                    height="30"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                  />
                  <rect
                    x="190"
                    y="45"
                    width="30"
                    height="30"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                  />
                  <line
                    x1="85"
                    y1="75"
                    x2="85"
                    y2="120"
                    stroke="var(--color-text-muted)"
                    stroke-width="1"
                    stroke-dasharray="4"
                  />
                  <line
                    x1="145"
                    y1="75"
                    x2="145"
                    y2="120"
                    stroke="var(--color-text-muted)"
                    stroke-width="1"
                    stroke-dasharray="4"
                  />
                  <line
                    x1="205"
                    y1="75"
                    x2="205"
                    y2="120"
                    stroke="var(--color-text-muted)"
                    stroke-width="1"
                    stroke-dasharray="4"
                  />
                  <circle
                    cx="85"
                    cy="60"
                    r="4"
                    fill="var(--color-accent)"
                  />
                  <circle
                    cx="145"
                    cy="60"
                    r="4"
                    fill="var(--color-accent)"
                  />
                  <circle
                    cx="205"
                    cy="60"
                    r="4"
                    fill="var(--color-accent)"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Electrical Diagram</text>
                </g>
                <!-- Screen 2: Device list -->
                <g v-else-if="currentScreen[project.id] === 1">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#scada-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="25"
                    width="260"
                    height="25"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="55"
                    width="260"
                    height="25"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="85"
                    width="260"
                    height="25"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="115"
                    width="260"
                    height="25"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <circle
                    cx="35"
                    cy="37"
                    r="6"
                    fill="var(--color-accent)"
                  />
                  <circle
                    cx="35"
                    cy="67"
                    r="6"
                    fill="var(--color-accent)"
                  />
                  <circle
                    cx="35"
                    cy="97"
                    r="6"
                    fill="#ef4444"
                  />
                  <circle
                    cx="35"
                    cy="127"
                    r="6"
                    fill="var(--color-accent)"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Device Monitoring</text>
                </g>
                <!-- Screen 3: Alerts -->
                <g v-else>
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#scada-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="60"
                    y="30"
                    width="180"
                    height="100"
                    rx="8"
                    fill="var(--color-bg-card)"
                    stroke="#ef4444"
                    stroke-width="2"
                  />
                  <polygon
                    points="150,50 165,80 135,80"
                    fill="#ef4444"
                  />
                  <text
                    x="150"
                    y="75"
                    font-size="16"
                    fill="white"
                    text-anchor="middle"
                  >!</text>
                  <text
                    x="150"
                    y="105"
                    font-size="11"
                    fill="var(--color-text-primary)"
                    text-anchor="middle"
                  >Anomaly Detected</text>
                  <rect
                    x="100"
                    y="115"
                    width="100"
                    height="10"
                    rx="2"
                    fill="var(--color-accent)"
                    opacity="0.8"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Alert System</text>
                </g>
              </svg>

              <!-- PSE Portal -->
              <svg
                v-else-if="project.id === 'pse-terna'"
                class="project-svg"
                viewBox="0 0 300 180"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="pse-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color:var(--color-accent);stop-opacity:0.3"
                    />
                    <stop
                      offset="100%"
                      style="stop-color:var(--color-accent-secondary);stop-opacity:0.1"
                    />
                  </linearGradient>
                </defs>
                <!-- Screen 1: Device config -->
                <g v-if="initScreenIndex(project.id) === 0">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#pse-grad)"
                    stroke="var(--color-border)"
                  />
                  <!-- Sidebar -->
                  <rect
                    x="15"
                    y="20"
                    width="60"
                    height="140"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="30"
                    width="50"
                    height="8"
                    rx="2"
                    fill="var(--color-accent)"
                  />
                  <rect
                    x="20"
                    y="45"
                    width="40"
                    height="6"
                    rx="2"
                    fill="var(--color-text-muted)"
                  />
                  <rect
                    x="20"
                    y="58"
                    width="45"
                    height="6"
                    rx="2"
                    fill="var(--color-text-muted)"
                  />
                  <rect
                    x="20"
                    y="71"
                    width="35"
                    height="6"
                    rx="2"
                    fill="var(--color-text-muted)"
                  />
                  <!-- Main panel -->
                  <rect
                    x="85"
                    y="20"
                    width="195"
                    height="140"
                    rx="4"
                    fill="var(--color-bg-secondary)"
                    stroke="var(--color-border)"
                  />
                  <text
                    x="105"
                    y="45"
                    font-size="10"
                    fill="var(--color-text-primary)"
                  >Device Configuration</text>
                  <rect
                    x="95"
                    y="55"
                    width="175"
                    height="20"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="95"
                    y="80"
                    width="175"
                    height="20"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="95"
                    y="105"
                    width="175"
                    height="20"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="200"
                    y="135"
                    width="60"
                    height="18"
                    rx="4"
                    fill="var(--color-accent)"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Protocol Config</text>
                </g>
                <!-- Screen 2: User profiles -->
                <g v-else-if="currentScreen[project.id] === 1">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#pse-grad)"
                    stroke="var(--color-border)"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="25"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                  />
                  <circle
                    cx="60"
                    cy="55"
                    r="10"
                    fill="var(--color-text-muted)"
                  />
                  <ellipse
                    cx="60"
                    cy="75"
                    rx="15"
                    ry="8"
                    fill="var(--color-text-muted)"
                  />
                  <rect
                    x="100"
                    y="35"
                    width="180"
                    height="60"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <text
                    x="120"
                    y="55"
                    font-size="10"
                    fill="var(--color-text-primary)"
                  >Admin User</text>
                  <text
                    x="120"
                    y="70"
                    font-size="8"
                    fill="var(--color-text-muted)"
                  >Full Access • SSO</text>
                  <rect
                    x="220"
                    y="45"
                    width="50"
                    height="15"
                    rx="2"
                    fill="var(--color-accent)"
                    opacity="0.3"
                  />
                  <text
                    x="245"
                    y="56"
                    font-size="8"
                    fill="var(--color-accent)"
                    text-anchor="middle"
                  >Active</text>
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >User Management</text>
                </g>
                <!-- Screen 3: Audit logs -->
                <g v-else>
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#pse-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="25"
                    width="260"
                    height="18"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="48"
                    width="260"
                    height="18"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="71"
                    width="260"
                    height="18"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="94"
                    width="260"
                    height="18"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="117"
                    width="260"
                    height="18"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <text
                    x="30"
                    y="37"
                    font-size="7"
                    fill="var(--color-text-muted)"
                  >10:45:32</text>
                  <text
                    x="30"
                    y="60"
                    font-size="7"
                    fill="var(--color-text-muted)"
                  >10:44:18</text>
                  <text
                    x="30"
                    y="83"
                    font-size="7"
                    fill="var(--color-text-muted)"
                  >10:42:55</text>
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Audit Logs</text>
                </g>
              </svg>

              <!-- Taxi Fly ADR -->
              <svg
                v-else-if="project.id === 'taxi-fly-adr'"
                class="project-svg"
                viewBox="0 0 300 180"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="taxi-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color:var(--color-accent);stop-opacity:0.3"
                    />
                    <stop
                      offset="100%"
                      style="stop-color:var(--color-accent-secondary);stop-opacity:0.1"
                    />
                  </linearGradient>
                </defs>
                <!-- Screen 1: Shift management -->
                <g v-if="initScreenIndex(project.id) === 0">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#taxi-grad)"
                    stroke="var(--color-border)"
                  />
                  <!-- Calendar grid -->
                  <rect
                    x="20"
                    y="25"
                    width="170"
                    height="120"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <g transform="translate(25, 35)">
                    <rect
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      rx="2"
                      fill="var(--color-bg-secondary)"
                    />
                    <rect
                      x="25"
                      y="0"
                      width="20"
                      height="20"
                      rx="2"
                      fill="var(--color-accent)"
                    />
                    <rect
                      x="50"
                      y="0"
                      width="20"
                      height="20"
                      rx="2"
                      fill="var(--color-bg-secondary)"
                    />
                    <rect
                      x="75"
                      y="0"
                      width="20"
                      height="20"
                      rx="2"
                      fill="var(--color-accent)"
                    />
                    <rect
                      x="100"
                      y="0"
                      width="20"
                      height="20"
                      rx="2"
                      fill="var(--color-bg-secondary)"
                    />
                    <rect
                      x="125"
                      y="0"
                      width="20"
                      height="20"
                      rx="2"
                      fill="var(--color-bg-secondary)"
                    />
                    <rect
                      x="0"
                      y="25"
                      width="20"
                      height="20"
                      rx="2"
                      fill="var(--color-accent-secondary)"
                    />
                    <rect
                      x="25"
                      y="25"
                      width="20"
                      height="20"
                      rx="2"
                      fill="var(--color-bg-secondary)"
                    />
                    <rect
                      x="50"
                      y="25"
                      width="20"
                      height="20"
                      rx="2"
                      fill="var(--color-accent)"
                    />
                  </g>
                  <!-- Side stats -->
                  <rect
                    x="200"
                    y="25"
                    width="80"
                    height="55"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="200"
                    y="90"
                    width="80"
                    height="55"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <text
                    x="240"
                    y="55"
                    font-size="16"
                    fill="var(--color-accent)"
                    text-anchor="middle"
                  >24</text>
                  <text
                    x="240"
                    y="70"
                    font-size="8"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Active Taxis</text>
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Shift Calendar</text>
                </g>
                <!-- Screen 2: IoT devices -->
                <g v-else-if="currentScreen[project.id] === 1">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#taxi-grad)"
                    stroke="var(--color-border)"
                  />
                  <!-- Airport layout -->
                  <rect
                    x="30"
                    y="30"
                    width="240"
                    height="100"
                    rx="4"
                    fill="var(--color-bg-secondary)"
                    stroke="var(--color-border)"
                  />
                  <!-- Gates -->
                  <rect
                    x="50"
                    y="50"
                    width="30"
                    height="40"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                  />
                  <rect
                    x="100"
                    y="50"
                    width="30"
                    height="40"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                  />
                  <rect
                    x="150"
                    y="50"
                    width="30"
                    height="40"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="#ef4444"
                    stroke-width="2"
                  />
                  <rect
                    x="200"
                    y="50"
                    width="30"
                    height="40"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                  />
                  <circle
                    cx="65"
                    cy="45"
                    r="4"
                    fill="var(--color-accent)"
                  />
                  <circle
                    cx="115"
                    cy="45"
                    r="4"
                    fill="var(--color-accent)"
                  />
                  <circle
                    cx="165"
                    cy="45"
                    r="4"
                    fill="#ef4444"
                  />
                  <circle
                    cx="215"
                    cy="45"
                    r="4"
                    fill="var(--color-accent)"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >IoT Barriers</text>
                </g>
                <!-- Screen 3: Reports -->
                <g v-else>
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#taxi-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="25"
                    width="260"
                    height="90"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <!-- Bar chart -->
                  <rect
                    x="40"
                    y="90"
                    width="25"
                    height="20"
                    fill="var(--color-accent)"
                    opacity="0.7"
                  />
                  <rect
                    x="75"
                    y="70"
                    width="25"
                    height="40"
                    fill="var(--color-accent)"
                    opacity="0.8"
                  />
                  <rect
                    x="110"
                    y="50"
                    width="25"
                    height="60"
                    fill="var(--color-accent)"
                  />
                  <rect
                    x="145"
                    y="60"
                    width="25"
                    height="50"
                    fill="var(--color-accent)"
                    opacity="0.9"
                  />
                  <rect
                    x="180"
                    y="75"
                    width="25"
                    height="35"
                    fill="var(--color-accent)"
                    opacity="0.75"
                  />
                  <rect
                    x="215"
                    y="85"
                    width="25"
                    height="25"
                    fill="var(--color-accent)"
                    opacity="0.6"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Statistics Report</text>
                </g>
              </svg>

              <!-- SiGeA ASL -->
              <svg
                v-else-if="project.id === 'sigea-asl'"
                class="project-svg"
                viewBox="0 0 300 180"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="sigea-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color:var(--color-accent);stop-opacity:0.3"
                    />
                    <stop
                      offset="100%"
                      style="stop-color:var(--color-accent-secondary);stop-opacity:0.1"
                    />
                  </linearGradient>
                </defs>
                <!-- Screen 1: Requirements dashboard -->
                <g v-if="initScreenIndex(project.id) === 0">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#sigea-grad)"
                    stroke="var(--color-border)"
                  />
                  <!-- Header -->
                  <rect
                    x="15"
                    y="15"
                    width="270"
                    height="30"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="25"
                    y="25"
                    width="80"
                    height="10"
                    rx="2"
                    fill="var(--color-accent)"
                  />
                  <!-- Cards -->
                  <rect
                    x="20"
                    y="55"
                    width="80"
                    height="50"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="110"
                    y="55"
                    width="80"
                    height="50"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="200"
                    y="55"
                    width="80"
                    height="50"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <text
                    x="60"
                    y="85"
                    font-size="16"
                    fill="var(--color-accent)"
                    text-anchor="middle"
                  >42</text>
                  <text
                    x="150"
                    y="85"
                    font-size="16"
                    fill="var(--color-accent-secondary)"
                    text-anchor="middle"
                  >18</text>
                  <text
                    x="240"
                    y="85"
                    font-size="16"
                    fill="var(--color-accent)"
                    text-anchor="middle"
                  >7</text>
                  <!-- Table -->
                  <rect
                    x="20"
                    y="115"
                    width="260"
                    height="45"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Requirements Plan</text>
                </g>
                <!-- Screen 2: Purchase requests -->
                <g v-else-if="currentScreen[project.id] === 1">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#sigea-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="25"
                    width="260"
                    height="25"
                    rx="4"
                    fill="var(--color-accent)"
                    opacity="0.2"
                  />
                  <text
                    x="30"
                    y="42"
                    font-size="9"
                    fill="var(--color-text-primary)"
                  >Purchase Requests</text>
                  <rect
                    x="20"
                    y="55"
                    width="260"
                    height="20"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="80"
                    width="260"
                    height="20"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="105"
                    width="260"
                    height="20"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <circle
                    cx="255"
                    cy="65"
                    r="6"
                    fill="var(--color-accent)"
                  />
                  <circle
                    cx="255"
                    cy="90"
                    r="6"
                    fill="#f59e0b"
                  />
                  <circle
                    cx="255"
                    cy="115"
                    r="6"
                    fill="var(--color-accent)"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Request Status</text>
                </g>
                <!-- Screen 3: SAP Integration -->
                <g v-else>
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#sigea-grad)"
                    stroke="var(--color-border)"
                  />
                  <!-- SAP flow -->
                  <rect
                    x="30"
                    y="50"
                    width="60"
                    height="40"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                  />
                  <text
                    x="60"
                    y="75"
                    font-size="10"
                    fill="var(--color-accent)"
                    text-anchor="middle"
                  >SiGeA</text>
                  <line
                    x1="90"
                    y1="70"
                    x2="130"
                    y2="70"
                    stroke="var(--color-accent)"
                    stroke-width="2"
                    marker-end="url(#arrow)"
                  />
                  <rect
                    x="130"
                    y="50"
                    width="60"
                    height="40"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <text
                    x="160"
                    y="75"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >API</text>
                  <line
                    x1="190"
                    y1="70"
                    x2="230"
                    y2="70"
                    stroke="var(--color-accent-secondary)"
                    stroke-width="2"
                  />
                  <rect
                    x="230"
                    y="50"
                    width="50"
                    height="40"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-accent-secondary)"
                    stroke-width="2"
                  />
                  <text
                    x="255"
                    y="75"
                    font-size="10"
                    fill="var(--color-accent-secondary)"
                    text-anchor="middle"
                  >SAP</text>
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >SAP Integration</text>
                </g>
              </svg>

              <!-- Areti ACEA -->
              <svg
                v-else-if="project.id === 'areti-acea'"
                class="project-svg"
                viewBox="0 0 300 180"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="areti-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color:var(--color-accent);stop-opacity:0.3"
                    />
                    <stop
                      offset="100%"
                      style="stop-color:var(--color-accent-secondary);stop-opacity:0.1"
                    />
                  </linearGradient>
                </defs>
                <!-- Screen 1: Map view -->
                <g v-if="initScreenIndex(project.id) === 0">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#areti-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="260"
                    height="130"
                    rx="4"
                    fill="var(--color-bg-secondary)"
                    stroke="var(--color-border)"
                  />
                  <!-- Map with markers -->
                  <path
                    d="M50 100 Q100 50 150 80 T250 60"
                    stroke="var(--color-text-muted)"
                    stroke-width="1"
                    fill="none"
                  />
                  <circle
                    cx="70"
                    cy="70"
                    r="8"
                    fill="var(--color-accent)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle
                    cx="120"
                    cy="90"
                    r="8"
                    fill="var(--color-accent)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle
                    cx="180"
                    cy="60"
                    r="8"
                    fill="#ef4444"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle
                    cx="230"
                    cy="80"
                    r="8"
                    fill="var(--color-accent)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <!-- Poles icon -->
                  <line
                    x1="70"
                    y1="70"
                    x2="70"
                    y2="45"
                    stroke="var(--color-text-muted)"
                    stroke-width="2"
                  />
                  <line
                    x1="120"
                    y1="90"
                    x2="120"
                    y2="65"
                    stroke="var(--color-text-muted)"
                    stroke-width="2"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Electric Poles Map</text>
                </g>
                <!-- Screen 2: Pole details -->
                <g v-else-if="currentScreen[project.id] === 1">
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#areti-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="150"
                    height="130"
                    rx="4"
                    fill="var(--color-bg-secondary)"
                    stroke="var(--color-border)"
                  />
                  <!-- Photo placeholder -->
                  <rect
                    x="30"
                    y="30"
                    width="130"
                    height="80"
                    rx="2"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <path
                    d="M70 90 L95 60 L120 80 L140 55"
                    stroke="var(--color-text-muted)"
                    fill="none"
                    stroke-width="2"
                  />
                  <circle
                    cx="95"
                    cy="50"
                    r="10"
                    fill="var(--color-text-muted)"
                    opacity="0.5"
                  />
                  <!-- Details panel -->
                  <rect
                    x="180"
                    y="20"
                    width="100"
                    height="130"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <text
                    x="190"
                    y="40"
                    font-size="9"
                    fill="var(--color-text-primary)"
                  >Pole #1247</text>
                  <rect
                    x="185"
                    y="50"
                    width="90"
                    height="6"
                    rx="2"
                    fill="var(--color-text-muted)"
                  />
                  <rect
                    x="185"
                    y="65"
                    width="70"
                    height="6"
                    rx="2"
                    fill="var(--color-text-muted)"
                  />
                  <rect
                    x="185"
                    y="85"
                    width="30"
                    height="20"
                    rx="2"
                    fill="#ef4444"
                    opacity="0.3"
                  />
                  <text
                    x="200"
                    y="99"
                    font-size="8"
                    fill="#ef4444"
                  >Fault</text>
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Pole Details</text>
                </g>
                <!-- Screen 3: Construction sites -->
                <g v-else>
                  <rect
                    x="10"
                    y="10"
                    width="280"
                    height="160"
                    rx="8"
                    fill="url(#areti-grad)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="20"
                    y="25"
                    width="260"
                    height="25"
                    rx="4"
                    fill="var(--color-accent)"
                    opacity="0.2"
                  />
                  <text
                    x="30"
                    y="42"
                    font-size="9"
                    fill="var(--color-text-primary)"
                  >Construction Sites</text>
                  <rect
                    x="20"
                    y="55"
                    width="125"
                    height="80"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <rect
                    x="155"
                    y="55"
                    width="125"
                    height="80"
                    rx="4"
                    fill="var(--color-bg-card)"
                    stroke="var(--color-border)"
                  />
                  <text
                    x="82"
                    y="80"
                    font-size="10"
                    fill="var(--color-text-primary)"
                    text-anchor="middle"
                  >Via Roma</text>
                  <rect
                    x="40"
                    y="90"
                    width="90"
                    height="6"
                    rx="2"
                    fill="var(--color-accent)"
                  />
                  <rect
                    x="40"
                    y="100"
                    width="60"
                    height="6"
                    rx="2"
                    fill="var(--color-accent)"
                    opacity="0.5"
                  />
                  <text
                    x="217"
                    y="80"
                    font-size="10"
                    fill="var(--color-text-primary)"
                    text-anchor="middle"
                  >Via Milano</text>
                  <rect
                    x="175"
                    y="90"
                    width="70"
                    height="6"
                    rx="2"
                    fill="#f59e0b"
                  />
                  <text
                    x="150"
                    y="155"
                    font-size="10"
                    fill="var(--color-text-muted)"
                    text-anchor="middle"
                  >Sites Overview</text>
                </g>
              </svg>
            </div>

            <button
              class="nav-btn next"
              aria-label="Next"
              @click.stop="nextScreen(project.id)"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            
            <div class="screen-dots">
              <span 
                v-for="i in 3" 
                :key="i" 
                :class="['dot', { active: (currentScreen[project.id] || 0) === i - 1 }]"
              ></span>
            </div>
          </div>

          <div class="project-header">
            <span class="project-client">{{ project.client }}</span>
            <span class="project-year">{{ project.year }}</span>
          </div>
          <h3 class="project-title">
            {{ getLocalizedText(project.titleIt, project.titleEn) }}
          </h3>
          <p class="project-system">
            {{ getLocalizedText(project.systemIt, project.systemEn) }}
          </p>
          <p class="project-description">
            {{ getLocalizedText(project.descriptionIt, project.descriptionEn) }}
          </p>
          <div class="project-stack">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-6);
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-6);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.project-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(20, 184, 166, 0.08) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 50px rgba(20, 184, 166, 0.2), 0 0 0 1px var(--color-border-glow);
}

.project-card:hover::after {
  opacity: 1;
}

.project-illustration {
  position: relative;
  margin-bottom: var(--spacing-4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
}

.screens-container {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-svg {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.nav-btn:hover {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
}

.nav-btn.prev {
  left: 0;
}

.nav-btn.next {
  right: 0;
}

.nav-btn svg {
  width: 16px;
  height: 16px;
}

.screen-dots {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-text-muted);
  opacity: 0.4;
  transition: all 0.2s ease;
}

.dot.active {
  background: var(--color-accent);
  opacity: 1;
  transform: scale(1.2);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-4);
}

.project-client {
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  font-weight: 600;
}

.project-year {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  background: var(--color-bg-secondary);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-sm);
}

.project-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-3);
}

.project-system {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  border-bottom: 1px solid var(--color-border);
}

.project-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--spacing-6);
  flex: 1;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-top: auto;
}

.tech-tag {
  font-size: var(--font-size-xs);
  color: var(--color-accent);
  background: var(--color-accent-light);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-weight: 500;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background: var(--color-accent);
  color: white;
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .nav-btn {
    width: 28px;
    height: 28px;
  }
}
</style>
