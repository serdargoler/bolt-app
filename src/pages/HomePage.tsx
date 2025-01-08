import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import LatestBlogSection from '../components/Blog/LatestBlogSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LatestBlogSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;