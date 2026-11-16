import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_IMAGE, buildWhatsAppUrl } from '../data/studioData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-16 sm:py-28 lg:py-32 bg-[#F5EFE7] border-t border-[#3A281E]/8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 sm:gap-12 lg:gap-16 items-center">
          {/* Portrait Column with matching arch motif */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[290px] sm:max-w-[390px] lg:max-w-none">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -inset-3 -translate-x-2.5 translate-y-2.5 rounded-t-[180px] rounded-b-2xl border border-[#C6A46B]/45 pointer-events-none"
              />
              <div className="relative aspect-[3/4] w-full rounded-t-[140px] sm:rounded-t-[180px] rounded-b-2xl overflow-hidden border border-[#3A281E]/10 bg-[#EAE0D3] shadow-[0_20px_48px_-18px_rgba(58,40,30,0.16)]">
                <ResilientImage
                  src={ABOUT_IMAGE.src}
                  alt={ABOUT_IMAGE.alt}
                  className="w-full h-full object-cover object-top"
                  fallbackLabel="Jessica de Oliveira"
                />
              </div>
            </div>
          </motion.div>

          {/* Editorial Story Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
              <span aria-hidden="true" className="w-7 sm:w-8 h-[1px] bg-[#C6A46B]" />
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.24em] uppercase text-[#8C7465]">
                Sobre mim
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3A281E] mb-5 sm:mb-7">
              Muito prazer, sou Jessica!
            </h2>

            <div className="space-y-4 sm:space-y-5 text-[15px] sm:text-lg text-[#6B5344] leading-relaxed max-w-xl">
              <p>
                Acredito que a beleza está nos detalhes e que cada mulher merece um momento especial de cuidado consigo mesma.
              </p>

              <p>
                Meu trabalho vai além da estética: é sobre autoestima, carinho e dedicação em cada atendimento.
              </p>
            </div>

            <div className="mt-7 sm:mt-8 pt-6 sm:pt-7 border-t border-[#C6A46B]/45 max-w-xl">
              <p className="font-serif italic text-xl sm:text-2xl text-[#3A281E] leading-snug">
                Meu dom vem de Deus, meu propósito é cuidar de você. 🙏🏼🥰
              </p>
            </div>

            <div className="mt-7 sm:mt-9">
              <a
                href={buildWhatsAppUrl(
                  'Olá, Jessica! Gostaria de conhecer mais sobre seu trabalho e agendar um horário.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-medium text-[#3A281E] bg-[#FDFBF8] hover:bg-[#EAE0D3] active:bg-[#EAE0D3] border border-[#3A281E]/15 rounded-lg transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B]"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#B59155]" />
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
