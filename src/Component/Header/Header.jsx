import React from 'react';
import './Header.css';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      {/* --- Text Content Container --- */}
      <div className="header-text">
        <TypeAnimation
          sequence={[
            'Hello,', 1000,
            'Welcome To Khan Wallpaper,', 1500,
            'Contact Now!', 1200,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="type-text"
        />
        <button 
          onClick={() => navigate('/contact')} // Changed to a more fitting route
          className="explore-btn"
        >
          Contact Now
        </button>
      </div>

      {/* --- Lottie Animation Container --- */}
      <div className="header-animation-container">
        <DotLottieReact
          src="/Welcome.lottie"
          loop
          autoplay
          className="header-animation"
        />
      </div>
    </div>
  );
};

export default Header;