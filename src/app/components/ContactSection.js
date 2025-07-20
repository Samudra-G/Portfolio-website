"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin, FaDownload } from "react-icons/fa";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="relative px-6 sm:px-10 py-20 text-[#F9F6EE] bg-transparent"
    >
      {/* Blurred Background Texture */}
      <div className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center opacity-20 blur-md scale-105 z-[-1]" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Form Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Drop Me a Message</h2>
          <form
            action="https://formsubmit.co/113c988f9bd6f43a98d804f197a2689b"
            method="POST"
            className="flex flex-col gap-4"
          >
            {[
              {
                type: "text",
                name: "name",
                placeholder: "👤 Your Name",
              },
              {
                type: "email",
                name: "email",
                placeholder: "✉️ Your Email",
              },
            ].map(({ type, name, placeholder }, idx) => (
              <input
                key={idx}
                type={type}
                name={name}
                placeholder={placeholder}
                required
                className="px-4 py-3 rounded-md bg-[#cc998d]/20 backdrop-blur-md text-[#F9F6EE] placeholder-[#F9F6EE]/70 
                           shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.2),inset_2px_2px_8px_rgba(0,0,0,0.3)]
                           focus:outline-none focus:ring-2 focus:ring-[#cc998d]/40 transition-all duration-200"
              />
            ))}

            <textarea
              name="message"
              rows={5}
              placeholder="💬 Your Message"
              required
              className="px-4 py-3 rounded-md bg-[#cc998d]/20 backdrop-blur-md text-[#F9F6EE] placeholder-[#F9F6EE]/70 
                         shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.2),inset_2px_2px_8px_rgba(0,0,0,0.3)]
                         focus:outline-none focus:ring-2 focus:ring-[#cc998d]/40 transition-all duration-200"
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-[#cc998d] text-[#F9F6EE] font-semibold rounded-md 
                         shadow-[inset_-4px_-4px_6px_rgba(255,255,255,0.25),inset_4px_4px_10px_rgba(0,0,0,0.35)] 
                         hover:brightness-110 hover:shadow-lg active:scale-[0.97] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
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
              {[
                { icon: <FaGithub />, href: "https://github.com/Samudra-G" },
                {
                  icon: <FaLinkedin />,
                  href: "https://linkedin.com/in/samudra-goswami",
                },
                {
                  icon: <FaInstagram />,
                  href: "https://www.instagram.com/incarcerated.anthropoid/",
                },
              ].map(({ icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#cc998d]/30 text-[#F9F6EE] 
                             shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.2),inset_2px_2px_6px_rgba(0,0,0,0.25)]
                             hover:scale-105 active:scale-95 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <a
              href="/Samudra_Goswami_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 
                         bg-[#cc998d] text-[#F9F6EE] border border-white/20 
                         rounded-md font-semibold shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.25),inset_3px_3px_10px_rgba(0,0,0,0.3)]
                         hover:brightness-110 hover:shadow-lg active:scale-95 transition-all"
            >
              <FaDownload />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
