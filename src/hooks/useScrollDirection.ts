import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down" | "none";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>("none");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastY = window.screenY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      if (currentY > lastY) {
        setScrollDirection("down");
      } else if (currentY < lastY) {
        setScrollDirection("up");
      }

      lastY = currentY;
    };

    // Listening for scrolling events. When the "scroll" events fires (every time the user scroll), than the handleScroll callback function is called.
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll) 
  }, []);

  return { scrollDirection, scrollY }
};
