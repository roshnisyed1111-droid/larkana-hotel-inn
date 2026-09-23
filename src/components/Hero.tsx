import React from 'react';
import { ArrowDown, ChevronRight, ShieldCheck, MapPin } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E1B18]">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HOTEL_CONFIG.images.hero}
          alt="Larkana Hotel Inn Reception & Grand Lounge in Larkana, Pakistan"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/40" />
        <div className="absolute inset-0 bg-[#380A10]/20 mix-blend-multiply" />
      </div>

      {/* Tasteful 3D Brass/Champagne Architectural Ornament in top-right */}
      <div className="hidden lg:block absolute top-28 right-12 z-10 pointer-events-none perspective-1000">
        <div className="animate-subtle-3d preserve-3d p-4 rounded-sm border border-[#C9A86A]/40 bg-[#2D0D12]/40 backdrop-blur-md shadow-2xl flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-[#C9A86A] flex items-center justify-center text-[#C9A86A] text-xs font-serif font-bold shadow-inner">
            L
          </div>
          <div className="pr-2">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A86A] font-medium">EST. HOSPITALITY</p>
            <p className="text-xs text-[#FAF8F5] font-serif">Larkana Hotel Inn</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Subtle Location Trust Kicker */}
        <div className="inline-flex items-center space-x-2 mb-6 text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-semibold">
          <MapPin className="w-3.5 h-3.5 text-[#C9A86A]" />
          <span>Larkana, Sindh, Pakistan</span>
          <span className="text-[#C9A86A]/50">·</span>
          <span>H626+8W3</span>
        </div>

        {/* Small Label */}
        <div className="mb-4">
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-[#EDE6DD]">
            LARKANA HOTEL INN
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.08] mb-6 text-balance max-w-4xl mx-auto">
          CLASSIC COMFORT.
          <br />
          <span className="italic font-light text-[#FAF8F5]">THOUGHTFUL HOSPITALITY.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-[#EDE6DD] text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          Experience comfortable accommodation, elegant surroundings and warm hospitality in Larkana.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto btn-embossed bg-[#5B141D] hover:bg-[#480E15] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded-sm border border-[#7D222E] flex items-center justify-center space-x-2 transition-transform duration-200 cursor-pointer"
          >
            <span>BOOK YOUR STAY</span>
            <ChevronRight className="w-4 h-4 text-[#C9A86A]" />
          </button>

          <a
            href="#rooms"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 rounded-sm border border-white/25 backdrop-blur-sm transition-all duration-200 text-center"
          >
            EXPLORE ROOMS
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-white/15 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#EDE6DD]/90">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A86A]" />
            <span className="tracking-wider uppercase">Direct Hotel Assistance</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#C9A86A] text-sm font-semibold">4.2 ★</span>
            <span className="tracking-wider uppercase">166 Verified Reviews</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
            <span className="tracking-wider uppercase">On-Site Restaurant</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#welcome"
        aria-label="Scroll down to welcome section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A86A] font-medium">DISCOVER</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C9A86A]" />
      </a>
    </section>
  );
};
