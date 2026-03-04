export type Language = 'it' | 'en'
export type Theme = 'dark' | 'light'
export type SkillLevel = 'expert' | 'advanced' | 'intermediate'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  id: string
  labelIt: string
  labelEn: string
  skills: Skill[]
}

export interface Project {
  id: string
  titleIt: string
  titleEn: string
  descriptionIt: string
  descriptionEn: string
  systemIt: string
  systemEn: string
  stack: string[]
  client: string
  year: string
}

export interface Experience {
  id: string
  client: string
  role: string
  periodIt: string
  periodEn: string
  projects: ExperienceProject[]
  stack: string[]
}

export interface ExperienceProject {
  nameIt: string
  nameEn: string
  descriptionIt: string
  descriptionEn: string
  activityIt?: string
  activityEn?: string
}

export interface Certification {
  id: string
  nameIt: string
  nameEn: string
  issuer: string
  date: string
  badge: string
  badgeImageUrl?: string
  badgeDownloadUrl?: string
  badgeExternalUrl?: string
  pdfUrl?: string
}

export interface Education {
  id: string
  titleIt: string
  titleEn: string
  institution: string
  date: string
  logoUrl?: string
  badgeImageUrl?: string
  badgeDownloadUrl?: string
  badgeExternalUrl?: string
  pdfUrl?: string
}

export interface TranslationStrings {
  nav: {
    about: string
    skills: string
    experience: string
    projects: string
    education: string
    certifications: string
    contact: string
  }
  hero: {
    greeting: string
    tagline: string
    downloadCv: string
    contactMe: string
    roles: string[]
  }
  about: {
    title: string
    description: string
    stats: {
      years: string
      projects: string
      certifications: string
      clients: string
    }
  }
  skills: {
    title: string
    levels: {
      expert: string
      advanced: string
      intermediate: string
    }
  }
  experience: {
    title: string
    present: string
    activities: string
  }
  projects: {
    title: string
    viewDetails: string
    scrollHint: string
  }
  certifications: {
    title: string
    downloadBadge: string
    downloadCertificate: string
    viewBadge: string
  }
  education: {
    title: string
    downloadBadge: string
    viewBadge: string
    downloadDocument: string
  }
  contact: {
    title: string
    subtitle: string
    email: string
    location: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      subject: string
      subjectPlaceholder: string
      message: string
      messagePlaceholder: string
      send: string
      sending: string
      success: string
      error: string
    }
  }
}
