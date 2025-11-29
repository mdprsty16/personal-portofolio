"use client";

import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { useInView } from './hooks/useInView';

interface AboutSectionProps {
  isDarkMode: boolean;
}

export function AboutSection({ isDarkMode }: AboutSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const skills = [
    { name: 'HTML & CSS', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', level: 88, color: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', level: 85, color: 'from-gray-500 to-slate-600' },
    { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', level: 80, color: 'from-blue-600 to-indigo-600' },
  ];

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful user interfaces',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency',
    },
    {
      icon: Zap,
      title: 'Modern Tech',
      description: 'Using latest web technologies',
    },
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
          >
            About <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Get to know more about my skills, experience, and passion for web development
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className={`relative ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-700' 
                : 'bg-white/50 border-gray-200'
            } border backdrop-blur-xl rounded-3xl p-6 shadow-xl`}>
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative h-[400px] w-full">
                <ImageWithFallback
                  src="chisa.jpg" // Ganti foto kamu
                  alt="About Me"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '5+', label: 'Years Exp.' },
                  { value: '50+', label: 'Projects' },
                  { value: '30+', label: 'Happy Clients' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`text-center p-4 rounded-xl ${
                      isDarkMode 
                        ? 'bg-slate-900/50' 
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-bold text-xl">
                      {stat.value}
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className={`${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-700' 
                : 'bg-white/50 border-gray-200'
            } border backdrop-blur-xl rounded-3xl p-8 shadow-xl`}>
              <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Hello! I'm a passionate frontend developer and web designer with over 5 years of experience 
                  creating beautiful and functional websites. I love turning complex problems into simple, 
                  beautiful, and intuitive designs.
                </p>
                <p>
                  My expertise lies in modern web technologies like React, Next.js, and Tailwind CSS. 
                  I believe in writing clean, maintainable code and creating user experiences that delight 
                  and engage users.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends, contributing to 
                  open-source projects, or sharing my knowledge with the developer community through 
                  blog posts and tutorials.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`p-6 rounded-2xl ${
                    isDarkMode 
                      ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50' 
                      : 'bg-white/50 border-gray-200 hover:bg-white'
                  } border backdrop-blur-xl transition-all group cursor-pointer`}
                  whileHover={{ y: -5 }}
                >
                  <feature.icon className={`w-8 h-8 mb-3 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  } group-hover:scale-110 transition-transform`} />
                  <h3 className={`mb-1 font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h2 className={`text-center mb-12 text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            My <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className={`${
            isDarkMode 
              ? 'bg-slate-800/50 border-slate-700' 
              : 'bg-white/50 border-gray-200'
          } border backdrop-blur-xl rounded-3xl p-8 shadow-xl`}>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
                      {skill.name}
                    </span>
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`h-3 rounded-full overflow-hidden ${
                    isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 1 + index * 0.1, duration: 1, ease: 'easeOut' }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}