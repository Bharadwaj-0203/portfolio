import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu, Layout, Brain } from 'lucide-react';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 85 },
        { name: "C", level: 75 },
        { name: "C++", level: 70 },
      ]
    },
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5/CSS3", level: 88 },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Spring Boot", level: 75 },
        { name: "RESTful APIs", level: 80 },
        { name: "Node.js", level: 82 },
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 60 },
      ]
    },
    {
      title: "Parallel Processing",
      icon: Cpu,
      skills: [
        { name: "CUDA", level: 75 },
        { name: "MPI", level: 72 },
        { name: "OpenMP", level: 70 },
      ]
    },
    {
      title: "Core Strengths",
      icon: Brain,
      skills: [
        { name: "Data Structures & Algorithms", level: 75 },
        { name: "Problem-Solving", level: 72 },
        { name: "Adaptability", level: 85 },
        { name: "Time Management", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center mb-6">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <ProgressBar
                      key={idx}
                      skill={skill.name}
                      percentage={skill.level}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "Docker", "AWS", "Spring Boot",
              "Express.js", "Redux", "Tailwind CSS", "SDLC", "Django"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;