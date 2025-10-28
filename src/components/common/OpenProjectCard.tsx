import { projectImages } from "@/assets/projects-images";
import { MoveRight, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

interface props {
  id: number;
  image?: keyof typeof projectImages | null;
  title: string;
  description: string;
  github: string;
  demo?: string;
  onClick: React.Dispatch<React.SetStateAction<number | null>>;
}

const OpenProjectCard = ({
  id,
  image = null,
  title,
  description,
  github,
  demo,
  onClick,
}: props) => {
  // Closing the opened project card when the esc button is clicked.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // If the clicked key is the Escape button, close the open card.
      if (event.key === "Escape") {
        onClick(null);
      }
    };
    // Add the event listener to the keyboard key down.
    window.addEventListener("keydown", handleKeyDown);
    // Remove the event listener.
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <motion.div
      layoutId={`card-${id}`}
      className="flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-11/20 sm:h-2/3 md:w-2/3 lg:w-2/5 bg-background rounded-xl z-160"
    >
      {/* Rendering the image of the project */}
      <div className="relative">
        {image ? (
          <img
            src={projectImages[image]}
            className="rounded-t-xl h-45 sm:h-84 w-full"
          />
        ) : (
          <div className="h-62 sm:h-84" />
        )}
        <X
          className="absolute top-2 right-2 text-slate-400 cursor-pointer"
          onClick={() => onClick(null)}
        />
      </div>
      
      {/* Rendering the title and the description of the project */}
      <div className="px-8 py-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-extrabold max-sm:mb-3 mb-8 sm:mb-2">
            {title}
          </h3>
          <p>{description}</p>
        </div>
        
        {/* Rendering the buttons for GitHub repos and live demos */}
        <div className="flex flex-row gap-6 mb-2">
          <button className="project-button-links">
            <a href={github} target="_blank">
              GitHub
              <MoveRight className="w-5" />
            </a>
          </button>
          {demo && (
            <button className="project-button-links">
              <a href={demo} target="_blank">
                Demo
                <MoveRight className="w-5" />
              </a>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default OpenProjectCard;
