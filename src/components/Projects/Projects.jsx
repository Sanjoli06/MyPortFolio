import React from "react";

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
    <section className="py-4 bg-gray-50" id="projects">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
        My Projects
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-6">{project.techStack}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium transition duration-300"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;