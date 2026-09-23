import React from 'react';
import { CalendarCheck, MessageSquare } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  const handleDirectWhatsApp = () => {
    const defaultMsg = encodeURIComponent(
      'Hello Larkana Hotel Inn, I would like to inquire about room availability and reservations.'
    );
    window.open(`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E6DFD5] px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto">
        <button
          type="button"
          onClick={onOpenBooking}
          className="btn-embossed bg-[#5B141D] hover:bg-[#480E15] text-[#FAF8F5] text-[11px] font-semibold tracking-wider uppercase py-2.5 px-3 rounded-sm border border-[#7D222E] flex items-center justify-center space-x-1.5 cursor-pointer"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-[#C9A86A]" />
          <span>BOOK A ROOM</span>
        </button>

        <button
          type="button"
          onClick={handleDirectWhatsApp}
          className="bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[11px] font-semibold tracking-wider uppercase py-2.5 px-3 rounded-sm shadow-sm flex items-center justify-center space-x-1.5 cursor-pointer transition-transform active:scale-95"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>WHATSAPP</span>
        </button>
      </div>
    </aside>
  );
};
