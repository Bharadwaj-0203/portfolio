import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';

const p1 = "/images/tech.jpg";
const p2 = "/images/col.png";
const p3 = "/images/tra.png";
const p4 = "/images/cip.png";
const p5 = "/images/mob.png";

const projects = [
  {
    id: 1,
    title: "TechTrack - System Metrics Monitor",
    description: "Windows system monitoring application built with Java Spring Boot",
    image: p1,
    tags: ["Java", "Spring Boot", "SQL", "PowerShell", "REST APIs"],
    github: "https://github.com/pradeepreddymacha/TechTrack.git",
    details: [
      "Developed a robust backend architecture for real-time Windows system metrics monitoring",
      "Implemented complex SQL queries and JDBC integration for data management",
      "Created PowerShell scripts for comprehensive system information gathering"
    ]
  },
  {
    id: 2,
    title: "Student Database Management",
    description: "Comprehensive database system for educational institutions",
    image: p2,
    tags: ["Python", "MySQL", "Tkinter", "Database Design"],
    github: "https://github.com/PradeepReddy-Baireddy/MSCS_542L_256_23S_College-Data-Management-System_Super-Six.git",
    details: [
      "Designed and implemented normalized database schema",
      "Created intuitive GUI using Python's Tkinter library",
      "Implemented secure user authentication and role-based access"
    ]
  },
  {
    id: 3,
    title: "TravelBuddy - Full-Stack Travel Website",
    description: "A dynamic travel website with full JavaScript stack for interactive user experience",
    image: p3,
    tags: ["React", "Node.js", "Express", "REST APIs"],
    github: "https://github.com/Bharadwaj-0203/Frontend-Project.git",
    details: [
      "Engineered a dynamic interface using React and Node.js",
      "Integrated APIs for real-time data updates",
      "Enhanced user experience with destination search and package filtering"
    ]
  },
  {
    id: 4,
    title: "Cipher Chat: Secure Real-Time Messaging Application",
    description: "A secure chat app with end-to-end encryption, built with React and Node.js",
    image: p4,
    tags: ["React", "Node.js", "WebSocket", "Cryptography", "AES", "RSA"],
    github:"",
    details: [
      "Implemented AES encryption for messages and RSA for secure key exchange",
      "Set up real-time communication using WebSocket",
      "Developed user authentication with hashed passwords"
    ]
  },
  {
    id: 5,
    title: "Student Task Manager",
    description: "A task management mobile app for educational use, developed with Java and Android Studio",
    image: p5,
    tags: ["Java", "Android Studio", "SQLite", "Task Management"],
    github: "https://github.com/Bharadwaj-0203/student-task-manager",
    details: [
      "Created secure login and registration for teachers and students",
      "Developed a task management dashboard for teachers",
      "Designed an intuitive submission system for students"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex space-x-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="hover:text-blue-400 transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                           className="hover:text-blue-400 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag}
                          className="px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Learn More <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  {selectedProject.title}
                </h3>
                <div className="space-y-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedProject.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    {selectedProject.github && (
                      <a href={selectedProject.github}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                        <Github size={20} className="mr-2" />
                        View Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a href={selectedProject.live}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;