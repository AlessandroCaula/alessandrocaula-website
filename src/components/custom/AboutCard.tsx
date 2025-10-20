import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface props {
  icon?: string;
  imgPath?: string;
  title: string;
  text: React.ReactNode;
  link?: string;
}

const AboutCard = ({ icon, imgPath, title, text, link = "" }: props) => {
  return (
    <div className="about-card custom-cursor">
      <div className="flex flex-row space-x-4">
        {imgPath ? (
          <img src={imgPath} className="icon-card p-1" />
        ) : (
          <div className="icon-card">{icon}</div>
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
