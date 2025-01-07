import React from 'react';
import { BarChart3, Building2, Users2, Target, LineChart, Briefcase } from 'lucide-react';

const services = [
  { icon: BarChart3, title: 'Strategic Planning', description: 'Develop comprehensive business strategies aligned with your goals and market opportunities.' },
  { icon: Building2, title: 'Operational Excellence', description: 'Optimize business processes and workflows to maximize efficiency and reduce costs.' },
  { icon: Users2, title: 'Change Management', description: 'Guide your organization through transformational changes with minimal disruption.' },
  { icon: Target, title: 'Market Analysis', description: 'In-depth market research and competitor analysis to identify growth opportunities.' },
  { icon: LineChart, title: 'Financial Advisory', description: 'Provide expert financial advice to help you make informed business decisions.' },
  { icon: Briefcase, title: 'Project Management', description: 'Ensure your projects are completed on time and within budget with our project management services.' },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-navy text-white slide-in" id="services" style={{ backgroundColor: '#001f3f' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center service-item">
              <service.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;