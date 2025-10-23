import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cardVariants } from "@/animations/variants";

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
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.2 }}
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
        <h2 className="text-center max-sm:text-[25px]">{title}</h2>
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
