import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "./profile.css";
import axios from 'axios';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {



  const [Gdata, setGData] = useState({
    email: window.useremail,
    id: window.useruid
  });


  function UserDetails() {
    const [guser, setgUser] = useState(null);
    const [gloading, setgLoading] = useState(true);

    useEffect(() => {
      const fetchGUser = async () => {
        try {
          const url = "http://localhost:8080/gUserDetails";
          const { data: res } = await axios.post(url, Gdata);
          setgUser(res);
          setgLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchGUser();
    }, [window.useremail]);

    if (gloading) {
      return null;
    }

    if (!guser) {
      return <div>User not found</div>;
    }

    // profile data

    window.elderName = guser.elderName;
    window.num = guser.number;
    window.guardName = guser.guardName;
    window.useruid = guser.uid;


    return (
      null
    );
  }

  UserDetails();





  var toggle = window.signout;

  var navLink = "/login";
  if (window.isLoggedIn) {
    navLink = "#";
  }


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


  var Name1 = "";
  var Name2 = "";
  var UserID = "";

  if (window.elder) {
    Name1 = window.elderName;
    UserID = window.useruid;
    Name2 = window.guardName
  }
  else {
    Name1 = window.guardName;
    UserID = window.useremail;
    Name2 = window.elderName
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
              <NavLink to={ navLink}>
                {window.isLoggedIn ? (
                  <div class="profile">
                    <div class="profile-button">
                      <img src="profile.jpg" alt="Profile Image"></img>
                      <span>Username</span>
                    </div>
                    <div className="dropdown-content">
                      <a href="#">{Name1}</a>
                      <a href="#">{UserID}</a>
                      <a href="#">{Name2}</a>

                      <hr></hr>

                      <button class="btn btn-warning-outline button-login" onClick={changeState}>Sign Out</button>
                    </div>
                  </div>
                  ) :
                  (
                  <button class="btn btn-warning-outline button-login" onClick={handleLogIn}>Login/SignUp</button>
                )}

                {/* <button type="button" class="btn btn-warning-outline button-login" onClick={changeState} >{text}</button> */}
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
