import React, { useState } from 'react';
import { X, Check, Bed, Users, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { RoomItem } from '../data/hotelConfig.ts';

interface RoomDetailsModalProps {
  room: RoomItem | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({ room, onClose, onBookRoom }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) return null;

  const currentGallery = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
    >
      <div className="relative bg-[#FAF8F5] w-full max-w-4xl rounded-sm shadow-2xl border border-[#E6DFD5] overflow-hidden my-8">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6DFD5] bg-white">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5B141D]">
              {room.category}
            </span>
            <h3 className="font-serif text-2xl text-[#1E1B18] font-normal">{room.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#4A453F] hover:text-[#1E1B18] hover:bg-[#FAF8F5] rounded-sm transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Main Gallery Display */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden bg-black/5 border border-[#E6DFD5] group">
            <img
              src={currentGallery[activeImageIndex]}
              alt={`${room.name} at Larkana Hotel Inn`}
              className="w-full h-full object-cover transition-all duration-300"
              referrerPolicy="no-referrer"
            />

            {/* Carousel navigation buttons */}
            {currentGallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-sm text-white text-[11px] font-mono tabular-nums">
                  {activeImageIndex + 1} / {currentGallery.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails row */}
          {currentGallery.length > 1 && (
            <div className="flex items-center space-x-3 overflow-x-auto pb-2">
              {currentGallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-sm overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                    idx === activeImageIndex ? 'border-[#5B141D] opacity-100 scale-105' : 'border-transparent opacity-60 hover:opacity-90'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Key Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-white rounded-sm border border-[#E6DFD5] text-xs">
            <div className="flex items-center space-x-2.5">
              <Bed className="w-4 h-4 text-[#5B141D]" />
              <div>
                <p className="text-[#736B63] uppercase tracking-wider text-[10px]">Bed Setup</p>
                <p className="font-semibold text-[#1E1B18]">{room.bedType}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <Users className="w-4 h-4 text-[#5B141D]" />
              <div>
                <p className="text-[#736B63] uppercase tracking-wider text-[10px]">Recommended</p>
                <p className="font-semibold text-[#1E1B18]">{room.idealFor}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-4 h-4 text-[#5B141D]" />
              <div>
                <p className="text-[#736B63] uppercase tracking-wider text-[10px]">Pricing & Availability</p>
                <p className="font-semibold text-[#1E1B18]">{room.pricingNote}</p>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5B141D]">
              ROOM OVERVIEW & FEATURES
            </h4>
            <p className="text-[#4A453F] text-sm sm:text-base leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Confirmed Amenities Grid */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5B141D]">
              CONFIRMED ROOM AMENITIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2.5 text-xs text-[#2D2926]">
                  <Check className="w-3.5 h-3.5 text-[#5B141D] shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-white border-t border-[#E6DFD5] gap-3">
          <div className="text-xs text-[#736B63]">
            Reservation request submitted directly to hotel reception via WhatsApp.
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#4A453F] hover:text-[#1E1B18] border border-[#E6DFD5] rounded-sm transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="w-1/2 sm:w-auto btn-embossed bg-[#5B141D] hover:bg-[#480E15] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] font-semibold px-6 py-2.5 rounded-sm border border-[#7D222E] cursor-pointer"
            >
              BOOK THIS ROOM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
