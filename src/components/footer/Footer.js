import React from 'react'
import './Footer.css'
import LogoFooter from '../../assets/logo-footer.png'
import { ImFacebook } from 'react-icons/im';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer() {
    return (
        <div class="footer-container">
            <div class="logo">
                <img src={LogoFooter} alt="LogoFooter" />
            </div>
            <nav class="footer-nav">
                <ul class="nav-menu">
                    <li class="nav-item">Home</li>
                    <li class="nav-item">Our Project</li>
                    <li class="nav-item">Construction</li>
                    <li class="nav-item">Communities</li>
                    <li class="nav-item">Investment Approach</li>
                    <li class="nav-item">News</li>
                </ul>
            </nav>
            <div className="email-infos">
                <h3>INFO <br/>Hello@bunyan.co <br/>(949) 392-5241 </h3>
            </div>
            <div class="nav-icons">
                <ImFacebook className="icon" />
                <BsInstagram className="icon" />
                <BsTwitter className="icon" />
            </div>
            <button className="rounded-btn2">GET IN TOUCH</button>
        </div>
    )
}

export default Footer