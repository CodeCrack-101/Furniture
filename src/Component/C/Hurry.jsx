import React from 'react';
import { useNavigate } from 'react-router-dom';
// Using a CDN import path that is more compatible with web-based editors.
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Hurry.css'

const Hurry = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hurry-section">
        <h1>For Exclusive Offer Contact Now!</h1>
        <div className="hurry-content-wrapper">
          <button 
            onClick={() => navigate('/contact')}
            className="hurry-btn"
          >
            Hurry Up!
          </button>
          <DotLottieReact
            src="/Run.lottie"
            loop
            autoplay
            className="hurry-animation"
          />
        </div>
      </div>
    </>
  );
};

export default Hurry;