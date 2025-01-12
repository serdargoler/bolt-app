import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';
import BusinessConsulting from './pages/services/BusinessConsulting';
import EducationalConsulting from './pages/services/EducationalConsulting';
import LegalConsulting from './pages/services/LegalConsulting';
import RealEstateConsulting from './pages/services/RealEstateConsulting';
import RelocationConsulting from './pages/services/RelocationConsulting';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogArticlePage />} />
          <Route path="/services/business-consulting" element={<BusinessConsulting />} />
          <Route path="/services/educational-consulting" element={<EducationalConsulting />} />
          <Route path="/services/legal-consulting" element={<LegalConsulting />} />
          <Route path="/services/real-estate-consulting" element={<RealEstateConsulting />} />
          <Route path="/services/relocation-consulting" element={<RelocationConsulting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;