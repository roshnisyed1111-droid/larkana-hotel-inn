import React from 'react';
import { MapPin, Phone, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F4EFEA] border-t border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="h-px w-8 bg-[#5B141D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5B141D]">
              LOCATION &amp; CONTACT
            </span>
            <span className="h-1 w-1 rounded-full bg-[#C9A86A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.15] text-balance">
            FIND LARKANA HOTEL INN
          </h2>

          <p className="text-[#5C564F] text-base leading-relaxed max-w-2xl">
            Centrally situated in Larkana, Sindh, with straightforward access to transport terminals, commercial centers, and regional routes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Contact & Arrival Info */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-sm border border-[#E6DFD5] shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5B141D]">
                HOTEL ADDRESS &amp; DIRECT DIAL
              </span>

              {/* Address Item */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 text-[#5B141D]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1E1B18]">Address</h4>
                  <p className="text-sm text-[#4A453F] mt-1 font-medium">{HOTEL_CONFIG.address}</p>
                  <p className="text-xs text-[#736B63] mt-0.5">Larkana, Sindh Province, Pakistan</p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 text-[#5B141D]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1E1B18]">Direct Telephone</h4>
                  <a
                    href={`tel:${HOTEL_CONFIG.phoneCallNumber}`}
                    className="text-base text-[#5B141D] font-semibold hover:underline block mt-1 tabular-nums"
                  >
                    {HOTEL_CONFIG.phoneNumber}
                  </a>
                  <p className="text-xs text-[#736B63] mt-0.5">24/7 Reception Desk Assistance</p>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 text-[#5B141D]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1E1B18]">Operating Hours</h4>
                  <p className="text-xs sm:text-sm text-[#4A453F] mt-1">
                    Front Desk: 24 Hours Daily
                  </p>
                  <p className="text-xs text-[#736B63] mt-0.5">
                    Dining &amp; Kitchen: Morning until late evening
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#F0EBE3] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={HOTEL_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-embossed flex items-center justify-center space-x-2 bg-[#5B141D] hover:bg-[#480E15] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold py-3 px-4 rounded-sm border border-[#7D222E] transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#C9A86A]" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${HOTEL_CONFIG.phoneCallNumber}`}
                className="flex items-center justify-center space-x-2 bg-[#FAF8F5] hover:bg-[#F2ECE3] text-[#1E1B18] text-xs uppercase tracking-wider font-medium py-3 px-4 rounded-sm border border-[#E6DFD5] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#5B141D]" />
                <span>CALL HOTEL</span>
              </a>
            </div>
          </div>

          {/* Right: Architectural Map View Area */}
          <div className="lg:col-span-7 rounded-sm overflow-hidden border border-[#E6DFD5] bg-white shadow-sm flex flex-col min-h-[380px] relative">
            {/* Styled Map Graphic / Visual Frame */}
            <div className="relative flex-grow bg-[#EFECE6] p-8 flex flex-col justify-between overflow-hidden">
              {/* Decorative Map Grid Pattern */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'radial-gradient(#5B141D 1px, transparent 1px), radial-gradient(#5B141D 1px, #EFECE6 1px)',
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 12px 12px',
                }}
              />

              {/* Map Landmark Overlay Card */}
              <div className="relative z-10 bg-white/95 backdrop-blur-sm p-6 rounded-sm border border-[#E6DFD5] shadow-lg max-w-sm">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#5B141D] uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Hotel Destination</span>
                </div>
                <h3 className="font-serif text-xl text-[#1E1B18] font-normal">Larkana Hotel Inn</h3>
                <p className="text-xs text-[#5C564F] mt-1.5 leading-relaxed">
                  Plus Code: <span className="font-mono text-[#1E1B18]">H626+8W3</span>
                  <br />
                  Larkana, Sindh, Pakistan
                </p>
                <div className="mt-4 pt-3 border-t border-[#F0EBE3] flex items-center justify-between text-[11px] text-[#736B63]">
                  <span>Free On-Site Parking Available</span>
                  <span className="text-[#5B141D] font-medium">GPS Ready</span>
                </div>
              </div>

              {/* Map Bottom Action Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-sm border border-[#E6DFD5] mt-6">
                <div className="flex items-center space-x-2 text-xs text-[#4A453F]">
                  <ShieldCheck className="w-4 h-4 text-[#5B141D]" />
                  <span>Secure parking &amp; step-free entrance for easy luggage transfer.</span>
                </div>
                <a
                  href={HOTEL_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider font-semibold text-[#5B141D] hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
