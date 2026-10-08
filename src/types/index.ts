export interface Project {
  id: string;
  title: string;
  category: 'Cinematic' | 'Commercial' | 'Reels' | 'YouTube' | 'Logofolio' | 'Branding' | 'Print' | 'UI/Web';
  categoryLabel: string;
  year: string;
  description: string;
  longDescription?: string;
  technology: string[];
  thumbnail: string;
  videoUrl?: string;
  videoEmbedUrl?: string;
  aspectRatio?: '16:9' | '9:16' | '1:1' | '4:5';
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
  gallery?: string[];
  hasColorGradeDemo?: boolean;
  colorGradeDemo?: {
    beforeImg: string;
    afterImg: string;
    beforeLabel: string;
    afterLabel: string;
    cameraProfile: string;
    lutUsed: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
  highlight: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyAction: string;
  deliverable: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Full-time' | 'Remote' | 'Hybrid' | 'Freelance' | 'Education';
  location: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
  avatar?: string;
  rating: number;
}

export interface ToolItem {
  name: string;
  category: 'Video Editing' | 'Motion & VFX' | 'Color Grading' | 'Design & Vector' | '3D & CG';
  proficiency: string;
  iconName: string;
  badge: string;
  color: string;
}

export interface SocialReel {
  id: string;
  title: string;
  category: string;
  views: string;
  thumbnail: string;
  platform: 'Instagram' | 'YouTube Shorts' | 'TikTok';
  videoUrl: string;
}
