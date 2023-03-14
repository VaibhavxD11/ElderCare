import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './ContactForm.css';

//Hello Vaibhav

function ContactForm() {
    return (
        <div className="prince">
            <div class="container">
                <span class="big-circle"></span>
                <img src="img/shape.png" class="square" alt="" />
                <div class="form">
                    <div class="contact-info">
                        <h3 class="title">Let's get in touch</h3>
                        <p class="text">
                            You can contact us for getting more information about the services that we provide for your elders guardians.
                        </p>

                        <div class="info">
                            <div class="information">
                                <img src="img/location.png" class="icon" alt="" />
                                <p>JK lakshmipat University , Mahapura</p>
                            </div>
                            <div class="information">
                                <img src="img/email.png" class="icon" alt="" />
                                <p>Eldercare.com</p>
                            </div>
                            <div class="information">
                                <img src="img/phone.png" class="icon" alt="" />
                                <p>123472004</p>
                            </div>
                        </div>

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

                    <div class="contact-form">
                        <span class="circle one"></span>
                        <span class="circle two"></span>

                        <form action="index.html" autocomplete="off">
                            <h3 class="title">Contact us</h3>
                            <div class="input-container">
                                <input type="text" placeholder="Username" name="name" class="input" />
                            </div>
                            <div class="input-container">
                                <input type="email" name="email" class="input" placeholder="E-Mail" />
                            </div>
                            <div class="input-container">
                                <input type="tel" name="phone" class="input" placeholder="Phone" />
                            </div>
                            <div class="input-container textarea">
                                <textarea name="message" class="input" placeholder="Message"></textarea>
                            </div>
                            <input type="submit" value="Send" class="btn" />
                        </form>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default ContactForm