import type { projectImages } from "@/assets/projects-images";
import type { ReactNode } from "react";

export interface AboutCardProps {
  icon?: string;
  imgPath?: string;
  title: string;
  text: React.ReactNode;
  link?: string;
}

export interface ClosedProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  onClick: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface CustomStandardSwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export interface ExperienceCardProps {
  role: string;
  period: string;
  company: string;
  description: ReactNode;
  skills: string[];
  link?: string;
  xInitialOffset: number;
}

export interface HorizontalAnimatedCardWrapperProps {
  children: ReactNode;
  xInitialOffset: number;
}

export interface OpenProjectCardProps {
  id: number;
  image?: keyof typeof projectImages | null;
  title: string;
  description: string;
  github: string;
  demo?: string;
  onClick: React.Dispatch<React.SetStateAction<number | null>>;
}

type icons = {src: string, name: string}

export interface SkillsIconsRowProps {
  title: string;
  icons: icons[];
}

export interface SocialButtonProps {
  icon?: React.ReactNode;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface TechPillProps {
  tech: string;
}

export interface VerticalAnimatedCardWrapperProps {
  children: ReactNode;
  className?: string;
}