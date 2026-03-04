import type { Education } from '@/types'

const baseUrl = import.meta.env.BASE_URL

export const education: Education[] = [
  {
    id: 'unina-bachelor',
    titleIt: 'Laurea Triennale in Ingegneria Informatica',
    titleEn: 'Bachelor Degree in Computer Engineering',
    institution: 'Universita degli Studi di Napoli Federico II',
    date: 'Marzo 2020 - 104/110',
    logoUrl: `${baseUrl}Logo-UNINA.jpg`,
    pdfUrl: `${baseUrl}Pergamena Laurea Triennale Ingegneria In.pdf`
  },
  {
    id: 'fintechlab-2025',
    titleIt: 'FinTech Lab 2025',
    titleEn: 'FinTech Lab 2025',
    institution: 'Universita degli Studi di Napoli Parthenope',
    date: '2025',
    badgeImageUrl: `${baseUrl}assertion-BBvnqanXRHuGJ5cgAA3cAQ.png`,
    badgeDownloadUrl: `${baseUrl}assertion-BBvnqanXRHuGJ5cgAA3cAQ.png`,
    badgeExternalUrl: 'https://bestr.it/award/show/BBvnqanXRHuGJ5cgAA3cAQ',
    pdfUrl: `${baseUrl}AttestatoMurolo_v01.pdf`
  }
]
