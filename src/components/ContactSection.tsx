import React from 'react';
import { useTranslation } from 'react-i18next';
import TRANSLATION_KEYS from './utils/translationKeys';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-navy text-white slide-in" id="contact" style={{ backgroundColor: '#001f3f' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">{t(TRANSLATION_KEYS.CONTACT.SECTION_TITLE)}</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-8">
          {t(TRANSLATION_KEYS.CONTACT.DESCRIPTION)}
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">{t(TRANSLATION_KEYS.CONTACT.DETAILS_TITLE)}</h3>
            <p className="text-lg mb-2">{t(TRANSLATION_KEYS.CONTACT.ADDRESS)}</p>
            <p className="text-lg mb-2">{t(TRANSLATION_KEYS.CONTACT.PHONE)}</p>
            <p className="text-lg mb-2">{t(TRANSLATION_KEYS.CONTACT.EMAIL)}</p>
          </div>
          <form className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">{t(TRANSLATION_KEYS.CONTACT.FORM.TITLE)}</h3>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="name">{t(TRANSLATION_KEYS.CONTACT.FORM.NAME)}</label>
              <input className="w-full px-4 py-2 text-gray-900 rounded-lg" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="email">{t(TRANSLATION_KEYS.CONTACT.FORM.EMAIL)}</label>
              <input className="w-full px-4 py-2 text-gray-900 rounded-lg" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="phone">{t(TRANSLATION_KEYS.CONTACT.FORM.PHONE)}</label>
              <input className="w-full px-4 py-2 text-gray-900 rounded-lg" type="tel" id="phone" name="phone" />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="message">{t(TRANSLATION_KEYS.CONTACT.FORM.MESSAGE)}</label>
              <textarea className="w-full px-4 py-2 text-gray-900 rounded-lg" id="message" name="message" rows={4} required></textarea>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold" type="submit">
              {t(TRANSLATION_KEYS.CONTACT.FORM.SUBMIT)}
            </button>
          </form>
        </div>
        <div className="text-center mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81987.37609448586!2d19.89202169713051!3d50.04679292512591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2sKrak%C3%B3w%2C%20Poland!5e0!3m2!1sen!2spl!4v1710427433644!5m2!1sen!2spl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Horizon Poland - Krakow Office Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;