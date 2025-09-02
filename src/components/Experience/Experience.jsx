import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "MastersUnion",
    date: "June 2025 – August 2025",
    responsibilities: [
      "Built responsive UIs with React.js, React Router, and Hooks.",
      "Designed RESTful APIs with Express.js and Sequelize.",
      "Integrated Google OAuth for authentication."
    ]
  },
  {
    role: "Software Developer",
    company: "Infotech",
    date: "December 2024 – February 2025",
    responsibilities: [
      "Built responsive UI with HTML, CSS, JS.",
      "Implemented forms with validations for adding/editing data.",
      "Dynamic DOM manipulation for real-time updates."
    ]
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 data-aos="fade-up">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="date">{exp.date}</span>
              <ul>
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
