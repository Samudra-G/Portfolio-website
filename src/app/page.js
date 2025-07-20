"use client";
import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import CTAWhale from "./components/CTAWhale";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0e0e0e] text-alabaster overflow-x-hidden">
      {/* Global Background Texture (bg4) */}
      <img
        src="/bg4.jpg"
        alt="texture"
        className="fixed inset-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none"
      />

      {/* Section-Specific Background (bg5) for Navbar + Hero only */}
      <div className="relative z-10 overflow-hidden">
        <img
          src="/bg5.png"
          alt="hero bg overlay"
          className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-[1.05] contrast-[1.1] z-[-1] pointer-events-none"
          style={{ height: "100%", maxHeight: "900px" }}
        />
        <Navbar />
        <Hero />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0e0e0e] z-0 pointer-events-none" />
      </div>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AboutSection />
      </motion.section>

      {/* CTA + Whale Showcase */}
      <CTAWhale />

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <ProjectsSection />
      </motion.section>

      <ScrollToTop />

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <ContactSection />
      </motion.section>

      <Footer />
    </main>
  );
}
