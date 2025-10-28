import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedCardWrapper from "./VerticalAnimatedCardWrapper";

interface props {
  icon?: string;
  imgPath?: string;
  title: string;
  text: React.ReactNode;
  link?: string;
}

const AboutCard = ({ icon, imgPath, title, text, link = "" }: props) => {
  // Hook for the custom cursor
  const [customCursor, setCustomCursor] = useState(false);

  return (
    <AnimatedCardWrapper className={`card-style ${customCursor ? "custom-cursor" : ""}`}>
      <div className="grid grid-cols-[1fr_2fr_1fr] grid-rows-1 items-center">
        <div className="flex justify-start items-center">
          {/* Change the cursor appearance when the user click on the koala button. The cursor become the koala */}
          {imgPath && !customCursor ? (
            <img
              src={imgPath}
              onClick={() => setCustomCursor((prev) => !prev)}
              className={`icon-card p-1 mb-6 ${
                customCursor ? "custom-cursor" : "cursor-pointer"
              }`}
            />
          ) : imgPath && customCursor ? (
            <div className={`icon-card p-1 mb-6 ${
                customCursor ? "custom-cursor" : "cursor-pointer"
              }`} onClick={() => setCustomCursor((prev) => !prev)}></div>
          ) : (
            <div className="icon-card cursor-pointer">{icon}</div>
          )}
        </div>
        <h2 className="title">{title}</h2>
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
