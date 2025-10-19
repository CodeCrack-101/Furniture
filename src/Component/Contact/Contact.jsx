import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Contact.css";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../Footer/Footer";
import Dial from '../../Component/Dial/Dial'

const ContactUs = () => {
  const navigate = useNavigate();

  const openMap = () => {
    const mapUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.184826226903!2d72.88778479999999!3d19.099546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e5c3b75649%3A0xe207db558c692990!2sComfort%20Chairs!5e0!3m2!1sen!2sin!4v1760593862730!5m2!1sen!2sin";
    window.open(mapUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <Dial/>
      <div className="contact-wrapper">
        <div className="contact-container">
          {/* Left Info Panel */}
          
          {/* Right Form Panel */}
          <div className="contact-form">
            <h3>Contact Form</h3>
            <form action="https://api.web3forms.com/submit" method="post" >
            <input type="hidden" name="access_key" value="e0998387-f0ae-498f-a3e5-379ff3fa7103"/> 
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" />
              <input
                type="number"
                name="mobile"
                placeholder="Your Mobile"
                required
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <DotLottieReact className="traveller" src="/l.lottie" loop autoplay />
        <h3 className="map-title">Find Us On Map</h3>

        {/* Clickable Map Animation */}
        <div className="map-animation" onClick={openMap}>
          <DotLottieReact  src="/map.lottie" loop autoplay />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
