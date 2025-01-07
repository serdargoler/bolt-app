import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const articles = [
  {
    id: 1,
    title: 'How to Apply for a Residence Permit in Poland',
    date: '2023-10-01',
    content: 'Applying for a residence permit in Poland can be a complex process, but with the right guidance, it can be made simpler. This guide covers the necessary steps, documents required, and tips to ensure a smooth application process. Whether you\'re moving for work, study, or family reunification, understanding the requirements and procedures is crucial...',
  },
  {
    id: 2,
    title: 'Top 10 Tips for Starting a Business in Poland',
    date: '2023-09-25',
    content: 'Starting a business in Poland offers numerous opportunities, but it\'s essential to be well-prepared. This article provides ten valuable tips for aspiring entrepreneurs, including understanding the legal framework, choosing the right business structure, and navigating the tax system. Learn how to set up your business for success in Poland\'s dynamic market...',
  },
  {
    id: 3,
    title: 'Navigating the Polish Education System: A Guide for International Students',
    date: '2023-09-15',
    content: 'The Polish education system offers a wide range of opportunities for international students. This guide explores the different types of educational institutions, the application process, and tips for adapting to the academic environment. Whether you\'re pursuing undergraduate or postgraduate studies, this article provides essential information to help you succeed...',
  },
  {
    id: 4,
    title: 'Understanding Polish Taxation: What Expats Need to Know',
    date: '2023-09-10',
    content: 'Navigating the Polish tax system can be challenging for expats. This comprehensive guide explains the key aspects of Polish taxation, including income tax, VAT, and social security contributions. Learn about your tax obligations, available deductions, and how to file your tax returns accurately and on time...',
  },
  {
    id: 5,
    title: 'Finding the Perfect Property in Poland: A Real Estate Guide',
    date: '2023-09-05',
    content: 'Whether you\'re looking to buy or rent, finding the perfect property in Poland requires careful planning and research. This real estate guide covers the essential steps, from understanding the market trends to working with real estate agents and securing financing. Discover tips for making informed decisions and finding your ideal home in Poland...',
  },
  {
    id: 6,
    title: 'Cultural Orientation for Expats: Embracing Life in Poland',
    date: '2023-09-01',
    content: 'Moving to a new country involves more than just logistics; it\'s also about adapting to a new culture. This article provides insights into Polish customs, traditions, and social norms. Learn how to navigate cultural differences, build meaningful connections, and embrace life in Poland as an expat...',
  },
];

const BlogArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((article) => article.id === parseInt(id!));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <p className="text-gray-600 mb-4">{article.date}</p>
          <div className="text-gray-800">
            {article.content}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticlePage;