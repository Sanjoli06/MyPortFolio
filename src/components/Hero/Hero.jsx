import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 pt-20 md:pt-24 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200"
    >
      <div
        className="flex-1 text-center md:text-left space-y-6"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Hi, I'm{" "}
          <span className="text-indigo-600">Sanjoli Goyal</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/SanjoliGoyalResume.pdf"
            download
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div
        className="flex-1 flex justify-center mb-10 md:mb-0"
        data-aos="zoom-in"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
          alt="Developer"
          className="w-64 md:w-80 lg:w-96 drop-shadow-xl animate-bounce-slow"
        />
      </div>
    </section>
  );
}

export default Hero;
