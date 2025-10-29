import * as motion from "motion/react-client";
import type { Transition } from "motion/react";

interface props {
  title: string;
  icons: string[];
}

const springSkillsRow: Transition = {
  type: "spring",
  damping: 25,
  stiffness: 300,
};

// Row animation for the skills section.
// 
const SkillsIconsRow = ({ title, icons }: props) => {
  return (
    <div className="flex-center flex-col">
      <h3 className="text-center text-xl font-bold font-lato mb-1">
        {title}
      </h3>
      <div className="border-[0.5px] border-secondary w-7/8 mb-4"></div>
      <ul className="grid grid-cols-4 grid-rows-2 items-center justify-center sm:flex sm:flex-row max-sm:gap-x-9 md:space-x-8 sm:space-x-5">
        {icons.map((el) => (
          <motion.img
            key={el}
            src={el}
            transition={springSkillsRow}
            layout
            className="w-13 md:w-14 max-sm:py-2"
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillsIconsRow;
