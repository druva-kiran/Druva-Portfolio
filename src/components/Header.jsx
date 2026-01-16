import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showNav, setShowNav] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-4 lg:px-20 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 md:backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo Container */}
      <a
        href="#about"
        className={`
          flex items-center gap-3 group cursor-pointer
          transition-all duration-600 ease-out
          ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}
        `}
        style={{ transitionDelay: "0ms" }}
      >
        {/* Icon - Starts at 0ms */}
        <div
          className={`
            relative flex items-center justify-center w-10 h-10
            bg-zinc-900 rounded-xl border border-white/10
            transition-all duration-500 ease-out
            ${
              showNav
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }
          `}
        >
          <i
            className="bx bx-bug text-2xl bg-gradient-to-br from-amber-400 to-orange-400 bg-clip-text text-transparent
            group-hover:rotate-12 transition-transform duration-300"
          ></i>
        </div>

        {/* Text - Starts at 100ms */}
        <span
          className={`
            text-2xl font-bold tracking-wide text-white
            transition-all duration-500 ease-out
            ${
              showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }
          `}
          style={{ transitionDelay: "100ms" }}
        >
          Druva
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            .
          </span>
        </span>
      </a>

      {/* Desktop Navigation - Starts at 200ms */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            className={`
              text-base tracking-wider
              transition-all duration-500 ease-out
              ${
                showNav
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-20"
              }
            `}
            style={{
              // Math: (Index 0 + 2) * 100 = 200ms start time
              transitionDelay: `${(index + 2) * 100}ms`,
              ...(activeSection === link.id
                ? {
                    background: "linear-gradient(90deg, #fbbf24, #fb923c)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontWeight: 600,
                    textShadow: "0 0 6px rgba(251,146,60,0.25)",
                  }
                : { color: "white", opacity: 0.7 }),
            }}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="relative md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl p-2 text-white md:hidden"
          // Keep AOS here if you still want it, though standard CSS transition is cleaner
          data-aos="fade-left"
        >
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu-alt-right"}`}></i>
        </button>

        {/* Mobile Dropdown */}
        <div
          className={`absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-xl p-4 border border-gray-800 transition-all duration-300 origin-top-right ${
            isMenuOpen
              ? "opacity-100 scale-100 translate-y-0 visible"
              : "opacity-0 scale-95 -translate-y-2 invisible"
          }`}
        >
          <nav className="flex flex-col gap-4 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base tracking-wider transition-colors ${
                  activeSection === link.id
                    ? "bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-bold"
                    : "text-gray-400 hover:text-white"
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
