import * as motion from "motion/react-client";
import type { Transition } from "motion/react";

interface props {
  title: string;
  icons: string[];
}

const springSkillsRow: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const SkillsIconsRow = ({ title, icons }: props) => {
  return (
    <div className="flex-center flex-col">
      <h3 className="text-center text-xl font-bold font-lato max-sm:mb-2 mb-5 underline underline-offset-2">
        {title}
      </h3>
      <ul className="grid grid-cols-4 grid-rows-2 items-center justify-center sm:flex sm:flex-row max-sm:gap-x-9 md:space-x-8 sm:space-x-5">
        {icons.map((el) => (
          <motion.img
            key={el}
            src={el}
            transition={springSkillsRow}
            layout
            className="w-13 md:w-15 max-sm:py-2"
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillsIconsRow;
