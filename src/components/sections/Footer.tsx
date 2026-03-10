"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com", 
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/erick-moti-b77b25246", 
    label: "LinkedIn",
    color: "hover:text-blue-600"
  },
  { 
    icon: Instagram, 
    href: "https://instagram.com", 
    label: "Instagram",
    color: "hover:text-pink-600"
  },
  { 
    icon: ExternalLink, 
    href: "https://tiktok.com", 
    label: "TikTok",
    color: "hover:text-black dark:hover:text-white"
  }
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "SEO Optimization",
  "Digital Marketing",
  "UI/UX Design",
  "IT Support",
  "Brand Design"
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 relative overflow-hidden bg-gray-100 dark:bg-gray-900/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  <span className="gradient-text">Erick Moti</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                  Certified Frontend Developer and IT professional specializing in creating 
                  beautiful, functional websites and digital experiences.
                </p>
                
                {/* Social links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 glass rounded-full hover:bg-primary/10 transition-colors text-gray-700 dark:text-gray-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <span className="text-gray-600 dark:text-gray-400">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Contact banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="glass rounded-2xl p-6 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  Have a project in mind?
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Let's discuss how I can help bring your vision to life.
                </p>
              </div>
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform whitespace-nowrap"
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Erick Moti. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Crafted with passion in Nairobi, Kenya
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

