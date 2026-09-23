import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

interface NavbarProps {
  onOpenBooking: (preselectedRoomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Dining', href: '#dining' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E6DFD5] py-3.5'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              className={`font-serif tracking-[0.2em] uppercase font-bold text-lg sm:text-xl transition-colors duration-200 ${
                isScrolled ? 'text-[#5B141D]' : 'text-white'
              }`}
            >
              LARKANA HOTEL INN
            </a>

            {/* Zone 2: Clean 4-6 text navigation links */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.16em] font-medium transition-colors relative py-1 group ${
                    isScrolled
                      ? 'text-[#2D2926] hover:text-[#5B141D]'
                      : 'text-[#F4EFEA] hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-[#5B141D]' : 'bg-[#C9A86A]'
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary CTA action */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${HOTEL_CONFIG.phoneCallNumber}`}
                aria-label="Call Hotel"
                className={`flex items-center space-x-2 text-xs uppercase tracking-wider font-medium px-3 py-2 transition-colors ${
                  isScrolled
                    ? 'text-[#4A453F] hover:text-[#5B141D]'
                    : 'text-[#EDE6DD] hover:text-white'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A86A]" />
                <span className="tabular-nums">{HOTEL_CONFIG.phoneNumber}</span>
              </a>
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="btn-embossed bg-[#5B141D] hover:bg-[#480E15] text-[#FAF8F5] text-xs font-semibold tracking-[0.14em] uppercase px-5 py-2.5 rounded-sm border border-[#7D222E]/40 whitespace-nowrap cursor-pointer"
              >
                Book a Room
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-2.5">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="bg-[#5B141D] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-sm whitespace-nowrap"
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-sm transition-colors ${
                  isScrolled ? 'text-[#1E1B18]' : 'text-white'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col pt-20 pb-8 px-6 md:hidden animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#E6DFD5]">
            <span className="font-serif tracking-[0.18em] uppercase font-bold text-lg text-[#5B141D]">
              LARKANA HOTEL INN
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#4A453F]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-5 my-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#1E1B18] hover:text-[#5B141D] tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-[#E6DFD5] space-y-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#5B141D] text-white font-medium py-3 rounded-sm uppercase tracking-widest text-xs btn-embossed"
            >
              Book a Room
            </button>
            <div className="flex items-center justify-between text-xs text-[#5C564F] pt-2">
              <span>Larkana, Sindh, Pakistan</span>
              <a href={`tel:${HOTEL_CONFIG.phoneCallNumber}`} className="font-medium text-[#5B141D]">
                {HOTEL_CONFIG.phoneNumber}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
