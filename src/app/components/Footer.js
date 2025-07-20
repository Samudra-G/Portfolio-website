"use client";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-alabaster py-8 overflow-hidden z-10">
      {/* Background texture: bg5.png */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/30 to-transparent z-0 pointer-events-none" />

      <div className="absolute inset-0 z-[-1]">
        <img
          src="/bg5.png"
          alt="background texture"
          className="w-full h-full object-cover opacity-80 brightness-[1.05] contrast-[1.1] z-[-1] pointer-events-none"
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6">
        <p className="text-sm font-bold text-white">
          &copy; {new Date().getFullYear()} Samudra Goswami. All rights
          reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Samudra-G"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#1e1e1e] text-white shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.2),inset_2px_2px_6px_rgba(0,0,0,0.3)] hover:scale-105 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/samudra-goswami"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#1e1e1e] text-white shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.2),inset_2px_2px_6px_rgba(0,0,0,0.3)] hover:scale-105 transition-all"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
