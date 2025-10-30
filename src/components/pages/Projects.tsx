import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ClosedProjectCard from "../common/ClosedProjectCard";
import OpenProjectCard from "../common/OpenProjectCard";
import { projects } from "../../data/personalProjects";
import VerticalAnimatedCardWrapper from "../common/VerticalAnimatedCardWrapper";

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Function used to find the clicked project that has to be rendered as an open project card.
  const openedProject = () => {
    const project = projects.find((proj) => proj.id === selectedId);

    if (!project) {
      return;
    } else {
      return (
        // Render the open project card
        <OpenProjectCard
          key={project.id}
          id={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          github={project.github}
          demo={project.demo}
          onClick={setSelectedId}
        />
      );
    }
  };

  return (
    <div className="pt-15">
      <h2 className="text-center font-lato text-4xl">Projects</h2>

      <div className="grid gris-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 mr-4 ml-4 mt-4">
        {/* Closed Cards */}
        {projects.map((project) => (
          <VerticalAnimatedCardWrapper className="flex">
            <ClosedProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              onClick={setSelectedId}
            />
          </VerticalAnimatedCardWrapper>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <div>
            {/* Dimmed background */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-150"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />

            {/* Expanded card */}
            {openedProject()}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
