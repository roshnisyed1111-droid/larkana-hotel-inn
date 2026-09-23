import React, { useState } from 'react';
import { Utensils, Coffee, Check, ArrowRight, Eye } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';
import { MenuLightboxModal } from './MenuLightboxModal.tsx';

interface DiningSectionProps {
  onOpenBooking: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onOpenBooking }) => {
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  return (
    <section id="dining" className="py-24 sm:py-32 bg-[#F4EFEA] relative overflow-hidden border-y border-[#E6DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="h-px w-8 bg-[#5B141D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5B141D]">
              DINING AT LARKANA HOTEL INN
            </span>
            <span className="h-1 w-1 rounded-full bg-[#C9A86A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.15] text-balance">
            A TABLE FOR
            <br />
            <span className="italic font-light text-[#5B141D]">EVERY OCCASION</span>
          </h2>

          <p className="text-[#5C564F] text-base leading-relaxed max-w-2xl">
            Larkana Hotel Inn features an attentive on-site dining experience serving traditional Pakistani dishes, freshly prepared clay-oven rotis, and continuous steaming Karak Chai for in-house residents and visiting guests.
          </p>
        </div>

        {/* Editorial Composition: Two Featured Visual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Asymmetry with 2 Real Dining Photos */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Dining Table & Hall Photo */}
            <div className="rounded-sm overflow-hidden bg-white border border-[#E6DFD5] shadow-lg group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={HOTEL_CONFIG.images.dining}
                  alt="Restaurant dining tables and interior seating at Larkana Hotel Inn"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white border-t border-[#E6DFD5]">
                <h4 className="font-serif text-lg text-[#1E1B18]">Restaurant Hall</h4>
                <p className="text-xs text-[#736B63] mt-1">
                  Air-conditioned seating with comfortable diamond-tufted chairs.
                </p>
              </div>
            </div>

            {/* Traditional Chai & Hospitality Photo */}
            <div className="rounded-sm overflow-hidden bg-white border border-[#E6DFD5] shadow-lg group sm:translate-y-6">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={HOTEL_CONFIG.images.tea}
                  alt="Traditional Karak Chai milk tea service at Larkana Hotel Inn"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white border-t border-[#E6DFD5]">
                <h4 className="font-serif text-lg text-[#1E1B18]">Karak Chai Service</h4>
                <p className="text-xs text-[#736B63] mt-1">
                  Freshly poured doodh patti tea and traditional refreshments.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Confirmed Dining Services & Action */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5B141D]">
                CONFIRMED DINING SERVICES
              </span>
              <p className="text-[#4A453F] text-sm sm:text-base leading-relaxed">
                Enjoy flexible dining options tailored to your schedule in Larkana:
              </p>
            </div>

            {/* Confirmed Services List */}
            <div className="space-y-3.5">
              {HOTEL_CONFIG.diningServices.map((service) => (
                <div
                  key={service.title}
                  className="p-3.5 bg-white rounded-sm border border-[#E6DFD5] flex items-start space-x-3 transition-colors hover:border-[#5B141D]/30"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#5B141D]" />
                  </div>
                  <div>
                    <h5 className="font-medium text-xs sm:text-sm text-[#1E1B18]">{service.title}</h5>
                    <p className="text-xs text-[#736B63]">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setMenuModalOpen(true)}
                className="btn-embossed bg-[#5B141D] hover:bg-[#480E15] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold px-6 py-3.5 rounded-sm border border-[#7D222E] flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#C9A86A]" />
                <span>VIEW MENU</span>
              </button>

              <button
                type="button"
                onClick={onOpenBooking}
                className="bg-white hover:bg-[#FAF8F5] text-[#1E1B18] text-xs uppercase tracking-[0.16em] font-medium px-6 py-3.5 rounded-sm border border-[#E6DFD5] flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <span>RESERVE TABLE / STAY</span>
                <ArrowRight className="w-4 h-4 text-[#5B141D]" />
              </button>
            </div>
          </div>

        </div>

        {/* Fullscreen Menu Lightbox Modal */}
        {menuModalOpen && (
          <MenuLightboxModal
            onClose={() => setMenuModalOpen(false)}
            onOpenBooking={onOpenBooking}
          />
        )}
      </div>
    </section>
  );
};
