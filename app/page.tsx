"use client";

import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsPreview } from "./components/ProjectsPreview";
import { ContactSection } from "./components/ContactSection";
import { useTheme } from "./context/ThemeContext"; // Import hook yang kita buat

export default function Home() {
  // GANTI INI: Ambil isDarkMode dari context, bukan ditulis manual
  const { isDarkMode } = useTheme(); 

  return (
    <div className="overflow-hidden">
      <HeroSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      <ProjectsPreview isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
    </div>
  );
}