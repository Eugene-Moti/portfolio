"use client";

import { motion } from "framer-motion";
import { Code, Search, Cpu } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div ref={ref} className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                className="glass rounded-3xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, width: 0 }}
                      animate={isInView ? { opacity: 1, width: "100%" } : { opacity: 0 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}