import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { motion } from "motion/react";
// import { cardVariants } from "@/animations/variants";
import AnimatedCardWrapper from "./AnimatedCardWrapper";

interface props {
  icon?: string;
  imgPath?: string;
  title: string;
  text: React.ReactNode;
  link?: string;
}

const AboutCard = ({ icon, imgPath, title, text, link = "" }: props) => {
  const [customCursor, setCustomCursor] = useState(false);

  return (
    <AnimatedCardWrapper className={`about-card ${customCursor ? "custom-cursor" : ""}`}>
      <div className="grid grid-cols-3 grid-rows-1 items-center">
        <div className="flex justify-start items-center">
          {imgPath && !customCursor ? (
            <img
              src={imgPath}
              onClick={() => setCustomCursor((prev) => !prev)}
              className={`icon-card p-1 mb-1 ${
                customCursor ? "custom-cursor" : "cursor-pointer"
              }`}
            />
          ) : imgPath && customCursor ? (
            <div className="icon-card p-1 mb-1" onClick={() => setCustomCursor((prev) => !prev)}></div>
          ) : (
            <div className="icon-card cursor-pointer">{icon}</div>
          )}
        </div>
        <h2 className="text-center font-lato text-4xl">{title}</h2>
      </div>

      {text}

      {link !== "" && (
        <div className="flex justify-end">
          <Link to={link}>
            <ExternalLink />
          </Link>
        </div>
      )}
    </AnimatedCardWrapper>
  );
};

export default AboutCard;
