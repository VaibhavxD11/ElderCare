import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="signup-form">
      <div class={`cont ${toggle ? "s--signup" : ""}`}>
        <div class="loginform sign-in">
          <h2>Signup for Guardian</h2>
          <label>
            <span>Guardian Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Elder Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Guardian Address</span>
            <input type="text" />
          </label>
          <label>
            <span>Password</span>
            <input type="text" />
          </label>
          <button type="button" class="submit">
            Sign up
          </button>
        </div>
        <div class="sub-cont">
          <div class="img">
            <div class="signup__text m--up">
              <h3>Signup</h3>
              <h3>for Guardian</h3>
              <div class="signup-link">
                Have an account?{" "}
                <Link
                  class="no-account"
                  to={"/Login"}
                  style={{ color: "black" }}
                >
                    <u>Login as Guardian</u>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
