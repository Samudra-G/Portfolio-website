"use client";
import React from "react";

export default function HamburgerButton({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle Menu"
      className="flex sm:hidden flex-col justify-center items-center gap-[5px] z-50 relative 
                 px-3 py-3 rounded-xl bg-rosybrown/30 backdrop-blur-md
                 transition-all duration-150 
                 active:scale-[0.88] active:shadow-inner shadow-md
                 hover:scale-[1.05]"
    >
      <span
        className={`w-6 h-0.5 bg-[#f8f8f8] transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-[7px]" : ""
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-[#f8f8f8] transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-[#f8f8f8] transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-[7px]" : ""
        }`}
      />
    </button>
  );
}
