import React from 'react';
import Const from '../../assets/const.png';
import './Construction.css';
import Bounce from 'react-reveal/Bounce';



class Construction extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="wrap-const">
          <Bounce left>
          <img src={Const} alt="Const-img" />
          </Bounce>
          <p>
            We call ourselves 'dreamers and doers' for a reason: we can make happen not just what is possible, but what is impossible. Bunyan Properties is a unique investment opportunity, unrivalled anywhere else. This is not business as usual. Be a part of it. Invest in the new future now, invest in Bunyan.
          </p>
        </div>
        <div className="wrap-const">
        <Bounce right>
          <h1><strong>Investments</strong> <br/>Bunyan<br/>world</h1>
          <button className="btn-round-style">Explore more</button>
          </Bounce>
        </div>
      </div>
    );
  }
}


export default Construction