import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Sanjoli Goyal</div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="hero" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={600} onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="experience" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Experience</Link></li>
        <li><Link to="contact" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
