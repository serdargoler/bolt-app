import React from 'react';
import { BarChart3, Building2, Users2, Target, LineChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TRANSLATION_KEYS from './utils/translationKeys';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: BarChart3,
    title: TRANSLATION_KEYS.SERVICES.BUSINESS_CONSULTING,
    description: TRANSLATION_KEYS.SERVICES.BUSINESS_CONSULTING_DESC,
    path: '/services/business-consulting'
  },
  {
    icon: Building2,
    title: TRANSLATION_KEYS.SERVICES.EDUCATIONAL_CONSULTING,
    description: TRANSLATION_KEYS.SERVICES.EDUCATIONAL_CONSULTING_DESC,
    path: '/services/educational-consulting'
  },
  {
    icon: Users2,
    title: TRANSLATION_KEYS.SERVICES.LEGAL_ADMINISTRATIVE_ASSISTANCE,
    description: TRANSLATION_KEYS.SERVICES.LEGAL_ADMINISTRATIVE_ASSISTANCE_DESC,
    path: '/services/legal-consulting'
  },
  {
    icon: Target,
    title: TRANSLATION_KEYS.SERVICES.REAL_ESTATE_FINANCIAL_COLLABORATION,
    description: TRANSLATION_KEYS.SERVICES.REAL_ESTATE_FINANCIAL_COLLABORATION_DESC,
    path: '/services/real-estate-consulting'
  },
  {
    icon: LineChart,
    title: TRANSLATION_KEYS.SERVICES.RELOCATION_LIFESTYLE_SUPPORT,
    description: TRANSLATION_KEYS.SERVICES.RELOCATION_LIFESTYLE_SUPPORT_DESC,
    path: '/services/relocation-consulting'
  },
];

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-navy text-white slide-in" id="services" style={{ backgroundColor: '#001f3f' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          {t(TRANSLATION_KEYS.SERVICES.SECTION_TITLE, { fallback: 'Our Services' })}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <Link 
              to={service.path} 
              key={index} 
              className="text-center service-item hover:transform hover:scale-105 transition-transform duration-300"
            >
              <service.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">
                {t(service.title, { fallback: service.title })}
              </h3>
              <p className="text-gray-200">
                {t(service.description, { fallback: service.description })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
