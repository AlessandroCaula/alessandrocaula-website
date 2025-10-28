import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down" | "none";

// Custom hook used to define whether the user is scrolling up or down. Used in the nav bar and in the down arrow for example.
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("none");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      // Retrieve current Y and store it in the scrollY state.
      const currentY = window.scrollY;
      setScrollY(currentY);

      // If the current Y is higher than the lastY (previous one) the used is scrolling down.
      if (currentY > lastY) {
        setScrollDirection("down");
      } else if (currentY < lastY) {
        // If the current Y is smaller, the user is scrolling up.
        setScrollDirection("up");
      }
      // Store the last scrolled Y
      lastY = currentY;
    };

    // Listening for scrolling events. When the "scroll" events fires (every time the user scroll), than the handleScroll callback function is called.
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll) 
  }, []);

  return { scrollDirection, scrollY }
};
