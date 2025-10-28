import { techColorCodes } from "@/lib/techColors";

interface props {
  tech: string;
}

// Convert tech colors from hex values to rgba. This is used in order to be able to give some transparency to the colors.
const TechPill = ({ tech }: props) => {
  const hexToRgba = (hex: string, alpha: number = 0.8): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Retrieving the colors of the technologies used in the projects.
  const retrieveColorFromTech = (tech: string): string => {
    const hexColor: string | null = techColorCodes[tech];
    // Return gray if not color has been found.
    return hexColor ? hexToRgba(hexColor, 0.7) : "#AEAEAE";
  };

  const pillColor = retrieveColorFromTech(tech);

  return (
    <div
      className="px-3 py-1 rounded-full opacity-90"
      style={{ backgroundColor: pillColor }}
    >
      <p className="text-foreground">{tech}</p>
    </div>
  );
};

export default TechPill;
