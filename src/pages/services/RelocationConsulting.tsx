import React from 'react';
import { useTranslation } from 'react-i18next';
import TRANSLATION_KEYS from '../../components/utils/translationKeys';

const RelocationConsulting: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">{t(TRANSLATION_KEYS.SERVICES.RELOCATION_LIFESTYLE_SUPPORT)}</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-6">{t(TRANSLATION_KEYS.SERVICES.RELOCATION_LIFESTYLE_SUPPORT_DESC)}</p>
        </div>
      </div>
    </div>
  );
};

export default RelocationConsulting;