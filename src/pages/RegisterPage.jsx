import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const RegisterPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Your Account 📝</h2>
        <p>Start your journey with us today!</p>
        <form>
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
