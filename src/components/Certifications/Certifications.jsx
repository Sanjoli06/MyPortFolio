import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "LeetCode",
    description: "Solved 400+ Data Structure and Algorithm questions.",
    badge: "https://cdn-icons-png.flaticon.com/512/270/270798.png"
  },
  {
    title: "HackerRank",
    description: "5-star coder for problem-solving and algorithms.",
    badge: "https://cdn-icons-png.flaticon.com/512/270/270799.png"
  },
  {
    title: "Advanced Web Development",
    description: "Completed Coursera course on modern web development.",
    badge: "https://cdn-icons-png.flaticon.com/512/270/270791.png"
  },
  {
    title: "Advanced Data Structures",
    description: "Completed Coursera course on data structures.",
    badge: "https://cdn-icons-png.flaticon.com/512/270/270792.png"
  },
  {
    title: "Object-Oriented Software Engineering",
    description: "Completed Infosys certification in OOP principles.",
    badge: "https://cdn-icons-png.flaticon.com/512/270/270793.png"
  }
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <h2 data-aos="fade-up">Certifications & Achievements</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="cert-card"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img src={cert.badge} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
