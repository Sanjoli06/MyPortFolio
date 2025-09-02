import React from "react";
import "./Skills.css";

const skills = [
  { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
  { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "HTML5", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "SQL", icon: "https://cdn-icons-png.flaticon.com/512/2772/2772124.png" },
  { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
  { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
  { name: "C++", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            data-aos="flip-up"
            data-aos-delay={index * 100}
          >
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
