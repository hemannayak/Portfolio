"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offsetPercent = 30) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + (window.innerHeight * offsetPercent) / 100;

      // Find the section that matches our current scroll position
      let currentSection = "";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = id;
            break;
          }
        }
      }

      // Fallback to first section if scrolled to top
      if (window.scrollY < 100 && sectionIds.length > 0) {
        currentSection = sectionIds[0];
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, activeSection, offsetPercent]);

  return activeSection;
}
