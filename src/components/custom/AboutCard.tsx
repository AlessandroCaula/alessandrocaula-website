import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div 
      className={`about-card ${customCursor ? "custom-cursor" : ""}`}
      initial={{ opacity: 0, y: 50 }}   // The card starts invisible and shifted 50px down.
      whileInView={{ opacity: 1, y: 0 }}  // When the card scrolls into view, it fades in and slides up.
      transition={{ duration: 0.7, ease: "easeOut" }} // Defines the timing curve.
      viewport={{ once: true, amount:0.3 }} // Means the animation triggers once, when 30% of the card enters the viewport. So it doesn't re-trigger when scrolling up and down.
    >
      <div className="grid grid-cols-3 grid-rows-1 items-center">
        <div className="flex justify-start items-center">
          {imgPath ? (
            <img
              src={imgPath}
              onClick={() => setCustomCursor((prev) => !prev)}
              className={`icon-card p-1 mb-1 ${
                customCursor ? "custom-cursor" : "cursor-pointer"
              }`}
            />
          ) : (
            <div className="icon-card cursor-pointer">{icon}</div>
          )}
        </div>
        <h2 className="text-center">{title}</h2>
      </div>

      {text}

      {link !== "" && (
        <div className="flex justify-end">
          <Link to={link}>
            <ExternalLink />
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default AboutCard;
