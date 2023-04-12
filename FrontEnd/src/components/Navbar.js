import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  var toggle = window.signout;
  var text = "Login/SignUp";
  if (toggle) {
    text = "SignOut";
  }

  function changeState() {
    window.location.reload();
    window.location.replace('/login');
  }

  const [loggedIn, setLoggedIn] = useState(false);
  function handleLogIn() {
    toggle = false;
    setLoggedIn(true);
  }
  function handleLogOut() {
    toggle = false;
    setLoggedIn(false);
  }

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav fixed-top">
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <a href="/"><img src="image.jpg" className="logo"></img></a>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/login">
                {/* {toggle ? (
                  <button class="btn btn-warning-outline button-login" onClick={handleLogOut}>Sign out</button>
                ) : (
                    <button class="btn btn-warning-outline button-login" onClick={handleLogIn}>Login/SignUp</button>
                )} */}

                <button type="button" class="btn btn-warning-outline button-login" onClick={changeState} >{text}</button>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div> */}

      </nav>
    </>
  );
};

export default Navbar;
