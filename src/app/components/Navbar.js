// components/Navbar.js
"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerButton from "./HamburgerButton";

const navLinks = ["about", "projects", "contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full px-6 sm:px-10 py-6 flex items-center justify-between relative z-50 h-20 sm:h-28">
      <div className="flex items-center ml-2 sm:ml-8 h-[48px] sm:h-[55px]">
        <img
          src="/logo.png"
          alt="Samudra Goswami Logo"
          className="h-full w-auto max-w-[200px] sm:max-w-[300px] object-contain brightness-110 drop-shadow-[0_0_12px_rgba(233,116,81,0.45)] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex gap-6 md:gap-10 font-medium text-lg">
        {navLinks.map((section) => (
          <li key={section} className="group relative list-none">
            <a
              href={`#${section}`}
              className="transition-colors duration-200 group-hover:text-[#E97451]"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#E97451] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </nav>

      {/* Hamburger Button */}
      <HamburgerButton isOpen={isMenuOpen} toggle={toggleMenu} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[100%] left-0 w-full bg-rosybrown/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 font-medium text-lg text-alabaster sm:hidden"
          >
            {navLinks.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-[#E97451] transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
