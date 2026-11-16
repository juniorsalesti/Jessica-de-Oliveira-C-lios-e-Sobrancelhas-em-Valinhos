import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { motion } from 'motion/react';
import {
  GALLERY_ITEMS,
  GalleryCategory,
  GalleryItem,
  buildWhatsAppUrl,
} from '../data/studioData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

const FILTER_TABS: { id: GalleryCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'cilios', label: 'Cílios' },
  { id: 'sobrancelhas', label: 'Sobrancelhas' },
  { id: 'labios', label: 'Lábios' },
];

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('todos');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowRight') {
        const idx = filteredItems.findIndex((item) => item.id === selectedItem.id);
        if (idx !== -1) {
          setSelectedItem(filteredItems[(idx + 1) % filteredItems.length]);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = filteredItems.findIndex((item) => item.id === selectedItem.id);
        if (idx !== -1) {
          setSelectedItem(
            filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length]
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, filteredItems]);

  const navigateLightbox = (direction: 1 | -1) => {
    if (!selectedItem || filteredItems.length === 0) return;
    const idx = filteredItems.findIndex((item) => item.id === selectedItem.id);
    if (idx === -1) return;
    const nextIdx = (idx + direction + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[nextIdx]);
  };

  return (
    <section
      id="resultados"
      className="py-16 sm:py-28 lg:py-32 bg-[#FDFBF8] border-t border-[#3A281E]/8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header + Mobile-friendly Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-9 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <p className="text-xs font-medium tracking-[0.24em] uppercase text-[#B59155] mb-2.5 sm:mb-3">
              Resultados
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3A281E]">
              Beleza que encanta nos detalhes.
            </h2>
          </motion.div>

          <div
            role="tablist"
            aria-label="Filtrar galeria por procedimento"
            className="inline-flex items-center gap-1 p-1 bg-[#F5EFE7] border border-[#3A281E]/10 rounded-lg self-start md:self-auto max-w-full overflow-x-auto"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`min-h-[40px] px-3 sm:px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] ${
                    isActive
                      ? 'bg-[#3A281E] text-[#FDFBF8] shadow-sm'
                      : 'text-[#6B5344] hover:text-[#3A281E]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Photo Grid */}
        <div
          className={
            activeCategory === 'todos'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6'
              : 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'
          }
        >
          {filteredItems.map((item, idx) => {
            const tileClass =
              activeCategory === 'todos'
                ? item.gridSpanClass
                : 'h-[260px] sm:h-[380px]';

            return (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(idx * 0.05, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setSelectedItem(item)}
                aria-label={`Ampliar resultado: ${item.title}`}
                className={`${tileClass} group relative block w-full text-left rounded-2xl overflow-hidden border border-[#3A281E]/10 bg-[#EAE0D3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF8]`}
              >
                <ResilientImage
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  fallbackLabel={item.categoryLabel}
                />

                {/* Always subtly visible on touch/mobile, hover-revealed on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241811]/80 via-[#241811]/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 sm:p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#EAE0D3] mb-0.5 sm:mb-1">
                        {item.categoryLabel}
                      </p>
                      <p className="font-serif text-lg sm:text-xl text-[#FDFBF8] leading-snug">
                        {item.title}
                      </p>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-[#FDFBF8]/20 backdrop-blur-sm border border-[#FDFBF8]/25 flex items-center justify-center text-[#FDFBF8] shrink-0">
                      <Expand className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <p className="mt-7 sm:mt-9 text-xs sm:text-sm text-[#8C7465] text-center">
          Espaço preparado para exibir as fotografias reais dos trabalhos realizados por Jessica de Oliveira.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-[#1F150F]/88 backdrop-blur-sm flex items-center justify-center p-3 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[92dvh] overflow-y-auto bg-[#FDFBF8] rounded-2xl border border-[#C6A46B]/30 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Fechar visualização"
              className="absolute top-3 right-3 z-10 w-11 h-11 rounded-full bg-[#3A281E]/85 hover:bg-[#3A281E] text-[#FDFBF8] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#EAE0D3]">
              <ResilientImage
                src={selectedItem.image}
                alt={selectedItem.imageAlt}
                loading="eager"
                className="w-full h-full object-cover object-center"
                fallbackLabel={selectedItem.title}
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => navigateLightbox(-1)}
                    aria-label="Foto anterior"
                    className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FDFBF8]/88 hover:bg-[#FDFBF8] text-[#3A281E] flex items-center justify-center shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateLightbox(1)}
                    aria-label="Próxima foto"
                    className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FDFBF8]/88 hover:bg-[#FDFBF8] text-[#3A281E] flex items-center justify-center shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46B]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FDFBF8]">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#B59155] mb-1">
                  {selectedItem.categoryLabel}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl text-[#3A281E]">
                  {selectedItem.title}
                </h3>
              </div>

              <a
                href={buildWhatsAppUrl(
                  `Olá, Jessica! Gostaria de agendar um procedimento como "${selectedItem.title}".`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-[#FDFBF8] bg-[#3A281E] hover:bg-[#573E30] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#C6A46B]" />
                <span>Agendar este procedimento</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
