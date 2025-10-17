import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // FIX: Changed "useState" to "menuOpen"
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="Nav">
      <nav>
        <NavLink to="/" onClick={closeMenu}>
          <img className="logo" src="/logo.png" alt="ShiriG Logo" />
        </NavLink>
        
        {/* MODIFIED BUTTON: Shows 'X' or '☰' based on state */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <ul className={`unorderlist ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
              Service
            </NavLink>
          </li>
        
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;