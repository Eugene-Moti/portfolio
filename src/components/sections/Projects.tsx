"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Blossoms Ivy Residence",
    description: "Complete website design and development with SEO optimization",
    category: "Web Development",
    achievements: ["90% lead generation increase", "90% SEO traffic improvement"],
    color: "from-primary to-secondary",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Mighty Ape SEO Campaign",
    description: "Comprehensive SEO strategy and implementation",
    category: "SEO & Marketing",
    achievements: ["80% organic traffic boost", "90% visibility improvement"],
    color: "from-secondary to-accent",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Digital Marketing Suite",
    description: "Multi-platform campaign management system",
    category: "Full Stack",
    achievements: ["60% engagement increase", "70% performance optimization"],
    color: "from-accent to-primary",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateY: 90 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative"
              >
                {/* Neon border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                
                <div className="relative glass rounded-3xl p-6 overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`} />
                  
                  {/* Category badge */}
                  <div className="relative mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 relative text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 relative">
                    {project.description}
                  </p>

                  <div className="mb-6 space-y-2 relative">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 relative">
                    <a
                      href={project.liveUrl}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="px-4 py-2 glass rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform text-gray-800 dark:text-gray-200"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-3xl transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}