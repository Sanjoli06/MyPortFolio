import React from "react";

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
    <section
      id="skills"
      className="py-10 px-6 md:px-16 bg-gradient-to-b from-indigo-50 via-white to-indigo-100"
    >
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12"
        data-aos="fade-up"
      >
        My <span className="text-indigo-600">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-4 transition-transform duration-300 group-hover:rotate-6"
            />
            <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
