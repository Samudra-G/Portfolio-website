"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Movie Recommender",
    description:
      "Content filtering engine with BERT embeddings. Served with FastAPI and Redis cache.",
    tags: ["FastAPI", "Redis", "React"],
    iconClass: "fa-solid fa-film",
    github: "https://github.com/Samudra-G/fastapi-movie-recommender",
  },
  {
    title: "Stock Predictor",
    description:
      "LSTM-based dockerized microservice for stock predictions. Concurrent handling with Go.",
    tags: ["FastAPI", "Go", "Docker"],
    iconClass: "fa-solid fa-chart-line",
    github: "https://github.com/Samudra-G/stockprediction-refactored",
    live: "https://stocksamudra.onrender.com/",
  },
  {
    title: "SimpleBank API",
    description:
      "gRPC secure banking API with PostgreSQL + PASETO authentication. Cloud ready with Docker.",
    tags: ["Go", "gRPC", "PostgreSQL"],
    iconClass: "fa-solid fa-building-columns",
    github: "https://github.com/Samudra-G/simplebank",
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="relative px-6 sm:px-10 py-20 text-alabaster z-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.02,
                x: [0, -4, 4, -3, 3, 0],
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
                x: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true }}
              className="group relative rounded-3xl bg-rosybrown/30 border border-white/10 px-8 py-10
             shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.15),inset_6px_6px_16px_rgba(0,0,0,0.35)]
             hover:shadow-[0_0_25px_4px_rgba(204,153,141,0.45)]
             active:shadow-[0_0_25px_4px_rgba(204,153,141,0.4)]
             transition-all duration-700 overflow-hidden backdrop-blur-sm touch-manipulation"
            >
              {/* Rosy Brown Hover Sweep Effect */}
              <div className="absolute inset-0 z-0 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-rosybrown/20 before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-0 before:transition-transform before:duration-700 before:rotate-[30deg]" />

              {/* Content Layer */}
              <div className="relative z-10">
                {/* Title & Icon */}
                <div className="flex items-center gap-3 mb-6 text-alabaster">
                  <i className={`${project.iconClass} text-2xl sm:text-3xl`} />
                  <span className="text-xl sm:text-2xl font-bold">
                    {project.title}
                  </span>
                </div>

                {/* Description */}
                <p className="text-base text-alabaster/90 mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 text-sm font-semibold mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-alabaster text-rosybrown px-3 py-1 rounded-full 
                                 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.6),inset_2px_2px_6px_rgba(0,0,0,0.15)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-alabaster hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <i className="fab fa-github text-2xl" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold bg-alabaster text-rosybrown px-3 py-1 rounded-full shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.6),inset_2px_2px_6px_rgba(0,0,0,0.2)] hover:scale-[1.03] transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
