"use client";

import { motion } from "framer-motion";
import { Code, Search, Cpu, Zap } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTilt } from "@/hooks/useTilt";

const skillCategories = [
  {
    title: "Web Development",
    icon: Code,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "PHP", level: 75 },
      { name: "MySQL", level: 70 }
    ],
    color: "from-primary to-secondary"
  },
  {
    title: "SEO & Digital Marketing",
    icon: Search,
    skills: [
      { name: "Keyword Research", level: 90 },
      { name: "Google Analytics", level: 85 },
      { name: "On-page SEO", level: 95 },
      { name: "Off-page SEO", level: 80 },
      { name: "Content Strategy", level: 85 },
      { name: "Technical SEO", level: 75 }
    ],
    color: "from-secondary to-accent"
  },
  {
    title: "IT Support",
    icon: Cpu,
    skills: [
      { name: "Troubleshooting", level: 95 },
      { name: "System Maintenance", level: 90 },
      { name: "Software Setup", level: 85 },
      { name: "Network Configuration", level: 75 },
      { name: "Hardware Repair", level: 70 },
      { name: "Security Management", level: 80 }
    ],
    color: "from-accent to-primary"
  }
];

function SkillCard({ category, categoryIndex }: { category: typeof skillCategories[0]; categoryIndex: number }) {
  const { ref, style, handlers, glareStyle } = useTilt<HTMLDivElement>({
    maxRotation: 8,
    scale: 1.03,
    glare: true,
  });

  const ref2 = useRef(null);
  const isInView = useInView(ref2, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
      {...handlers}
      className="relative"
    >
      {/* Glare effect */}
      <div 
        style={glareStyle} 
        className="absolute inset-0 pointer-events-none z-20 rounded-3xl"
      />

      <motion.div
        style={style}
        className="glass rounded-3xl p-6 hover:scale-105 transition-transform duration-300"
      >
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
          <category.icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{category.title}</h3>
        
        <div ref={ref2} className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 1 }}
            >
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                  className="text-primary font-bold"
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Technical Expertise</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive set of skills built through years of experience and continuous learning
            </p>
          </div>

          <div ref={ref} className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} categoryIndex={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

