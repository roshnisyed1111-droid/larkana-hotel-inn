import React, { useState } from 'react';
import {
  Accessibility,
  Utensils,
  Sparkles,
  CreditCard,
  Car,
  CheckCircle,
  Coffee,
  Tv,
  Flame,
  Cake,
  Baby,
  Smile,
  Calendar,
  Users,
} from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

export const AmenitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Accessibility className="w-4 h-4 text-[#5B141D]" />;
      case 1:
        return <Utensils className="w-4 h-4 text-[#5B141D]" />;
      case 2:
        return <Sparkles className="w-4 h-4 text-[#5B141D]" />;
      case 3:
        return <CreditCard className="w-4 h-4 text-[#5B141D]" />;
      case 4:
        return <Car className="w-4 h-4 text-[#5B141D]" />;
      default:
        return <CheckCircle className="w-4 h-4 text-[#5B141D]" />;
    }
  };

  const getItemIcon = (name: string) => {
    if (name.includes('Coffee') || name.includes('Chai')) return <Coffee className="w-4 h-4 text-[#5B141D]" />;
    if (name.includes('Sports')) return <Tv className="w-4 h-4 text-[#5B141D]" />;
    if (name.includes('Fireplace')) return <Flame className="w-4 h-4 text-[#5B141D]" />;
    if (name.includes('Dessert') || name.includes('Birthday')) return <Cake className="w-4 h-4 text-[#5B141D]" />;
    if (name.includes('Baby') || name.includes('High chairs')) return <Baby className="w-4 h-4 text-[#5B141D]" />;
    if (name.includes('Kid')) return <Smile className="w-4 h-4 text-[#5B141D]" />;
    if (name.includes('Reservation')) return <Calendar className="w-4 h-4 text-[#5B141D]" />;
    if (name.includes('Catering')) return <Users className="w-4 h-4 text-[#5B141D]" />;
    if (name.includes('Parking')) return <Car className="w-4 h-4 text-[#5B141D]" />;
    if (name.includes('Wheelchair')) return <Accessibility className="w-4 h-4 text-[#5B141D]" />;
    return <CheckCircle className="w-4 h-4 text-[#5B141D]" />;
  };

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="h-px w-8 bg-[#5B141D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5B141D]">
              PROPERTY CONVENIENCES
            </span>
            <span className="h-1 w-1 rounded-full bg-[#C9A86A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.15] text-balance">
            AMENITIES &amp; SERVICES
          </h2>

          <p className="text-[#5C564F] text-base leading-relaxed max-w-2xl">
            Only confirmed hotel amenities are presented below, guaranteeing clear expectations for your stay, dining, and accessibility requirements in Larkana.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2 pb-6 overflow-x-auto border-b border-[#E6DFD5] mb-10">
          {HOTEL_CONFIG.amenityCategories.map((cat, idx) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-sm text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === idx
                  ? 'bg-[#5B141D] text-white shadow-sm'
                  : 'bg-white text-[#4A453F] hover:text-[#1E1B18] border border-[#E6DFD5]'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTEL_CONFIG.amenityCategories[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="card-hover-3d bg-white p-6 rounded-sm border border-[#E6DFD5] hover:border-[#5B141D]/30 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="icon-depth w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center group-hover:bg-[#5B141D]/5 transition-colors">
                  {getItemIcon(item.name)}
                </div>
                <h3 className="font-serif text-lg text-[#1E1B18] font-normal group-hover:text-[#5B141D] transition-colors">
                  {item.name}
                </h3>
              </div>
              <p className="text-xs text-[#736B63] mt-3 leading-relaxed pt-3 border-t border-[#F0EBE3]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verified Notice Footer */}
        <div className="mt-12 p-4 bg-[#F4EFEA] rounded-sm border border-[#E6DFD5] text-xs text-[#5C564F] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#5B141D]" />
            <span>All listed facilities are verified directly on-premise at Larkana Hotel Inn.</span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-[#5B141D] font-medium">
            Larkana, Sindh
          </span>
        </div>

      </div>
    </section>
  );
};
