import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-10 px-6 bg-gray-50"
    >
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
      >
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
        <div
          className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500"
          data-aos="fade-right"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="flex-1 text-center md:text-left"
          data-aos="fade-left"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Hi! I'm <b className="text-indigo-600">Sanjoli Goyal</b>, a passionate{" "}
            <span className="font-semibold">Full Stack Developer</span> with a
            strong foundation in problem-solving, web technologies, and modern
            frameworks. I enjoy building clean, responsive, and user-friendly
            applications.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Education
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
            >
              <h4 className="text-lg font-bold text-indigo-600 mb-2">
                Bachelor Of Engineering
              </h4>
              <p className="text-gray-600">Chitkara University | 2025</p>
              <span className="block mt-2 text-gray-800 font-medium">
                CGPA: 9.37
              </span>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h4 className="text-lg font-bold text-indigo-600 mb-2">
                Senior Secondary
              </h4>
              <p className="text-gray-600">2021</p>
              <span className="block mt-2 text-gray-800 font-medium">94%</span>
            </div>

            <div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <h4 className="text-lg font-bold text-indigo-600 mb-2">
                Secondary Education
              </h4>
              <p className="text-gray-600">2019</p>
              <span className="block mt-2 text-gray-800 font-medium">
                93.4%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
