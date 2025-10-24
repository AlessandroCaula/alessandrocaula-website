import type { Variants } from "motion/react";

export const cardVariants: Variants = {
  offscreen: {
    y: 70,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.70,
      bounce: 0.3,
      ease: "easeOut",
    },
  },
};