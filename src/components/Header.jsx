import React from "react";
import { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-2xl md:text-3xl lg:text-4xl font-light m-0 z-50 relative"
      >
        Druva
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <a
          data-aos="fade-down"
          data-aos-duration="1000" // Speed is constant
          data-aos-delay="0"       // Starts immediately
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Home
        </a>

        <a
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="100" // Waits 0.1s
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          About
        </a>

        <a
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200" // Waits 0.2s
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Skills
        </a>

        <a
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="300" // Waits 0.3s
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Projects
        </a>

        <a
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="400" // Waits 0.4s
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Education
        </a>

        <a
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500" // Waits 0.5s
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Contact
        </a>
      </nav>

      {/* Mobile menu button */}
      <div className="relative md:hidden z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl p-2 z-50 relative"
        >
          <i className="bx bx-menu-alt-right"></i>
        </button>
        {/* Mobile Menu */}
        <div
          className={`absolute top-full right-0 mt-2 w-48 bg-black/40 backdrop-blur-md rounded-lg shadow-xl flex-col gap-1 p-2 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <nav className="flex flex-col gap-3 items-center">
            {/* Added backdrop-blur-md above for better readability on mobile */}
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">Home</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">About</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">Skills</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">Projects</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">Education</a>
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;