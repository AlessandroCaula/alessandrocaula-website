import { cardVariants } from "@/animations/variants";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface props {
  children: ReactNode;
  className?: string;
}

const AnimatedCardWrapper = ({ children, className }: props) => {
  return (
    <motion.div 
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      { children }
    </motion.div>
  )
}

export default AnimatedCardWrapper