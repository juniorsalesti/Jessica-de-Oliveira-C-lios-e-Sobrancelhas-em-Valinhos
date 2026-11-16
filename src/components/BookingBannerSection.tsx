import React from 'react';
import { motion } from 'motion/react';
import { buildWhatsAppUrl } from '../data/studioData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const BookingBannerSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-28 bg-[#EAE0D3] border-t border-b border-[#C6A46B]/35">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium tracking-[0.24em] uppercase text-[#8C7465] mb-2.5 sm:mb-3">
            Agendamento
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3A281E] mb-4 sm:mb-5">
            Seu momento de autocuidado começa aqui!
          </h2>

          <p className="text-[15px] sm:text-lg text-[#6B5344] max-w-xl mx-auto leading-relaxed mb-7 sm:mb-9">
            Agende seu horário e venha viver uma experiência especial de beleza e cuidado.
          </p>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-4 text-xs sm:text-base font-medium tracking-wider uppercase text-[#FDFBF8] bg-[#3A281E] hover:bg-[#573E30] active:bg-[#573E30] rounded-lg transition-all duration-200 shadow-[0_12px_30px_-10px_rgba(58,40,30,0.42)] hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EAE0D3]"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C6A46B] shrink-0" />
            <span>Quero agendar meu horário</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
