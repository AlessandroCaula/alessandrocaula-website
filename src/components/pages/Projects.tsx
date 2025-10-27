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
  image?: keyof typeof projectImages | null;
  github: string;
  demo?: string;
}

const projects: projectType[] = [
  {
    id: 1,
    title: "FreeScribe",
    description:
      "A web app for audio recording and transcription using OpenAI's Whisper model, running fully in the browser with local Web Workers.",
    technologies: ["JavaScript", "HTML", "CSS", "React"],
    image: "FreeScribe",
    github:
      "https://github.com/AlessandroCaula/web-projects/tree/main/free-scribe_react-js",
    demo: "https://freescribe-ac.netlify.app/",
  },
  {
    id: 2,
    title: "Protein Reconstruction Loop",
    description:
      "Developed a pipeline to identify and model missing loops in protein structures using CCD-based backbone reconstruction.",
    technologies: ["Python", "NumPy", "Biopython"],
    image: "ProteinLoopReconstruction",
    github:
      "https://github.com/AlessandroCaula/web-projects/tree/main/free-scribe_react-js",
  },
  {
    id: 3,
    title: "Game of Life",
    description:
      "Designed an interactive version of Conway's Game of Life with customizable controls, visual effects, and optimized updates for large grids",
    technologies: ["C#", "WinForms", "DevExpress"],
    image: "GameOfLife",
    github: "https://github.com/AlessandroCaula/GameOfLife",
  },
  {
    id: 4,
    title: "Movies App",
    description:
      "A web app to search and browse trending movies, featuring optimized queries, a responsive interface, and integrated backend data management.",
    technologies: ["JavaScript", "TailwindCSS", "React"],
    image: "MoviesApp",
    github:
      "https://github.com/AlessandroCaula/web-projects/tree/main/movies_react-js",
    demo: "https://movie-ac.netlify.app/",
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const openedProject = () => {
    const project = projects.find((proj) => proj.id === selectedId);

    if (!project) {
      return;
    } else {
      return (
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
          <ClosedProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            onClick={setSelectedId}
          />
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
