import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TRANSLATION_KEYS from '../utils/translationKeys';

const articles = [
  {
    id: 1,
    title: 'How to Apply for a Residence Permit in Poland',
    date: '2023-10-01',
    summary: 'Applying for a residence permit in Poland can be a complex process, but with the right guidance, it can be made simpler...',
  },
  {
    id: 2,
    title: 'Top 10 Tips for Starting a Business in Poland',
    date: '2023-09-25',
    summary: 'Starting a business in Poland offers numerous opportunities, but it\'s essential to be well-prepared...',
  },
  {
    id: 3,
    title: 'Navigating the Polish Education System: A Guide for International Students',
    date: '2023-09-15',
    summary: 'The Polish education system offers a wide range of opportunities for international students...',
  },
  {
    id: 4,
    title: 'Understanding Polish Taxation: What Expats Need to Know',
    date: '2023-09-10',
    summary: 'Navigating the Polish tax system can be challenging for expats. This comprehensive guide explains the key aspects of Polish taxation...',
  },
  {
    id: 5,
    title: 'Finding the Perfect Property in Poland: A Real Estate Guide',
    date: '2023-09-05',
    summary: 'Whether you\'re looking to buy or rent, finding the perfect property in Poland requires careful planning and research...',
  },
  {
    id: 6,
    title: 'Cultural Orientation for Expats: Embracing Life in Poland',
    date: '2023-09-01',
    summary: 'Moving to a new country involves more than just logistics; it\'s also about adapting to a new culture...',
  },
];


const BlogSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{t(TRANSLATION_KEYS.BLOG.SECTION_TITLE)}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-2">{article.date}</p>
              <p className="text-gray-600 mb-4">{article.summary}</p>
              <Link to={`/blog/${article.id}`} className="text-blue-600 hover:underline">
                {t(TRANSLATION_KEYS.BLOG.READ_MORE)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
