import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './About.css';
 

function About() {
    return (
        <div className="prince">
            <div class="container">
                <span class="big-circle"></span>
                <img src="img/shape.png" class="square" alt="" />
                <div class="form">
                    <div class="contact-info">
                        <p class="text">
                            We are providing a platform to the customer to be well informed about their guardians if they are not able to do so while living in other countries or far away from them.
                            We are providing a platform to the customer to be well informed about their guardians if they are not able to do so while living in other countries or far away from them.
                            We are providing a platform to the customer to be well informed about their guardians if they are not able to do so while living in other countries or far away from them.
                        </p>
                    </div>

                    <div className='image'>
                        <h3>About Us</h3>
                        <img src="aboutimage.jpeg" alt="elder image"  height="400px" width="300px"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About