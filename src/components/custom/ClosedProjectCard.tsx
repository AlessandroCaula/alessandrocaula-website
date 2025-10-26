import { motion } from "motion/react";
import TechPill from "./TechPill";

interface props {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  onClick: React.Dispatch<React.SetStateAction<number | null>>;
}

const ClosedProjectCard = ({
  id,
  title,
  description,
  technologies,
  onClick,
}: props) => {
  return (
    <motion.div
      key={id}
      layoutId={`card-${id}`}
      className="card-style m-4 cursor-pointer pb-6"
      onClick={() => onClick(id)}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="mt-4 font-light">{description}</p>
        </div>
        <div className="flex flex-row mt-6 gap-x-1 gap-y-1 flex-wrap">
          {technologies.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClosedProjectCard;
