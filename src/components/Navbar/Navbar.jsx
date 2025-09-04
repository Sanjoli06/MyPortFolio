import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 bg-white shadow-md transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
          Sanjoli Goyal
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link
              to="hero"
              smooth
              duration={600}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={600}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth
              duration={600}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth
              duration={600}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth
              duration={600}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth
              duration={600}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div
          className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-gray-700"></div>
          <div className="w-6 h-0.5 bg-gray-700"></div>
          <div className="w-6 h-0.5 bg-gray-700"></div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-gray-700 font-medium">
          <li>
            <Link
              to="hero"
              smooth
              duration={600}
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={600}
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth
              duration={600}
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth
              duration={600}
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth
              duration={600}
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth
              duration={600}
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;