import React from 'react';
import { buildWhatsAppUrl } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar horário pelo WhatsApp"
      title="Agendar pelo WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA851] text-white shadow-[0_8px_24px_rgba(37,211,102,0.42)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF8]"
    >
      <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </a>
  );
};
