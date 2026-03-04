import type { Certification } from '@/types'

const baseUrl = import.meta.env.BASE_URL

export const certifications: Certification[] = [
  {
    id: 'java-se-11',
    nameIt: 'Oracle Certified Java SE 11 Developer',
    nameEn: 'Oracle Certified Java SE 11 Developer',
    issuer: 'Oracle',
    date: 'Feb 2024',
    badge: '1Z0-819',
    badgeImageUrl: `${baseUrl}OCPJSE11.jpg`,
    badgeDownloadUrl: `${baseUrl}OCPJSE11.jpg`,
    pdfUrl: `${baseUrl}Murolo Salvatore - eCertificate - Oracle Certified Professional Java 11 – 1Z0-819.pdf`
  },
  {
    id: 'ckad',
    nameIt: 'Certified Kubernetes Application Developer',
    nameEn: 'Certified Kubernetes Application Developer',
    issuer: 'Linux Foundation',
    date: 'Mar 2025',
    badge: 'CKAD',
    badgeImageUrl: `${baseUrl}blob.png`,
    badgeDownloadUrl: `${baseUrl}blob.png`,
    badgeExternalUrl: 'http://credly.com/badges/3bf430e5-2ec6-47e9-ab82-03ec038af857',
    pdfUrl: `${baseUrl}salvatore-murolo-9c56443a-f33b-485d-a40e-6ba74f3a5d70-certificate.pdf`
  }
]
