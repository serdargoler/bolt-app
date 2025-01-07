import React from 'react';
import { useTranslation } from 'react-i18next';
import johnDoePhoto from '../assets/images/team/gregory-hayes-h5cd51KXmRQ-unsplash.jpg';
import janeDoePhoto from '../assets/images/team/viktor-bystrov-BHNVH_Ov9P8-unsplash.jpg';

const AboutSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white fade-in" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">About Us</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Nerva Consulting is dedicated to helping businesses achieve their goals through expert consulting services. Our team of experienced consultants works closely with clients to develop tailored strategies that drive success.
        </p>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <img src={johnDoePhoto} alt="John Doe" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">Business Consultant</p>
          </div>
          <div className="text-center">
            <img src={janeDoePhoto} alt="Jane Doe" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-600">Educational Consultant</p>
          </div>
          {/* Repeat for other team members */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;