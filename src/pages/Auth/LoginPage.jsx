import React from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome back!</h2>
        <p className="login-subtitle">
          Let’s get you closer to the work-life you deserve.
        </p>

        <div className="login-card">
          <form className="signup-form">
            <input type="text" placeholder="Full name" />
            <input type="password" placeholder="Password" />
            <div className="forgot-password">Forgot Password?</div>
            <button className="signup-button">Login</button>
          </form>

          <div className="divider">or</div>

          <div className="auth-social-icons">
            <FaGoogle />
            <FaFacebook />
            <FaLinkedin />
          </div>

          <p className="signin-text">
            Don’t have an account? <a onClick={() => navigate("/signup")}>Sign up</a>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
