import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CatalogView from "./components/CatalogView";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedCollection from "./components/FeaturedCollection";
import Testimonials from "./components/Testimonials";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200`}
    >
      <Navbar
        isDark={isDark}
        toggleTheme={() => setIsDark((prev) => !prev)}
        scrollToSection={scrollToSection}
      />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <FeaturedCollection />
        <CatalogView />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer isDark={isDark} scrollToSection={scrollToSection} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
