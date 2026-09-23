/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { WelcomeSection } from './components/WelcomeSection.tsx';
import { RoomsSection } from './components/RoomsSection.tsx';
import { DiningSection } from './components/DiningSection.tsx';
import { AmenitiesSection } from './components/AmenitiesSection.tsx';
import { WhyStayWithUs } from './components/WhyStayWithUs.tsx';
import { HotelGallerySection } from './components/HotelGallerySection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { ClosingCtaSection } from './components/ClosingCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileBottomBar } from './components/MobileBottomBar.tsx';
import { ReservationModal } from './components/ReservationModal.tsx';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (roomId?: string) => {
    setPreselectedRoomId(roomId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setPreselectedRoomId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1B18] font-sans selection:bg-[#5B141D] selection:text-[#FAF8F5]">
      {/* Sticky / Scrolled Luxury Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Welcome Section */}
        <WelcomeSection onOpenBooking={() => handleOpenBooking()} />

        {/* Rooms Experience */}
        <RoomsSection onOpenBooking={handleOpenBooking} />

        {/* Dining Experience */}
        <DiningSection onOpenBooking={() => handleOpenBooking()} />

        {/* Confirmed Amenities & Services */}
        <AmenitiesSection />

        {/* Why Stay With Us */}
        <WhyStayWithUs />

        {/* Hotel Gallery Experience */}
        <HotelGallerySection />

        {/* About Hotel */}
        <AboutSection />

        {/* Guest Reviews & Rating */}
        <ReviewsSection />

        {/* Location & Contact */}
        <LocationSection />

        {/* Premium Closing CTA */}
        <ClosingCtaSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Luxury Dark Footer */}
      <Footer />

      {/* Mobile Fixed Bottom Action Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Central Reservation Request Modal (WhatsApp Flow) */}
      <ReservationModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preselectedRoomId={preselectedRoomId}
      />
    </div>
  );
}
