import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TRANSLATION_KEYS from '../utils/translationKeys';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 fade-in">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <Briefcase className="h-8 w-8 text-blue-600" />
          </Link>
          <Link to="/" className="text-xl font-bold text-gray-800">
            {t('Horizon Poland')}
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 justify-center flex-grow">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">{t(TRANSLATION_KEYS.NAVBAR.HOME)}</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">{t(TRANSLATION_KEYS.NAVBAR.SERVICES)}</Link>
          <a href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors">{t(TRANSLATION_KEYS.NAVBAR.ABOUT)}</a>
          <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">{t(TRANSLATION_KEYS.NAVBAR.BLOG)}</Link>
          <a href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors">{t(TRANSLATION_KEYS.NAVBAR.CONTACT)}</a>
        </nav>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-gray-600 hover:text-blue-600 transition-colors">
            {i18n.language === 'en' ? 'English' : i18n.language === 'tr' ? 'Türkçe' : i18n.language === 'pl' ? 'Polski' : 'العربية'}
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg">
              <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">English</button>
              <button onClick={() => changeLanguage('tr')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Türkçe</button>
              <button onClick={() => changeLanguage('pl')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Polski</button>
              <button onClick={() => changeLanguage('ar')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">العربية</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;