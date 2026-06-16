import type { Translation } from './types';

export const en: Translation = {
  lang: 'en',

  nav: {
    profile: 'Profile',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    education: 'Education',
  },

  hero: {
    eyebrow: '// available · Île-de-France, France',
    role: 'Backend Engineer — Java / Spring',
    tagline:
      'I design and maintain applications with rich and complex business logic. Robust APIs, controlled migrations, software quality at the heart of every delivery.',
    contacts: {
      email: 'maillard.dorian60@gmail.com',
      phone: '+33 6 25 52 16 89',
      github: 'GitHub ↗',
      linkedin: 'LinkedIn ↗',
      pdf: 'Resume PDF ↓',
    },
  },

  domainsTitle: '// areas of expertise',
  domains: [
    { title: 'Backend Design', description: 'Business modeling, REST/GraphQL APIs, functional robustness' },
    { title: 'Software Quality', description: 'Automated testing, refactoring, securing software changes' },
    { title: 'Modernization', description: 'Java/Spring migrations, technical debt, architecture' },
    { title: 'Delivery', description: 'CI/CD, containerization, production reliability' },
  ],

  experienceTitle: '// experience',
  experiences: [
    {
      title: 'Senior FullStack Developer',
      company: 'MAIF',
      period: '2022 – Present',
      description: 'Design and development of a core business API ecosystem in the context of modernizing the insurance IT system.',
      bullets: [
        'Large-scale migration: Spring Boot 1.5 → 3.x / Java 11 → 21 (15+ APIs & BFF)',
        'Contract-first REST APIs (OpenAPI) and GraphQL',
        'Replacement of BRMS IBM, TIBCO and Cobol modules → Java',
        'Integration tests with Testcontainers on real PostgreSQL',
        'CI/CD Jenkins · Docker · shared internal libraries',
        'Definition and rollout of internal technical standards',
      ],
      stack: ['Java 21', 'Spring Boot', 'GraphQL', 'Oracle', 'PostgreSQL', 'React', 'Jenkins', 'Docker'],
    },
    {
      title: 'FullStack Developer',
      company: 'MAIF',
      period: '2018 – 2022',
      description: 'Development of insurance business applications within a hexagonal architecture.',
      bullets: [
        '25 REST and GraphQL APIs under direct ownership',
        'Progressive legacy refactoring · production support',
        'Performance improvements on critical user flows',
      ],
      stack: ['Java', 'Spring', 'Hexagonal Architecture', 'REST', 'GraphQL'],
    },
    {
      title: 'Developer Intern',
      company: 'HostnFly',
      period: '2017 – 2018',
      description: 'Development of internal tools for a short-term rental platform.',
      bullets: [
        'Internal sales & support dashboards (Ruby on Rails)',
        'Showcase website React / TypeScript · full i18n',
      ],
      stack: ['Ruby on Rails', 'React', 'TypeScript'],
    },
  ],

  skillsTitle: '// skills',
  skillsLegend: 'Usage: daily in production · regular in projects · basic / exposure',
  skillGroups: [
    {
      title: 'Service Exposure',
      badges: [
        { label: 'Java 8–21', level: 'strong' },
        { label: 'Spring Boot', level: 'strong' },
        { label: 'REST', level: 'strong' },
        { label: 'GraphQL', level: 'strong' },
        { label: 'Spring Security', level: 'medium' },
        { label: 'Resilience4j', level: 'medium' },
        { label: 'Ruby on Rails', level: 'light' },
      ],
    },
    {
      title: 'Data Access',
      badges: [
        { label: 'SQL', level: 'strong' },
        { label: 'JPA / Hibernate', level: 'strong' },
        { label: 'Oracle', level: 'strong' },
        { label: 'PostgreSQL', level: 'medium' },
        { label: 'Elasticsearch', level: 'medium' },
        { label: 'Query DSL', level: 'light' },
      ],
    },
    {
      title: 'Software Quality',
      badges: [
        { label: 'JUnit 5', level: 'strong' },
        { label: 'Mockito', level: 'strong' },
        { label: 'Testcontainers', level: 'medium' },
        { label: 'Playwright', level: 'medium' },
      ],
    },
    {
      title: 'Delivery & Interface',
      badges: [
        { label: 'GitHub Actions', level: 'strong' },
        { label: 'Jenkins', level: 'strong' },
        { label: 'Docker', level: 'medium' },
        { label: 'ReactJS', level: 'medium' },
        { label: 'CloudBees', level: 'light' },
        { label: 'RedHat', level: 'light' },
      ],
    },
  ],

  projectsTitle: '// personal projects',
  projects: [
    {
      name: 'roomify-api',
      githubUrl: 'https://github.com/Dodoma95/roomify-api',
      description: 'Workspace rental marketplace backend — hexagonal architecture, dual REST/GraphQL API.',
      bullets: [
        'PENDING → APPROVED workflow · JWT · 4 role levels (USER, OWNER, ADMIN, SUPER_ADMIN)',
        'JUnit 5 + Testcontainers tests on real PostgreSQL (no DB mocking)',
        'CI/CD GitHub Actions + SonarCloud + JaCoCo',
      ],
      stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Testcontainers', 'GitHub Actions'],
    },
    {
      name: 'roomify',
      githubUrl: 'https://github.com/Dodoma95/roomify',
      description: 'Next.js frontend — BFF pattern, three user profiles, accessible UI.',
      bullets: [
        'BFF: JWT injected server-side via app/api/ · token never exposed to the browser',
        'Zustand · SWR · shadcn/ui · Framer Motion',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind v4', 'shadcn/ui', 'Zustand'],
    },
  ],

  educationTitle: '// education',
  educationItems: [
    {
      degree: 'CDA — Application Developer Designer',
      school: 'M2i Formation Paris',
      period: '2017 – 2018',
    },
    {
      degree: "Bachelor's Degree — Insurance, Banking & Finance",
      school: 'Université Lille 1',
      period: '2013 – 2014',
    },
  ],
};