import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { BrowserRouter as useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Signup.css";


var errText;
const Signup = () => {

  // const count = 0;
  
  

  function generateUniqueNumber() {
    const randomNumber = Math.floor(Math.random() * 1);
    const timestamp = Date.now().toString().slice(-5);
    const uniqueNumber = Math.ceil(parseInt(randomNumber.toString() + timestamp) / 10);
    return uniqueNumber;
  }


  const [data, setData] = useState({
    guardName: "",
    elderName: "",
    address: "",
    email: "",
    number: "",
    password: "",
    uid: generateUniqueNumber()
  });
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    // const count = this.state;
    e.preventDefault();
    console.log(data);

    try {
      const url = "http://localhost:8080/register";
      const { data: res } = await axios.post(url, data);
      navigate("/Login")
      console.log(res.message);
    }
    catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        errText = (error.response.data.message)
        setError(error.response.data.message)
        console.log(errText);
      }
    }
  }
  // const [toggle, setToggle] = useState(false);
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <div class={"signup_cont"}>
            <div class="loginform sign-in">
              <h2>Signup for Guardian</h2>
              <br></br>
              <center>
                <span>{errText}</span>
              </center>
              <label>
                <span>Guardian Name</span>
                <input
                  type="text"
                  name='guardName'
                  onChange={handleChange}
                  value={data.guardName}
                  minLength="3"
                  required
                />
              </label>
              <label>
                <span>Elder Name</span>
                <input type="text"
                  name='elderName'
                  onChange={handleChange}
                  value={data.elderName}
                  required
                />
              </label>
              <label>
                <span>Guardian Address</span>
                <input type="text"
                  name='address'
                  onChange={handleChange}
                  value={data.address}
                  required
                />
              </label>
              <label>
                <span>Guardian Mail</span>
                <input type="email"
                  name='email'
                  onChange={handleChange}
                  value={data.email}
                  required
                />
              </label>
              <label>
                <span>Mobile No.</span>
                <input type="Integer"
                  name='number'
                  onChange={handleChange}
                  value={data.number}
                  required
                />
              </label>
              <label>
                <span>Password</span>
                <input type="Password"
                  name='password'
                  onChange={handleChange}
                  value={data.password}
                  required
                />
              </label>
              <button type="button" class="submit" onClick={handleSubmit}>
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
      </form>
      <Footer />
    </>

  );
};

export default Signup;
