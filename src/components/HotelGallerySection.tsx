import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { HOTEL_CONFIG, GalleryItem } from '../data/hotelConfig.ts';
import { GalleryLightboxModal } from './GalleryLightboxModal.tsx';

type FilterCategory = 'ALL' | 'ROOMS' | 'DINING' | 'INTERIORS' | 'HOTEL';

export const HotelGallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'ALL'
    ? HOTEL_CONFIG.galleryItems
    : HOTEL_CONFIG.galleryItems.filter((item) => item.category === activeFilter);

  const filters: FilterCategory[] = ['ALL', 'ROOMS', 'DINING', 'INTERIORS', 'HOTEL'];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-[#5B141D]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5B141D]">
                PHOTOGRAPHY ARCHIVE
              </span>
              <span className="h-1 w-1 rounded-full bg-[#C9A86A]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.15] text-balance">
              THE HOTEL EXPERIENCE
            </h2>

            <p className="text-[#5C564F] text-base leading-relaxed">
              Explore the architectural spaces, guest accommodations, dining environments, and daily hospitality at Larkana Hotel Inn.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-1.5 p-1 bg-[#F4EFEA] border border-[#E6DFD5] rounded-sm overflow-x-auto self-start md:self-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#5B141D] text-white shadow-sm'
                    : 'text-[#4A453F] hover:text-[#1E1B18]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {filteredItems.map((item, idx) => {
            // Span configuration for asymmetrical layout rhythm
            const isLarge = idx === 0 || idx === 3;
            const colSpan = isLarge ? 'lg:col-span-8' : 'lg:col-span-4';

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`${colSpan} group relative rounded-sm overflow-hidden bg-black/5 border border-[#E6DFD5] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 card-hover-3d`}
              >
                <div className={`overflow-hidden ${isLarge ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Dark Hover Scrim with Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C9A86A]">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-lg text-white font-normal mt-0.5">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Static clean bottom bar for non-hover state */}
                <div className="p-3 bg-white border-t border-[#E6DFD5] flex items-center justify-between text-xs text-[#736B63] group-hover:hidden">
                  <span className="font-serif text-[#1E1B18] font-normal">{item.title}</span>
                  <span className="text-[10px] uppercase tracking-wider font-medium text-[#5B141D]">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Lightbox */}
        {lightboxIndex !== null && (
          <GalleryLightboxModal
            items={filteredItems}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}

      </div>
    </section>
  );
};
