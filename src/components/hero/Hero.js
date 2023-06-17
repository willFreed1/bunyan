import React from 'react';
import './Hero.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Hero from '../../assets/img.jpg'
import Bounce from 'react-reveal/Bounce';


class HeroSection extends React.Component {
  render() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
        <Bounce left>
          <h1 className="hero-title">Making your vision <br/> become a reality.</h1></Bounce>
          <Bounce left cascade>  <p className="hero-description">CONSTRUCTION IS MORE THAN OUR BUSINESS. IT'S WHO WE ARE.</p></Bounce>
          <Bounce> <button className="hero-button">GET IN TOUCH</button></Bounce>
        </div>
        <div className="hero-image-container">
          <img src={Hero} alt="Hero" className="hero-image" />
        </div>
        <div className="hero-navigation">
          <div className="navigation-arrow left">
            <FiChevronLeft />
          </div>
          <div className="navigation-arrow right">
            <FiChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
};

export default HeroSection;
