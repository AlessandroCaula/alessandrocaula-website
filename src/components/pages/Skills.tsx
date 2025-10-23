import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import type { Transition } from "motion/react";
import { dataScienceAndVisualization, frameworks, OsAndTools, programmingLanguages } from "@/lib/skills";
import SkillsIconsRow from "../custom/SkillsIconsRow";

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
  const [orderProgrammingLanguages, setOrderProgrammingLanguages] = useState(programmingLanguages);
  const [orderFrameworks, setOrderFrameworks] = useState(frameworks);
  // const [orderMlAndDataScience, setOrderMlAndDataScience] = useState(machineLearningAndDataScience);
  const [orderDsAndVisualization, setOrderDsAndVisualization] = useState(dataScienceAndVisualization);
  const [orderOsAndTools, setOrderOsAndTools] = useState(OsAndTools);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setOrderProgrammingLanguages(shuffle(orderProgrammingLanguages));
  //     setOrderFrameworks(shuffle(orderFrameworks));
  //   }, 3000);

  //   return () => clearInterval(timeout);
  // }, [orderProgrammingLanguages]);

  return (
    <div className="about-card">
      <h2>Skills</h2>
      <div className="space-y-9">

        <SkillsIconsRow title="Programming Languages" icons={orderProgrammingLanguages}/>
                
        <SkillsIconsRow title="Frameworks" icons={orderFrameworks}/>
        
        <SkillsIconsRow title="Data Science & Visualization" icons={orderDsAndVisualization}/>
        
        <SkillsIconsRow title="Other tech skills" icons={orderOsAndTools}/>

      </div>
    </div>
  );
};
