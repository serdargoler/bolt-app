import React from 'react';
import { useTranslation } from 'react-i18next';
import TRANSLATION_KEYS from '../../components/utils/translationKeys';

const BusinessConsulting: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">{t(TRANSLATION_KEYS.SERVICES.BUSINESS_CONSULTING)}</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-6">{t(TRANSLATION_KEYS.SERVICES.BUSINESS_CONSULTING_DESC)}</p>
          {/* Detaylı içerik buraya gelecek */}
        </div>
      </div>
    </div>
  );
};

export default BusinessConsulting; 