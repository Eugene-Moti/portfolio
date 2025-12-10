"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const roles = [
    "Frontend Developer",
    "Digital Marketer",
    "SEO Analyst",
    "IT Assistant"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      {/* Floating shapes */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I&apos;m{" "}
              <span className="gradient-text neon-glow">Erick Moti</span>
            </h1>
            
            <div className="h-16 mb-8">
              <motion.div
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200"
              >
                {roles[textIndex]}
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Crafting digital experiences that combine beautiful design with 
              cutting-edge technology and strategic marketing insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/resume.pdf"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-8 py-3 glass rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform text-gray-800 dark:text-gray-200"
              >
                <Briefcase size={20} />
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 glass rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform text-gray-800 dark:text-gray-200"
              >
                <Mail size={20} />
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}