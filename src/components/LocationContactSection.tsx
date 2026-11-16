import React from 'react';
import { CalendarClock, Instagram, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { STUDIO_CONFIG, buildWhatsAppUrl } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const LocationContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 sm:py-28 lg:py-32 bg-[#FDFBF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Studio Contact Info & Prepared Address Space */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
              <span aria-hidden="true" className="w-7 sm:w-8 h-[1px] bg-[#C6A46B]" />
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.24em] uppercase text-[#8C7465]">
                Localização & Contato
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3A281E] mb-6 sm:mb-8">
              Vamos cuidar de você?
            </h2>

            <div className="space-y-3.5 sm:space-y-4 text-[15px] sm:text-base text-[#6B5344] mb-7 sm:mb-8">
              <p className="font-serif text-2xl font-medium text-[#3A281E]">
                {STUDIO_CONFIG.brandName}
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#B59155] shrink-0" aria-hidden="true" />
                <span>{STUDIO_CONFIG.city}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <CalendarClock className="w-4 h-4 text-[#B59155] shrink-0" aria-hidden="true" />
                <span>{STUDIO_CONFIG.attendanceNote}</span>
              </p>
            </div>

            {/* Prepared space for future street address */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#F5EFE7]/80 border border-[#3A281E]/10 mb-7 sm:mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8C7465] mb-1.5">
                Endereço completo
              </p>
              <p className="text-sm text-[#6B5344] leading-relaxed">
                Espaço preparado para inserção futura do endereço do estúdio em Valinhos – SP. Ao agendar pelo WhatsApp, você recebe a localização exata do atendimento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-wide text-[#FDFBF8] bg-[#3A281E] hover:bg-[#573E30] active:bg-[#573E30] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B]"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#C6A46B]" />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href={STUDIO_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#3A281E] bg-[#FDFBF8] hover:bg-[#F5EFE7] active:bg-[#F5EFE7] border border-[#3A281E]/15 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B]"
              >
                <Instagram className="w-4 h-4 text-[#B59155]" aria-hidden="true" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Prepared Container for Future Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full min-h-[260px] sm:min-h-[360px] lg:min-h-[420px] rounded-2xl border border-[#3A281E]/10 bg-[#F5EFE7] flex flex-col items-center justify-center p-6 sm:p-10 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#FDFBF8] border border-[#C6A46B]/55 flex items-center justify-center shadow-sm mb-4">
                <MapPin className="w-5 h-5 text-[#B59155]" aria-hidden="true" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#3A281E] mb-2">
                {STUDIO_CONFIG.city}
              </h3>

              <p className="text-sm text-[#6B5344] leading-relaxed max-w-sm mb-5 sm:mb-6">
                Espaço reservado para incorporar futuramente o mapa interativo do Google Maps com a localização do estúdio.
              </p>

              <a
                href={buildWhatsAppUrl(
                  'Olá, Jessica! Gostaria de confirmar a localização do atendimento em Valinhos.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center px-3 text-xs font-medium uppercase tracking-[0.16em] text-[#3A281E] hover:text-[#B59155] transition-colors underline underline-offset-4 decoration-[#C6A46B]"
              >
                Solicitar localização pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
