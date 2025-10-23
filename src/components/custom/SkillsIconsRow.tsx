import * as motion from "motion/react-client";
import type { Transition } from "motion/react";

interface props {
  title: string;
  icons: string[];
}

const spring: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const SkillsIconsRow = ({ title, icons }: props) => {
  return (
    <div className="space-y-4 flex-center flex-col">
      <h3 className="text-center text-xl font-bold font-lato mb-4 underline underline-offset-2">{title}</h3>
      <ul className="flex flex-row space-x-4">
        {icons.map((el) => (
          // <li>{el}</li>
          <motion.img
            key={el}
            src={el}
            transition={spring}
            layout
            className="w-15"
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillsIconsRow;
