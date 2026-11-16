import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { STUDIO_CONFIG, buildWhatsAppUrl } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#contato', label: 'Contato' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled || mobileOpen
          ? 'bg-[#FDFBF8]/95 backdrop-blur-md border-b border-[#3A281E]/10'
          : 'bg-[#FDFBF8]/85 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#inicio"
          onClick={() => setMobileOpen(false)}
          className="font-serif text-lg sm:text-2xl font-medium tracking-tight text-[#3A281E] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] rounded-sm"
        >
          {STUDIO_CONFIG.brandName}
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B5344]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#3A281E] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#C6A46B] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide text-[#FDFBF8] bg-[#3A281E] hover:bg-[#573E30] rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF8]"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#C6A46B]" />
            <span>Agendar Horário</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-1.5 rounded-lg text-[#3A281E] active:bg-[#F5EFE7] hover:bg-[#F5EFE7] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FDFBF8] border-t border-[#3A281E]/10 px-4 pb-6 pt-2 shadow-lg">
          <nav aria-label="Navegação móvel" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-[48px] flex items-center px-2 text-base font-medium text-[#3A281E] border-b border-[#3A281E]/8 last:border-b-0 active:text-[#B59155] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-medium text-[#FDFBF8] bg-[#3A281E] active:bg-[#573E30] rounded-lg transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#C6A46B]" />
              <span>Agendar meu horário</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
