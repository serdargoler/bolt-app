import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-navy text-white slide-in" id="contact" style={{ backgroundColor: '#001f3f' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-8">
          Ready to take your business to the next level? Contact us today to schedule a consultation and learn how we can help you achieve your goals.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
            <p className="text-lg mb-2">Address: 123 Business St, Business City, BC 12345</p>
            <p className="text-lg mb-2">Phone: (123) 456-7890</p>
            <p className="text-lg mb-2">Email: contact@nervaconsulting.com</p>
          </div>
          <form className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="name">Name</label>
              <input className="w-full px-4 py-2 text-gray-900 rounded-lg" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="email">Email</label>
              <input className="w-full px-4 py-2 text-gray-900 rounded-lg" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="phone">Phone (optional)</label>
              <input className="w-full px-4 py-2 text-gray-900 rounded-lg" type="tel" id="phone" name="phone" />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-4 py-2 text-gray-900 rounded-lg" id="message" name="message" rows={4} required></textarea>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="text-center mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086509486013!2d-122.419415484681!3d37.77492927975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1b0b1b1b%3A0x8c1b0b1b1b1b1b1b!2s123%20Business%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Nerva Consulting Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;