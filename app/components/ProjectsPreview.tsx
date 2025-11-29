"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { useInView } from './hooks/useInView';
import { projectsData } from '../../lib/data'; // Mengambil data dari lib/data.ts

interface ProjectsPreviewProps {
  isDarkMode: boolean;
}

export function ProjectsPreview({ isDarkMode }: ProjectsPreviewProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Hanya tampilkan 3 proyek pertama
  const previewProjects = projectsData.slice(0, 3);

  return (
    <section id="projects-preview" ref={ref} className="min-h-screen py-20">
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
            Featured <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            A showcase of my recent work and creative projects
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewProjects.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`group h-full ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50' 
                    : 'bg-white/50 border-gray-200 hover:border-blue-300'
                } border backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2`}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden w-full">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-lg rounded-full"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {project.year}
                      </span>
                    </div>
                    <h3 className={`mb-2 font-bold text-xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs rounded-lg ${
                          isDarkMode 
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                            : 'bg-blue-50 text-blue-600 border border-blue-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <div
                    className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 ${
                      isDarkMode 
                        ? 'bg-slate-700/50 hover:bg-blue-500/20 text-blue-400 border border-slate-600' 
                        : 'bg-gray-100 hover:bg-blue-50 text-blue-600 border border-gray-200'
                    } transition-all group/btn`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Link href="/projects" className={`px-8 py-4 rounded-xl border-2 inline-flex items-center gap-2 transition-all ${
              isDarkMode 
                ? 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10' 
                : 'border-blue-300 text-blue-600 hover:bg-blue-50'
            }`}>
            View All Projects
            <ArrowRight className="w-5 h-5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}