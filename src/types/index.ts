import type { LucideIcon } from 'lucide-react';

export interface LinkItem {
  href: string;
  label: string;
  icon?: LucideIcon;
  ariaLabel?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  profilePictureUrl: string;
  cvUrl?: string;
  intro: string;
  ctaButton: LinkItem;
}

export interface Skill {
  name: string;
  icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>; // Allow for custom SVGs
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface TimelineEvent {
  title: string;
  institution: string;
  dateRange: string;
  description: string;
  logoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  dataAiHint?: string;
}

export interface ContactInfo {
  email: string;
  socialLinks: LinkItem[];
}
