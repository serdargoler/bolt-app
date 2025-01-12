import React from 'react';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../assets/images/background.jpg';
import TRANSLATION_KEYS from './utils/translationKeys';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 bg-cover bg-center text-white fade-in" style={{ backgroundImage: `url(${backgroundImage})` }} id="home">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t(TRANSLATION_KEYS.HERO.TITLE)}
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          {t(TRANSLATION_KEYS.HERO.DESCRIPTION)}
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold" aria-label={t(TRANSLATION_KEYS.HERO.CTA_BUTTON)}>
          {t(TRANSLATION_KEYS.HERO.CTA_BUTTON)}
        </button> 
      </div>
    </section>
  );
};

export default HeroSection;