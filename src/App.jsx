import React, { useEffect } from "react";
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
      // Helps AOS trigger more reliably on mobile scroll
      anchorPlacement: 'top-bottom', 
    });
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      
      {/* 1. The Gradient Image - Generally okay for performance */}
      <img
        className="absolute top-0 right-0 opacity-60 z-0 pointer-events-none"
        src="/gradient.png"
        alt="Gradient Background"
      />

      {/* 2. The Torch Light - OPTIMIZED: hidden on mobile (hidden) and shown on desktop (md:block) */}
      <div
        className="
          hidden md:block
          absolute 
          top-0 
          right-0 
          h-[40rem]          
          w-[40rem]          
          bg-[conic-gradient(from_225deg_at_100%_0%,transparent_0deg,#e99b63_20deg,transparent_40deg)] 
          opacity-60 
          blur-[40px] 
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
  );
}

export default App;