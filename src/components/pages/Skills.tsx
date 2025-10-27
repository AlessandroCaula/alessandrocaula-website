import { useEffect, useState } from "react";
import SkillsIconsRow from "../custom/SkillsIconsRow";
import CustomStandardSwitch from "../custom/CustomStandardSwitch";
import AnimatedCardWrapper from "../custom/VerticalAnimatedCardWrapper";
import {
  programmingLanguages,
  dataScienceAndVisualization,
  frameworks,
  OsAndTools,
} from "@/assets/skills-icons";

const shuffle = ([...arr]: string[]): string[] => {
  return arr.sort(() => Math.random() - 0.5);
};

export const Skills = () => {
  const [orderProgrammingLanguages, setOrderProgrammingLanguages] =
    useState(programmingLanguages);
  const [orderFrameworks, setOrderFrameworks] = useState(frameworks);
  const [orderDsAndVisualization, setOrderDsAndVisualization] = useState(
    dataScienceAndVisualization
  );
  const [orderOsAndTools, setOrderOsAndTools] = useState(OsAndTools);

  const [isAnimated, setIsAnimated] = useState(true);

  const handleAnimationChange = (isToAnimate: boolean) => {
    setIsAnimated(isToAnimate);
    if (isToAnimate) {
      localStorage.setItem("skillsAnimated", "true");
    } else {
      localStorage.setItem("skillsAnimated", "false");
    }
  };

  // Check if the animation was turned off
  useEffect(() => {
    const lastAnimationStatus = localStorage.getItem("skillsAnimated");
    if (lastAnimationStatus === "true") {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  });

  useEffect(() => {
    if (isAnimated) {
      const timeout = setTimeout(() => {
        setOrderProgrammingLanguages(shuffle(orderProgrammingLanguages));
        setOrderFrameworks(shuffle(orderFrameworks));
        setOrderDsAndVisualization(shuffle(orderDsAndVisualization));
        setOrderOsAndTools(shuffle(orderOsAndTools));
      }, 2000);

      return () => clearTimeout(timeout);
    } else {
      setOrderProgrammingLanguages(programmingLanguages);
      setOrderFrameworks(frameworks);
      setOrderDsAndVisualization(dataScienceAndVisualization);
      setOrderOsAndTools(OsAndTools);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderProgrammingLanguages, isAnimated]);

  return (
    <div className="pt-10">
      <AnimatedCardWrapper className="card-style">
        <div className="grid grid-cols-3">
          <div></div>
          <h2 className="title">Skills</h2>
          <CustomStandardSwitch
            checked={isAnimated}
            onCheckedChange={handleAnimationChange}
            className="flex justify-end items-center pr-5 mb-4 max-sm:mr-0 mr-6"
          />
        </div>

        <div className="space-y-6 sm:space-y-10">
          <SkillsIconsRow
            title="Programming Languages"
            icons={orderProgrammingLanguages}
          />

          <SkillsIconsRow
            title="Frameworks & Fullstack"
            icons={orderFrameworks}
          />

          <SkillsIconsRow
            title="Data Science & Visualization"
            icons={orderDsAndVisualization}
          />

          <SkillsIconsRow title="Other tech skills" icons={orderOsAndTools} />
        </div>
      </AnimatedCardWrapper>
    </div>
  );
};
