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
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex items-center justify-center gap-2.5 w-11 h-11 sm:w-auto sm:h-12 sm:px-5 rounded-full bg-[#3A281E] hover:bg-[#573E30] active:bg-[#573E30] text-[#FDFBF8] border border-[#C6A46B]/60 shadow-[0_10px_28px_-6px_rgba(58,40,30,0.45)] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF8]"
    >
      <WhatsAppIcon className="w-5 h-5 text-[#C6A46B] shrink-0" />
      <span className="hidden sm:inline text-xs font-medium tracking-wider uppercase whitespace-nowrap">
        Agendar
      </span>
    </a>
  );
};
