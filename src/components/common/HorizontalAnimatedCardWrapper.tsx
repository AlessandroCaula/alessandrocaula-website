import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface props {
  children: ReactNode;
  xInitialOffset: number;
}

// Animation wrapper for the card. This card animates by entering the screen from the left or right sides, based on the xInitialOffset
// 
const HorizontalAnimatedCardWrapper = ({ children, xInitialOffset = 0 }: props) => {
  return (
    <motion.div
      initial={{ x: xInitialOffset, opacity: 0 }}
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
};

const cardVariants: Variants = {
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.65,
      bounce: 0.3,
      ease: "easeOut",
    },
  },
};

export default HorizontalAnimatedCardWrapper;
