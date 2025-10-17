import React from 'react';
import './ServicesPage.css'; // Make sure to create this CSS file
import Footer from '../../Component/Footer/Footer'
import Navbar from '../../Component/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
// Placeholder images for services - replace with your actual service-specific images
const placeholderServiceImage = 'https://via.placeholder.com/100x100?text=Service';
const placeholderReviewerImage = 'https://via.placeholder.com/50x50?text=JD'; // Example for reviewer profile pic

// Data for services
const services = [
  {
    title: 'New Design & Manufacturing',
    description: 'From concept to creation, we bring your vision to life with bespoke furniture designs and high-quality manufacturing.',
    icon: './body2.png', // Use actual icon or image here
  },
  {
    title: 'Furniture Repair & Restoration',
    description: 'Breathe new life into your beloved pieces. We expertly repair and restore all types of furniture, preserving their charm.',
    icon:' ./body3.png',
  },
  {
    title: 'Custom Chairs & Sofas',
    description: 'Tailored seating solutions designed for comfort, style, and durability, perfectly matching your aesthetic.',
    icon: './body4.png',
  },
  {
    title: 'Bespoke Cupboards & Cabinets',
    description: 'Maximize your space with custom-built storage solutions, crafted with precision and elegance.',
    icon: './i.png',
  },
  {
    title: 'Quality Assurance & Craftsmanship',
    description: 'Our commitment to the highest quality materials and artisanal craftsmanship ensures furniture that lasts a lifetime.',
    icon: './cop.png',
  },
  {
    title: 'Interior Consultation',
    description: 'Expert advice to help you choose the right pieces and arrange them for optimal flow and style in your space.',
    icon:'./c.png',
  },
];


const ServicesPage = () => {
  const navigate = useNavigate()

  return (
    <>
    <Navbar/>
    <div className="services-page-container">

      {/* Services Grid */}
      <section className="services-grid-section">
        <h2 className="section-heading">What We Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

   

      {/* CTA/Contact Section (Optional, but good for services page) */}
      <section className="services-cta">
        <h2 className="cta-title">Ready to Transform Your Space?</h2>
        <p className="cta-text">
          Contact us today for a consultation and discover how we can help you with your next furniture project.
        </p>
        <button onClick={()=>navigate('/contact')} className="cta-button">Get a Free Quote</button>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default ServicesPage;