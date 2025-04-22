import React from 'react';
import './NavbarStyles.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          {/* HES Logo links to the home page */}
          <li>
            <a href="/">
              <img src={logo} alt="HES Logo" className="logo-img" />
            </a>
          </li>
          {/* Services link takes user to the home page, then scrolls to #services */}
          <li>
            <a href="/#services">Services</a>
          </li>
          {/* Mission link */}
          <li>
            <a href="/#mission">Mission</a>
          </li>
          {/* Team link */}
          <li>
            <a href="/#team">Team</a>
          </li>
          {/* FAQ link */}
          <li>
            <a href="/#faq">FAQ</a>
          </li>
          {/* Sign link */}
          <li>
            <a href="/#signup">Log In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;