"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("Skills");
  const [skillCategory, setSkillCategory] = useState("Backend Development");

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-6 sm:px-10 py-20 text-alabaster"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
          About Me
        </h2>
        <div className="w-24 h-1 mx-auto mb-10 bg-[#E97451]/70 rounded-full" />

        {/* Description */}
        <p className="text-lg text-center max-w-3xl mx-auto mb-14 leading-relaxed font-medium text-alabaster/90 drop-shadow">
          I&#39;m a final-year Electronics and Communication Engineering student
          with a passion for building robust backend systems and exploring
          machine learning. I enjoy designing scalable APIs, working with
          databases, and deploying intelligent microservices...
        </p>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-6 mb-12 text-lg font-semibold">
          {["Skills", "Experience", "Education"].map((tab) => (
            <motion.button
              key={tab}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-xl backdrop-blur-md transition-all duration-300 ease-in-out focus:outline-none
                ${
                  activeTab === tab
                    ? "bg-[#cc998d]/80 text-white shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.05)]"
                    : "bg-white/5 text-[#8b5e3c] shadow-[3px_3px_8px_rgba(0,0,0,0.07),-3px_-3px_8px_rgba(255,255,255,0.4)] hover:text-[#E97451] hover:scale-[1.02]"
                }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "Skills" && (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            {/* Sub Tabs */}
            <div className="flex gap-4 sm:gap-6 mb-10 flex-wrap justify-center">
              {["Backend Development", "Machine Learning"].map((category) => (
                <motion.button
                  key={category}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setSkillCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 backdrop-blur-md
                    ${
                      skillCategory === category
                        ? "bg-[#cc998d]/80 text-white shadow-[inset_3px_3px_6px_rgba(0,0,0,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.05)]"
                        : "bg-white/5 text-[#8b5e3c] shadow-[3px_3px_8px_rgba(0,0,0,0.07),-3px_-3px_8px_rgba(255,255,255,0.4)] hover:text-[#E97451] hover:scale-[1.02]"
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Icons */}
            <div className="flex flex-wrap justify-center gap-8 text-4xl drop-shadow-sm">
              {skillCategory === "Backend Development" && (
                <>
                  <i className="devicon-go-plain colored" title="Go"></i>
                  <i className="devicon-fastapi-plain colored" title="FastAPI"></i>
                  <i className="devicon-docker-plain colored" title="Docker"></i>
                  <i className="devicon-postgresql-plain colored" title="PostgreSQL"></i>
                  <i className="devicon-redis-plain colored" title="Redis"></i>
                  <i className="devicon-amazonwebservices-original colored" title="AWS"></i>
                  <i className="devicon-git-plain colored" title="Git"></i>
                </>
              )}
              {skillCategory === "Machine Learning" && (
                <>
                  <i className="devicon-python-plain colored" title="Python"></i>
                  <i className="devicon-pytorch-original colored" title="PyTorch"></i>
                  <i className="devicon-tensorflow-original colored" title="TensorFlow"></i>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Experience */}
        {activeTab === "Experience" && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mt-8 text-lg p-6 rounded-xl backdrop-blur-md bg-white/5 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.12),inset_-6px_-6px_12px_rgba(255,255,255,0.2)] max-w-xl mx-auto text-[#f0e5de]"
          >
            <p className="font-bold text-xl text-[#E97451] mb-2">
              Generative AI Intern
            </p>
            <p className="text-sm">Ardent Computech (June–July 2025)</p>
          </motion.div>
        )}

        {/* Education */}
        {activeTab === "Education" && (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mt-8 text-lg p-6 rounded-xl backdrop-blur-md bg-white/5 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.12),inset_-6px_-6px_12px_rgba(255,255,255,0.2)] max-w-xl mx-auto text-[#f0e5de]"
          >
            <p className="font-bold text-xl text-[#E97451] mb-2">
              B.Tech in ECE
            </p>
            <p className="text-sm">Final Year, 2022–2026, HIT Kolkata</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
