import { motion, type Variants } from "motion/react";
import { easeInOut } from "motion";

const duration = 0.2;

const linkUp: Variants = {
  rest: { y: "0%", transition: { duration: duration, ease: easeInOut } },
  hover: { y: "-100%", transition: { duration: duration, ease: easeInOut } },
};

const linkDown: Variants = {
  rest: { y: "100%", transition: { duration: duration, ease: easeInOut } },
  hover: { y: "0%", transition: { duration: duration, ease: easeInOut } },
};

export interface AnimatedNavLinksProps {
  link: { to: string; label: string };
}

const AnimatedNavLinks = ({ link }: AnimatedNavLinksProps) => {
  return (
    <motion.a
      href={link.to}
      whileHover="hover"
      animate="rest"
      className="relative inline-block overflow-hidden text-lg font-lato h-[1.2em] leading-[1.2em]"
    >
      <motion.span variants={linkUp} className="inline-block">
        {link.label}
      </motion.span>

      <motion.span
        variants={linkDown}
        className="inline-block absolute top-0 left-0 w-full"
      >
        {link.label}
      </motion.span>
    </motion.a>
  );
};

export default AnimatedNavLinks;
