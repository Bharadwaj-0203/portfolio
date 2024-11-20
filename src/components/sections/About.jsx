import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-gray-600 dark:text-gray-300">
                I am a Computer Science graduate from Marist College with a passion for creating efficient and scalable software solutions. My journey in tech has equipped me with strong problem-solving skills and a deep understanding of software development principles.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With expertise in full-stack development and a strong foundation in data structures and algorithms, I specialize in building robust applications that deliver exceptional user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Technical Focus
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Full Stack Development</li>
                <li>Data Structures & Algorithms</li>
                <li>Parallel Processing (CUDA, MPI, OpenMP)</li>
                <li>Database Design & Management</li>
                <li>RESTful API Development</li>
                <li>Mobile App Development</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;