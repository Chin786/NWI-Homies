import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { motion } from "framer-motion";
import LogoImage from "../assets/logo-b1.jpeg";
import LightLogoImage from "../assets/logo-2.jpeg";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isDark,
  toggleTheme,
  scrollToSection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "products", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let newActiveSection = activeSection;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            newActiveSection = section;
            break;
          }
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const sections = ["home", "about", "products", "contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white dark:bg-black/70">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={isDark ? LogoImage : LightLogoImage}
            alt="NWIHOMES Logo"
            className="h-12 w-20"
          />
          <span className="ml-2 text-xl font-bold text-gray-700 dark:text-white">
            NWIHOMES
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300 font-bold">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative hover:text-red-600 transition-colors ${
                activeSection === section ? "text-red-600 font-semibold" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 font-bold bg-red-600 rounded-full"
                  layoutId="activeSection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full bg-gray-300 dark:bg-white/10 transition"
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-white hover:text-amber-100" />
            ) : (
              <Moon className="h-6 w-6 text-black hover:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu className="h-6 w-6 text-gray-700 dark:text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden  bg-white border-t dark:bg-gray-800 dark:border-gray-700">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left border-t border-gray-500 px-3 py-2 text-base font-medium text-gray-800 dark:text-white"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          {/* Theme Toggle for Mobile */}
          <div className="flex justify-center py-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full bg-gray-300 dark:bg-white/10 transition"
            >
              {isDark ? (
                <Sun className="h-6 w-6 text-white hover:text-amber-100" />
              ) : (
                <Moon className="h-6 w-6 text-black hover:text-white" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
