export interface SiteData {
  id: string;
  domain: string;
  settings: SiteSettings;
  pages: { home: HomePage };
  services: ServicePage[];
  locations: LocationPage[];
  combinedPages: CombinedPage[];  // Páginas geradas: Serviço + Localidade
  seo: SeoConfig;
  media: SiteMedia;
}

// Página Combinada (Serviço + Localidade) - Gerenciada pelo CMS
export interface CombinedPage {
  id: string;
  serviceId: string;      // Referência ao serviço
  locationId: string;     // Referência à localidade
  isActive: boolean;
  customHeadline?: string;
  customDescription?: string;
  createdAt: string;
}

export interface SiteSettings {
  companyName: string;
  slogan: string;
  logoUrl?: string;
  contact: { phone: string; whatsapp: string; email: string; address: SiteAddress };
  socialMedia: { instagram?: string; facebook?: string; googleMyBusiness?: string };
  colors: { primary: string; secondary: string; accent: string; background: string; foreground: string };
  openingHours: string;
  priceRange: string;
}

export interface SiteAddress {
  street: string; neighborhood: string; city: string; state: string; zipCode: string; country: string;
}

export interface HomePage {
  hero: { title: string; subtitle: string; ctaText: string; ctaLink: string; backgroundImage?: string };
  about: { title: string; description: string; highlights: { icon: string; value: string; label: string }[] };
  services: { title: string; subtitle: string };
  contact: { title: string; subtitle: string; formTitle: string };
}

export interface ServicePage {
  id: string; slug: string; name: string; headline: string; description: string;
  shortDescription: string; benefits: string[]; howItWorks: { number: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[]; ctaText: string; image?: string;
}

export interface LocationPage {
  id: string; 
  slug: string; 
  name: string;
  neighborhood: string; 
  city: string; 
  state: string;
  headline: string; 
  description: string;
  isActive: boolean;
}

export interface SeoConfig {
  defaultTitle: string; 
  titleTemplate: string; 
  defaultDescription: string;
  siteUrl: string; 
  ogImage: string; 
  twitterHandle?: string;
  schema: { 
    type: string;
    aggregateRating?: {
      ratingValue: string;
      reviewCount: string;
    }
  };
  pages: Record<string, { title: string; description: string }>;
}

export interface SiteMedia {
  heroImages: { id: string; url: string; alt: string }[];
  serviceImages: Record<string, { url: string; alt: string }>;
}