import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './ContactForm.css';


function ContactForm() {
    return (
        <div className="contactpage">
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
                    </div>

                    <div class="contact-form">
                        <span class="circle one"></span>
                        <span class="circle two"></span>

                        <form classname="InputForm"action="index.html" autocomplete="off">
                            <h3 class="title">Contact us</h3>
                            <div class="input-container">
                                <input type="text" placeholder="Username" name="name" class="input" style={{color:'white'}} />
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
                            <center>
                                <input type="submit" value="Send" class="send-button" />
                            </center>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default ContactForm