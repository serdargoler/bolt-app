import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import TRANSLATION_KEYS from '../utils/translationKeys';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy text-white pt-16 pb-8" style={{ backgroundColor: '#001f3f' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Horizon Poland</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Warsaw, Poland
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +48 123 456 789
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                contact@horizonpoland.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('Quick Links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  {t(TRANSLATION_KEYS.NAVBAR.HOME)}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  {t(TRANSLATION_KEYS.NAVBAR.SERVICES)}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors">
                  {t(TRANSLATION_KEYS.NAVBAR.BLOG)}
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-blue-400 transition-colors">
                  {t(TRANSLATION_KEYS.NAVBAR.CONTACT)}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t(TRANSLATION_KEYS.NAVBAR.SERVICES)}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/business-consulting" className="hover:text-blue-400 transition-colors">
                  {t(TRANSLATION_KEYS.SERVICES.BUSINESS_CONSULTING)}
                </Link>
              </li>
              <li>
                <Link to="/services/educational-consulting" className="hover:text-blue-400 transition-colors">
                  {t(TRANSLATION_KEYS.SERVICES.EDUCATIONAL_CONSULTING)}
                </Link>
              </li>
              <li>
                <Link to="/services/legal-consulting" className="hover:text-blue-400 transition-colors">
                  {t(TRANSLATION_KEYS.SERVICES.LEGAL_ADMINISTRATIVE_ASSISTANCE)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('Follow Us')}</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Horizon Poland. {t('All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 