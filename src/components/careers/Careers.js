import React from 'react'
import './Careers.css';
import Design from '../../assets/careers-logo.png'
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import Rotate from 'react-reveal/Rotate';



class Careers extends React.Component {
    render() {
  return (
    <div className="background-career">
        <div className="split-career">
            <div className="split-career2">
            <Rotate top left>
   
                <div className="rectangle">
                <Bounce left>
                    <h1>Careers</h1>
                    <p>We call ourselves 'dreamers and doers' for a reason:
                         we can make happen not just what is possible, 
                         but what is impossible. Bunyan Properties is a unique
                          investment opportunity, unrivalled anywhere else. 
                          This is not business as usual. Be a part of it.
                         Invest in the new future now, invest in Bunyan.</p>
                         <button className='btn-round-style'>Explore</button> </Bounce>

                </div>
                </Rotate>

            </div>
            <div className="split-career2">
                <div className="img-design"> 
                <Bounce right ><img src={Design} alt="Hero" /></Bounce></div>
           
           
            </div>
          
            </div>

        </div>
        


   
  )
}
}

export default Careers