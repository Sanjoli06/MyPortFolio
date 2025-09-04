import React from "react";

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
    <section
      id="certifications"
      className="py-10 px-6 md:px-16 bg-gradient-to-b from-white via-indigo-50 to-indigo-100"
    >
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12"
        data-aos="fade-up"
      >
        Certifications & <span className="text-indigo-600">Achievements</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={cert.badge}
              alt={cert.title}
              className="w-16 h-16 mb-4 drop-shadow-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {cert.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
