import React, { useState } from "react";
import ReactLogo from "../img/log.svg";
import Register from "../img/register.svg";
import "../App.css";
// import styles from "../style.module.css";

const Signin = () => {
  const [value, setValue] = useState("");

  const goToSignup = () => setValue("sign-up-mode");

  const goToSignin = () => setValue("");
  return (
    <div className={`con ${value}`}>
      <div className={`forms-con ${value}`}>
        <div className="signin-signup">
          <form action="/#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="/#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="/#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          {/* signup */}
          <form action="/#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="/#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="/#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* logo */}
      <div className={`panels-con ${value}`}>
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={goToSignup}
            >
              Sign up
            </button>
          </div>
          <img src={ReactLogo} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              onClick={goToSignin}
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img src={Register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
