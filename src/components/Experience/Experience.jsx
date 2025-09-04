import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "MastersUnion",
    date: "June 2025 – August 2025",
    responsibilities: [
      "Built responsive UIs with React.js, React Router, and Hooks.",
      "Designed RESTful APIs with Express.js and Sequelize.",
      "Integrated Google OAuth for authentication.",
    ],
  },
  {
    role: "Software Developer",
    company: "Infotech",
    date: "December 2024 – February 2025",
    responsibilities: [
      "Built responsive UI with HTML, CSS, JS.",
      "Implemented forms with validations for adding/editing data.",
      "Dynamic DOM manipulation for real-time updates.",
    ],
  },
];

function Experience() {
  return (
    <section className="py-8 bg-gray-50" id="experience">
      <h2
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        data-aos="fade-up"
      >
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden md:block"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="hidden md:flex w-6 h-6 bg-blue-500 rounded-full z-10 border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>

            <div
              className={`w-full md:w-1/2 px-6 relative`}
            >
              <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <h4 className="text-md font-medium text-blue-600">
                  {exp.company}
                </h4>
                <span className="text-sm text-gray-500">{exp.date}</span>
                <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/2 hidden md:block"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
