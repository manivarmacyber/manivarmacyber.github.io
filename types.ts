
export enum SkillLevel {
  HANDS_ON = 'Hands-on experience',
  PRACTICAL = 'Practical exposure',
  WORKING = 'Working knowledge',
  BASIC = 'Basic understanding',
  FAMILIAR = 'Familiar with'
}

export interface Skill {
  name: string;
  level: SkillLevel;
  category: string;
}

export interface Experience {
  company: string;
  location: string;
  title: string;
  period: string;
  details: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
}

export interface Feedback {
  rating: number;
  comment: string;
  timestamp: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: string;
  author: string;
  tags: string[];
  readingTime: string;
  image: string;
  coverImage?: string;
}

export type CulturalTheme = 'neutral' | 'warm-light' | 'spring-growth' | 'national-india' | 'solstice-cool';

export interface CulturalState {
  mode: 'auto' | 'india' | 'global';
  detectedCountry: string | null;
  detectedRegion: string | null;
  activeTheme: CulturalTheme;
  label: string | null;
}
