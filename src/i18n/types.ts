export interface SkillBadge {
  label: string;
  level: 'strong' | 'medium' | 'light';
}

export interface SkillGroup {
  title: string;
  badges: SkillBadge[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  stack: string[];
}

export interface ProjectItem {
  name: string;
  githubUrl: string;
  description: string;
  bullets: string[];
  stack: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface DomainItem {
  title: string;
  description: string;
}

export interface Translation {
  lang: string;
  nav: {
    profile: string;
    experience: string;
    skills: string;
    projects: string;
    education: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    tagline: string;
    contacts: {
      email: string;
      phone: string;
      github: string;
      linkedin: string;
      pdf: string;
    };
  };
  domainsTitle: string;
  domains: DomainItem[];
  experienceTitle: string;
  experiences: ExperienceItem[];
  skillsTitle: string;
  skillsLegend: string;
  skillGroups: SkillGroup[];
  projectsTitle: string;
  projects: ProjectItem[];
  educationTitle: string;
  educationItems: EducationItem[];
}