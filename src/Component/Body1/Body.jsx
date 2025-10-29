import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Body.css'
// A simple SVG icon component for reusability
const FeatureIcon = ({ children }) => (
  <div className="feature-icon-wrapper">
    {children}
  </div>
);
const FurnitureShowcase = () => {
  const navigate = useNavigate()
  return (
    <>
  
      <div className="furniture-showcase-container">
        {/* Left Column: Text Content */}
        <div className="showcase-text-content">
          <h4 className="pre-title">MODERN & ELEGANT</h4>
          <h1 className="main-title">Furniture to love now & forever</h1>
          <p className="description">
            Discover furniture that's designed to be cherished, evolving with your life and style, making every moment at home even more special.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4h-8v-8Z"/><circle cx="7.5" cy="18.5" r="2.5"/><circle cx="17.5" cy="18.5" r="2.5"/></svg>
              </FeatureIcon>
              <div>
                <h3 className="feature-title">Free Shipping</h3>
                <p className="feature-description">Enjoy free shipping on all orders</p>
              </div>
            </div>
            <div className="feature-item">
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
              </FeatureIcon>
              <div>
                <h3 className="feature-title">Affordable Prices</h3>
                <p className="feature-description">We offer competitive prices</p>
              </div>
            </div>
          </div>
          <button className="collection-btn" onClick={()=>navigate('/product')} >
            View Collection &rarr;
          </button>
        </div>

        {/* Right Column: Image Gallery */}
        <div className="showcase-image-content">
          <div className="large-image-wrapper">
            <img src="/image.png" alt="Main furniture piece" />
          </div>
          <div className="small-images-column">
            <div className="small-image-wrapper">
              <img src="/body2.png" alt="Furniture detail 1" />
            </div>
            <div className="small-image-wrapper">
              <img src="/body3.png" alt="Furniture detail 2" />
            </div>
            <div className="small-image-wrapper">
              <img src="/body4.png" alt="Furniture detail 3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FurnitureShowcase;

