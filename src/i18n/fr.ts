import type { Translation } from './types';

export const fr: Translation = {
  lang: 'fr',

  nav: {
    profile: 'Profil',
    experience: 'Expériences',
    skills: 'Compétences',
    projects: 'Projets',
    education: 'Formation',
  },

  hero: {
    eyebrow: '// disponible · Île-de-France',
    role: 'Backend Engineer — Java / Spring',
    tagline:
      'Je conçois et fais évoluer des applications à logique métier riche et complexe. APIs robustes, migrations maîtrisées, qualité logicielle au cœur de chaque livraison.',
    contacts: {
      email: 'maillard.dorian60@gmail.com',
      phone: '06 25 52 16 89',
      github: 'GitHub ↗',
      linkedin: 'LinkedIn ↗',
      pdf: 'CV PDF ↓',
    },
  },

  domainsTitle: "// domaines d'intervention",
  domains: [
    { title: 'Conception backend', description: 'Modélisation métier, APIs REST/GraphQL, robustesse fonctionnelle' },
    { title: 'Qualité logicielle', description: 'Tests automatisés, refactoring, sécurisation des évolutions' },
    { title: 'Modernisation', description: 'Migrations Java/Spring, dette technique, architecture' },
    { title: 'Delivery', description: 'CI/CD, conteneurisation, fiabilité en production' },
  ],

  experienceTitle: '// expériences',
  experiences: [
    {
      title: 'Senior FullStack Developer',
      company: 'MAIF',
      period: "2022 – Aujourd'hui",
      description: "Conception d'un écosystème d'APIs cœur métier dans un contexte de modernisation du SI assurance.",
      bullets: [
        'Migration Spring Boot 1.5 → 3.x / Java 11 → 21 sur 15+ APIs et BFF',
        'APIs REST contract-first (OpenAPI) et GraphQL',
        'Remplacement de modules BRMS IBM, TIBCO et Cobol → Java',
        "Tests d'intégration avec Testcontainers sur PostgreSQL réel",
        'CI/CD Jenkins · Docker · librairies internes mutualisées',
        'Définition et diffusion de standards techniques internes',
      ],
      stack: ['Java 21', 'Spring Boot', 'GraphQL', 'Oracle', 'PostgreSQL', 'React', 'Jenkins', 'Docker'],
    },
    {
      title: 'FullStack Developer',
      company: 'MAIF',
      period: '2018 – 2022',
      description: "Développement d'applications métier assurance en architecture hexagonale.",
      bullets: [
        '25 APIs REST et GraphQL en responsabilité directe',
        'Refactoring progressif du legacy · support production',
        'Amélioration des performances sur des parcours critiques',
      ],
      stack: ['Java', 'Spring', 'Architecture Hexagonale', 'REST', 'GraphQL'],
    },
    {
      title: 'Developer Intern',
      company: 'HostnFly',
      period: '2017 – 2018',
      description: "Développement d'outils internes pour une plateforme de location courte durée.",
      bullets: [
        'Dashboards internes sales & support (Ruby on Rails)',
        'Site vitrine React / TypeScript · i18n complète',
      ],
      stack: ['Ruby on Rails', 'React', 'TypeScript'],
    },
  ],

  skillsTitle: '// compétences',
  skillsLegend: 'Utilisation : quotidienne en production · régulière en projet · bases / exposition',
  skillGroups: [
    {
      title: 'Exposition de services',
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
      title: 'Accès aux données',
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
      title: 'Qualité logicielle',
      badges: [
        { label: 'JUnit 5', level: 'strong' },
        { label: 'Mockito', level: 'strong' },
        { label: 'Testcontainers', level: 'medium' },
        { label: 'Playwright', level: 'medium' },
      ],
    },
    {
      title: 'Livraison & Interface',
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

  projectsTitle: '// projets personnels',
  projects: [
    {
      name: 'roomify-api',
      githubUrl: 'https://github.com/Dodoma95/roomify-api',
      description: "Backend marketplace de location d'espaces — architecture hexagonale, dual API REST/GraphQL.",
      bullets: [
        'Workflow PENDING → APPROVED · JWT · 4 niveaux de rôles (USER, OWNER, ADMIN, SUPER_ADMIN)',
        'Tests JUnit 5 + Testcontainers sur PostgreSQL réel (pas de mock DB)',
        'CI/CD GitHub Actions + analyse SonarCloud + JaCoCo',
      ],
      stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Testcontainers', 'GitHub Actions'],
    },
    {
      name: 'roomify',
      githubUrl: 'https://github.com/Dodoma95/roomify',
      description: "Frontend Next.js — BFF pattern, trois profils utilisateurs, UI accessible.",
      bullets: [
        "BFF : JWT injecté côté serveur via app/api/ · token jamais exposé au navigateur",
        'Zustand · SWR · shadcn/ui · Framer Motion',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind v4', 'shadcn/ui', 'Zustand'],
    },
  ],

  educationTitle: '// formation',
  educationItems: [
    {
      degree: "CDA — Concepteur Développeur d'Applications",
      school: 'M2i Formation Paris',
      period: '2017 – 2018',
    },
    {
      degree: 'Licence ABF — Assurance, Banque, Finance',
      school: 'Université Lille 1',
      period: '2013 – 2014',
    },
  ],
};