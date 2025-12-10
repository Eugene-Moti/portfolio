"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    "React.js", "Next.js", "TypeScript", "Tailwind CSS",
    "SEO Optimization", "Google Analytics", "Digital Marketing",
    "Web Performance", "Responsive Design", "UI/UX", "PHP", "MySQL"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold gradient-text">EM</div>
                  </div>
                </div>
                
                {/* Floating skills tags */}
                {skills.slice(0, 6).map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`absolute glass rounded-full px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 ${
                      index % 3 === 0 ? "top-4 left-4" :
                      index % 3 === 1 ? "top-4 right-4" :
                      "bottom-4 left-1/2 transform -translate-x-1/2"
                    }`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="text-primary" />
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Based in Nairobi, Kenya</span>
                </div>

                <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                  Certified Frontend Developer and IT graduate specializing in responsive web design, 
                  SEO optimization, and digital marketing strategy. Experienced in leveraging technical 
                  skills to boost user engagement and elevate online brand visibility. Adept at collaborating 
                  with cross-functional teams to implement data-driven digital campaigns.
                </p>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}