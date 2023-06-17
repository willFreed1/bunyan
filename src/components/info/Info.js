import React from 'react'
import './Info.css';
import { SiMaterialdesign,SiAltiumdesigner } from 'react-icons/si';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';




class Info extends React.Component {
    render() {    return (
        <div className="info-background">
            <div className="wrap-column">
                <div className="first-info">
                <Fade left><h1>Complex<br />Villa Residence<br />Rabat</h1></Fade>
                <FiChevronLeft style={{ color: '#fff', fontSize: '50px' }} />
                <FiChevronRight style={{ color: '#fff', fontSize: '50px' }} />

                </div>
            </div>
            <div className="wrap-column">
                <div className="second-info">
                <Fade right><h1>Bunyan <br />Projects</h1></Fade>
                    <Fade left> <p>Our commitment to research and philosophy of soulful enrichment
                        extends right down to every single  one of our investments. </p></Fade >
                </div>
            </div>
            <div className="text-background">
                <div className="info-text">
                <Fade left>  <SiMaterialdesign size={32}/><h2>120 SQM</h2></Fade>
                <Fade>   <SiAltiumdesigner size={32}/><h2>2 Floors</h2></Fade> 
                </div>
            </div>
        </div>
    )
}
}

export default Info