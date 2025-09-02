import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 data-aos="fade-up">Contact Me</h2>
      <div className="contact-container" data-aos="slide-up">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        <div className="contact-links">
          <a href="https://github.com/Sanjoli06" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sanjoli-goyal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:goyalsanjoli036@gmail.com">Email</a>
          <a href="tel:+919817270839">Phone</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
