"use client";

import { Github, Instagram, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  isDarkMode: boolean;
}

export function Footer({ isDarkMode }: FooterProps) {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mdprsty16', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/mdprsty16_', label: 'Instagram' },
    { icon: Phone, href: 'https://wa.me/6289662990536', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:prasetyodeko240@gmail.com', label: 'Email' },
  ];

  return (
    <footer className={`${
      isDarkMode 
        ? 'bg-slate-900/50 border-slate-800' 
        : 'bg-white/50 border-gray-200'
    } border-t backdrop-blur-lg mt-20`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links (Fixed Animation) */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-slate-800/50 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400' 
                      : 'bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600'
                  } transition-colors`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}
          >
            © {new Date().getFullYear()} Chisa. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}