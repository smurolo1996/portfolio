import type { TranslationStrings } from '@/types'

export const translations: Record<'it' | 'en', TranslationStrings> = {
  it: {
    nav: {
      about: 'Chi Sono',
      skills: 'Competenze',
      experience: 'Esperienze',
      projects: 'Progetti',
      education: 'Formazione',
      certifications: 'Certificazioni',
      contact: 'Contatti'
    },
    hero: {
      greeting: 'Ciao, sono',
      tagline: 'Creo soluzioni enterprise scalabili e ad alte prestazioni',
      downloadCv: 'Scarica CV',
      contactMe: 'Contattami',
      roles: ['Full Stack Developer', 'Software Architect', 'Tech Lead', 'Team Leader']
    },
    about: {
      title: 'Chi Sono',
      description: 'Software Engineer Full-Stack con oltre sei anni di esperienza presso Minsait (gruppo Indra), specializzato nello sviluppo di applicazioni web scalabili, resilienti e ad alte prestazioni in contesti Enterprise. Possiedo solide competenze nelle principali tecnologie Frontend (Angular, Vue 3, React) e nel Backend con Spring Boot, con esperienza consolidata nella progettazione di architetture moderne e nell\'implementazione di soluzioni end-to-end.',
      stats: {
        years: 'Anni di Esperienza',
        projects: 'Progetti Enterprise',
        certifications: 'Certificazioni',
        clients: 'Clienti Enterprise'
      }
    },
    skills: {
      title: 'Competenze',
      levels: {
        expert: 'Expert',
        advanced: 'Avanzato',
        intermediate: 'Intermedio'
      }
    },
    experience: {
      title: 'Esperienze',
      present: 'Presente',
      activities: 'Attività:'
    },
    projects: {
      title: 'Progetti Principali',
      viewDetails: 'Dettagli',
      scrollHint: 'Scorri per vedere di più'
    },
    certifications: {
      title: 'Certificazioni',
      downloadBadge: 'Scarica badge',
      downloadCertificate: 'Scarica certificato',
      viewBadge: 'Vedi badge'
    },
    education: {
      title: 'Formazione',
      downloadBadge: 'Scarica badge',
      viewBadge: 'Vedi badge',
      downloadDocument: 'Scarica documento'
    },
    contact: {
      title: 'Contattami',
      subtitle: 'Sono sempre aperto a nuove opportunita e collaborazioni',
      email: 'Email',
      location: 'Location',
      form: {
        name: 'Nome',
        namePlaceholder: 'Il tuo nome',
        email: 'Email',
        emailPlaceholder: 'La tua email',
        subject: 'Oggetto',
        subjectPlaceholder: 'Oggetto del messaggio',
        message: 'Messaggio',
        messagePlaceholder: 'Il tuo messaggio',
        send: 'Invia',
        sending: 'Invio in corso...',
        success: 'Messaggio inviato con successo!',
        error: 'Errore durante l\'invio. Riprova.'
      }
    }
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm",
      tagline: 'Building scalable, high-performance enterprise solutions',
      downloadCv: 'Download CV',
      contactMe: 'Contact Me',
      roles: ['Full Stack Developer', 'Software Architect', 'Tech Lead', 'Team Leader']
    },
    about: {
      title: 'About Me',
      description: 'Full-Stack Software Engineer with over six years of experience at Minsait (Indra group), specialized in developing scalable, resilient, and high-performance web applications in Enterprise contexts. I have solid expertise in major Frontend technologies (Angular, Vue 3, React) and Backend with Spring Boot, with consolidated experience in designing modern architectures and implementing end-to-end solutions.',
      stats: {
        years: 'Years of Experience',
        projects: 'Enterprise Projects',
        certifications: 'Certifications',
        clients: 'Enterprise Clients'
      }
    },
    skills: {
      title: 'Skills',
      levels: {
        expert: 'Expert',
        advanced: 'Advanced',
        intermediate: 'Intermediate'
      }
    },
    experience: {
      title: 'Experience',
      present: 'Present',
      activities: 'Activities:'
    },
    projects: {
      title: 'Featured Projects',
      viewDetails: 'Details',
      scrollHint: 'Scroll for more'
    },
    certifications: {
      title: 'Certifications',
      downloadBadge: 'Download badge',
      downloadCertificate: 'Download certificate',
      viewBadge: 'View badge'
    },
    education: {
      title: 'Education',
      downloadBadge: 'Download badge',
      viewBadge: 'View badge',
      downloadDocument: 'Download document'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "I'm always open to new opportunities and collaborations",
      email: 'Email',
      location: 'Location',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'Your email',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Your message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
      }
    }
  }
}
