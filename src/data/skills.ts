import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    labelIt: 'Frontend',
    labelEn: 'Frontend',
    skills: [
      { name: 'Angular', level: 'expert' },
      { name: 'Vue 3', level: 'expert' },
      { name: 'React', level: 'advanced' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'HTML5', level: 'expert' },
      { name: 'CSS3', level: 'expert' },
      { name: 'WCAG', level: 'expert' },
      { name: 'Responsive Design', level: 'expert' }
    ]
  },
  {
    id: 'backend',
    labelIt: 'Backend',
    labelEn: 'Backend',
    skills: [
      { name: 'Spring Boot', level: 'expert' },
      { name: 'Java SE 11', level: 'expert' },
      { name: 'REST API', level: 'expert' },
      { name: 'WebSocket', level: 'expert' },
      { name: 'Hibernate/JPA', level: 'expert' },
      { name: 'Node.js', level: 'advanced' },
      { name: 'Python', level: 'intermediate' }
    ]
  },
  {
    id: 'database',
    labelIt: 'Database',
    labelEn: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MySQL', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'Oracle DB', level: 'advanced' },
      { name: 'Elasticsearch', level: 'intermediate' },
      { name: 'InfluxDB', level: 'intermediate' }
    ]
  },
  {
    id: 'devops',
    labelIt: 'DevOps & Architettura',
    labelEn: 'DevOps & Architecture',
    skills: [
      { name: 'Docker', level: 'expert' },
      { name: 'Kubernetes', level: 'expert' },
      { name: 'Keycloak/SSO', level: 'expert' },
      { name: 'Microservices', level: 'advanced' },
      { name: 'CI/CD Pipelines', level: 'advanced' },
      { name: 'Git', level: 'advanced' },
      { name: 'Jenkins', level: 'advanced' }
    ]
  },
  {
    id: 'tools',
    labelIt: 'Strumenti & Testing',
    labelEn: 'Tools & Testing',
    skills: [
      { name: 'Figma', level: 'advanced' },
      { name: 'Cypress', level: 'advanced' },
      { name: 'Cucumber', level: 'advanced' },
      { name: 'RabbitMQ', level: 'intermediate' },
      { name: 'Kafka', level: 'intermediate' }
    ]
  }
]
