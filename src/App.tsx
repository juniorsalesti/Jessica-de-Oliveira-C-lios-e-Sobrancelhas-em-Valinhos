/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { BookingBannerSection } from './components/BookingBannerSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FDFBF8] text-[#3A281E] overflow-x-clip">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <GallerySection />
          <BookingBannerSection />
          <LocationContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
