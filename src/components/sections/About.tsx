"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight, Award, GraduationCap, Code, Star, LucideIcon } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface CarouselItem {
  type: "skill" | "cert";
  title: string;
  items: string[];
  iconName: "Code" | "Star" | "Award" | "GraduationCap";
}

const iconMap: Record<string, LucideIcon> = {
  Code,
  Star,
  Award,
  GraduationCap,
};

const carouselItems: CarouselItem[] = [
  // Skills
  { type: "skill", title: "Frontend Development", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"], iconName: "Code" },
  { type: "skill", title: "Backend & Database", items: ["PHP", "MySQL", "Node.js", "REST APIs", "Database"], iconName: "Code" },
  { type: "skill", title: "SEO & Marketing", items: ["Google Analytics", "Keyword Research", "On-page SEO", "Content Strategy", "Digital Ads"], iconName: "Star" },
  { type: "skill", title: "IT Support", items: ["Troubleshooting", "System Maintenance", "Network Config", "Security", "Hardware"], iconName: "Code" },
  // Certifications
  { type: "cert", title: "ALX Certification", items: ["Professional Web", "Frontend Development", "2024"], iconName: "Award" },
  { type: "cert", title: "ALX Foundations", items: ["Professional Skills", "Technical Fundamentals", "2023"], iconName: "Award" },
  { type: "cert", title: "Education", items: ["BSc. IT", "Co-operative University", "Software & Networks"], iconName: "GraduationCap" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentItem = carouselItems[currentIndex];
  const IconComponent = iconMap[currentItem.iconName];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Carousel Section */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative w-full max-w-md"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Card */}
                <div className="glass rounded-3xl p-8 min-h-[280px] flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="flex-1 flex flex-col"
                    >
                      {/* Icon */}
                      <div className={`inline-flex p-3 rounded-xl mb-6 w-fit ${
                        currentItem.type === "cert" 
                          ? "bg-gradient-to-r from-yellow-400 to-orange-500" 
                          : "bg-gradient-to-r from-primary to-secondary"
                      }`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                        {currentItem.title}
                      </h3>

                      {/* Items */}
                      <div className="flex flex-wrap gap-3">
                        {currentItem.items.map((item, index) => (
                          <motion.span
                            key={item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${
                              currentItem.type === "cert"
                                ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                                : "bg-primary/10 dark:bg-primary/20 text-gray-800 dark:text-gray-200"
                            }`}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex justify-center gap-4 mt-8">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>
                    <div className="flex gap-2 items-center">
                      {carouselItems.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setIsAutoPlaying(false);
                            setCurrentIndex(index);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentIndex
                              ? "w-6 bg-primary"
                              : "bg-gray-300 dark:bg-gray-700"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>

                  {/* Type indicator */}
                  <div className="text-center mt-4">
                    <span className={`text-xs font-medium uppercase tracking-wider ${
                      currentItem.type === "cert"
                        ? "text-yellow-600 dark:text-yellow-400"
                        : "text-primary"
                    }`}>
                      {currentItem.type === "cert" ? "Certification" : "Skill Set"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Text Content */}
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

                <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                  Certified Frontend Developer and IT graduate specializing in responsive web design, 
                  SEO optimization, and digital marketing strategy. Experienced in leveraging technical 
                  skills to boost user engagement and elevate online brand visibility.
                </p>

                <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                  Adept at collaborating with cross-functional teams to implement data-driven digital campaigns 
                  that deliver measurable results.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: "5+", label: "Years Exp" },
                    { number: "50+", label: "Projects" },
                    { number: "30+", label: "Clients" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-center p-4 glass rounded-xl"
                    >
                      <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </motion.div>
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

