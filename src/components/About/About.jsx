import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2 data-aos="fade-up">About Me</h2>
      <div className="about-content">
        {/* Left Side - Image */}
        <div className="about-img" data-aos="fade-right">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Profile" 
          />
        </div>

        {/* Right Side - Bio + Education */}
        <div className="about-text" data-aos="fade-left">
          <p>
            Hi! I'm <b>Sanjoli Goyal</b>, a passionate Full Stack Developer 
            with a strong foundation in problem-solving, web technologies, 
            and modern frameworks. I enjoy building clean, responsive, and 
            user-friendly applications.
          </p>

          <h3>Education</h3>
          <div className="education">
            <div className="edu-card" data-aos="zoom-in">
              <h4>Bachelor Of Engineering</h4>
              <p>Chitkara University | 2025</p>
              <span>CGPA: 9.37</span>
            </div>

            <div className="edu-card" data-aos="zoom-in" data-aos-delay="200">
              <h4>Senior Secondary</h4>
              <p>2021</p>
              <span>94%</span>
            </div>

            <div className="edu-card" data-aos="zoom-in" data-aos-delay="400">
              <h4>Secondary Education</h4>
              <p>2019</p>
              <span>93.4%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
