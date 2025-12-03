"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../../components/ui/ImageWithFallback';
import { projectsData } from '../../../lib/data';

export default function ProjectDetail() {
  const params = useParams();
  const isDarkMode = true; // Sesuaikan jika pakai context

  // Mencari data project berdasarkan ID dari URL
  const projectId = Number(params.id);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-32 pb-20 ${isDarkMode ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Tombol Kembali */}
        <Link href="/projects" className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isDarkMode 
                ? 'bg-blue-500/10 border border-blue-500/20' 
                : 'bg-blue-50 border border-blue-200'
            }`}>
              <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>
                {project.year}
              </span>
            </div>
          </div>

          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {project.title}
          </h1>
          
          <p className={`text-lg md:text-xl max-w-3xl leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.description}
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`relative rounded-3xl overflow-hidden mb-12 ${
            isDarkMode 
              ? 'bg-slate-800/50 border-slate-700' 
              : 'bg-white/50 border-gray-200'
          } border backdrop-blur-xl shadow-2xl`}
        >
          <div className="aspect-video w-full">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700' 
                  : 'bg-white/50 border-gray-200'
              } border backdrop-blur-xl rounded-3xl p-8 shadow-xl`}
            >
              <div className="flex items-center gap-2 mb-6">
                <Tag className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Technologies Used
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-4 py-2 rounded-xl ${
                      isDarkMode 
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                        : 'bg-blue-50 text-blue-600 border border-blue-200'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Action Buttons */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700' 
                  : 'bg-white/50 border-gray-200'
              } border backdrop-blur-xl rounded-3xl p-6 shadow-xl space-y-4`}
            >
              <h3 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Project Links</h3>
              
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-xl border-2 flex items-center justify-center gap-2 transition-all hover:scale-105 ${
                  isDarkMode 
                    ? 'border-slate-600 bg-slate-700/50 text-white hover:bg-slate-700' 
                    : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Github className="w-5 h-5" />
                Source Code
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}