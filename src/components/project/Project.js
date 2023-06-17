import './Project.css';
import Map from '../../assets/map.png';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';


function Project() {
  return (
    <div className="container-p">
      <div className="split-container-p">
        <div className="left-container-p">
          <h1><Bounce left><strong>This is</strong></Bounce> <br /><Bounce left>Bunyan </Bounce></h1>
          <Bounce left><p>REGIONS</p></Bounce>
        </div>
        <div className="left-container-p">
          <Bounce left><img src={Map} alt="Morocco Map" className="map-image-p" /></Bounce>
        </div>
      </div>

      <div className="split-container-p">
        <div className="right-container-p">
          <h1 className="title-p">Rabat, <br />Morocco</h1>
          <div className="first-wrapper-p">
            <div className="wrap-p">
              <TiWeatherPartlySunny size={40} />
              <p>Mediterranean</p>
            </div>
            <div className="wrap-p">
              <h2>290</h2>
              <p>Coastline Length</p>
            </div>
          </div>

          <div className="second-wrapper-p">
            <div className="wrap2-p">
              <h2>178</h2>
              <p>places to discover</p>
            </div>
            <div className="wrap2-p">
              <h2>2024</h2>
              <p>Project launch</p>
            </div>
          </div>

          <div className="desc-p">
          <p>We are building a new model,
              a living laboratory for entrepreneurship,
              a home for an international
              community of dreamers and doers – set in
              breathtaking natural landscapes and
              driven by advanced disruptive technology.
              We’re a cutting-edge industrial powerhouse
              and a revolution in urban living. We’re home
              to some of the world’s most beautiful islands.
              In other words, we’re a diverse destination that
              offers something for everyone, and we’re as unique as it gets.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
