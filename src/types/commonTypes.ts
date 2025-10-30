import type { projectImages } from "@/assets/projects-images";

export interface Line {
  x: number; // Central x coordinate of the line
  y: number; // Central y coordinate of the line
  length: number;
  angle: number;
}

export interface projectType {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: keyof typeof projectImages | null;
  github: string;
  demo?: string;
}