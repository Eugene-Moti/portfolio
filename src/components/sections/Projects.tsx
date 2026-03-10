"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, Building2, Globe, ShoppingBag, Heart, Briefcase } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTilt } from "@/hooks/useTilt";

const projects = [
  {
    title: "LJ Property Ltd",
    description: "Real estate company website with property listings, search functionality, and modern design",
    category: "Web Development",
    achievements: ["Responsive design", "Property search", "Modern UI/UX"],
    color: "from-primary to-secondary",
    liveUrl: "https://www.ljpropertyltd.co.ke/",
    githubUrl: "#",
    icon: Building2,
    image: "/ljproperties.png"
  },
  {
    title: "Somali Minnesota",
    description: "Community organization website serving the Somali community in Minnesota with events and resources",
    category: "Web Development",
    achievements: ["Community portal", "Event management", "Resource hub"],
    color: "from-secondary to-accent",
    liveUrl: "https://somaliminnesota.vercel.app/",
    githubUrl: "#",
    icon: Globe,
    image: "/Somali.png"
  },
  {
    title: "Ivy Group",
    description: "Corporate website for a business conglomerate with multiple service divisions",
    category: "Web Development",
    achievements: ["Multi-section design", "Corporate branding", "Service showcase"],
    color: "from-accent to-primary",
    liveUrl: "https://www.ivygroup.ke/",
    githubUrl: "#",
    icon: Building2,
    image: "/ivygroup.png"
  },
  {
    title: "Wisetech Omega",
    description: "Technology company landing page showcasing software solutions and digital services",
    category: "Web Development",
    achievements: ["Tech-focused design", "Service showcase", "Lead generation"],
    color: "from-primary to-accent",
    liveUrl: "https://wisetech-omega.vercel.app/",
    githubUrl: "#",
    icon: Briefcase,
    image: "/wisetech.png"
  },
  {
    title: "God's Love CBO",
    description: "Non-profit organization website for community-based charitable programs",
    category: "Web Development",
    achievements: ["Non-profit design", "Donation awareness", "Program showcase"],
    color: "from-secondary to-primary",
    liveUrl: "https://god-s-love-cbo.vercel.app/",
    githubUrl: "#",
    icon: Heart,
    image: "/gods-love.png"
  },
  {
    title: "Own It With Brian",
    description: "Personal brand website for entrepreneurship and business coaching services",
    category: "Web Development",
    achievements: ["Personal branding", "Coaching services", "Booking system"],
    color: "from-accent to-secondary",
    liveUrl: "https://own-it-with-brian.vercel.app/",
    githubUrl: "#",
    icon: Briefcase,
    image: "/own-it-with-brian.png"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, style, handlers, glareStyle } = useTilt<HTMLDivElement>({
    maxRotation: 10,
    scale: 1.02,
    glare: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      {...handlers}
      className="group relative"
    >
      {/* Neon border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      
      <div 
        style={style}
        className="relative glass rounded-3xl overflow-hidden"
      >
        {/* Glare effect */}
        <div 
          style={glareStyle} 
          className="absolute inset-0 pointer-events-none z-20 rounded-3xl"
        />

        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`} />
        
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-sm text-white">
              <project.icon className="w-3 h-3" />
              {project.category}
            </span>
          </div>
        </div>

        <div className="relative p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.achievements.map((achievement, i) => (
              <div key={i} className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              Visit Site
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2.5 glass rounded-lg font-semibold flex items-center justify-center gap-2 text-gray-800 dark:text-gray-200"
            >
              <Github size={16} />
            </motion.button>
          </div>
        </div>

        {/* Hover border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-3xl transition-all duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Animated background */}
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
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of the websites I've developed for clients across various industries
          </p>

          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

