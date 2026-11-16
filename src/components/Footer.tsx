import React from 'react';
import { STUDIO_CONFIG, buildWhatsAppUrl } from '../data/studioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5EFE7] border-t border-[#3A281E]/10 pt-12 pb-24 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-4 sm:gap-5">
        <div>
          <p className="font-serif text-2xl font-medium text-[#3A281E]">
            {STUDIO_CONFIG.brandName}
          </p>
          <p className="text-sm text-[#6B5344] mt-1">{STUDIO_CONFIG.tagline}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-[#8C7465] mt-1.5">
            {STUDIO_CONFIG.city}
          </p>
        </div>

        <div className="flex items-center gap-3 text-sm font-medium text-[#3A281E]">
          <a
            href={STUDIO_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center px-2 hover:text-[#B59155] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] rounded-sm"
          >
            Instagram
          </a>
          <span aria-hidden="true" className="text-[#C6A46B]">
            |
          </span>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center px-2 hover:text-[#B59155] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] rounded-sm"
          >
            WhatsApp
          </a>
        </div>

        <div className="w-full max-w-md border-t border-[#3A281E]/10 pt-5">
          <p className="text-xs text-[#8C7465]">
            © 2026 {STUDIO_CONFIG.brandName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
