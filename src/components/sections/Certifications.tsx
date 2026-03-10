"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTilt } from "@/hooks/useTilt";

const certifications = [
  {
    title: "Professional Web Frontend Development",
    issuer: "ALX Africa",
    year: "2024",
    description: "Advanced frontend development with modern frameworks and best practices",
    icon: Award,
    color: "from-primary to-secondary"
  },
  {
    title: "Professional Foundations",
    issuer: "ALX Africa",
    year: "2023",
    description: "Core professional skills and technical fundamentals",
    icon: Trophy,
    color: "from-secondary to-accent"
  },
  {
    title: "Bachelor of Science in IT",
    issuer: "Co-operative University of Kenya",
    year: "2022",
    description: "Specialization in Software Development & Network Systems",
    icon: GraduationCap,
    color: "from-accent to-primary"
  }
];

function CertCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const { ref, style, handlers, glareStyle } = useTilt<HTMLDivElement>({
    maxRotation: 5,
    scale: 1.02,
    glare: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      {...handlers}
      className={`relative mb-12 ${
        index % 2 === 0 ? "md:pr-1/2 md:pl-0 pl-16" : "md:pl-1/2 md:pr-0 pl-16 md:pl-0 md:pr-16"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
        <cert.icon className="w-4 h-4 text-white" />
      </div>

      <motion.div
        style={style}
        whileHover={{ scale: 1.02 }}
        className="relative glass rounded-3xl p-6"
      >
        {/* Glare effect */}
        <div 
          style={glareStyle} 
          className="absolute inset-0 pointer-events-none z-20 rounded-3xl"
        />

        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 rounded-3xl`} />

        <div className="relative">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.color}`}>
                <cert.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-primary font-semibold">{cert.issuer}</p>
              </div>
            </div>
            <span className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-semibold`}>
              {cert.year}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 relative">
            {cert.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Certifications & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Professional certifications and academic achievements
          </p>

          <div ref={ref} className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-8 md:left-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

            {certifications.map((cert, index) => (
              <CertCard key={cert.title} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

