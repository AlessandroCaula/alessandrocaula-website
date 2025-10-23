import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import type { Transition } from "motion/react";
import { frameworks, programmingLanguages } from "@/lib/skills";

// const skills = ["1", "2", "3", "4", "5", "6", "7", "8"];

// Utility to shuffle
// const shuffle = <T,>(arr: T[]): T[] => {
//   return [...arr].sort(() => Math.random() - 0.5)
// }

const shuffle = ([...arr]: string[]): string[] => {
  return arr.sort(() => Math.random() - 0.5);
};

const spring: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

export const Skills = () => {
  const [orderProgrammingLanguages, setOrderProgrammingLanguages] =
    useState(programmingLanguages);
  const [orderFrameworks, setOrderFrameworks] = useState(frameworks);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOrderProgrammingLanguages(shuffle(orderProgrammingLanguages));
      setOrderFrameworks(shuffle(orderFrameworks));
    }, 2000);

    return () => clearInterval(timeout);
  }, [orderProgrammingLanguages]);

  return (
    <div className="about-card">
      <h2>Skills</h2>
      <div>
        <h3>Programming Languages</h3>
        <ul className="flex flex-row space-x-5">
          {orderProgrammingLanguages.map((el) => (
            // <li>{el}</li>
            <motion.img
              key={el}
              src={el}
              transition={spring}
              layout
              style={{
                width: 60,
                height: 60,
                borderRadius: 12,
                cursor: "pointer",
              }}
            />
          ))}
        </ul>
        <h3>Programming Languages</h3>
        <ul className="flex flex-row space-x-5">
          {orderFrameworks.map((el) => (
            // <li>{el}</li>
            <motion.img
              key={el}
              src={el}
              transition={spring}
              layout
              style={{
                width: 60,
                height: 60,
                borderRadius: 12,
                cursor: "pointer",
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
