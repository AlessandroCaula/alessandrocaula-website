import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface props {
  icon: string;
  title: string;
  text: React.ReactNode;
  link?: string;
}

const AboutCard = ({ icon, title, text, link = "" }: props) => {
  return (
    <div className="about-card">
      <div className="flex flex-row space-x-4">
        <div className="icon-card">{icon}</div>
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
