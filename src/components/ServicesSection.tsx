import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, buildWhatsAppUrl } from '../data/studioData';
import { ResilientImage } from './ResilientImage';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="servicos"
      className="py-16 sm:py-28 lg:py-32 bg-[#FDFBF8] border-t border-[#3A281E]/8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <p className="text-xs font-medium tracking-[0.24em] uppercase text-[#B59155] mb-2.5 sm:mb-3">
            Procedimentos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3A281E] mb-3.5 sm:mb-4">
            Sua beleza merece esse cuidado.
          </h2>
          <p className="text-[15px] sm:text-lg text-[#6B5344] leading-relaxed">
            Conheça os procedimentos disponíveis e escolha o que combina com você.
          </p>
        </motion.div>

        {/* Balanced centered flex-wrap grid: 1 col mobile, 2 cols tablet, 3+2 desktop */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.48,
                delay: Math.min(index * 0.06, 0.24),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group w-full md:w-[calc(50%-0.875rem)] lg:w-[calc(33.333%-1.17rem)] flex flex-col bg-[#F5EFE7]/65 hover:bg-[#F5EFE7] border border-[#3A281E]/10 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(58,40,30,0.14)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#EAE0D3]">
                <ResilientImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  fallbackLabel={service.title}
                />
              </div>

              <div className="flex flex-col flex-1 justify-between p-5 sm:p-7">
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-wide text-[#3A281E] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#6B5344] leading-relaxed mb-5 sm:mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#3A281E]/8">
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] w-full inline-flex items-center justify-between text-sm font-medium text-[#3A281E] hover:text-[#B59155] active:text-[#B59155] transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] rounded-sm"
                  >
                    <span>Agendar horário</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#B59155] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
