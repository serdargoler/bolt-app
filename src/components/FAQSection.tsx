import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('What documents do I need to start a company in Poland?'),
      answer: (
        <ul className="list-disc list-inside">
          <li>{t('Valid passport or ID')}</li>
          <li>{t('Proof of address')}</li>
          <li>{t('Company registration form')}</li>
          <li>{t('Articles of association')}</li>
          <li>{t('Proof of capital contribution')}</li>
          <li>{t('Tax identification number (NIP)')}</li>
        </ul>
      ),
    },
    {
      question: t('How can I apply for a residence permit in Poland?'),
      answer: (
        <ul className="list-disc list-inside">
          <li>{t('Completed application form')}</li>
          <li>{t('Valid passport')}</li>
          <li>{t('Proof of health insurance')}</li>
          <li>{t('Proof of sufficient financial means')}</li>
          <li>{t('Proof of accommodation')}</li>
          <li>{t('Reason for applying (e.g., work, study, family reunification)')}</li>
        </ul>
      ),
    },
    // Add more FAQs as needed
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{t('Frequently Asked Questions')}</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </div>
              {openIndex === index && (
                <div className="text-gray-600 mt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;