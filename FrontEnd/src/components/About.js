import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
// import { Magnifier } from "react-image-magnify";
import './About.css';

//Hello

function About() {
    return (
        <>
            <Navbar />
            <div className="aboutpage">
                <div class="container">
                    <span class="big-circle"></span>
                    <img src="img/shape.png" class="square" alt="" />
                    <div class="textblock">
                        <div class="contact-info">
                            <p class="text" align="justify">
                                We are providing a platform to the customer to be well informed about their guardians if they are not able to do so while living in other countries or far away from them.
                                We are providing a platform to the customer to be well informed about their guardians if they are not able to do so while living in other countries or far away from them.
                                We are providing a platform to the customer to be well informed about their guardians if they are not able to do so while living in other countries or far away from them.
                            </p>
                        </div>

                        <div className='image'>
                            <h3 id = "text">About Us</h3>
                            <img src="aboutimage.jpeg" alt="elder image" height="400px" width="300px"></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        
        
    )
}


export default About