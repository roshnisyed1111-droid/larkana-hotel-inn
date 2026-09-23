import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Utensils, Coffee, Award, Phone } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

interface MenuLightboxModalProps {
  onClose: () => void;
  onOpenBooking: () => void;
}

export const MenuLightboxModal: React.FC<MenuLightboxModalProps> = ({ onClose, onOpenBooking }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState<'traditional' | 'specialties' | 'beverages'>('traditional');

  const menuSections = {
    traditional: [
      { name: 'Special Sindhi Biryani', desc: 'Fragrant aged basmati rice cooked with tender meat, saffron, and aromatic spices' },
      { name: 'Desi Chicken Karahi', desc: 'Fresh chicken cooked in a wok with ripe tomatoes, green chilies, and julienned ginger' },
      { name: 'Mutton Handi Special', desc: 'Slow-simmered rich clay-pot mutton curry with velvety tomato-butter gravy' },
      { name: 'Traditional Sindhi Pulao', desc: 'Classic lightly spiced spiced rice prepared with prime cuts and caramelized onions' },
      { name: 'Dal Makhani & Seasonal Veg', desc: 'Lentils simmered overnight with farm-fresh butter and fragrant cumin' },
    ],
    specialties: [
      { name: 'Chicken Malai Boti', desc: 'Tender boneless chicken marinated in cream, mild green chilies, and grilled over charcoal' },
      { name: 'Seekh Kebab Platter', desc: 'Finely minced beef or mutton skewered and grilled to juicy perfection with mint chutney' },
      { name: 'Tandoori Roti & Roghani Naan', desc: 'Fresh clay-oven baked bread glazed with butter, sesame seeds, and kalonji' },
      { name: 'Crispy Finger Fries & Appetizers', desc: 'Fresh potato cuts served piping hot with house condiments' },
    ],
    beverages: [
      { name: 'Special Larkana Karak Chai', desc: 'Signature full-bodied doodh patti tea brewed fresh with crushed cardamom' },
      { name: 'Kashmiri Pink Tea', desc: 'Traditional brewing with crushed pistachios and almonds' },
      { name: 'Fresh Seasonal Juices & Shakes', desc: 'Freshly squeezed fruit refreshments' },
      { name: 'Mineral Water & Soft Drinks', desc: 'Chilled bottled beverages' },
      { name: 'Traditional Kheer / Shahi Tukray', desc: 'Classic sweet delicacies infused with saffron and pistachios' },
    ],
  };

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative bg-[#FAF8F5] w-full max-w-4xl rounded-sm shadow-2xl border border-[#E6DFD5] overflow-hidden my-4">
        {/* Header Bar with Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6DFD5] bg-white sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <Utensils className="w-5 h-5 text-[#5B141D]" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5B141D]">
                RESTAURANT & TEA SERVICE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1E1B18] font-normal">
                Larkana Hotel Inn Dining Menu
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center space-x-1 border border-[#E6DFD5] rounded-sm p-1 bg-[#FAF8F5]">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                className="p-1 text-[#4A453F] hover:text-[#1E1B18] disabled:opacity-40 transition-colors cursor-pointer"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                className="px-2 text-[11px] font-mono tabular-nums text-[#4A453F] hover:text-[#1E1B18] cursor-pointer"
                title="Reset zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2}
                className="p-1 text-[#4A453F] hover:text-[#1E1B18] disabled:opacity-40 transition-colors cursor-pointer"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                className="p-1 text-[#4A453F] hover:text-[#1E1B18] transition-colors cursor-pointer"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#4A453F] hover:text-[#1E1B18] hover:bg-[#FAF8F5] rounded-sm transition-colors cursor-pointer"
              aria-label="Close menu lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="px-6 py-3 bg-[#F4EFEA] border-b border-[#E6DFD5] flex items-center space-x-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('traditional')}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'traditional'
                ? 'bg-[#5B141D] text-white shadow-sm'
                : 'text-[#4A453F] hover:text-[#1E1B18]'
            }`}
          >
            Sindhi & Traditional
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('specialties')}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'specialties'
                ? 'bg-[#5B141D] text-white shadow-sm'
                : 'text-[#4A453F] hover:text-[#1E1B18]'
            }`}
          >
            Grills & Specialties
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('beverages')}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'beverages'
                ? 'bg-[#5B141D] text-white shadow-sm'
                : 'text-[#4A453F] hover:text-[#1E1B18]'
            }`}
          >
            Karak Chai & Desserts
          </button>
        </div>

        {/* Scalable Editorial Menu Content */}
        <div className="p-6 sm:p-8 max-h-[68vh] overflow-y-auto overflow-x-hidden">
          <div
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            className="transition-transform duration-200"
          >
            {/* Visual Header Banner in Menu */}
            <div className="bg-white p-6 rounded-sm border border-[#E6DFD5] mb-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={HOTEL_CONFIG.images.tea}
                  alt="Traditional Chai at Larkana Hotel Inn"
                  className="w-16 h-16 rounded-sm object-cover border border-[#E6DFD5]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-lg text-[#1E1B18]">Fresh Daily Kitchen & Bakery</h4>
                  <p className="text-xs text-[#736B63]">
                    Prepared fresh to order. Dine-in, Takeaway, and Room Service available.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#5B141D] font-medium bg-[#FAF8F5] px-3 py-1.5 rounded-sm border border-[#E6DFD5]">
                <Award className="w-4 h-4 text-[#C9A86A]" />
                <span>Authentic Local Taste</span>
              </div>
            </div>

            {/* Menu Items List */}
            <div className="space-y-4">
              {menuSections[activeTab].map((item) => (
                <div
                  key={item.name}
                  className="p-4 sm:p-5 bg-white rounded-sm border border-[#E6DFD5] hover:border-[#5B141D]/30 transition-colors flex items-start justify-between group"
                >
                  <div className="space-y-1 pr-4">
                    <h5 className="font-serif text-base sm:text-lg text-[#1E1B18] font-normal group-hover:text-[#5B141D] transition-colors">
                      {item.name}
                    </h5>
                    <p className="text-xs sm:text-sm text-[#5C564F] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#736B63] bg-[#FAF8F5] px-2.5 py-1 rounded-sm border border-[#E6DFD5] shrink-0 font-medium">
                    Order at Desk
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#F4EFEA] rounded-sm border border-[#E6DFD5] text-xs text-[#5C564F] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4 text-[#5B141D]" />
                <span>Special orders, catering packages, and room deliveries arranged directly with our desk.</span>
              </div>
              <a
                href={`tel:${HOTEL_CONFIG.phoneCallNumber}`}
                className="font-medium text-[#5B141D] flex items-center space-x-1 underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Kitchen: {HOTEL_CONFIG.phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-t border-[#E6DFD5]">
          <span className="text-xs text-[#736B63]">
            Rates & special menu requests confirmed upon room or dining booking.
          </span>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs uppercase tracking-wider text-[#4A453F] hover:text-[#1E1B18] cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="btn-embossed bg-[#5B141D] hover:bg-[#480E15] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-sm border border-[#7D222E] cursor-pointer"
            >
              Book Stay & Dining
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
