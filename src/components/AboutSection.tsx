import React from 'react';
import { useTranslation } from 'react-i18next';
import SerdarPhoto from '../assets/images/team/serdar-goler.jpg';
import IzemPhoto from '../assets/images/team/izem-goler.jpg';
import ChaimaPhoto from '../assets/images/team/chaima-gaaloul.jpg';
import TRANSLATION_KEYS from './utils/translationKeys';

// Dil bayrakları için emoji kodları
const FLAGS = {
  PL: "🇵🇱",
  EN: "🇬🇧",
  TR: "🇹🇷",
  AR: "🇹🇳",
  FR: "🇫🇷",
  DE: "🇩🇪"
};

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white fade-in" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          {t(TRANSLATION_KEYS.ABOUT.SECTION_TITLE)}
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          {t(TRANSLATION_KEYS.ABOUT.DESCRIPTION)}
        </p>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          {t(TRANSLATION_KEYS.ABOUT.TEAM_TITLE)}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <img src={SerdarPhoto} alt={t(TRANSLATION_KEYS.ABOUT.TEAM.SERDAR.NAME)} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {t(TRANSLATION_KEYS.ABOUT.TEAM.SERDAR.NAME)}
            </h3>
            <p className="text-gray-600 mb-2">
              {t(TRANSLATION_KEYS.ABOUT.TEAM.SERDAR.ROLE)}
            </p>
            <p className="text-2xl" title={t(TRANSLATION_KEYS.ABOUT.TEAM.SERDAR.LANGUAGES)}>
              {FLAGS.PL} {FLAGS.EN} {FLAGS.TR}
            </p>
          </div>
          <div className="text-center">
            <img src={IzemPhoto} alt={t(TRANSLATION_KEYS.ABOUT.TEAM.IZEM.NAME)} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {t(TRANSLATION_KEYS.ABOUT.TEAM.IZEM.NAME)}
            </h3>
            <p className="text-gray-600 mb-2">
              {t(TRANSLATION_KEYS.ABOUT.TEAM.IZEM.ROLE)}
            </p>
            <p className="text-2xl" title={t(TRANSLATION_KEYS.ABOUT.TEAM.IZEM.LANGUAGES)}>
              {FLAGS.PL} {FLAGS.EN} {FLAGS.TR}
            </p>
          </div>
          <div className="text-center">
            <img src={ChaimaPhoto} alt={t(TRANSLATION_KEYS.ABOUT.TEAM.CHAIMA.NAME)} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {t(TRANSLATION_KEYS.ABOUT.TEAM.CHAIMA.NAME)}
            </h3>
            <p className="text-gray-600 mb-2">
              {t(TRANSLATION_KEYS.ABOUT.TEAM.CHAIMA.ROLE)}
            </p>
            <p className="text-2xl" title={t(TRANSLATION_KEYS.ABOUT.TEAM.CHAIMA.LANGUAGES)}>
              {FLAGS.PL} {FLAGS.EN} {FLAGS.AR} {FLAGS.FR} {FLAGS.DE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;