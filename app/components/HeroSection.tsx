"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Github, Instagram, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';
import Link from 'next/link';

interface HeroSectionProps {
  isDarkMode: boolean;
}

export function HeroSection({ isDarkMode }: HeroSectionProps) {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/mdprsty16', 
      label: 'GitHub', 
      color: 'hover:text-gray-400' 
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/mdprsty16_', 
      label: 'Instagram', 
      color: 'hover:text-pink-500' 
    },
    { 
      icon: Phone, 
      href: 'https://wa.me/6289662990536', 
      label: 'WhatsApp', 
      color: 'hover:text-green-500' 
    },
    { 
      icon: Mail, 
      href: 'mailto:prasetyodeko240@gmail.com', 
      label: 'Email', 
      color: 'hover:text-red-400' 
    },
  ];

  return (
    <section id="hero" className="min-h-screen pt-20 relative overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'
        } rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] ${
          isDarkMode ? 'bg-cyan-500/10' : 'bg-cyan-500/20'
        } rounded-full blur-3xl`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`inline-block px-4 py-2 rounded-full ${
                  isDarkMode 
                    ? 'bg-blue-500/10 border border-blue-500/20' 
                    : 'bg-blue-50 border border-blue-200'
                } backdrop-blur-sm`}
              >
                <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-5xl md:text-7xl lg:text-8xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Deco Prasetyo</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-2xl md:text-3xl font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Frontend Developer / Web Designer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl text-lg md:text-xl leading-relaxed`}
              >
                Passionate about creating beautiful, functional, and user-friendly websites. 
                I specialize in modern web technologies and bring ideas to life through clean code and elegant design.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl overflow-hidden shadow-lg shadow-blue-500/25 inline-flex items-center gap-2">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link href="/projects" className={`px-8 py-4 rounded-xl border-2 ${
                  isDarkMode 
                    ? 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10' 
                    : 'border-blue-300 text-blue-600 hover:bg-blue-50'
                } transition-all`}>
                View Projects
              </Link>
            </motion.div>

            {/* Social Links (Fixed Animation) */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-slate-800/50 text-gray-400' 
                        : 'bg-gray-100 text-gray-600'
                    } transition-colors ${social.color}`}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative lg:ml-auto"
          >
            <div className="relative">
              <div className={`absolute inset-0 ${
                isDarkMode 
                  ? 'bg-gradient-to-tr from-blue-500/20 to-cyan-500/20' 
                  : 'bg-gradient-to-tr from-blue-300/30 to-cyan-300/30'
              } rounded-3xl blur-3xl`}></div>
              
              <div className={`relative ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700' 
                  : 'bg-white/50 border-gray-200'
              } border backdrop-blur-xl rounded-3xl p-4 shadow-2xl`}>
                <div className="aspect-square rounded-2xl overflow-hidden relative h-[400px] lg:h-[550px] w-full">
                  <ImageWithFallback
                    src="chisa.jpg"
                    alt="Foto Profil"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}