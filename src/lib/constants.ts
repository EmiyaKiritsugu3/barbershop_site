
import type { NavItem, Service, TeamMember, Testimonial, GalleryImage } from '@/lib/types';
import { Home, Info, Scissors, Camera, MessageSquare, Sparkles, Users, Star, Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Briefcase } from 'lucide-react';
import StraightRazorIcon from '@/components/common/StraightRazorIcon'; // Import the new icon component

export const SITE_NAME = "Thaynan Barber";
export const FOUNDATION_YEAR = "2023";

export const BOOKING_WHATSAPP_URL = "https://wa.me/5584998138992?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Thaynan%20Barber.%0A%0AServi%C3%A7o%3A%20%5BQual%20servi%C3%A7o%3F%5D%0ADia%3A%20%5BQual%20dia%3F%5D%0AHor%C3%A1rio%3A%20%5BQual%20hor%C3%A1rio%3F%5D";
export const BOOKING_EXTERNAL_URL = "https://calendly.com/inamarjunior2";

export const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'Sobre Nós', icon: Info },
  { href: '/services', label: 'Serviços', icon: Scissors },
  { href: '/gallery', label: 'Galeria', icon: Camera },
  { href: '/style-suggestion', label: 'Sugestão IA', icon: Sparkles },
  { href: '/contact', label: 'Contato', icon: MessageSquare },
];

export const SERVICES_DATA: Service[] = [
  { id: '1', name: 'Corte Masculino Clássico', description: 'Corte tradicional na tesoura e máquina, finalizado com produtos de alta qualidade.', price: 'R$ 50', icon: Scissors },
  { id: '2', name: 'Barba Modelada', description: 'Design e modelagem da barba, com toalha quente e navalha para contornos precisos.', price: 'R$ 40', icon: Briefcase }, // Reverted to Briefcase
  { id: '3', name: 'Combo Corte + Barba', description: 'Serviço completo de corte de cabelo e barba modelada para um visual impecável.', price: 'R$ 80', icon: Scissors },
  { id: '4', name: 'Raspar Cabeça (Navalha)', description: 'Cabeça raspada com navalha, incluindo toalha quente e produtos pós-barba.', price: 'R$ 45', icon: StraightRazorIcon },
  { id: '5', name: 'Acabamento (Pezinho)', description: 'Manutenção do contorno do corte, ideal entre cortes completos.', price: 'R$ 25', icon: Scissors },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: '1',
    name: 'Thaynan Medeiros',
    role: 'Fundador e Barbeiro Principal',
    bio: `Fundador da ${SITE_NAME}, Thaynan Medeiros é apaixonado pela arte da barbearia, combinando técnica e criatividade para oferecer cortes e estilos que realçam a individualidade de cada cliente.`,
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'male barber portrait',
    socialLinks: [{ platform: 'Instagram', url: 'https://instagram.com/thaynanbarber', icon: Instagram }],
  },
  {
    id: '2',
    name: 'Felipe Medeiros',
    role: 'Barbeiro Especialista',
    bio: `Irmão de Thaynan Medeiros, Felipe Medeiros juntou-se à ${SITE_NAME} trazendo sua dedicação e habilidade. Com um olhar atento aos detalhes, é especialista em criar visuais impecáveis e modernos.`,
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'male barber stylish',
    socialLinks: [{ platform: 'Instagram', url: '#', icon: Instagram }],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: '1', name: 'João M.', text: 'Melhor barbearia da cidade! Profissionais de primeira e ambiente muito agradável.', avatarUrl: 'https://placehold.co/100x100.png', dataAiHint: 'man smiling' },
  { id: '2', name: 'Pedro L.', text: 'O Felipe é um artista com a navalha. Minha barba nunca esteve tão bem cuidada. Recomendo!', avatarUrl: 'https://placehold.co/100x100.png', dataAiHint: 'happy customer' },
  { id: '3', name: 'Lucas S.', text: 'Ambiente top, serviço de qualidade e preço justo. Virei cliente fiel.', avatarUrl: 'https://placehold.co/100x100.png', dataAiHint: 'client portrait' },
];

export const GALLERY_IMAGES_DATA: GalleryImage[] = [
  { id: '1', src: 'https://placehold.co/600x400.png', alt: 'Corte de cabelo masculino moderno', category: 'Cortes', dataAiHint: 'mens haircut' },
  { id: '2', src: 'https://placehold.co/600x400.png', alt: 'Barba bem aparada e modelada', category: 'Barbas', dataAiHint: 'beard style' },
  { id: '3', src: '/images/thaynan-barber-hero.jpg', alt: 'Interior da barbearia Thaynan Barber', category: 'Ambiente', dataAiHint: 'barbershop interior' },
  { id: '4', src: 'https://placehold.co/600x400.png', alt: 'Barbeiro trabalhando em um cliente', category: 'Ação', dataAiHint: 'barber working' },
  { id: '5', src: 'https://placehold.co/600x400.png', alt: 'Detalhe de um corte degradê', category: 'Cortes', dataAiHint: 'fade haircut' },
  { id: '6', src: 'https://placehold.co/600x400.png', alt: 'Produtos de barbearia de alta qualidade', category: 'Produtos', dataAiHint: 'barber products' },
  { id: '7', src: 'https://placehold.co/600x400.png', alt: 'Cliente satisfeito após o corte', category: 'Clientes', dataAiHint: 'happy client' },
  { id: '8', src: 'https://placehold.co/600x400.png', alt: 'Toalha quente sendo aplicada', category: 'Serviços', dataAiHint: 'hot towel' },
];

// For Style Suggestion Tool - these URLs should ideally be actual URLs of the images above if hosted, or can be the same placeholder URLs for demo
export const STYLE_SUGGESTION_GALLERY_URLS: string[] = GALLERY_IMAGES_DATA.map(img => img.src);

export const CONTACT_INFO = {
  address: "Av. Fundador Francisco Quinino de Medeiros, 33 - Centro, Ipueira - RN, 59315-000",
  phone: "(11) 98765-4321", // Replace with actual phone number
  email: "contato@thaynanbarber.com", // Replace with actual email
  workingHours: "Segunda a Sexta: 9h - 20h | Sábado: 9h - 18h",
  socialMedia: [
    { name: "Instagram", url: "https://instagram.com/thaynanbarber", icon: Instagram },
    { name: "Facebook", url: "https://facebook.com/thaynanbarber", icon: Facebook },
  ],
  mapPinIcon: MapPin,
  phoneIcon: Phone,
  mailIcon: Mail,
};

// Open Graph Image for SEO
export const OG_IMAGE_URL = "https://placehold.co/1200x630.png"; // Replace with your actual OG image URL

