import React from 'react';
import { BedDouble, HeartHandshake, UtensilsCrossed, MapPin } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

export const WhyStayWithUs: React.FC = () => {
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BedDouble className="w-5 h-5 text-[#5B141D]" />;
      case 1:
        return <HeartHandshake className="w-5 h-5 text-[#5B141D]" />;
      case 2:
        return <UtensilsCrossed className="w-5 h-5 text-[#5B141D]" />;
      case 3:
        return <MapPin className="w-5 h-5 text-[#5B141D]" />;
      default:
        return <BedDouble className="w-5 h-5 text-[#5B141D]" />;
    }
  };

  return (
    <section className="py-24 bg-[#F4EFEA] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center space-x-3">
            <span className="h-px w-6 bg-[#5B141D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5B141D]">
              THOUGHTFUL HOSPITALITY
            </span>
            <span className="h-px w-6 bg-[#5B141D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1B18] font-normal">
            WHY STAY WITH US
          </h2>

          <p className="text-xs sm:text-sm text-[#5C564F] max-w-lg mx-auto">
            Practical comforts and attentive service designed to make your time in Larkana dependable and pleasant.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOTEL_CONFIG.whyStayWithUs.map((feature, idx) => (
            <div
              key={feature.title}
              className="card-hover-3d bg-white p-7 rounded-sm border border-[#E6DFD5] flex flex-col justify-between group hover:border-[#5B141D]/30"
            >
              <div className="space-y-4">
                <div className="icon-depth w-12 h-12 rounded-sm bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center group-hover:bg-[#5B141D]/5 transition-colors">
                  {getFeatureIcon(idx)}
                </div>
                
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5B141D]">
                    {feature.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-[#1E1B18] font-normal mt-1">
                    {feature.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5C564F] leading-relaxed mt-4 pt-4 border-t border-[#F0EBE3]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
