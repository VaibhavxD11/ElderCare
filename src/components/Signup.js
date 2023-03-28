import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
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
  const navigate = useNavigate();

  const handleChange = ({currentTarget: input}) => {
    setData({ ...data, [input.guardName]: input.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const url = "http://localhost:8080/api/users";
      const {data: res} = await axios.post(url, data);
      navigate("/login")
      console.log(res.message);
    }
    catch (error){
      if (error.response && 
        error.response.status >=400 &&
        error.response.status <=500
        ){
          setError(error.response.data.message)
        }
    }
  }
  const [toggle, setToggle] = useState(false);
  return (
    <form onSubmit={handleSubmit}>

    
    <div className="signup-form">
      <div class={"signup_cont"}>
        <div class="loginform sign-in">
          <h2>Signup for Guardian</h2>
          <label>
            <span>Guardian Name</span>
            <input 
            type="text" 
            name="guardName"
            onChange={handleChange}
            value={data.guardName}
            required
            />
          </label>
          <label>
            <span>Elder Name</span>
            <input 
            type="text" 
            name="elderName"
            onChange={handleChange}
            value={data.elderName}
            required
            // className={styles.input}
            />
          </label>
          <label>
            <span>Guardian Address</span>
            <input 
            type="text" 
            name="address"
            onChange={handleChange}
            value={data.address}
            required
            // className={styles.input}
            />
          </label>
          <label>
            <span>Guardian Mail</span>
            <input 
            type="text" 
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            // className={styles.input}
            />
          </label>
          <label>
            <span>Mobile No.</span>
            <input type="Integer" 
            name="number"
            onChange={handleChange}
            value={data.number}
            required
            // className={styles.input}
            />
          </label>
          <label>
            <span>Password</span>
            <input type="Password" 
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            // className={styles.input}
            />
          </label>
          {/* {error && <div >{error}</div>} */}
          
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
    </form>
  );
};

export default Signup;
