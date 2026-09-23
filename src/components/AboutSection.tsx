import React from 'react';
import { MapPin, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F4EFEA] border-t border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-sm overflow-hidden bg-white border border-[#E6DFD5] shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={HOTEL_CONFIG.images.hero}
                  alt="Larkana Hotel Inn Interior Lounge and Architecture"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-white border-t border-[#E6DFD5] flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-[#5C564F]">
                  <MapPin className="w-3.5 h-3.5 text-[#5B141D]" />
                  <span>H626+8W3, Larkana, Pakistan</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#5B141D] font-semibold">
                  Sindh Province
                </span>
              </div>
            </div>
            
            {/* Subtle floating quote card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-5 rounded-sm border border-[#E6DFD5] shadow-xl max-w-xs">
              <p className="font-serif italic text-sm text-[#1E1B18] leading-snug">
                “Committed to honest hospitality, peaceful comfort, and authentic dining in Larkana.”
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#5B141D] font-semibold mt-2">
                The Management
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-[#5B141D]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5B141D]">
                ABOUT LARKANA HOTEL INN
              </span>
              <span className="h-1 w-1 rounded-full bg-[#C9A86A]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.15] text-balance">
              HOSPITALITY ROOTED IN
              <br />
              <span className="italic font-light text-[#5B141D]">CARE &amp; TRADITION</span>
            </h2>

            <p className="text-[#4A453F] text-base leading-relaxed">
              Situated in the historic and bustling hub of Larkana in Sindh, Larkana Hotel Inn was founded to provide guests with clean, comfortable accommodations paired with heartfelt regional hospitality.
            </p>

            <p className="text-[#5C564F] text-sm sm:text-base leading-relaxed">
              Whether you are arriving for business commitments, visiting extended family, or stopping over en route to Mohenjo-daro and regional heritage destinations, our team takes pride in ensuring your stay is safe, restful, and well attended.
            </p>

            {/* Factual Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 bg-white rounded-sm border border-[#E6DFD5]">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#5B141D] uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24-Hour Desk</span>
                </div>
                <p className="text-xs text-[#736B63]">
                  Late arrivals and early check-outs supported by round-the-clock staff.
                </p>
              </div>

              <div className="p-4 bg-white rounded-sm border border-[#E6DFD5]">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#5B141D] uppercase tracking-wider mb-1">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Local Hospitality</span>
                </div>
                <p className="text-xs text-[#736B63]">
                  Welcoming guest reception with freshly brewed tea and personalized care.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#736B63] flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#5B141D]" />
              <span>Direct communication via telephone and WhatsApp for all bookings.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
