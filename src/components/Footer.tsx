import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Dining', href: '#dining' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1A0B0E] text-[#EDE6DD] pt-16 pb-24 md:pb-16 border-t border-[#3D141B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif tracking-[0.2em] uppercase font-bold text-xl text-white block">
              LARKANA HOTEL INN
            </span>
            <p className="text-xs sm:text-sm text-[#D1C7BD] max-w-sm leading-relaxed">
              Classic comfort and thoughtful hospitality in Larkana, Sindh, Pakistan. Dedicated guest rooms, on-site dining, and 24-hour reception service.
            </p>
            <div className="pt-2 text-xs text-[#C9A86A] flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A]" />
              <span>Plus Code: H626+8W3, Larkana</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A86A]">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#D1C7BD] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A86A]">
              CONTACT &amp; RESERVATIONS
            </h4>
            <div className="space-y-2.5 text-xs text-[#D1C7BD]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C9A86A] shrink-0 mt-0.5" />
                <span>{HOTEL_CONFIG.address}, Larkana, Sindh, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <a
                  href={`tel:${HOTEL_CONFIG.phoneCallNumber}`}
                  className="hover:text-white transition-colors tabular-nums"
                >
                  {HOTEL_CONFIG.phoneNumber}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors tabular-nums"
                >
                  WhatsApp: {HOTEL_CONFIG.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E9388] gap-4">
          <p>© 2026 Larkana Hotel Inn. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-[11px]">
            <span>Larkana, Sindh, Pakistan</span>
            <span>·</span>
            <span>Hospitality with Integrity</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
