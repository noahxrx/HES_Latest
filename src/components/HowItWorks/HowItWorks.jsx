// src/components/HowItWorks/HowItWorks.jsx
import React from 'react';
import '../HowItWorks/HowItWorksStyle.css'; // スタイルは同じものを使う
import stepOneImg from '../../assets/healthcare-search.png';
import stepTwoImg from '../../assets/insurance-tracking.png';
import stepThreeImg from '../../assets/educational-services.png';
import { FaCloud } from "react-icons/fa";


const HowItWorks = () => {
  return (
      <section id="how-it-works" className="subcategory-section">
           <div className='side-menu-bar'>
            <h1>Menu</h1>
              <ul className='side-menu-list'>
                <li className='side-menu-item'><a href="/coming-soon" className="btn"><FaCloud />  When to go to the hospital</a></li>
                <li className='side-menu-item'><a href="/coming-soon" className="btn"><FaCloud />  WHEN</a></li>
                <li className='side-menu-item'><a href="/coming-soon" className="btn"><FaCloud />  WHERE</a></li>
                <li className='side-menu-item'><a href="/coming-soon" className="btn"><FaCloud />  HOW</a></li>
              </ul>
          </div>
              <h2>Learn about how HES works.</h2>
              <div className="category-container">
                  <div className="service-card">
                      <img src={stepOneImg} alt="Step One" />
                      <h3>Understand when to go to the hospital</h3>
                      <p>Use our engine to find care providers near you, tailored to your needs.</p>
                      <a href="/coming-soon" className="btn">
                          Read more
                      </a>
                  </div>
                  <div className="service-card">
                      <img src={stepTwoImg} alt="Step Two" />
                      <h3>Card 2</h3>
                      <p>Explanation about card 2</p>
                  </div>
                  <div className="service-card">
                      <img src={stepThreeImg} alt="Step Three" />
                      <h3>Card 3</h3>
                      <p>Explanation about card 3</p>
                  </div>
                  <div className="service-card">
                      <img src={stepThreeImg} alt="Step Three" />
                      <h3>Card 3</h3>
                      <p>Explanation about card 3</p>
                  </div>
              </div>
          </section>
  );
};

export default HowItWorks;
