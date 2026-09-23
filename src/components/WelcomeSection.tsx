import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

interface WelcomeSectionProps {
  onOpenBooking: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="welcome" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-[#5B141D]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5B141D]">
                WELCOME TO LARKANA HOTEL INN
              </span>
              <span className="h-1 w-1 rounded-full bg-[#C9A86A]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.15] text-balance">
              A PLACE TO STAY,
              <br />
              <span className="italic font-light text-[#5B141D]">DINE & RELAX.</span>
            </h2>

            <p className="text-[#4A453F] text-base sm:text-lg leading-relaxed pt-2">
              Located in the heart of Larkana, Sindh, Larkana Hotel Inn brings together comfortable guest rooms, thoughtful Pakistani hospitality, and a welcoming on-site dining experience. Whether visiting for business, family, or cultural travel, guests find a peaceful retreat equipped with dependable services.
            </p>

            <p className="text-[#5C564F] text-sm sm:text-base leading-relaxed">
              From our attentive reception team to freshly brewed karak chai and prepared dining specials, every detail is focused on making your time in Larkana restful and seamless.
            </p>

            {/* Factual Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-center space-x-2.5 text-xs text-[#2D2926]">
                <CheckCircle2 className="w-4 h-4 text-[#5B141D] shrink-0" />
                <span>24/7 Front Desk Attendance</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-[#2D2926]">
                <CheckCircle2 className="w-4 h-4 text-[#5B141D] shrink-0" />
                <span>On-Site Restaurant & Room Service</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-[#2D2926]">
                <CheckCircle2 className="w-4 h-4 text-[#5B141D] shrink-0" />
                <span>Private En-suite Guest Rooms</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-[#2D2926]">
                <CheckCircle2 className="w-4 h-4 text-[#5B141D] shrink-0" />
                <span>Free On-Site & Street Parking</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-6">
              <button
                type="button"
                onClick={onOpenBooking}
                className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.18em] font-semibold text-[#5B141D] hover:text-[#480E15] transition-colors cursor-pointer"
              >
                <span>REQUEST YOUR RESERVATION</span>
                <ArrowRight className="w-4 h-4 text-[#C9A86A] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right: Large Supplied Hotel Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-[#E6DFD5] bg-white group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={HOTEL_CONFIG.images.hero}
                  alt="Lobby reception and lounge at Larkana Hotel Inn"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Subtle caption banner */}
              <div className="p-4 bg-[#FAF8F5] border-t border-[#E6DFD5] flex items-center justify-between text-xs text-[#5C564F]">
                <span className="font-serif italic text-sm text-[#1E1B18]">Lobby & Reception Lounge</span>
                <span className="text-[11px] uppercase tracking-wider text-[#5B141D] font-medium">Larkana Hotel Inn</span>
              </div>
            </div>

            {/* Subtle decorative offset border element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A86A]/40 rounded-sm -z-0 pointer-events-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
