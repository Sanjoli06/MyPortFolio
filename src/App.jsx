import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Certifications/>
      <Contact/>
    </>
  );
}

export default App;
