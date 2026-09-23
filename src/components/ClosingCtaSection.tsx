import React from 'react';
import { CalendarCheck, MessageSquare, Phone, Navigation, ArrowRight } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

interface ClosingCtaSectionProps {
  onOpenBooking: () => void;
}

export const ClosingCtaSection: React.FC<ClosingCtaSectionProps> = ({ onOpenBooking }) => {
  const handleDirectWhatsApp = () => {
    const defaultMsg = encodeURIComponent(
      'Hello Larkana Hotel Inn, I would like to inquire about room availability and reservations in Larkana.'
    );
    window.open(`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 sm:py-32 bg-[#2D0D12] text-white relative overflow-hidden">
      {/* Subtle background ambient graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#C9A86A] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#5B141D] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="flex items-center justify-center space-x-3">
          <span className="h-px w-8 bg-[#C9A86A]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A86A]">
            LARKANA HOTEL INN
          </span>
          <span className="h-px w-8 bg-[#C9A86A]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.1] text-balance">
          YOUR STAY STARTS HERE
        </h2>

        <p className="text-[#EDE6DD] text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
          Plan your stay at Larkana Hotel Inn. Reach out directly through WhatsApp or reserve your room request in seconds.
        </p>

        {/* 4 Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="btn-embossed bg-[#5B141D] hover:bg-[#480E15] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold py-4 px-4 rounded-sm border border-[#C9A86A]/40 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-[#C9A86A]" />
            <span>BOOK A ROOM</span>
          </button>

          {/* WhatsApp CTA */}
          <button
            type="button"
            onClick={handleDirectWhatsApp}
            className="bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-[0.16em] font-semibold py-4 px-4 rounded-sm shadow-md flex items-center justify-center space-x-2 transition-transform duration-150 hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WHATSAPP</span>
          </button>

          {/* Phone Call CTA */}
          <a
            href={`tel:${HOTEL_CONFIG.phoneCallNumber}`}
            className="bg-white/10 hover:bg-white/20 text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold py-4 px-4 rounded-sm border border-white/20 backdrop-blur-sm flex items-center justify-center space-x-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C9A86A]" />
            <span>CALL HOTEL</span>
          </a>

          {/* Directions CTA */}
          <a
            href={HOTEL_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold py-4 px-4 rounded-sm border border-white/20 backdrop-blur-sm flex items-center justify-center space-x-2 transition-colors"
          >
            <Navigation className="w-4 h-4 text-[#C9A86A]" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        {/* Quiet Location Footer Marker */}
        <div className="pt-8 border-t border-white/15 text-xs text-[#EDE6DD]/80 flex flex-wrap items-center justify-center gap-6">
          <span>H626+8W3, Larkana, Pakistan</span>
          <span>·</span>
          <span>Telephone: {HOTEL_CONFIG.phoneNumber}</span>
          <span>·</span>
          <span>Sindh Province</span>
        </div>
      </div>
    </section>
  );
};
