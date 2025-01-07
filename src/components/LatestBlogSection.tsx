import React from 'react';
import { Link } from 'react-router-dom';

const latestArticles = [
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
];

const LatestBlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100" id="latest-blogs">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Latest Blog Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {latestArticles.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-2">{article.date}</p>
              <p className="text-gray-600 mb-4">{article.summary}</p>
              <Link to={`/blog/${article.id}`} className="text-blue-600 hover:underline">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;