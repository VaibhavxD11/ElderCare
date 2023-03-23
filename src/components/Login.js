import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
{/* <script>querySelector
        document.('.img__btn').addEventListener('click', function() {
            document.querySelector('.cont').classList.toggle('s--signup');
        });
    </script> */}
const Login = () => {
    const [toggle, setToggle] = useState(false)
    return (

        <div className="login-form">
            <div class={`cont ${toggle ? "s--signup" : ""}`}>
                <div class="loginform sign-in">
                    <h2>Login as Elder</h2>
                    <label>
                        <span>id</span>
                        <input type="integer" />
                    </label>
                    {/* <label>
                    <span>Password</span>
                    <input type="password" />
                </label> */}
                    {/* <p class="forgot-pass">Forgot password?</p> */}
                    <button type="button" class="submit">Sign In</button>

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
                        <div class="img__btn" onClick={() => {
                            setToggle(!toggle)
                        }}>
                            <span class="m--up">Sign In</span>
                            <span class="m--in">Sign In</span>
                        </div>
                    </div>
                    <div class="loginform sign-up">
                        <h2>Login as Guardian</h2>
                        <label>
                            <span>Guardian Name</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>Elder Name</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" />
                        </label>
                        <button type="button" class="submit">Sign In</button>
                        <div class="signup-link">Doesnot have an account? <Link class="no-account" to={"/signup"}>Signup</Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}


export default Login;
