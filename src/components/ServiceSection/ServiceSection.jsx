import React from 'react';
import './ServiceSectionStyles.css';
import searchEngineImg from '../../assets/healthcare-search.png';
import insuranceImg from '../../assets/insurance-tracking.png';
import educationImg from '../../assets/educational-services.png';

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <h2>How can I assist you?</h2>
      <div className="services-container">
        <div className="service-card">
          <img src={searchEngineImg} alt="Healthcare Search Engine" />
          <h3>Search Local Care Providors</h3>
          <a href="/healthcare-search" className="btn">
            Explore
          </a>
        </div>
        <div className="service-card">
          <img src={insuranceImg} alt="Insurance Tracking" />
          <h3>Track and Estimate Your Insurance and Health Bills</h3>
          <a href="/coming-soon" className="btn">
            Explore
          </a>
        </div>
        <div className="service-card">
          <img src={educationImg} alt="Educational Services" />
          <h3>Learn About How All Works</h3>
          <a href="/coming-soon" className="btn">
            Explore
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;