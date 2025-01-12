import React from 'react';
import Header from '../components/Header/Header';
import placeholderImage from '../assets/images/coming-soon.jpg'; // Add a placeholder image in the assets folder
import { useTranslation } from 'react-i18next';

const BlogPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('Our blog is coming soon!')}</h1>
          <p className="text-xl text-gray-600 mb-8">{t('Stay tuned for updates and helpful articles.')}</p>
          <img src={placeholderImage} alt="Coming Soon" className="mx-auto mb-8 w-full max-w-md" />
          <p className="text-lg text-gray-600">{t('We’ll be sharing expert insights, tips, and news.')}</p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;