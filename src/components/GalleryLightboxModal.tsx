import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { GalleryItem } from '../data/hotelConfig.ts';

interface GalleryLightboxModalProps {
  items: GalleryItem[];
  initialIndex: number;
  onClose: () => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({ items, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentItem = items[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setZoomLevel(1);
  };

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.3, 2.2));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.3, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-black/40 border-b border-white/10 text-white z-10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A86A] font-semibold">
            {currentItem.category}
          </span>
          <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
            {currentItem.title}
          </h3>
        </div>

        <div className="flex items-center space-x-3">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center space-x-1 bg-white/10 rounded-sm p-1 border border-white/15">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.8}
              className="p-1 hover:text-[#C9A86A] disabled:opacity-30 cursor-pointer"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 text-xs font-mono tabular-nums">{Math.round(zoomLevel * 100)}%</span>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.2}
              className="p-1 hover:text-[#C9A86A] disabled:opacity-30 cursor-pointer"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="p-1 hover:text-[#C9A86A] cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-sm transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div className="relative flex-grow flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
        {/* Navigation arrows */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scaled Image */}
        <div
          style={{ transform: `scale(${zoomLevel})` }}
          className="max-w-5xl max-h-[75vh] transition-transform duration-200 ease-out"
        >
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-contain rounded-sm shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Bottom Information Bar */}
      <div className="px-6 py-4 bg-black/50 border-t border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-2 z-10">
        <p className="text-xs sm:text-sm text-neutral-300 max-w-xl text-center sm:text-left">
          {currentItem.description}
        </p>
        <div className="flex items-center space-x-2 text-xs font-mono text-[#C9A86A]">
          <span>{currentIndex + 1}</span>
          <span className="text-white/40">/</span>
          <span>{items.length}</span>
        </div>
      </div>
    </div>
  );
};
