import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Modal,Button, ModalBody, ModalHeader } from "reactstrap";
import "./Login.css";
import axios from 'axios'


var errText;
var errtext;
const Login = () => {

  const [Medmodal, setMedmodal] = useState(true);

  const [data, setData] = useState({
    email: "",
    password: ""
    
  });

  const [Edata, setEData] = useState({
    id: ""
  });

  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    
  };


  const handleEChange = ({ currentTarget: input }) => {
    setEData({ ...Edata, [input.name]: input.value });
    window.uid = Edata.id;
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.isLoggedIn = false;
    
    try {
      const url = "http://localhost:8080/login";
      const { data: res } = await axios.post(url, data);

      if (res.message == "Login Success") {
        window.isLoggedIn = true;
        window.username = data.email;
      }
      // guardian email
      console.log(data.email);
      navigate("/HomeGuardian")

    }
    catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        errtext = error.response.data.message
        setError(error.response.data.message)
        console.log(errText);
      }
    }
    
  }


  const handleESubmit = async (e) => {
    e.preventDefault();
    // window.isLoggedIn = false;

    try {
      const url = "http://localhost:8080/Elogin";
      const { data: res } = await axios.post(url, Edata);

      if (res.message == "Login Success") {
        window.isLoggedIn = true;
        window.Eusername = Edata.id;
      }

      // log elder ID
      
      console.log(Edata.id);
      navigate("/homepage")

    }
    catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        errText = error.response.data.message
        setError(error.response.data.message)
        console.log(errText);
      }
    }

  }


  const [toggle, setToggle] = useState(false);
  return (

    <>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div class={`cont ${toggle ? "s--signup" : ""}`}>
            <div class="loginform sign-in">
              <h2>Login as Elder</h2>
              <br></br>
              <center><span>{errText}</span></center>
              <label>
<<<<<<< HEAD
                <span>id</span>
                <input type="integer"
                  onChange={handleEChange}
                  value={Edata.id}
                  reqired
                  name="id"
                />
              </label>
              <button type="button" class="submit" onClick={handleESubmit}>
=======
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
>>>>>>> b613145826c5f08d1f0af562e4549958e633395a
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
                <br></br>
                <center><span>{errtext}</span></center>
                {/* <label>
                <span>Guardian Name</span>
                <input type="text" />
              </label> */}
                {/* <label>
                <span>Elder Name</span>
                <input type="text" />
              </label> */}
                <label>
                  <span>Email</span>
                  <input type="email" required name="email"
                    onChange={handleChange}
                    value={data.email}
                  />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" required name="password"
                    onChange={handleChange}
                    value={ data.password}
                  />
                </label>
                <button type="button" class="submit" onClick={handleSubmit}>
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
      </form>
      <Footer/>
    </>
    
  );
};

export default Login;
