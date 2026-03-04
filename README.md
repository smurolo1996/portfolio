# 💼 Salvatore Murolo - Portfolio CV

[![Vue 3](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Pinia](https://img.shields.io/badge/Pinia-3.0-FFD859?style=flat&logo=vue.js&logoColor=white)](https://pinia.vuejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

Portfolio CV professionale sviluppato con Vue 3, TypeScript e Vite, che implementa un'architettura moderna e scalabile basata sul Composition API pattern. Include tema dinamico dark/light con persistenza, sistema di internazionalizzazione completo (IT/EN), animazioni performanti e deployment containerizzato con Docker e Nginx.

---

## ✨ Caratteristiche Principali

- 🎨 **Design Moderno e Responsive** - Layout completamente responsive ottimizzato per desktop, tablet e mobile
- 🌓 **Dark/Light Mode** - Sistema di temi dinamico con persistenza automatica su LocalStorage
- 🌍 **Internazionalizzazione** - Supporto completo Italiano/Inglese con switch in tempo reale e traduzioni strutturate
- ⚡ **Performance Ottimizzate** - Build production ottimizzata con Vite, code splitting automatico e lazy loading
- 🧩 **Composition API Pattern** - Architettura modulare basata su composables riutilizzabili che separano logica e presentazione
- ♿ **Accessibilità WCAG 2.1** - Implementazione conforme agli standard Level AA con semantic HTML, ARIA labels e navigazione da tastiera
- 🎭 **Animazioni Performanti** - Intersection Observer API per animazioni scroll-based ottimizzate e non bloccanti
- 🔒 **Type-Safe** - TypeScript completo con strict mode per type safety, autocomplete e refactoring sicuro
- 📦 **State Management** - Pinia per gestione centralizzata dello stato applicativo
- 🐳 **Docker Ready** - Containerizzazione completa con Dockerfile multi-stage e configurazione Nginx production-ready

---

## 🏗️ Architettura del Progetto

Il progetto segue le best practices di Vue 3 con una struttura modulare e scalabile:

```
smuroloCV/
├── public/                          # File statici (CV PDF, favicon, ecc.)
│   └── salvatore_murolo_cv_2026.txt
├── src/
│   ├── assets/                      # Risorse statiche (CSS, immagini)
│   │   └── styles/
│   │       ├── base.css            # Stili globali e reset
│   │       └── variables.css       # Variabili CSS custom properties
│   ├── components/
│   │   ├── feature/                # Componenti feature specifiche
│   │   │   ├── AboutSection.vue    # Sezione "Chi sono" con statistiche
│   │   │   ├── CertificationsSection.vue  # Certificazioni professionali
│   │   │   ├── ContactSection.vue  # Form di contatto e social links
│   │   │   ├── ExperienceSection.vue      # Timeline esperienze lavorative
│   │   │   ├── HeroSection.vue     # Hero con effetto typing
│   │   │   ├── ProjectsSection.vue # Portfolio progetti
│   │   │   ├── SkillsSection.vue   # Competenze tecniche categorizzate
│   │   │   └── TheHeader.vue       # Header navigation con scroll spy
│   │   └── ui/                     # Componenti UI riutilizzabili
│   │       ├── BaseButton.vue      # Bottone con varianti e stati
│   │       ├── BaseCard.vue        # Card container generico
│   │       ├── LanguageToggle.vue  # Toggle lingua IT/EN
│   │       ├── SkillBadge.vue      # Badge competenze con livelli
│   │       └── ThemeToggle.vue     # Toggle dark/light mode
│   ├── composables/                # Logica riutilizzabile (Composition API)
│   │   ├── useLanguage.ts          # Gestione lingua e traduzioni
│   │   ├── useScrollAnimation.ts   # Intersection Observer per animazioni
│   │   └── useTheme.ts             # Gestione tema dark/light
│   ├── data/                       # Dati strutturati (separati dalla UI)
│   │   ├── certifications.ts       # Lista certificazioni
│   │   ├── experiences.ts          # Timeline esperienze professionali
│   │   ├── projects.ts             # Portfolio progetti completati
│   │   ├── skills.ts               # Competenze tecniche per categoria
│   │   └── translations.ts         # Type definitions per traduzioni
│   ├── locales/                    # File traduzioni i18n
│   │   ├── en.json                 # Traduzioni inglesi
│   │   └── it.json                 # Traduzioni italiane
│   ├── router/                     # Vue Router configuration
│   │   └── index.ts                # Definizione routes
│   ├── stores/                     # Pinia store (state management)
│   │   └── useAppStore.ts          # Store globale (theme, language)
│   ├── types/                      # TypeScript type definitions
│   │   └── index.ts                # Types globali e interfaces
│   ├── views/                      # View components (pages)
│   │   └── HomeView.vue            # View principale (landing page)
│   ├── App.vue                     # Root component
│   ├── main.ts                     # Entry point dell'applicazione
│   └── env.d.ts                    # TypeScript environment types
├── .dockerignore                    # File esclusi dal build Docker
├── .gitignore                       # File esclusi da Git
├── Dockerfile                       # Container configuration
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML template
├── nginx.conf                       # Nginx web server config
├── package.json                     # Dependencies e scripts npm
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.node.json               # TypeScript config per Node
├── vite.config.ts                   # Vite bundler configuration
└── README.md                        # Questo file
```

---

## 🎯 Pattern Composition API

Il progetto utilizza il **Composition API pattern** di Vue 3 per separare la logica di business dalla presentazione:

### ✅ **Composables Disponibili**

#### `useLanguage()`
Gestisce la lingualization dell'applicazione con supporto IT/EN.

```typescript
const { 
  currentLanguage,    // Lingua corrente ('it' | 'en')
  isItalian,          // Boolean helper
  t,                  // Oggetto traduzioni reattivo
  toggleLanguage,     // Switch tra lingue
  getLocalizedText    // Ottieni testo localizzato da due stringhe
} = useLanguage()
```

#### `useTheme()`
Gestisce il tema dark/light con persistenza su localStorage.

```typescript
const { 
  currentTheme,       // Tema corrente ('dark' | 'light')
  isDark,             // Boolean helper
  toggleTheme         // Switch tra temi
} = useTheme()
```

#### `useScrollAnimation(threshold?)`
Gestisce le animazioni basate su scroll con Intersection Observer API.

```typescript
const { 
  elementRef,         // Ref da assegnare all'elemento DOM
  isVisible           // Boolean reattivo (true quando visibile)
} = useScrollAnimation(0.1)
```

### 📊 **State Management con Pinia**

Lo store centralizzato gestisce lo stato globale dell'applicazione:

```typescript
// src/stores/useAppStore.ts
const appStore = useAppStore()

appStore.theme         // 'light' | 'dark'
appStore.language      // 'it' | 'en'
appStore.isDark        // Boolean computed
appStore.isItalian     // Boolean computed

appStore.toggleTheme()    // Switch tema
appStore.toggleLanguage() // Switch lingua
```

---

## 🚀 Installazione e Avvio

### Requisiti di Sistema

Il progetto richiede le seguenti versioni minime:
- **Node.js** >= 24.14.0
- **npm** >= 11.0.0

### Setup Locale

```bash
# Clonazione del repository
git clone https://github.com/salvatoremurolo/smuroloCV.git
cd smuroloCV

# Installazione dipendenze
npm.cmd install
# oppure su sistemi Unix/Linux/macOS
npm install
```

### Modalità Development

Avvio del server di sviluppo con Hot Module Replacement (HMR):

```bash
npm.cmd run dev
```

**Server disponibile su**: `http://localhost:5173`

Caratteristiche della modalità development:
- **Hot Reload** automatico al salvataggio dei file
- **Source Maps** per debugging facilitato
- **Error Overlay** con stack trace dettagliati
- **Fast Refresh** per preservare lo stato dei componenti

### Build di Produzione

Generazione della build ottimizzata:

```bash
# Compilazione TypeScript + Build Vite
npm.cmd run build

# Anteprima locale della build di produzione
npm.cmd run preview
```

**Output**: Directory `dist/` con asset ottimizzati e minificati

Caratteristiche della build:
- **Code Splitting** automatico per chunk ottimali
- **Minification** di JavaScript e CSS
- **Tree Shaking** per rimozione codice non utilizzato
- **Asset Hashing** per cache busting
- **Source Maps** di produzione (opzionali)

### Quality Assurance

```bash
# Verifica codice con ESLint
npm.cmd run lint

# Auto-fix errori ESLint
npm.cmd run lint:fix

# Type checking TypeScript completo
npm.cmd run type-check
```

---

## 🐳 Deployment con Docker

Il progetto include una configurazione Docker completa con build multi-stage e server Nginx ottimizzato per ambienti di produzione.

### Architettura Docker

**Multi-Stage Build**
1. **Stage Builder** - Node.js 24.14-alpine per compilazione Vue + TypeScript
2. **Stage Production** - Nginx 1.27-alpine per serving statico ottimizzato

**File di Configurazione**
- [Dockerfile](Dockerfile) - Multi-stage build configuration
- [.dockerignore](.dockerignore) - Esclusione file non necessari (node_modules, rules/, .env*)
- [nginx.conf](nginx.conf) - Configurazione Nginx production-ready

### Build e Deploy

**Creazione Docker Image**
```bash
# Build dell'immagine con tag
docker build -t smurolo-portfolio:latest .

# Build con nome personalizzato
docker build -t salvatoremurolo/portfolio:1.0.0 .
```

**Esecuzione Container**
```bash
# Avvio in modalità detached (background)
docker run -d \
  -p 8080:80 \
  --name portfolio \
  --restart unless-stopped \
  smurolo-portfolio:latest

# Verifica logs
docker logs -f portfolio

# Health check
curl http://localhost:8080/health
```

**Applicazione disponibile su**: `http://localhost:8080`

### Caratteristiche Nginx

La configurazione Nginx implementa:

**Performance**
- **Gzip Compression** per tutti i file testuali (HTML, CSS, JS, JSON, SVG)
- **Static Asset Caching** con cache a lungo termine per asset immutabili
- **Sendfile** e **TCP optimizations** per trasferimenti efficienti

**Security Headers**
- `X-Frame-Options: SAMEORIGIN` - Protezione clickjacking
- `X-Content-Type-Options: nosniff` - Prevenzione MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Filtro XSS browser
- `Referrer-Policy: no-referrer-when-downgrade` - Privacy referrer

**SPA Support**
- Fallback automatico a `index.html` per routing client-side Vue Router
- Cache policy differenziata per HTML (no-cache) e asset statici (1 anno)

**Health Monitoring**
- Endpoint `/health` per check di disponibilità
- Healthcheck Docker integrato con polling automatico

### Docker Compose (Opzionale)

Per orchestrazione semplificata, creare `docker-compose.yml`:

```yaml
version: '3.8'

services:
  portfolio:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: smurolo-portfolio
    ports:
      - "8080:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

**Avvio con Docker Compose**
```bash
# Start servizi in background
docker-compose up -d

# Visualizza logs
docker-compose logs -f

# Stop e rimozione
docker-compose down
```

---

## 🛠️ Stack Tecnologico Completo

### Core Framework & Language
- **Vue 3.5.13** - Progressive JavaScript Framework con Composition API
- **TypeScript 5.8.3** - Strongly typed superset di JavaScript con strict mode
- **Vite 7.0.1** - Next generation build tool con HMR ultra-veloce

### State Management & Routing
- **Pinia 3.0.3** - Store pattern ufficiale Vue.js con Devtools integration
- **Vue Router 4.5.1** - Official client-side router con lazy loading support

### Development Experience
- **@vueuse/core 12.8.2** - Collection di composable utilities essenziali
- **ESLint 9.27.0** - Pluggable JavaScript/TypeScript linter
- **@typescript-eslint** - TypeScript parser e plugin per ESLint
- **Prettier** - Opinionated code formatter integrato
- **vue-tsc 2.2.10** - TypeScript command line compiler per Vue SFC

### Production Infrastructure
- **Docker** - Containerizzazione con multi-stage build
- **Nginx 1.27-alpine** - High-performance HTTP server e reverse proxy
- **Node.js 24.14-alpine** - Runtime JavaScript per build process

### Design & Styling
- **CSS Custom Properties** - Sistema di design token nativo
- **CSS Modules Scoped** - Isolamento stili per componente
- **Responsive Design** - Mobile-first con breakpoint system
- **Intersection Observer API** - Lazy loading e scroll animations

---

## 📁 Struttura Dati e Content Management

Il progetto implementa una separazione netta tra **logica di presentazione** e **contenuto**, facilitando manutenibilità e aggiornamenti.

### Moduli Dati Disponibili

#### [data/skills.ts](src/data/skills.ts)
Definizione strutturata delle competenze tecniche organizzate per categoria.

**Struttura**:
```typescript
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    labelIt: 'Frontend Development',
    labelEn: 'Frontend Development',
    skills: [
      { name: 'Vue 3', level: 'expert' },
      { name: 'Angular', level: 'expert' },
      { name: 'React', level: 'advanced' },
      // ... altre competenze
    ]
  },
  // ... altre categorie
]
```

**Livelli disponibili**: `expert`, `advanced`, `intermediate`

#### [data/experiences.ts](src/data/experiences.ts)
Timeline completa delle esperienze professionali con progetti associati.

**Struttura**:
```typescript
export const experiences: Experience[] = [
  {
    id: 'terna',
    company: 'Terna SpA',
    role: 'Full Stack Developer',
    period: {
      start: '2023-01',
      end: null // null = ongoing
    },
    projects: [
      {
        name: 'Portale RDT',
        descriptionIt: '...',
        descriptionEn: '...',
        technologies: ['Vue 3', 'Spring Boot', 'RabbitMQ']
      }
    ]
  }
]
```

#### [data/certifications.ts](src/data/certifications.ts)
Elenco certificazioni professionali conseguite.

**Struttura**:
```typescript
export const certifications: Certification[] = [
  {
    id: 'ckad',
    name: 'CKAD - Certified Kubernetes Application Developer',
    issuer: 'Linux Foundation',
    date: '2025-03',
    credentialUrl: 'https://...',
    logo: '/certifications/ckad-logo.svg'
  }
]
```

#### [data/projects.ts](src/data/projects.ts)
Portfolio progetti personali e open source.

**Struttura**:
```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    titleIt: 'Titolo Progetto',
    titleEn: 'Project Title',
    descriptionIt: '...',
    descriptionEn: '...',
    technologies: ['Vue 3', 'TypeScript'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...',
    image: '/projects/preview.jpg'
  }
]
```

### Sistema di Internazionalizzazione

#### [locales/it.json](src/locales/it.json) & [locales/en.json](src/locales/en.json)
File JSON strutturati per traduzioni complete.

**Struttura**:
```json
{
  "hero": {
    "greeting": "Ciao, sono",
    "roles": ["Full Stack Developer", "Software Architect"],
    "tagline": "Sviluppo applicazioni web...",
    "downloadCv": "Scarica CV"
  },
  "about": {
    "title": "Chi Sono",
    "description": "...",
    "stats": {
      "years": "Anni Esperienza",
      "projects": "Progetti"
    }
  }
}
```

**Gestione**: Composable `useLanguage()` con switch real-time e persistenza

---

## 🎨 Sistema di Temi

Il progetto implementa un sistema di temi completamente personalizzabile attraverso CSS Custom Properties definite in [assets/styles/variables.css](src/assets/styles/variables.css).

### Architettura del Sistema Temi

**Variabili CSS Globali**
```css
:root {
  /* Palette Colori */
  --color-primary: #2563eb;
  --color-accent: #8b5cf6;
  --color-bg-primary: #ffffff;
  --color-text-primary: #1e293b;
  
  /* Sistema di Spaziatura */
  --spacing-unit: 4px;
  --spacing-4: calc(var(--spacing-unit) * 4); /* 16px */
  
  /* Tipografia */
  --font-size-base: 16px;
  --font-family-base: 'Inter', system-ui, sans-serif;
  
  /* Transizioni */
  --transition-fast: 0.2s ease;
}
```

**Dark Mode Override**
```css
[data-theme='dark'] {
  --color-bg-primary: #0f172a;
  --color-bg-secondary: #1e293b;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #cbd5e1;
  --color-border: #334155;
}
```

**Gestione Dinamica**
- Switch tema tramite composable `useTheme()`
- Persistenza automatica su LocalStorage
- Applicazione CSS custom properties in tempo reale
- Transizioni smooth tra i temi

---

## ♿ Standard di Accessibilità

Il progetto implementa gli standard **WCAG 2.1 Level AA** con particolare attenzione a:

### Conformità Implementata

**Semantic HTML5**
- Uso appropriato di tag semantici (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`)
- Gerarchia dei heading logica e progressiva (h1 → h2 → h3)
- Landmark regions per screen reader navigation

**ARIA Labels e Attributes**
- `aria-label` su tutti gli elementi interattivi
- `role` attributes appropriati per componenti custom
- `aria-current` per navigazione attiva
- `aria-hidden` per elementi decorativi

**Navigazione da Tastiera**
- Supporto completo `Tab` / `Shift+Tab`
- Focus indicators visibili e personalizzati
- Ordine di tabulazione logico e intuitivo
- Shortcuts accessibili

**Contrasto e Leggibilità**
- Ratio di contrasto minimo 4.5:1 per testo normale
- Ratio 7:1 per testi grandi e heading
- Dimensioni font responsive e scalabili
- Line-height ottimizzato per leggibilità (1.6-1.8)

**Compatibilità Screen Reader**
- Testato con NVDA e JAWS
- Alternative testuali per contenuti non testuali
- Skip links per navigazione rapida

---

## � Performance e Ottimizzazioni

### Metriche di Performance
Il progetto è ottimizzato per raggiungere le seguenti metriche Lighthouse:
- ⚡ **Performance**: 95+
- ♿ **Accessibility**: 100
- 🎯 **Best Practices**: 100
- 🔍 **SEO**: 100

### Tecniche di Ottimizzazione Implementate
- **Code Splitting Automatico** - Vite genera automaticamente chunk ottimizzati per il lazy loading
- **Tree Shaking** - Rimozione automatica del codice non utilizzato durante il build
- **Asset Optimization** - Minification e compression di CSS, JavaScript e asset statici
- **Lazy Loading** - Caricamento differito delle immagini e delle risorse non critiche
- **CSS Scoped** - Isolamento degli stili per evitare conflitti e ridurre il CSS globale
- **Intersection Observer** - Animazioni performanti basate sulla visibilità degli elementi
- **LocalStorage Caching** - Persistenza delle preferenze utente (tema e lingua)
- **Nginx Gzip Compression** - Compressione HTTP per ridurre la dimensione dei trasferimenti

---

## 📄 Licenza

Questo progetto è di proprietà esclusiva di **Salvatore Murolo**. Tutti i diritti sono riservati.

---

## 👤 Autore

**Salvatore Murolo**  
*Full Stack Developer • Software Architect • Tech Lead*

- 📧 **Email**: sal.murolo@outlook.it
- 💼 **LinkedIn**: [linkedin.com/in/salvatore-murolo-5168593b4/](https://linkedin.com/in/salvatore-murolo-5168593b4/)

---

## 🙏 Credits

Tecnologie e strumenti utilizzati:

- [Vue.js](https://vuejs.org/) - Progressive JavaScript Framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Pinia](https://pinia.vuejs.org/) - Intuitive State Management
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Nginx](https://nginx.org/) - High-performance HTTP server
- [Docker](https://www.docker.com/) - Containerization platform

---

<div align="center">

**Realizzato con ❤️ e ☕ da Salvatore Murolo**

*© 2026 Salvatore Murolo. All rights reserved.*

</div>
