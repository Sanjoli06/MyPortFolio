import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-text" data-aos="fade-up">
        <h1>Hi, I'm <span>Sanjoli Goyal</span></h1>
        <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        <div className="hero-buttons">
          <a href="/SanjoliGoyalResume.pdf" download className="btn">Download Resume</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <div className="hero-image" data-aos="zoom-in">
        <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="Developer" />
      </div>
    </section>
  );
}

export default Hero;
