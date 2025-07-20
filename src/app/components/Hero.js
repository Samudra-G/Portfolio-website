"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex-grow flex items-center justify-center px-6 sm:px-10 py-16 sm:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6 max-w-xl"
        >
          <p className="text-base sm:text-lg font-medium tracking-widest text-alabaster/80">
            Backend Systems · Machine Intelligence
          </p>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-alabaster drop-shadow-md">
            Hi, I&#39;m{" "}
            <span className="text-[#e65d33] inline-block px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm shadow-[inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.05)]">
              Samudra
            </span>{" "}
            Goswami from India.
          </h1>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-alabaster text-rosybrown px-6 py-2 rounded-full text-sm font-semibold shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.6)] hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-alabaster text-rosybrown px-6 py-2 rounded-full text-sm font-semibold shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.6)] hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* User Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-48 sm:w-64 md:w-80 p-4 rounded-full bg-white/10 backdrop-blur-lg 
             shadow-[12px_12px_24px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.2),8px_8px_12px_rgba(230,93,51,0.4)] 
             hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/user.png"
            alt="Samudra"
            className="w-full h-auto rounded-full border-4 border-alabaster shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
