import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { BrowserRouter as useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Signup.css";

const Signup = () => {
  const [data, setData] = useState({
    guardName: "",
    elderName: "",
    address: "",
    email: "",
    number: "",
    password: ""
  });
  const [error, setError] = useState("")
  const navigate = BrowserRouter;

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.guardName]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login")
      console.log(res.message);
    }
    catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
  }
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar />
      <div className="signup-form">
        <div class={"signup_cont"}>
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
              <input type="Password" />
            </label>
            <label>
              <span>Mobile No.</span>
              <input type="Integer" />
            </label>

            <label>
              <span>Guardian Mail</span>
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
      <Footer />
    </>

  );
};

export default Signup;
