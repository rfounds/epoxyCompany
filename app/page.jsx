import React from "react";
import { Roboto, Oswald } from 'next/font/google';

// Layout Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Section Components
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import CallToActionSection from '../components/sections/CallToActionSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
});
export const metadata = {
  title: "1st Gen Epoxy - Premium Epoxy Floors",
  description:
    "1st Gen Epoxy offers high-quality epoxy flooring solutions. Family-owned, built on pride and craftsmanship. Get a free quote!",
};

export default function HomePage() {
  const companyColors = {
    primary: "#b83d99",
    secondary: "#189ccd",
    background: "#000000", // Black background
  };

  return (
    <div className={`main-page-wrapper ${roboto.variable} ${oswald.variable}`} style={{ 
      backgroundColor: companyColors.background, 
      color: '#fff',
      fontFamily: 'var(--font-roboto), sans-serif',
      margin: 0,
      padding: 0
    }}>
      <Navbar companyColors={companyColors} />

      <main>
        <HeroSection companyColors={companyColors} />
        <AboutSection companyColors={companyColors} />
        <ServicesSection companyColors={companyColors} />
        <WhyChooseUsSection companyColors={companyColors} />
        <CallToActionSection companyColors={companyColors} />
        <TestimonialsSection companyColors={companyColors} />
        <ContactSection companyColors={companyColors} />
      </main>

      <Footer companyColors={companyColors} />
    </div>
  );
}
