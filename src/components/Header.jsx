import React from "react";
import { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-light m-0 z-50 relative">
        Druva
      </h1>

      {/*Desktop Naigation */}
      <nav className="hidden md:flex items-center gap-6">
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Home
        </a>

        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          About
        </a>

        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Skills
        </a>

        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Projects
        </a>

        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Education
        </a>

        <a
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
        {/*Mobile Menu */}
        <div
          className={`absolute top-full right-0 mt-2 w-48 bg-black/40  rounded-lg shadow-xl flex-col gap-1 p-2 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <nav className="flex flex-col gap-3 items-center">
            <a
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href="#"
            >
              Home
            </a>

            <a
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href="#"
            >
              About
            </a>

            <a
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href="#"
            >
              Skills
            </a>

            <a
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href="#"
            >
              Projects
            </a>

            <a
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href="#"
            >
              Education
            </a>

            <a
              className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
              href="#"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
