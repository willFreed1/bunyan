import React from 'react'
import './Featured.css'
import R1 from '../../assets/residence1.png'
import R2 from '../../assets/residence2.png'
import R3 from '../../assets/residence3.png'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

class Featured extends React.Component {
    render() {
        return (
            <div className="featured-container">
                <div className="featured-split-1">
                    <h1><Bounce left cascade><strong>Featured</strong></Bounce> <br /><Bounce left cascade>projects </Bounce></h1>
                    <p>  <Bounce left cascade>Our properties each have their own unique design aesthetic,
                        providing an aspirational lifestyle within a thriving community,
                        supported </Bounce><br /> <Bounce left cascade>by Bunyan’s community management team.</Bounce></p>
                </div>
                <div className="featured-split-2">
                    <div className="img-wrap-featured">
                        <Fade left>  <img src={R1} alt="residence-1" /></Fade>
                        <div className="img-content-featured">
                            <div className="img-content-overlay">
                                <Fade left><h2>Bunyan<br />Residence</h2> </Fade >
                                <Fade left>   <p>Our commitment to research and philosophy of soulful
                                    enrichment extends right down to every single  one of
                                    our investments. </p></Fade >
                            </div>
                        </div>
                        <Fade left><img src={R2} alt="residence-2" /></Fade>
                        <Fade left><img src={R3} alt="residence-3" /></Fade>
                    </div>
                    <FiChevronLeft style={{ color: 'black', fontSize: '40px' }} />
                    <FiChevronRight style={{ color: 'black', fontSize: '40px' }} />
                </div>
            </div>
        );
    };
}
export default Featured