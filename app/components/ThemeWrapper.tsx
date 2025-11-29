"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useTheme } from "../context/ThemeContext";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <body className={`antialiased transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-slate-900'
    }`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      
      <main>
        {children}
      </main>

      <Footer isDarkMode={isDarkMode} />
    </body>
  );
}