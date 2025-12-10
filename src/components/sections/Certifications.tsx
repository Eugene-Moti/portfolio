"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    title: "Professional Web Frontend Development",
    issuer: "ALX Africa",
    year: "2024",
    description: "Advanced frontend development with modern frameworks and best practices",
    icon: Award
  },
  {
    title: "Professional Foundations",
    issuer: "ALX Africa",
    year: "2023",
    description: "Core professional skills and technical fundamentals",
    icon: Award
  },
  {
    title: "Bachelor of Science in IT",
    issuer: "Co-operative University of Kenya",
    year: "2022",
    description: "Specialization in Software Development & Network Systems",
    icon: GraduationCap
  }
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Certifications & <span className="gradient-text">Education</span>
          </h2>

          <div ref={ref} className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2" />

            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:pl-0 pl-16" : "md:pl-1/2 md:pr-0 pl-16 md:pl-0 md:pr-16"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                  <cert.icon className="w-4 h-4 text-white" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-3xl p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                      <p className="text-primary font-semibold">{cert.issuer}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {cert.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}