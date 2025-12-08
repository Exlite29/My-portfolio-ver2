export interface Project {
  name: string;
  description: string;
  tags: string[];
  frontend: string;
  backend: string;
  features: string[];
  private: boolean;
  updatedAt: string;
  language: string; // Primary language for color dot
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Stat {
  label: string;
  value: number;
}