import { useEffect, useState } from "react";
import SkillsIconsRow from "../common/SkillsIconsRow";
import CustomStandardSwitch from "../common/CustomStandardSwitch";
import AnimatedCardWrapper from "../common/VerticalAnimatedCardWrapper";
import {
  programmingLanguages,
  dataScienceAndVisualization,
  frameworks,
  OsAndTools,
} from "@/assets/skills-icons";
import type { SkillIcon } from "@/types";

const shuffle = (arr: SkillIcon[]): SkillIcon[] => {
  return [...arr].sort(() => Math.random() - 0.5);
};

export const Skills = () => {
  const [orderProgrammingLanguages, setOrderProgrammingLanguages] =
    useState(programmingLanguages);
  const [orderFrameworks, setOrderFrameworks] = useState(frameworks);
  const [orderDsAndVisualization, setOrderDsAndVisualization] = useState(
    dataScienceAndVisualization
  );
  const [orderOsAndTools, setOrderOsAndTools] = useState(OsAndTools);
  // Hook for checking if the skills needs to be animated and shuffle.
  const [isAnimated, setIsAnimated] = useState(true);

  // Handle the animation switch change.
  const handleAnimationChange = (isToAnimate: boolean) => {
    setIsAnimated(isToAnimate);
    if (isToAnimate) {
      // Store the toggle value in the local storage, for next page reload
      localStorage.setItem("skillsAnimated", "true");
    } else {
      // Store the toggle value in the local storage, for next page reload
      localStorage.setItem("skillsAnimated", "false");
    }
  };

  // Check if the animation was turned off from the user localStorage
  useEffect(() => {
    const lastAnimationStatus = localStorage.getItem("skillsAnimated");
    if (lastAnimationStatus === "false") {
      setIsAnimated(false);
    } else {
      setIsAnimated(true);
    }
  }, []);

  // Shuffle the order of the skill lists.
  useEffect(() => {
    if (isAnimated) {
      // If is to animate, shuffle the lists.
      const timeout = setTimeout(() => {
        setOrderProgrammingLanguages(shuffle(orderProgrammingLanguages));
        setOrderFrameworks(shuffle(orderFrameworks));
        setOrderDsAndVisualization(shuffle(orderDsAndVisualization));
        setOrderOsAndTools(shuffle(orderOsAndTools));
      }, 1500);

      return () => clearTimeout(timeout);
    } else {
      // Otherwise reset to the original order of the skills in the lists when the animation is turned off.
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

        {/* Render the skills rows */}
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
