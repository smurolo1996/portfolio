import type { Project } from '@/types'

export const featuredProjects: Project[] = [
  {
    id: 'rdt-terna',
    titleIt: 'Portale RDT',
    titleEn: 'RDT Portal',
    descriptionIt: 'Ho progettato i mockup, sviluppato il frontend con Vue 3 e integrato API REST/WS per visualizzare dati di tensione su mappe e grafici interattivi real-time',
    descriptionEn: 'I designed mockups, developed the frontend with Vue 3, and integrated REST/WS APIs to display voltage data on real-time interactive maps and charts',
    systemIt: 'Sistema di regolazione e monitoraggio della tensione di centrali elettriche con integrazione su mappa',
    systemEn: 'Voltage regulation and monitoring system for power plants with map integration',
    stack: ['Vue 3', 'Spring Boot', 'Leaflet', 'InfluxDB', 'WebSocket', 'REST API'],
    client: 'Terna SpA',
    year: '2024'
  },
  {
    id: 'diagnostica-scada',
    titleIt: 'Portale Diagnostica SCADA',
    titleEn: 'SCADA Diagnostics Portal',
    descriptionIt: 'Ho sviluppato il Frontend in Vue 3 e creato API REST e SSE per visualizzare diagrammi elettrici interattivi generati dinamicamente da dati JSON',
    descriptionEn: 'I developed the Frontend in Vue 3 and created REST and SSE APIs to display interactive electrical diagrams dynamically generated from JSON data',
    systemIt: 'Sistema SCADA per il monitoraggio e la gestione in real-time di tutti i dispositivi connessi alla rete',
    systemEn: 'SCADA system for real-time monitoring and management of all network-connected devices',
    stack: ['Vue 3', 'Spring Boot', 'SSE', 'MongoDB', 'NATS'],
    client: 'Terna SpA',
    year: '2024'
  },
  {
    id: 'pse-terna',
    titleIt: 'Portale PSE',
    titleEn: 'PSE Portal',
    descriptionIt: 'Sviluppo del Frontend in Vue 3, integrazione SSO con Keycloak, gestione profili utente, log eventi, visualizzazione audit e implementazione upload dispositivi',
    descriptionEn: 'Frontend development in Vue 3, SSO integration with Keycloak, user profile management, event logs, audit visualization and device upload implementation',
    systemIt: 'Portale per la configurazione di dispositivi elettronici tramite protocolli di rete industriali',
    systemEn: 'Portal for electronic device configuration via industrial network protocols',
    stack: ['Vue 3', 'Spring Boot', 'Keycloak', 'MySQL', 'Kong'],
    client: 'Terna SpA',
    year: '2023'
  },
  {
    id: 'taxi-fly-adr',
    titleIt: 'Taxi Fly ADR',
    titleEn: 'Taxi Fly ADR',
    descriptionIt: 'Sviluppo del frontend in Angular, integrazione backend e WebSocket real-time, realizzazione del sistema multitenant e attività di reperibilità h24',
    descriptionEn: 'Frontend development in Angular, backend integration and real-time WebSocket, implementation of multitenant system and 24/7 on-call activities',
    systemIt: 'Portale backoffice per gestione turni taxi, dispositivi IoT e report aeroportuali',
    systemEn: 'Backoffice portal for taxi shift management, IoT devices and airport reports',
    stack: ['Angular', 'Spring Boot', 'Stomp WebSocket', 'Oracle DB', 'ADFS'],
    client: 'ADR Aeroporti di Roma',
    year: '2021-2024'
  },
  {
    id: 'sigea-asl',
    titleIt: 'Portale SiGeA',
    titleEn: 'SiGeA Portal',
    descriptionIt: 'Sviluppo del nuovo portale in Angular 19 con Bootstrap Italia, integrazione API SAP e gestione del Single Sign-On su SAP BTP',
    descriptionEn: 'Development of the new portal in Angular 19 with Bootstrap Italia, SAP API integration and Single Sign-On management on SAP BTP',
    systemIt: 'Sistema di backoffice per la gestione dei piani di fabbisogni, richieste di acquisto e anagrafiche verso il MIT',
    systemEn: 'Backoffice system for managing requirement plans, purchase requests and registries towards MIT',
    stack: ['Angular 19', 'Bootstrap Italia', 'SAP BE', 'SSO SAP BTP'],
    client: 'ASL Napoli 3 Sud',
    year: '2025'
  },
  {
    id: 'areti-acea',
    titleIt: 'Portale Areti ACEA',
    titleEn: 'Areti ACEA Portal',
    descriptionIt: 'Progettazione wireframe con Figma, sviluppo del frontend e integrazione backend per il monitoraggio mappe e le nuove sezioni giunti e cantieri',
    descriptionEn: 'Wireframe design with Figma, frontend development and backend integration for map monitoring and new joints and construction sites sections',
    systemIt: 'Portale per visualizzare su Google Maps i pali elettrici e i relativi contenuti multimediali',
    systemEn: 'Portal to display electric poles on Google Maps with related multimedia content',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'PostGIS', 'Google Maps API'],
    client: 'Areti SpA - Gruppo ACEA',
    year: '2021-2025'
  }
]
