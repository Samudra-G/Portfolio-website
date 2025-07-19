"use client";
import { useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import HamburgerButton from "./components/HamburgerButton";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Skills");
  const [skillCategory, setSkillCategory] = useState("Backend Development");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const opacityBg1 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacityBg2 = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const navLinks = ["about", "projects", "contact"];

  return (
    <main className="relative min-h-screen bg-rosybrown text-alabaster overflow-x-hidden scroll-smooth">
      {/* Background */}
      <img
        src="/bg.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 brightness-110 contrast-125"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="w-full px-6 sm:px-10 py-6 flex items-center justify-between relative z-50">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-40 sm:w-52 h-auto object-contain brightness-110 drop-shadow-[0_0_8px_rgba(233,116,81,0.4)] hover:scale-105 transition-transform duration-300"
          />

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

        {/* Hero */}
        <section className="flex-grow flex items-center justify-center px-6 sm:px-10 py-16 sm:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left space-y-6 max-w-xl"
            >
              <p className="text-lg sm:text-xl font-light tracking-wide">
                Backend Systems. Machine Intelligence.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-[#E97451] block">Samudra</span>
                Goswami from India.
              </h1>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  className="bg-alabaster text-rosybrown px-6 py-2 rounded-full text-sm font-semibold border border-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="bg-transparent border border-white text-alabaster px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-alabaster hover:text-rosybrown hover:shadow-lg transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-48 sm:w-64 md:w-80"
            >
              <img
                src="/user.png"
                alt="Samudra"
                className="w-full h-auto rounded-full border-4 border-alabaster shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-6 sm:px-10 py-20 bg-rosybrown/90 backdrop-blur-md"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              I'm a final-year Electronics and Communication Engineering student
              with a passion for building robust backend systems and exploring
              machine learning. I enjoy designing scalable APIs, working with
              databases, and deploying intelligent microservices...
            </p>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-6 mb-10 text-lg font-semibold text-alabaster">
              {["Skills", "Experience", "Education"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative group focus:outline-none ${
                    activeTab === tab ? "text-[#E97451]" : ""
                  }`}
                >
                  {tab}
                  <span
                    className={`block h-[2px] transition-all duration-300 mt-1 mx-auto ${
                      activeTab === tab
                        ? "w-full bg-[#E97451]"
                        : "w-0 group-hover:w-full bg-[#E97451]"
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeTab === "Skills" && (
              <div className="flex flex-col items-center mt-8">
                <div className="flex gap-4 sm:gap-6 mb-8 flex-wrap justify-center">
                  {["Backend Development", "Machine Learning"].map(
                    (category) => (
                      <button
                        key={category}
                        onClick={() => setSkillCategory(category)}
                        className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                          skillCategory === category
                            ? "bg-[#cc998d] text-white"
                            : "bg-alabaster text-rosybrown hover:bg-[#cc998d] hover:text-white"
                        }`}
                      >
                        {category}
                      </button>
                    )
                  )}
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-4xl">
                  {skillCategory === "Backend Development" && (
                    <>
                      <i className="devicon-go-plain colored" title="Go"></i>
                      <i
                        className="devicon-fastapi-plain colored"
                        title="FastAPI"
                      ></i>
                      <i
                        className="devicon-docker-plain colored"
                        title="Docker"
                      ></i>
                      <i
                        className="devicon-postgresql-plain colored"
                        title="PostgreSQL"
                      ></i>
                      <i
                        className="devicon-redis-plain colored"
                        title="Redis"
                      ></i>
                      <i
                        className="devicon-amazonwebservices-original colored"
                        title="AWS"
                      ></i>
                      <i className="devicon-git-plain colored" title="Git"></i>
                    </>
                  )}
                  {skillCategory === "Machine Learning" && (
                    <>
                      <i
                        className="devicon-python-plain colored"
                        title="Python"
                      ></i>
                      <i
                        className="devicon-pytorch-original colored"
                        title="PyTorch"
                      ></i>
                      <i
                        className="devicon-tensorflow-original colored"
                        title="TensorFlow"
                      ></i>
                      <i
                        className="devicon-scikitlearn-plain"
                        title="Scikit-learn"
                      ></i>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeTab === "Experience" && (
              <div className="text-center mt-8 text-lg">
                <p className="font-semibold text-xl text-[#E97451] mb-1">
                  Generative AI Intern
                </p>
                <p className="text-sm text-alabaster/90">
                  Ardent Computech (June–July 2025)
                </p>
              </div>
            )}

            {activeTab === "Education" && (
              <div className="text-center mt-8 text-lg">
                <p className="font-semibold text-xl text-[#E97451] mb-1">
                  B.Tech in ECE
                </p>
                <p className="text-sm text-alabaster/90">
                  Final Year, 2022–2026, HIT Kolkata
                </p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Move this: Parallax Section */}
        <section
          ref={sectionRef}
          className="relative h-[45vh] sm:h-[50vh] overflow-hidden z-0"
        >
          {/* bg.jpg layer */}
          <motion.div
            style={{ opacity: opacityBg1 }}
            className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center scale-110 transition-opacity duration-500"
          />

          {/* bg2.jpg layer */}
          <motion.div
            style={{ opacity: opacityBg2 }}
            className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center scale-105 transition-opacity duration-500"
          />

          {/* Overlay & Text */}
          <div className="absolute inset-0 bg-rosybrown/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 flex items-center justify-center h-full"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-alabaster text-center drop-shadow-md">
              Let’s build beautiful systems together
            </h2>
          </motion.div>
        </section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="relative px-6 sm:px-10 py-20 text-alabaster backdrop-blur-sm overflow-hidden z-0"
        >
          {/* Background layer: bg2.jpg */}
          <div className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center opacity-30 blur-md scale-105 z-[-1]" />

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold text-left mb-16">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Movie Recommender",
                  description:
                    "Content filtering engine with BERT embeddings. Served with FastAPI with Redis cache.",
                  tags: ["FastAPI", "Redis", "React"],
                  iconClass: "fa-solid fa-film",
                  github:
                    "https://github.com/Samudra-G/fastapi-movie-recommender",
                },
                {
                  title: "Stock Predictor",
                  description:
                    "LSTM-based dockerized microservice for stock predictions. Concurrent handling with Go.",
                  tags: ["FastAPI", "Go", "Docker"],
                  iconClass: "fa-solid fa-chart-line",
                  github:
                    "https://github.com/Samudra-G/stockprediction-refactored",
                  live: "https://stocksamudra.onrender.com/",
                },
                {
                  title: "SimpleBank API",
                  description:
                    "gRPC secure banking API with PostgreSQL + PASETO based authentication. Cloud enabled with Docker.",
                  tags: ["Go", "gRPC", "PostgreSQL"],
                  iconClass: "fa-solid fa-building-columns",
                  github: "https://github.com/Samudra-G/simplebank",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl bg-[#cc998d]/25 backdrop-blur-xl border border-white/10 shadow-md px-8 py-10 transition-all duration-500 overflow-hidden hover:bg-[#cc998d] hover:shadow-lg"
                >
                  <div className="flex items-center gap-4 text-4xl font-bold mb-6 text-alabaster">
                    <i className={`${project.iconClass} text-3xl`} />
                    <span className="text-xl sm:text-2xl">{project.title}</span>
                  </div>

                  <p className="text-base text-alabaster/90 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-sm font-semibold mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-alabaster text-rosybrown px-3 py-1 rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    {/* GitHub Link */}
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

                    {/* Live Demo Link (only for Stock Predictor) */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold bg-alabaster text-rosybrown px-3 py-1 rounded-full shadow hover:bg-white transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 sm:p-4 rounded-full bg-[#cc998d]/80 backdrop-blur-md shadow-lg text-alabaster hover:bg-[#e7b4a4] transition-all duration-300 group"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="relative px-6 sm:px-10 py-20 text-alabaster backdrop-blur-sm bg-transparent"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center opacity-20 blur-md scale-105 z-[-1]" />

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {/* Left: Form */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Drop Me a Message</h2>
              <form
                action="https://formsubmit.co/113c988f9bd6f43a98d804f197a2689b"
                method="POST"
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="👤 Your Name"
                  required
                  className="px-4 py-3 rounded-md bg-white/20 text-alabaster placeholder-alabaster/70 focus:outline-none focus:ring-2 focus:ring-rosybrown/50 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="✉️ Your Email"
                  required
                  className="px-4 py-3 rounded-md bg-white/20 text-alabaster placeholder-alabaster/70 focus:outline-none focus:ring-2 focus:ring-rosybrown/50 transition-all"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="💬 Your Message"
                  required
                  className="px-4 py-3 rounded-md bg-white/20 text-alabaster placeholder-alabaster/70 focus:outline-none focus:ring-2 focus:ring-rosybrown/50 transition-all"
                />
                <button
                  type="submit"
                  className="mt-2 px-6 py-3 bg-gradient-to-r from-[#e7b4a4] to-[#cc998d] text-rosybrown font-semibold rounded-md hover:from-white hover:to-white hover:text-[#cc998d] shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-between gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
                <div className="flex items-center gap-3 mb-3">
                  <FiMail className="text-xl" />
                  <a
                    href="mailto:samudramukhar@gmail.com"
                    className="hover:underline"
                  >
                    samudramukhar@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <FiPhone className="text-xl" />
                  <a href="tel:+918336977499" className="hover:underline">
                    +91 83369 77499
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Social Links</h3>
                <div className="flex items-center gap-6 text-2xl">
                  <a
                    href="https://github.com/Samudra-G"
                    target="_blank"
                    className="hover:text-white transition-all"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/samudra-goswami"
                    target="_blank"
                    className="hover:text-white transition-all"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/incarcerated.anthropoid/"
                    target="_blank"
                    className="hover:text-white transition-all"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="/Samudra_Goswami_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-white/20 to-white/10 border border-white/30 rounded-md hover:from-alabaster hover:to-white hover:text-rosybrown transition-all font-semibold shadow-md"
                >
                  <FaDownload />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-rosybrown text-center py-6 mt-auto border-t border-alabaster/20">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-6 text-2xl text-alabaster">
              <a
                href="https://github.com/Samudra-G"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E97451] transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/samudra-goswami"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E97451] transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:samudramukhar@gmail.com"
                className="hover:text-[#E97451] transition-colors duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="text-sm text-alabaster/80">
              &copy; {new Date().getFullYear()} Samudra Goswami. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
