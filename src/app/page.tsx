"use client";

import { useState } from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/sections/Hero";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Leadership } from "@/components/sections/Leadership";
import { Education } from "@/components/sections/Education";
import { ProfessionalPresence } from "@/components/sections/ProfessionalPresence";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return (
          <>
            <Hero />
            <CurrentFocus />
          </>
        );
      case "projects":
        return <ProjectsSection />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "leadership":
        return <Leadership />;
      case "education":
        return <Education />;
      case "presence":
        return <ProfessionalPresence />;
      case "about":
        return <About />;
      case "certifications":
        return <Certifications />;
      case "achievements":
        return <Achievements />;
      case "contact":
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <CurrentFocus />
          </>
        );
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </>
  );
}
