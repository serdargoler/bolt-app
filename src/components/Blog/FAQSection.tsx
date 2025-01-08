import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Updated FAQs (ensure the content reflects accurate, relevant FAQs for your audience)
  const faqs = [
    {
      question: t('faq.startingCompany.question'),
      answer: (
        <ul className="list-disc list-inside">
          <li>{t('faq.startingCompany.answer1')}</li>
          <li>{t('faq.startingCompany.answer2')}</li>
          <li>{t('faq.startingCompany.answer3')}</li>
          <li>{t('faq.startingCompany.answer4')}</li>
          <li>{t('faq.startingCompany.answer5')}</li>
        </ul>
      ),
    },
    {
      question: t('faq.residencePermit.question'),
      answer: (
        <ul className="list-disc list-inside">
          <li>{t('faq.residencePermit.answer1')}</li>
          <li>{t('faq.residencePermit.answer2')}</li>
          <li>{t('faq.residencePermit.answer3')}</li>
          <li>{t('faq.residencePermit.answer4')}</li>
          <li>{t('faq.residencePermit.answer5')}</li>
        </ul>
      ),
    },
    {
      question: t('faq.propertySearch.question'),
      answer: (
        <ul className="list-disc list-inside">
          <li>{t('faq.propertySearch.answer1')}</li>
          <li>{t('faq.propertySearch.answer2')}</li>
          <li>{t('faq.propertySearch.answer3')}</li>
        </ul>
      ),
    },
    {
      question: t('faq.education.question'),
      answer: (
        <ul className="list-disc list-inside">
          <li>{t('faq.education.answer1')}</li>
          <li>{t('faq.education.answer2')}</li>
          <li>{t('faq.education.answer3')}</li>
        </ul>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{t('faq.sectionTitle')}</h2>
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
