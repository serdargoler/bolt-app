import React from 'react';
import { useTranslation } from 'react-i18next';
import placeholderImage from '../assets/images/coming-soon.jpg'; // Add a placeholder image in the assets folder

const BlogSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white text-center" id="blog">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">{t('Our blog is coming soon!')}</h2>
        <p className="text-xl text-gray-600 mb-8">{t('Stay tuned for updates and helpful articles.')}</p>
        <img src={placeholderImage} alt="Coming Soon" className="mx-auto mb-8 w-full max-w-md" />
        <p className="text-lg text-gray-600">{t('We’ll be sharing expert insights, tips, and news about [your niche].')}</p>
      </div>
    </section>
  );
};

export default BlogSection;