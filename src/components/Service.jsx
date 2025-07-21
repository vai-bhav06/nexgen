import React from 'react';
import img1 from '../images/service1.jpg';
import img2 from '../images/service2.jpg';
import img3 from '../images/service3.jpg';

const services = [
  {
    title: 'Tax Planning & Filing',
    description: 'Stay compliant while optimizing your tax savings with proactive, personalized strategies.',
    image: img1,
  },
  {
    title: 'Bookkeeping & Payroll',
    description: 'Accurate, cloud-based recordkeeping and payroll solutions designed to save time and reduce errors.',
    image: img2,
  },
  {
    title: 'Financial Advisory',
    description: 'Strategic insights that support your business growth, investments, and budgeting goals.',
    image: img3,
  },
];

const Service = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Services</h2>
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-container ${index % 2 === 1 ? 'reverse' : ''}`}
        >
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="service-btn">Learn More</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;
