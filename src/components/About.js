import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
// import './About.css';
// Hello

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


                        <div class="social-media">
                            <p>Connect with us :</p>
                            <div class="social-icons">
                                <a href="#">
                                    <i class="fab fa-facebook-f"><SocialIcon url="https://twitter.com/PiyushS85128013" target="_twitter" /></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-twitter"><SocialIcon url="https://www.instagram.com/piyush_m87/" target="_instagram" /></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-instagram"><SocialIcon url="https://www.facebook.com/" target="_facebook" /></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-linkedin-in"><SocialIcon url="https://github.com/piyush3441" target="_github" /></i>
                                </a>
                            </div>
                        </div>
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