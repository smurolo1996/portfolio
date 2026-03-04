import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'terna',
    client: 'Terna SpA',
    role: 'Full Stack Developer',
    periodIt: 'Gen 2023 - Presente',
    periodEn: 'Jan 2023 - Present',
    stack: ['Vue 3', 'Spring Boot', 'RabbitMQ', 'MySQL', 'InfluxDB', 'Leaflet', 'PostGIS', 'Keycloak', 'MongoDB', 'Kong', 'NATS', 'SSE', 'Figma'],
    projects: [
      {
        nameIt: 'Portale RDT — Regolazione di tensione con mappe real-time',
        nameEn: 'RDT Portal — Real-time voltage regulation with maps',
        descriptionIt: 'Sistema di regolazione e monitoraggio della tensione di centrali elettriche con integrazione su mappa',
        descriptionEn: 'Voltage regulation and monitoring system for power plants with map integration',
        activityIt: 'Ho progettato i mockup, sviluppato il frontend con Vue 3 e integrato API REST/WS per visualizzare dati di tensione su mappe e grafici interattivi real-time',
        activityEn: 'I designed mockups, developed the frontend with Vue 3 and integrated REST/WS APIs to display voltage data on real-time interactive maps and charts'
      },
      {
        nameIt: 'Portale Diagnostica — SCADA real-time per monitoraggio dispositivi',
        nameEn: 'Diagnostics Portal — Real-time SCADA for device monitoring',
        descriptionIt: 'Sistema SCADA che consente il monitoraggio e la gestione in real-time di tutti i dispositivi connessi alla rete con avvisi su anomalie',
        descriptionEn: 'SCADA system for real-time monitoring and management of all network-connected devices with anomaly alerts',
        activityIt: 'Ho sviluppato il Frontend in Vue 3 e creato API REST e SSE per visualizzare diagrammi elettrici interattivi generati dinamicamente da dati JSON',
        activityEn: 'I developed the Frontend in Vue 3 and created REST and SSE APIs to display interactive electrical diagrams dynamically generated from JSON data'
      },
      {
        nameIt: 'Portale PSE — Configurazione dispositivi tramite protocolli industriali',
        nameEn: 'PSE Portal — Device configuration via industrial protocols',
        descriptionIt: 'Portale dedicato alla configurazione di dispositivi elettronici seguendo vari protocolli di rete predefiniti',
        descriptionEn: 'Portal dedicated to electronic device configuration following various predefined network protocols',
        activityIt: 'Sviluppo del Frontend in Vue 3, integrazione SSO con Keycloak, gestione profili utente, log eventi, visualizzazione audit e implementazione upload dispositivi da file',
        activityEn: 'Frontend development in Vue 3, SSO integration with Keycloak, user profile management, event logs, audit visualization and device upload implementation from file'
      },
      {
        nameIt: 'Libreria UI Terna — Design system npm',
        nameEn: 'Terna UI Library — npm design system',
        descriptionIt: 'Creazione di una libreria UI distribuita via npm per uniformare l\'interfaccia grafica dei vari portali aziendali',
        descriptionEn: 'Creation of a UI library distributed via npm to standardize the visual interface of various corporate portals',
        activityIt: 'Ho creato componenti grafici responsive e accessibili in Vue 3, basati su design Figma, garantendo la conformità agli standard di accessibilità',
        activityEn: 'I created responsive and accessible graphic components in Vue 3, based on Figma design, ensuring compliance with accessibility standards'
      }
    ]
  },
  {
    id: 'enel',
    client: 'Enel',
    role: 'Frontend Developer',
    periodIt: 'Gen 2024 - Dic 2024',
    periodEn: 'Jan 2024 - Dec 2024',
    stack: ['Vue 3', 'Docker', 'Kubernetes', 'Go', 'Figma'],
    projects: [
      {
        nameIt: 'Portale QED Estimator — Configurazione remota dispositivi',
        nameEn: 'QED Estimator Portal — Remote device configuration',
        descriptionIt: 'Piattaforma che consente la configurazione remota di dispositivi elettronici analogici e digitali',
        descriptionEn: 'Platform for remote configuration of analog and digital electronic devices',
        activityIt: 'Ho creato i mockup con Figma, sviluppato un kit UI custom per Vue 3 e implementato il frontend integrandolo con i servizi backend esistenti',
        activityEn: 'I created mockups with Figma, developed a custom UI kit for Vue 3 and implemented the frontend integrating it with existing backend services'
      }
    ]
  },
  {
    id: 'onesait',
    client: 'Onesait Edge - Indra',
    role: 'Full Stack Developer',
    periodIt: 'Gen 2026 - Presente',
    periodEn: 'Jan 2026 - Present',
    stack: ['Vue 3', 'Vite', 'Pinia', 'Cucumber', 'Cypress', 'ODS Plus'],
    projects: [
      {
        nameIt: 'Onesait Edge Local — Configurazione protocolli industriali',
        nameEn: 'Onesait Edge Local — Industrial protocol configuration',
        descriptionIt: 'Portale Edge per la configurazione di protocolli di rete industriali (104, VPLC, 61850) e dispositivi su piattaforma Onesait',
        descriptionEn: 'Edge portal for configuring industrial network protocols (104, VPLC, 61850) and devices on Onesait platform',
        activityIt: 'Implementazione completa del protocollo VPLC (mapping e configurazione) e automazione dei test end-to-end con Cucumber (gherkin syntax) e Cypress',
        activityEn: 'Complete implementation of VPLC protocol (mapping and configuration) and end-to-end test automation with Cucumber (gherkin syntax) and Cypress'
      }
    ]
  },
  {
    id: 'adr',
    client: 'ADR Aeroporti di Roma',
    role: 'Full Stack Developer',
    periodIt: 'Gen 2020 - Dic 2024',
    periodEn: 'Jan 2020 - Dec 2024',
    stack: ['Angular', 'Spring Boot', 'Websphere', 'ADFS', 'Stomp WebSocket', 'Oracle DB', 'AngularJS', 'JSP'],
    projects: [
      {
        nameIt: 'Taxi Fly ADR — Gestione turni taxi e dispositivi IoT',
        nameEn: 'Taxi Fly ADR — Taxi shift and IoT device management',
        descriptionIt: 'Portale backoffice che consente agli operatori degli aeroporti di Fiumicino e Ciampino di gestire i turni taxi, i dispositivi IoT e i report di sistema',
        descriptionEn: 'Backoffice portal that allows operators at Fiumicino and Ciampino airports to manage taxi shifts, IoT devices and system reports',
        activityIt: 'Sviluppo del frontend in Angular, integrazione backend e WebSocket real-time, realizzazione del sistema multitenant e attività di reperibilità h24 7/7 a turnazione',
        activityEn: 'Frontend development in Angular, backend and real-time WebSocket integration, multitenant system implementation and 24/7 on-call rotation activities'
      },
      {
        nameIt: 'Titan Taxi ADR — Sistema legacy',
        nameEn: 'Titan Taxi ADR — Legacy system',
        descriptionIt: 'Sistema legacy di gestione turni taxi, dispositivi IoT in aeroporto e reportistica',
        descriptionEn: 'Legacy system for taxi shift management, IoT devices at the airport and reporting',
        activityIt: 'Ho fornito supporto in reperibilità per risolvere malfunzionamenti tecnici e garantire la continuità del servizio aeroportuale',
        activityEn: 'I provided on-call support to resolve technical malfunctions and ensure airport service continuity'
      }
    ]
  },
  {
    id: 'acea',
    client: 'Areti SpA - Gruppo ACEA',
    role: 'Frontend Developer',
    periodIt: 'Gen 2021 - Dic 2025',
    periodEn: 'Jan 2021 - Dec 2025',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'PostGIS', 'Google Maps API'],
    projects: [
      {
        nameIt: 'Portale Areti ACEA — Pali elettrici su mappa',
        nameEn: 'Areti ACEA Portal — Electric poles on map',
        descriptionIt: 'Portale per visualizzare su Google Maps i pali elettrici e i relativi contenuti multimediali come foto di guasti o segnalazioni',
        descriptionEn: 'Portal to display electric poles on Google Maps with related multimedia content such as fault photos or reports',
        activityIt: 'Progettazione wireframe con Figma, sviluppo del frontend e integrazione backend per il monitoraggio mappe e le nuove sezioni giunti e cantieri',
        activityEn: 'Wireframe design with Figma, frontend development and backend integration for map monitoring and new joints and construction sites sections'
      },
      {
        nameIt: 'Portale Sinistri ACEA ATO2 — Gestione sinistri assicurativi',
        nameEn: 'ACEA ATO2 Claims Portal — Insurance claims management',
        descriptionIt: 'Portale dedicato alla gestione e alla lavorazione dei sinistri assicurativi',
        descriptionEn: 'Portal dedicated to insurance claims management and processing',
        activityIt: 'Mi sono occupato della progettazione dei wireframe con Figma, dello sviluppo del frontend e dell\'integrazione con i servizi backend',
        activityEn: 'I handled wireframe design with Figma, frontend development and backend services integration'
      }
    ]
  },
  {
    id: 'anpal',
    client: 'ANPAL',
    role: 'Full Stack Developer',
    periodIt: 'Mar 2020 - Dic 2023',
    periodEn: 'Mar 2020 - Dec 2023',
    stack: ['Angular', 'AngularJS', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes', 'Kibana'],
    projects: [
      {
        nameIt: 'DID & MIAM — Disponibilità al lavoro e incentivi',
        nameEn: 'DID & MIAM — Work availability and incentives',
        descriptionIt: 'Sistemi digitali per la gestione della disponibilità al lavoro (DID) e per la verifica dell\'ammissibilità agli incentivi all\'assunzione (MIAM)',
        descriptionEn: 'Digital systems for managing work availability (DID) and verifying hiring incentives eligibility (MIAM)',
        activityIt: 'Gestione ticket di produzione, risoluzione problemi tecnici e partecipazione a change request per l\'integrazione con il portale GOL e la profilazione centralizzata',
        activityEn: 'Production ticket management, technical problem resolution and participation in change requests for GOL portal integration and centralized profiling'
      },
      {
        nameIt: 'SIU Formazione — Iscrizione corsi',
        nameEn: 'SIU Training — Course enrollment',
        descriptionIt: 'Portale che consente ai cittadini di iscriversi a corsi di formazione e agli utenti CPI di gestirli',
        descriptionEn: 'Portal allowing citizens to enroll in training courses and CPI users to manage them',
        activityIt: 'Sviluppo di un frontend dinamico basato su jsonschema con un pannello amministrativo per la configurazione delle entità formative',
        activityEn: 'Development of a dynamic frontend based on jsonschema with an admin panel for configuring training entities'
      }
    ]
  },
  {
    id: 'asl',
    client: 'ASL Napoli 3 Sud',
    role: 'Frontend Developer',
    periodIt: 'Gen 2025 - Presente',
    periodEn: 'Jan 2025 - Present',
    stack: ['Angular 19', 'Bootstrap Italia', 'SAP BE', 'SSO SAP BTP'],
    projects: [
      {
        nameIt: 'Portale SiGeA — Backoffice gestione fabbisogni',
        nameEn: 'SiGeA Portal — Requirements management backoffice',
        descriptionIt: 'Sistema di backoffice per la gestione dei piani di fabbisogni, richieste di acquisto e anagrafiche verso il MIT',
        descriptionEn: 'Backoffice system for managing requirement plans, purchase requests and registries towards MIT',
        activityIt: 'Sviluppo del nuovo portale in Angular 19 con Bootstrap Italia, integrazione API SAP e gestione del Single Sign-On su SAP BTP',
        activityEn: 'Development of the new portal in Angular 19 with Bootstrap Italia, SAP API integration and Single Sign-On management on SAP BTP'
      },
      {
        nameIt: 'FESPA — Gestione fascicoli strutture sanitarie',
        nameEn: 'FESPA — Healthcare facility records management',
        descriptionIt: 'Portale per la gestione dei fascicoli delle strutture sanitarie private accreditate e centralizzazione dei dati',
        descriptionEn: 'Portal for managing accredited private healthcare facility records and data centralization',
        activityIt: 'Ho sviluppato nuove pagine web e gestito le change request relative al frontend del portale',
        activityEn: 'I developed new web pages and managed change requests related to the portal frontend'
      }
    ]
  },
  {
    id: 'pa',
    client: 'Pubblica Amministrazione',
    role: 'Full Stack Developer',
    periodIt: 'Gen 2021 - Dic 2024',
    periodEn: 'Jan 2021 - Dec 2024',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'Azure DevOps', 'Keycloak', 'ADFS', 'CKAN', 'Python', 'Oracle DB'],
    projects: [
      {
        nameIt: 'Regione Abruzzo — Portale formazione regionale',
        nameEn: 'Abruzzo Region — Regional training portal',
        descriptionIt: 'Portale per l\'iscrizione dei cittadini ai corsi di formazione e la gestione delle attività da parte degli utenti CPI',
        descriptionEn: 'Portal for citizen enrollment in training courses and activity management by CPI users',
        activityIt: 'Progettazione e sviluppo del frontend da zero, integrazione backend, configurazione pipeline CI/CD su Azure e implementazione SSO con Keycloak e ADFS',
        activityEn: 'Frontend design and development from scratch, backend integration, Azure CI/CD pipeline configuration and SSO implementation with Keycloak and ADFS'
      },
      {
        nameIt: 'NoiPA — Gestione cedolini personale PA',
        nameEn: 'NoiPA — PA personnel payslip management',
        descriptionIt: 'Insieme di Single Page Application (SPA) per la gestione e la visualizzazione dei cedolini del personale della Pubblica Amministrazione',
        descriptionEn: 'Set of Single Page Applications (SPAs) for PA personnel payslip management and visualization',
        activityIt: 'Sviluppo del frontend e integrazione backend per 7 diverse SPA basate su jsonschema dinamico',
        activityEn: 'Frontend development and backend integration for 7 different SPAs based on dynamic jsonschema'
      },
      {
        nameIt: 'Ministero della Giustizia — Riconoscimento titoli',
        nameEn: 'Ministry of Justice — Title recognition',
        descriptionIt: 'Portale che consente ai cittadini di richiedere il riconoscimento di titoli accademici e professionali',
        descriptionEn: 'Portal allowing citizens to request recognition of academic and professional titles',
        activityIt: 'Mi sono occupato della realizzazione del frontend e dell\'integrazione con i servizi di backend',
        activityEn: 'I handled frontend implementation and backend services integration'
      }
    ]
  },
  {
    id: 'bnl',
    client: 'BNL - Gruppo BNP Paribas',
    role: 'Backend Developer',
    periodIt: 'Mar 2020 - Dic 2020',
    periodEn: 'Mar 2020 - Dec 2020',
    stack: ['Oracle DB', 'Java JRF 4.0', 'Jenkins', 'SonarQube'],
    projects: [
      {
        nameIt: 'Eircorporate BNL — Digitalizzazione processi bancari',
        nameEn: 'Eircorporate BNL — Banking process digitization',
        descriptionIt: 'Piattaforma bancaria dedicata alla gestione automatizzata e alla digitalizzazione dei flussi finanziari per i clienti corporate',
        descriptionEn: 'Banking platform dedicated to automated management and digitalization of financial flows for corporate clients',
        activityIt: 'Sviluppo del backend e gestione del database tramite creazione di viste, trigger e procedure batch',
        activityEn: 'Backend development and database management through creation of views, triggers and batch procedures'
      }
    ]
  }
]
