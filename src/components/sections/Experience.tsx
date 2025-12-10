"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div ref={ref} className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:pl-0 pl-12" : "md:pl-1/2 md:pr-0 pl-12 md:pl-0 md:pr-12"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary transform -translate-x-1/2 -translate-y-1/2 z-10" />

                <div className="glass rounded-3xl p-6 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${exp.color}`}>
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-primary mb-3">{exp.role}</h4>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}