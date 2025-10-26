import { projectImages } from "@/assets/projects-images";
import { MoveRight, X } from "lucide-react";
import { motion } from "motion/react";

interface props {
  id: number;
  image: keyof typeof projectImages;
  title: string;
  description: string;
  github: string;
  demo: string;
  onClick: React.Dispatch<React.SetStateAction<number | null>>;
}

const OpenProjectCard = ({
  id,
  image,
  title,
  description,
  github,
  demo,
  onClick,
}: props) => {
  return (
    <motion.div
      layoutId={`card-${id}`}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 md:w-2/3 lg:w-1/2 bg-background rounded-xl z-160 flex flex-col"
    >
      <div>
        <img src={projectImages[image]} className="rounded-t-xl h-84" />
        <X
          className="absolute top-2 right-2 opacity-50 cursor-pointer"
          onClick={() => onClick(null)}
        />
        <div className="px-8 mt-4 flex flex-col">
          <h3 className="text-xl font-extrabold mb-4">{title}</h3>
          <p>{description}</p>
          <div className="flex flex-row gap-6">
            <button className="project-button-links">
              <a href={github} target="_blank">
                GitHub
                <MoveRight className="w-5" />
              </a>
            </button>
            <button className="project-button-links">
              <a href={demo}>
                Demo
                <MoveRight className="w-5" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OpenProjectCard;
