export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  yearsOfExperience?: number;
}

export type SkillCategory =
  | 'mobile'
  | 'backend'
  | 'database'
  | 'frontend'
  | 'tools';

export interface Experience {
  id: string;
  title: string;
  company?: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate?: string;
  current?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}
