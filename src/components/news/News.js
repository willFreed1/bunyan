import React from 'react';
import './News.css';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';



class NewsInfo extends React.Component {
    render() {
        return (
            <div className="element-1">
                <Bounce left cascade>
                    <h1>latest news</h1></Bounce>
                <Bounce left cascade> <h2>how to invest in properties
                    manage your property
                    digital active cards
                </h2></Bounce>
                <Bounce left cascade>   <p>Our properties each have their own unique design
                    aesthetic, providing an aspirational
                    lifestyle within a thriving community.</p></Bounce>
            </div>
        );
    }
}

class UserInvite extends React.Component {
    render() {
        return (
            <div className="element-2">
                <div className="left-side">
                    <div className="rect-left-side">
                       
                    <h1><Zoom left cascade><strong>Get news</strong></Zoom> <br /><Zoom left cascade>and updates </Zoom></h1>
                         <Zoom left cascade>  <p>How can we help? Our team is available to help
                            answer delivery questions, menu inquires, and everything else!</p></Zoom>
                        <Zoom left cascade>   <button className='btn-round-style'>GET IN TOUTCH</button></Zoom>

                    </div>
                </div>
                <div className="right-side">
                    <div className="rect-right-side">
                        <div className="second-rect">
                            <h1><Zoom left cascade><strong>Become</strong></Zoom> <br /><Zoom left cascade>BUNYAN </Zoom>
                            <Zoom left cascade><strong>homeowner</strong></Zoom> <br /><Zoom left cascade>today! </Zoom>
                            </h1>

                            <Bounce left cascade>   <p>Our properties each have their own unique design
                                aesthetic, providing an aspirational  lifestyle within
                                a thriving community, supported
                                by Bunyan’s community management team.</p></Bounce>

                                <Bounce left cascade>  <button className='btn-round-style'>BECOME HOMEOWNER</button></Bounce>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class News extends React.Component {
    render() {
        return (
            <div>
                <NewsInfo />
                <UserInvite />
                <div className="additional-background">
                </div>
            </div>
        );
    }
}

export default News;
