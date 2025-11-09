import { motion } from "motion/react";
import TechPill from "./TechPill";
import type { ClosedProjectCardProps } from "@/types";

// Component used for the closed cards project
// 
const ClosedProjectCard = ({
  id,
  title,
  description,
  technologies,
  onClick,
}: ClosedProjectCardProps) => {
  return (
    <motion.div
      key={id}
      layoutId={`card-${id}`}
      className="card-style hover:ring-secondary/70 m-4 cursor-pointer pb-6"
      onClick={() => onClick(id)}
    >
      <div className="flex flex-col justify-between">
        {/* Title and Description */}
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="mt-4 font-light">{description}</p>
        </div>
        {/* Technologies pills used in the project */}
        <div className="flex flex-row mt-6 gap-x-2 gap-y-2 flex-wrap">
          {technologies.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClosedProjectCard;
