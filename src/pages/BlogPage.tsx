import React from 'react';
import Header from '../components/Header';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';

const BlogPage: React.FC = () => {
  return (
    <div>
      <Header />
      <BlogSection />
      <FAQSection />
    </div>
  );
};

export default BlogPage;