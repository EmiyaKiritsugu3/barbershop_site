import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon?: LucideIcon;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  dataAiHint?: string;
  socialLinks?: { platform: string; url: string; icon?: LucideIcon }[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  avatarUrl?: string;
  dataAiHint?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  dataAiHint?: string;
  category?: string; 
}

export interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon;
}
