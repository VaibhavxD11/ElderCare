import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Login.css";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar/>
      <div className="login-form">
        <div class={`cont ${toggle ? "s--signup" : ""}`}>
          <div class="loginform sign-in">
            <h2>Login as Elder</h2>
            <label>
              <span>id</span>
              <input type="integer" />
            </label>
            <button type="button" class="submit">
              Sign In
            </button>
          </div>
          <div class="sub-cont">
            <div class="img">
              <div class="img__text m--up">
                <h2>Guardian? </h2>
                <h3>Want to login?</h3>
              </div>
              <div class="img__text m--in">
                <h3>Have account as Elder? </h3>
                <h3>Want to login?</h3>
              </div>
              <div
                class="img__btn"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <span class="m--up">Sign In</span>
                <span class="m--in">Sign In</span>
              </div>
            </div>
            <div class="loginform sign-up">
              <h2>Login as Guardian</h2>
              <label>
                <span>Guardian Email</span>
                <input type="email" />
              </label>
              <label>
                <span>Guardian Name</span>
                <input type="text" />
              </label>
              <label>
                <span>Password</span>
                <input type="password" />
              </label>
              <button type="button" class="submit">
                Sign In
              </button>
              <div class="signup-link">
                Doesnot have an account?{" "}
                <Link class="no-account" to={"/signup"}>
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    
  );
};

export default Login;
