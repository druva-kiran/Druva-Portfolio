import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 200;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-4 lg:px-20 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#about"
        className="flex items-center gap-3 group cursor-pointer"
      >
        {/* Icon */}
        <div className="relative flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-xl border border-white/10
          group-hover:border-amber-400/40 transition-all duration-300
          group-hover:shadow-[0_0_10px_rgba(251,191,36,0.25)]"
        >
          <i className="bx bx-bug text-2xl bg-gradient-to-br from-amber-400 to-orange-400 bg-clip-text text-transparent
            group-hover:rotate-12 transition-transform duration-300"></i>
        </div>

        {/* Text */}
        <span className="text-2xl font-bold tracking-wide text-white">
          Druva
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            .
          </span>
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            className="text-base tracking-wider transition-all duration-300"
            style={
              activeSection === link.id
                ? {
                    background: "linear-gradient(90deg, #fbbf24, #fb923c)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontWeight: 600,
                    textShadow: "0 0 6px rgba(251,146,60,0.25)",
                  }
                : { color: "white", opacity: 0.7 }
            }
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      <div className="relative md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl p-2 text-white"
        >
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu-alt-right"}`}></i>
        </button>

        <div
          className={`absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-xl p-4 border border-gray-800 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <nav className="flex flex-col gap-4 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base tracking-wider ${
                  activeSection === link.id
                    ? "bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"
                    : "text-gray-400"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
