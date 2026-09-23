import React, { useState } from 'react';
import { Eye, CalendarCheck, Bed, Check } from 'lucide-react';
import { HOTEL_CONFIG, RoomItem } from '../data/hotelConfig.ts';
import { RoomDetailsModal } from './RoomDetailsModal.tsx';

interface RoomsSectionProps {
  onOpenBooking: (preselectedRoomId?: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenBooking }) => {
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="h-px w-8 bg-[#5B141D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5B141D]">
              OUR ROOMS
            </span>
            <span className="h-1 w-1 rounded-full bg-[#C9A86A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.15] text-balance">
            COMFORT DESIGNED
            <br />
            <span className="italic font-light text-[#5B141D]">FOR A RELAXING STAY.</span>
          </h2>

          <p className="text-[#5C564F] text-base leading-relaxed max-w-2xl">
            Each guest room at Larkana Hotel Inn is designed for peace of mind, appointed with handcrafted timber furniture, ambient headboard illumination, private bathrooms, and attentive round-the-clock service.
          </p>
        </div>

        {/* Editorial Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {HOTEL_CONFIG.rooms.map((room) => (
            <article
              key={room.id}
              className="card-hover-3d bg-white rounded-sm border border-[#E6DFD5] overflow-hidden flex flex-col group relative"
            >
              {/* Image Frame with Subtle Zoom on Hover */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black/10">
                <img
                  src={room.image}
                  alt={`${room.name} at Larkana Hotel Inn, Sindh`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle category tag */}
                <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-sm border border-[#E6DFD5] px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#5B141D]">
                  {room.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-[#736B63] mb-2">
                    <Bed className="w-3.5 h-3.5 text-[#5B141D]" />
                    <span>{room.bedType}</span>
                    <span>·</span>
                    <span>{room.idealFor}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#1E1B18] font-normal group-hover:text-[#5B141D] transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-[#5C564F] text-xs sm:text-sm leading-relaxed mt-2.5 line-clamp-3">
                    {room.tagline}
                  </p>

                  {/* Confirmed Amenities List */}
                  <div className="mt-4 pt-4 border-t border-[#F0EBE3] space-y-1.5">
                    {room.amenities.slice(0, 4).map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2 text-[11px] text-[#4A453F]">
                        <Check className="w-3 h-3 text-[#5B141D] shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#F0EBE3] grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className="flex items-center justify-center space-x-1.5 px-3 py-2.5 text-xs uppercase tracking-wider font-medium text-[#4A453F] hover:text-[#1E1B18] bg-[#FAF8F5] hover:bg-[#F2ECE3] border border-[#E6DFD5] rounded-sm transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#5B141D]" />
                    <span>VIEW ROOM</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(room.id)}
                    className="btn-embossed flex items-center justify-center space-x-1.5 px-3 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#5B141D] hover:bg-[#480E15] rounded-sm border border-[#7D222E] transition-colors cursor-pointer"
                  >
                    <CalendarCheck className="w-3.5 h-3.5 text-[#C9A86A]" />
                    <span>BOOK NOW</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Room Details Modal */}
        {selectedRoom && (
          <RoomDetailsModal
            room={selectedRoom}
            onClose={() => setSelectedRoom(null)}
            onBookRoom={(roomId) => {
              setSelectedRoom(null);
              onOpenBooking(roomId);
            }}
          />
        )}
      </div>
    </section>
  );
};
