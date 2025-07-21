"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CTAWhale() {
  const [showStack, setShowStack] = useState(false);

  useEffect(() => {
    const toggle = () => setShowStack((prev) => !prev);
    window.addEventListener("triggerTechStack", toggle);
    return () => window.removeEventListener("triggerTechStack", toggle);
  }, []);

  const techStack = [
    { name: "Go", icon: "/icons/go.svg" },
    { name: "FastAPI", icon: "/icons/fastapi.svg" },
    { name: "PostgreSQL", icon: "/icons/postgres.svg" },
    { name: "Redis", icon: "/icons/redis.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "PyTorch", icon: "/icons/pytorch.svg" },
  ];

  const stats = [
    { label: "Projects", value: "12+", icon: "fa-code" },
    { label: "Technologies", value: "15+", icon: "fa-layer-group" },
    { label: "Internships", value: "2", icon: "fa-briefcase" },
    { label: "Open Source PRs", value: "10+", icon: "fa-code-pull-request" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-24 px-6 sm:px-12 bg-rosybrown text-alabaster z-0"
    >
      <div className="absolute inset-0 bg-[url('/bg4.jpg')] bg-cover bg-center opacity-[0.08] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-center mb-4 tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
          Let&#39;s build beautiful systems together
        </h2>
        <p className="text-lg text-alabaster/90 mb-10 max-w-xl mx-auto">
          I combine speed with reliability to deliver scalable backend systems
          and intelligent applications.
        </p>

        {/* Stats with Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-alabaster/90 mb-12 justify-center">
          {stats.map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-xl bg-[#cc998d] 
              shadow-[inset_-6px_-6px_10px_rgba(255,255,255,0.4),inset_6px_6px_15px_rgba(0,0,0,0.45)] 
              active:scale-[0.98] transition duration-150 hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.1)] flex flex-col items-center"
            >
              <i className={`fa-solid ${item.icon} text-xl mb-2`}></i>
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Whale Button */}
        <div className="flex justify-center mb-6">
          <motion.button
            onClick={() => setShowStack((s) => !s)}
            whileHover={{
              scale: 1.1,
              rotate: [0, -3, 3, 0],
              transition: { duration: 0.6 },
            }}
            whileTap={{ scale: 0.95 }}
            className="w-24 h-24 p-2 rounded-full bg-[#cc998d] 
            shadow-[inset_-6px_-6px_10px_rgba(255,255,255,0.4),inset_6px_6px_15px_rgba(0,0,0,0.45)] 
            hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.2)]"
            aria-label="Tech Stack Whale Button"
          >
            <img
              src="/whale.svg"
              alt="Whale"
              className="w-full h-full object-contain"
            />
          </motion.button>
        </div>

        {/* Spilling Tech Stack */}
        <AnimatePresence>
          {showStack && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="relative w-full flex flex-wrap justify-center items-center gap-6 min-h-[120px] mb-10"
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.5 },
                    visible: { opacity: 1, y: [30, -20, 0], scale: 1 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center w-20 h-20 p-2 rounded-xl bg-[#cc998d] 
                  shadow-[inset_-6px_-6px_10px_rgba(255,255,255,0.4),inset_6px_6px_15px_rgba(0,0,0,0.45)] 
                  active:scale-95 transition-all hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.2)]"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 mb-1"
                  />
                  <p className="text-xs text-center leading-tight">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-block mt-4 px-6 py-3 rounded-full font-semibold text-alabaster bg-[#cc998d] 
          shadow-[inset_-6px_-6px_10px_rgba(255,255,255,0.4),inset_6px_6px_15px_rgba(0,0,0,0.4)] 
          hover:scale-[1.02] hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2)] transition duration-300"
        >
          Get In Touch
        </a>
      </div>
    </motion.section>
  );
}
