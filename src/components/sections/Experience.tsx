"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTilt } from "@/hooks/useTilt";

const experiences = [
  {
    company: "Blossoms Ivy Residence",
    period: "2025–Present",
    role: "Web Developer & SEO Specialist",
    achievements: [
      "Designed & developed company website from scratch",
      "Boosted lead generation by 90% through targeted strategies",
      "Improved SEO traffic by 90% using optimization techniques",
      "Strengthened branding & conversions with marketing team"
    ],
    color: "from-primary to-secondary"
  },
  {
    company: "Mighty Ape Technologies",
    period: "2024–2025",
    role: "SEO Executive",
    achievements: [
      "Conducted comprehensive SEO audits and keyword research",
      "Improved organic traffic and rankings by 80%",
      "Managed 5 clients with 50+ keywords each",
      "Boosted search visibility up to 90%"
    ],
    color: "from-secondary to-accent"
  },
  {
    company: "Rondamo Technologies",
    period: "2023–2024",
    role: "IT Support + Digital Marketing",
    achievements: [
      "Solved 100+ PC issues monthly with 95% satisfaction",
      "Improved system uptime by 70% through proactive maintenance",
      "Managed ad campaigns boosting engagement by 60%",
      "Improved UX satisfaction by 90% through optimization"
    ],
    color: "from-accent to-primary"
  }
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const { ref, style, handlers, glareStyle } = useTilt<HTMLDivElement>({
    maxRotation: 5,
    scale: 1.01,
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
        index % 2 === 0 ? "md:pr-1/2 md:pl-0 pl-12" : "md:pl-1/2 md:pr-0 pl-12 md:pl-0 md:pr-12"
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary transform -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-primary/30"
        />
      </div>

      <div 
        style={style}
        className="relative glass rounded-3xl p-6 hover:scale-[1.02] transition-transform duration-300"
      >
        {/* Glare effect */}
        <div 
          style={glareStyle} 
          className="absolute inset-0 pointer-events-none z-20 rounded-3xl"
        />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-full bg-gradient-to-r ${experience.color}`}>
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.company}</h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar size={16} />
            {experience.period}
          </div>
        </div>

        <h4 className="text-lg font-semibold text-primary mb-3">{experience.role}</h4>

        <ul className="space-y-3">
          {experience.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + i * 0.1 }}
              className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
            >
              <TrendingUp className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            My professional journey in the tech industry
          </p>

          <div ref={ref} className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

