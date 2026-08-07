export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  secondaryEmail?: string;
  phone: string;
  linkedin: string;
  github: string;
  college: string;
  expectedGraduation: string;
  bio: string;
  summary: string;
  status: string;
  avatarUrl: string;
  secondaryPhotoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-time' | 'Founder';
  description: string[];
  technologies: string[];
  logoText?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'AI & ML' | 'Data Analytics' | 'E-Commerce';
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
  galleryImages?: string[];
  showcaseBadges?: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    icon?: string;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  period?: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
