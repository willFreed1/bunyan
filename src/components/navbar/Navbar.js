import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png'
import { AiOutlineMenu } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //nav turn to black when scrolling
  const [isNavbarBlack, setIsNavbarBlack] = useState(false);
//effect based on Y
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsNavbarBlack(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isNavbarBlack ? 'black' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">Home</li>
          <li className="nav-item">Our Project</li>
          <li className="nav-item">Construction</li>
          <li className="nav-item">Communities</li>
          <li className="nav-item">Investment Approach</li>
          <li className="nav-item">News</li>
          <button className='rounded-btn'><li className="nav-item">Contact us</li></button>
        </ul>
        <div className="nav-icons">
          <ImFacebook className="icon" />
          <BsInstagram className="icon" />
          <BsTwitter className="icon" />
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
