import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ClosedProjectCard from "../custom/ClosedProjectCard";
import OpenProjectCard from "../custom/OpenProjectCard";
import type { projectImages } from "@/assets/projects-images";

interface projectType {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: keyof typeof projectImages;
  github: string;
  demo: string;
}

const projects: projectType[] = [
  {
    id: 1,
    title: "FreeScribe",
    description:
      "A web app for audio recording and transcription using OpenAI's Whisper model, running fully in the browser with local Web Workers.",
    technologies: ["JavaScript", "React", "HTML", "CSS"],
    image: "FreeScribe",
    github:
      "https://github.com/AlessandroCaula/web-projects/tree/main/free-scribe_react-js",
    demo: "https://freescribe-ac.netlify.app/",
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="pt-15">
      <h2 className="text-center font-lato text-4xl">Projects</h2>

      <div className="grid gris-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 mr-4 ml-4 mt-4">

        {projects.map((project) => (
          <ClosedProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            onClick={setSelectedId}
          />
        ))}

        <div className="card-style m-4">Prova</div>
        <div className="card-style m-4">Prova</div>
        <div className="card-style m-4">Prova</div>
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
            {projects.map((project) => (
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
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
