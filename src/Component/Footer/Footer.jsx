import React from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Left Section */}
        <div className="footer-section">
          <h1>
            Shiri<span>G</span>
          </h1>
          <hr />
          <p>
            ShiriG offers a wide range of custom-designed furniture,
            including sofas and wooden beds, with expert craftsmanship and a
            commitment to customer satisfaction. At ShiriG, every order
            is made on demand, and services like restoring and refurbishing old
            sofas are also available
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section-contact">
          <h3>Contact Info</h3>
          <p>
            <lord-icon
              src="https://cdn.lordicon.com/vpbspaec.json"
              trigger="hover"
              delay="1500"
              state="in-assembly"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            ></lord-icon>
            shaikhzaid0820@gmail.com
          </p>
          <p>
            <lord-icon
              src="https://cdn.lordicon.com/dnphlhar.json"
              trigger="hover"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            ></lord-icon>
            +91 9819855012
          </p>
          <p>
            <lord-icon
              src="https://cdn.lordicon.com/onmwuuox.json"
              trigger="hover"
              delay="1500"
              state="in-jump-dynamic"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            ></lord-icon>
            1st floor shop no 46, wajid ali compound bombay market, 90 Feet Rd, near dilshad hotel, Gokuldham Society, Satya Nagar, Sathi D Souza Nagar, Saki Naka, Mumbai, Maharashtra 400072
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="icon">
        <button className="icon-btn">
          <lord-icon
            src="https://cdn.lordicon.com/roscsuft.json"
            trigger="hover"
            state="morph-alone"
            style={{ width: "30px", height: "50px" }}
          ></lord-icon>
        </button>

        <button className="icon-btn">
          <lord-icon
            src="https://cdn.lordicon.com/lplofcfe.json"
            trigger="hover"
            state="morph-alone"
            style={{ width: "30px", height: "50px" }}
          ></lord-icon>
        </button>

        <button className="icon-btn">
          <lord-icon
            src="https://cdn.lordicon.com/vnvsnvov.json"
            trigger="hover"
            state="morph-alone"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </button>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ShiriG. All Rights Reserved.
        <br/>
        Devloped By Khan Obaid
        <br/>
        +91 7021384306      </div>
    </footer>
  );
};

export default Footer;
