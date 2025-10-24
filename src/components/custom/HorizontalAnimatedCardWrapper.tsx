import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface props {
  children: ReactNode;
  xInitialOffset: number;
}

const HorizontalAnimatedCardWrapper = ({ children, xInitialOffset = 0 }: props) => {
  return (
    <motion.div
      // className={className}
      initial={{ x: xInitialOffset, opacity: 0 }}
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.2 }}
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
      duration: 0.6,
      bounce: 0.3,
      ease: "easeOut",
    },
  },
};

export default HorizontalAnimatedCardWrapper;
