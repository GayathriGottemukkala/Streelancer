import React, { useEffect, useState } from "react";
import { FaGoogle,FaFacebook,FaLinkedin } from "react-icons/fa";
import slide1 from "../../images/signup1.png"
import slide2 from "../../images/signup2.png"
import slide3 from "../../images/signup3.png"
import "./auth.css";
import { useNavigate } from "react-router-dom";

const images = [
  slide1,slide2,slide3
];


const Signup = () => {
   const [current, setCurrent] = useState(0);
   const navigate=useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change slide every 3s
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="signup-container">
 <div className="signup-wrapper">
  <h1>“Join  Streelancer to start your journey”</h1>
      <div className="signup-card">
        <form className="signup-form">
          <input type="text" placeholder="Full name" />
          <div className="input-row">
            <input type="text" placeholder="Gender" />
            <input type="text" placeholder="Current Job Status" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="signup-button">Sign up</button>
        </form>

        <div className="divider">or</div>

        <div className="auth-social-icons">
          <FaGoogle/>
          <FaFacebook/>
          <FaLinkedin/>
        
        </div>

        <p className="signin-text">Already have an account? <a onClick={() => navigate("/login")}>Sign in</a></p>
      </div>
    </div>
     {/* <div className="image-carousel">
      <img src={images[current]} alt={`Slide ${current + 1}`} className="carousel-image" />

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div> */}

    <div className="image-carousel">
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Slide ${index + 1}`}
      className={`carousel-image ${index === current ? "active" : ""}`}
    />
  ))}

  <div className="carousel-dots">
    {images.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === current ? "active" : ""}`}
        onClick={() => setCurrent(index)}
      ></span>
    ))}
  </div>
</div>

  

    </div>
   
  );
};

export default Signup;
