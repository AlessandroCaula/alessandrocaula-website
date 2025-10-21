import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    // <div className="about-card custom-cursor">
    <div className={`about-card ${customCursor ? "custom-cursor" : ""}`}>
      <div className="flex flex-row space-x-4">
        {imgPath ? (
          <img
            src={imgPath}
            onClick={() => setCustomCursor((prev) => !prev)}
            className={`icon-card p-1 ${
              customCursor ? "custom-cursor" : "cursor-pointer"
            }`}
          />
        ) : (
          <div className="icon-card cursor-pointer">{icon}</div>
        )}
        <h2>{title}</h2>
      </div>
      {text}
      {link !== "" && (
        <div className="flex justify-end">
          <Link to={link}>
            <ExternalLink />
          </Link>
        </div>
      )}
    </div>
  );
};

export default AboutCard;
