"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const threshold = 10; // Scroll distance threshold before updating state
      
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        return;
      }
      
      const direction = scrollY > lastScrollY ? "down" : "up";
      
      // Ensure navbar is fully visible near the top of the page regardless of scroll direction
      if (scrollY < 50) {
        setScrollDirection("up");
      } else {
        setScrollDirection(direction);
      }
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return scrollDirection;
}
