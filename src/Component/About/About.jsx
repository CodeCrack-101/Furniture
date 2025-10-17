import React from 'react';
import './About.css'; // Don't forget to create this CSS file!
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'

const AboutUsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="about-us-page">
      {/* Top Section: Vision & Image */}
      <section className="vision-section">
        <div className="vision-image-container">
          <div className="vision-image">     <DotLottieReact
          src="/swap.lottie"
          loop
          autoplay
          className="anima"
        /></div>
        </div>
        <div className="vision-content">
          <h2 className="vision-title">Warm & Comforting</h2>
          <p className="vision-text">
          We firmly believe that your environment is the foundation for a positive, fulfilling life.          </p>
          <p className="vision-text">
          With our furniture, we aim to help you craft that empowering space. Each piece is designed not just for function, but to serve as a cornerstone of your personal sanctuary—a constant reminder of the peace, comfort, and beauty you have the power to create for yourself.          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-intro-section">
        <h2 className="core-values-intro-title">Direct & Elegant Adaptation</h2>
        <p className="core-values-intro-text">
        We're passionate believers in a better world and a more compassionate economy. Through upholding fair working conditions, utilizing natural materials, and dedicating ourselves to meticulous detail, we strive to manifest our core values into our products, making them tangible expressions of what we stand for.        </p>
      </section>

      {/* Core Values Grid */}
      <section className="values-grid-section">
        <div className="value-card">
          <h3 className="value-card-title">Artisanal Quality</h3>
          <p className="value-card-text">
          Each piece is brought to life by dedicated artisans who share our passion for detail. This hands-on approach guarantees that the furniture you bring into your home is not just built, but thoughtfully crafted.          </p>
        </div>
        <div className="value-card">
          <h3 className="value-card-title">Natural Materials</h3>
          <p className="value-card-text">
            Every material resonates with its surroundings. That's why we choose to craft our products from natural materials, designed to imbue you with positive energy whenever you Place them.
          </p>
        </div>
        <div className="value-card">
          <h3 className="value-card-title">Building a Better World</h3>
          <p className="value-card-text">
          Our commitment extends beyond our craft. We proudly invest a part of our revenue into social and environmental projects, helping to furnish a better future for everyone.          </p>
        </div>
      </section>
    </div>
    <Footer/>
      </>
  );
};

export default AboutUsPage;