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

// Collection of the personal project that are rendered in the Projects section.
export const projects: projectType[] = [
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
      "https://github.com/AlessandroCaula/protein_loop_reconstruction_CCD_pipeline",
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
  {
    id: 5,
    title: "FullStack Open Projects",
    description:
      "Completed a range of full-stack applications covering modern frontend and backend concepts, focusing on scalability and clean design.",
    technologies: ["JavaScript", "TypeScript", "React"],
    image: "FullStackOpen",
    github: "https://github.com/AlessandroCaula/fullstack-open",
  },
  {
    id: 6,
    title: "Sorting Algorithm Visualizer",
    description:
      "Created a visual tool to compare sorting algorithms through live animations, breaking them down into visual step.",
    technologies: ["C#", "WinForms"],
    image: "AlgorithmVisualizer",
    github:
      "https://github.com/AlessandroCaula/SortingAlgorithmVisualizer/tree/master",
  },
];
