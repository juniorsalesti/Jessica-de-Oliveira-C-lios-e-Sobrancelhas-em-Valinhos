export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export type GalleryCategory = 'todos' | 'cilios' | 'sobrancelhas' | 'labios';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'todos'>;
  categoryLabel: string;
  image: string;
  imageAlt: string;
  gridSpanClass: string;
}

/**
 * Configurações centrais do estúdio.
 * Atualize `whatsappNumber` (DDI + DDD + número) e `instagramUrl` quando publicar.
 */
export const STUDIO_CONFIG = {
  brandName: 'Jessica de Oliveira',
  tagline: 'Beleza • Cuidado • Autoestima',
  city: 'Valinhos – SP',
  attendanceNote: 'Atendimento com horário agendado.',
  whatsappNumber: '5519999999999',
  instagramUrl: 'https://instagram.com/',
  defaultWhatsappMessage:
    'Olá, Jessica! Gostaria de saber mais informações e agendar meu horário.',
};

export function buildWhatsAppUrl(
  message: string = STUDIO_CONFIG.defaultWhatsappMessage
): string {
  return `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const HERO_IMAGE = {
  src: 'https://i.ibb.co/G34HwqqY/Captura-de-tela-2026-11-16-140530.png',
  alt: 'Jessica de Oliveira — especialista em cílios e sobrancelhas em Valinhos – SP',
};

export const ABOUT_IMAGE = {
  src: 'https://i.ibb.co/G34HwqqY/Captura-de-tela-2026-11-16-140530.png',
  alt: 'Retrato profissional de Jessica de Oliveira, especialista em cílios e sobrancelhas em Valinhos – SP',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'cilios',
    title: 'CÍLIOS',
    description: 'Realce seu olhar com técnicas que valorizam sua beleza natural.',
    image: '/src/assets/images/service_cilios_1794848113737.jpg',
    imageAlt: 'Extensão de cílios com acabamento leve e natural em Valinhos',
    whatsappMessage:
      'Olá, Jessica! Gostaria de agendar um horário para Cílios.',
  },
  {
    id: 'lash-lifting',
    title: 'LASH LIFTING',
    description:
      'Curvatura e destaque para seus cílios naturais, proporcionando um olhar mais expressivo.',
    image: '/src/assets/images/service_lash_lifting_1794848113526.jpg',
    imageAlt: 'Lash Lifting com curvatura natural e definida dos cílios',
    whatsappMessage:
      'Olá, Jessica! Gostaria de agendar um horário para Lash Lifting.',
  },
  {
    id: 'sobrancelhas',
    title: 'SOBRANCELHAS',
    description: 'Design e cuidado para valorizar a harmonia do seu rosto.',
    image: '/src/assets/images/service_sobrancelhas_1794848113903.jpg',
    imageAlt: 'Design de sobrancelhas alinhadas e harmônicas ao rosto',
    whatsappMessage:
      'Olá, Jessica! Gostaria de agendar um horário para Sobrancelhas.',
  },
  {
    id: 'brow-lamination',
    title: 'BROW LAMINATION',
    description: 'Sobrancelhas alinhadas, definidas e com efeito moderno.',
    image: '/src/assets/images/service_brow_lamination_1794848114413.jpg',
    imageAlt: 'Brow Lamination com fios alinhados, preenchidos e acabamento natural',
    whatsappMessage:
      'Olá, Jessica! Gostaria de agendar um horário para Brow Lamination.',
  },
  {
    id: 'hydra-gloss',
    title: 'HYDRA GLOSS',
    description:
      'Cuidado estético labial para realçar a beleza e proporcionar aparência hidratada.',
    image: '/src/assets/images/service_hydra_gloss_1794848114461.jpg',
    imageAlt: 'Hydra Gloss labial com brilho suave e aspecto hidratado',
    whatsappMessage:
      'Olá, Jessica! Gostaria de agendar um horário para Hydra Gloss.',
  },
];

/**
 * Galeria preparada para receber as fotografias reais da profissional.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'res-01',
    title: 'Extensão de Cílios — Naturalidade e leveza',
    category: 'cilios',
    categoryLabel: 'Cílios',
    image: '/src/assets/images/gallery_result_01_1794848116502.jpg',
    imageAlt: 'Resultado de extensão de cílios com acabamento delicado',
    gridSpanClass: 'lg:col-span-7 h-[320px] sm:h-[420px]',
  },
  {
    id: 'res-02',
    title: 'Design & Lash Lifting — Harmonia do olhar',
    category: 'sobrancelhas',
    categoryLabel: 'Sobrancelhas',
    image: '/src/assets/images/gallery_result_02_1794848117091.jpg',
    imageAlt: 'Design de sobrancelhas combinado com cílios curvados naturalmente',
    gridSpanClass: 'lg:col-span-5 h-[360px] sm:h-[420px]',
  },
  {
    id: 'res-03',
    title: 'Brow Lamination — Fios alinhados',
    category: 'sobrancelhas',
    categoryLabel: 'Sobrancelhas',
    image: '/src/assets/images/gallery_result_03_1794848116961.jpg',
    imageAlt: 'Resultado de Brow Lamination com alinhamento suave dos fios',
    gridSpanClass: 'lg:col-span-4 h-[300px] sm:h-[340px]',
  },
  {
    id: 'res-04',
    title: 'Hydra Gloss — Brilho e hidratação',
    category: 'labios',
    categoryLabel: 'Lábios',
    image: '/src/assets/images/gallery_result_04_1794848116647.jpg',
    imageAlt: 'Resultado de Hydra Gloss labial em luz natural',
    gridSpanClass: 'lg:col-span-4 h-[300px] sm:h-[340px]',
  },
  {
    id: 'res-05',
    title: 'Lash Lifting — Curvatura expressiva',
    category: 'cilios',
    categoryLabel: 'Cílios',
    image: '/src/assets/images/service_lash_lifting_1794848113526.jpg',
    imageAlt: 'Cílios naturais curvados com técnica de Lash Lifting',
    gridSpanClass: 'lg:col-span-4 h-[300px] sm:h-[340px]',
  },
];
