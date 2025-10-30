import type { VerticalAnimatedCardWrapperProps } from "@/types";
import { motion, type Variants } from "motion/react";

// Wrapper for the vertical animation transition. The children component wrapped into it, will arrive from the bottom.
// 
const VerticalAnimatedCardWrapper = ({ children, className }: VerticalAnimatedCardWrapperProps) => {
  return (
    <motion.div 
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.1 }}
    >
      { children }
    </motion.div>
  )
}

const cardVariants: Variants = {
  offscreen: {
    y: 70,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.80,
      bounce: 0.3,
      ease: "easeOut",
    },
  },
};

export default VerticalAnimatedCardWrapper