import { techColorCodes } from "@/lib/techColors";

interface props {
  tech: string
}

const TechPill = ({ tech }: props) => {
  const hexToRgba = (hex: string, alpha: number = 0.8): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  const retrieveColorFromTech = (tech: string): string => {
    const hexColor: string | null = techColorCodes[tech];
    return hexColor ? hexToRgba(hexColor, 0.7) : "#AEAEAE" // Fallback - Return gray if not color has been found
  }

  const pillColor = retrieveColorFromTech(tech)

  return (
    <div className="px-2 py-1 rounded-full opacity-90" style={{ backgroundColor: pillColor }}>
      <p className="text-foreground">{tech}</p>
    </div>
  )
}

export default TechPill