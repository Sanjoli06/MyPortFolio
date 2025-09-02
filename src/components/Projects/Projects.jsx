import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Book Store",
    description: "Developed a full-stack book store website enabling users to browse, search, and purchase books with a seamless shopping experience.",
    techStack: "React, TypeScript, Redux, Tailwind CSS, Material UI, REST APIs, JWT",
    github: "https://github.com/sanjoligoyal/bookstore"
  },
  {
    name: "Movie Explorer Web Application",
    description: "Built a responsive movie discovery platform with Home, Admin, Login, MovieDetails, and WishList pages using React Router and Redux.",
    techStack: "React, Redux, Firebase, Stripe, Tailwind CSS",
    github: "https://github.com/sanjoligoyal/movie-explorer"
  },
  {
    name: "Quora Clone",
    description: "Created a functional Quora clone with dynamic updates, real-time voting, and notification system using HTML, CSS, and JavaScript.",
    techStack: "HTML, CSS, JavaScript, AJAX, localStorage",
    github: "https://github.com/sanjoligoyal/quora-clone"
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-up">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">{project.techStack}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
