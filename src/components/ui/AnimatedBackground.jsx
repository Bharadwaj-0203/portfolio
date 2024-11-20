// src/components/ui/AnimatedBackground.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-gray-50 
                    dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900" />
      
      {/* Animated Patterns */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-grid-pattern transform rotate-45" />
      </div>

      {/* Floating Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-[0.15]"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
          style={{
            width: `${Math.random() * 300 + 200}px`,
            height: `${Math.random() * 300 + 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, 
              ${i % 2 === 0 ? '#60A5FA' : '#A78BFA'} 0%, 
              ${i % 2 === 0 ? '#3B82F6' : '#8B5CF6'} 100%)`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;