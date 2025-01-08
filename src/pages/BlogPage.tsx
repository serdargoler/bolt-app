import React from 'react';
import Header from '../components/Header/Header';
import BlogSection from '../components/Blog/BlogSection';
import FAQSection from '../components/Blog/FAQSection';

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