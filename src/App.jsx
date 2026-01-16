import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Prep for Routing
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,
      // PERFORMANCE BOOST: Disable AOS on mobile if lag persists
      disable: window.innerWidth < 768, 
      anchorPlacement: 'top-bottom', 
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen text-white relative overflow-hidden bg-black">
        
        {/* 1. Background Image */}
        <img
          className="absolute top-0 right-0 opacity-60 z-0 pointer-events-none"
          src="/gradient.png"
          alt="Gradient Background"
        />

        {/* 2. THE PERFORMANCE LIGHT
            Using 'sticky' so it doesn't follow the scroll into the cards section.
            This is the #1 way to boost FPS on old phones.
        */}
        <div
          className="
            absolute top-0 right-0 
            h-[35rem] w-[35rem] md:h-[50rem] md:w-[50rem]
            bg-[conic-gradient(from_225deg_at_100%_0%,transparent_0deg,#e99b63_20deg,transparent_40deg)] 
            opacity-60 
            /* Lower blur on mobile = much faster performance */
            blur-[20px] md:blur-[40px] 
            z-0 
            pointer-events-none
            [mask-image:radial-gradient(circle_at_100%_0%,black_10%,transparent_70%)]
          "
        ></div>

        <div className="relative z-10">
          <Header />
          <Hero />
          <Skills /> 
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
