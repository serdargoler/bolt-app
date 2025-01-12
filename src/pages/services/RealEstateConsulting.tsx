import React from 'react';
import { useTranslation } from 'react-i18next';
import TRANSLATION_KEYS from '../../components/utils/translationKeys';

const RealEstateConsulting: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">{t(TRANSLATION_KEYS.SERVICES.REAL_ESTATE_FINANCIAL_COLLABORATION)}</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-6">{t(TRANSLATION_KEYS.SERVICES.REAL_ESTATE_FINANCIAL_COLLABORATION_DESC)}</p>
        </div>
      </div>
    </div>
  );
};

export default RealEstateConsulting;