// src/components/sections/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import AnimatedBackground from "../ui/AnimatedBackground";
import AnimatedText from "../ui/AnimatedText";
const propic = "/portfolio/images/propic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 
                         text-blue-600 dark:text-blue-400 text-sm font-medium"
              >
                Welcome to my portfolio
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <AnimatedText
                  className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 
                                    dark:from-white dark:via-blue-300 dark:to-purple-200 
                                    text-transparent bg-clip-text"
                >
                  Bharadwaja Thota
                </AnimatedText>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Software Engineer & MS in Computer Science
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
            >
              Skilled in building secure applications, managing databases, and
              solving complex problems. Proficient in Java, Spring Boot, React,
              and Node.js, with expertise in data structures and algorithms.
              Passionate about creating efficient, scalable solutions with
              expertise in full-stack development.
            </motion.p>
            // In Hero.jsx, update the "Let's Connect" button:
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg 
               flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>

              <motion.button // Changed from <motion.a>
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg
               hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
              >
                Let's Connect
              </motion.button>
            </motion.div>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Bharadwaj-0203",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/bharadwaja-thota-0a6b012bb",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:bharadwajathotams@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg
                           text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400
                           backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-64 h-64 mx-auto"
            >
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                           blur-2xl opacity-30 animate-pulse"
              />
              <motion.img
                src={propic}
                alt="Bharadwaja Thota"
                className="relative rounded-full w-full h-full object-cover border-4 
                         border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
