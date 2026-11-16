import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE, STUDIO_CONFIG, buildWhatsAppUrl } from '../data/studioData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-20 pb-14 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-24 bg-[#FDFBF8] overflow-hidden"
    >
      {/* Subtle right-side nude editorial backdrop on desktop */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 right-0 w-[42%] h-full bg-[#F5EFE7] border-l border-[#3A281E]/6 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 sm:gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-3.5 sm:mb-5">
              <span aria-hidden="true" className="w-7 sm:w-8 h-[1px] bg-[#C6A46B]" />
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase text-[#8C7465]">
                {STUDIO_CONFIG.brandName}
              </p>
            </div>

            <h1 className="font-serif text-[clamp(2.15rem,7vw,3.95rem)] font-medium leading-[1.08] tracking-tight text-[#3A281E] mb-4 sm:mb-6">
              Realce sua beleza natural com delicadeza e cuidado.
            </h1>

            <p className="text-[15px] sm:text-lg leading-relaxed text-[#6B5344] max-w-lg mb-5 sm:mb-6">
              Especialista em cílios e sobrancelhas, oferecendo procedimentos pensados para valorizar sua beleza e elevar sua autoestima.
            </p>

            <div className="flex items-center gap-2 text-sm font-medium text-[#6B5344] mb-7 sm:mb-9">
              <MapPin className="w-4 h-4 text-[#B59155] shrink-0" aria-hidden="true" />
              <span>{STUDIO_CONFIG.city}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#FDFBF8] bg-[#3A281E] hover:bg-[#573E30] active:bg-[#573E30] rounded-lg transition-all duration-200 shadow-[0_10px_28px_-10px_rgba(58,40,30,0.38)] hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF8]"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#C6A46B]" />
                <span>Agendar meu horário</span>
              </a>

              <a
                href="#servicos"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#3A281E] hover:text-[#B59155] border border-[#3A281E]/15 sm:border-transparent rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B]"
              >
                <span className="sm:border-b sm:border-[#3A281E]/25 sm:pb-0.5">
                  Conheça os procedimentos
                </span>
                <ArrowDown className="w-4 h-4 text-[#B59155]" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Arched Editorial Beauty Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[440px] lg:max-w-[460px]">
              {/* Signature champagne arch hairline offset */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -inset-3 translate-x-2.5 translate-y-2.5 rounded-t-[200px] rounded-b-2xl border border-[#C6A46B]/45 pointer-events-none"
              />
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-t-[150px] sm:rounded-t-[200px] rounded-b-2xl overflow-hidden border border-[#3A281E]/10 bg-[#EAE0D3] shadow-[0_24px_54px_-20px_rgba(58,40,30,0.18)]">
                <ResilientImage
                  src={HERO_IMAGE.src}
                  alt={HERO_IMAGE.alt}
                  loading="eager"
                  className="w-full h-full object-cover object-top"
                  fallbackLabel="Jessica de Oliveira"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
