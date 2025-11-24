import { BsGithub, BsLinkedin } from "react-icons/bs";
import LightModeProfilePic from "../../assets/Web_Light_Mode.jpeg";
import DarkModeProfilePic from "../../assets/Web_Dark_Mode.jpeg";
import SocialButton from "../common/SocialButton";
import { SiGmail } from "react-icons/si";
import { GrDocumentPdf } from "react-icons/gr";
import { useTheme } from "@/context/ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDownCircleIcon } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import toast from "react-hot-toast";
import MagneticFilings from "../MagneticFiling";

const Home = () => {
  const { isDark } = useTheme();
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const { scrollDirection, scrollY } = useScrollDirection();

  // Based on the Y scrolling position, show a down arrow to show the user to go down in the page.
  useEffect(() => {
    if (scrollDirection === "down" && scrollY > 100) setShowArrow(false);
  }, [scrollY, scrollDirection]);

  // Toast to show the animation popup when the user clicks the email button contact.
  const copyToClipboard = (email: string) => {
    const backgroundColor = "#ffffff"; // isDark ? "#1e1e1e" : 
    const textColor = "#1e1e1e"; // isDark ? "#ffffff" :
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Copied to clipboard", {
          style: {
            borderRadius: "50px",
            background: backgroundColor, //"#fff",
            color: textColor, //"#333",
          },
        });
      })
      .catch((err: unknown) => {
        console.log("Failed to copy", err);
        toast("Failed to copy the Email. Go in the contact section", {
          icon: "✖️",
          style: {
            borderRadius: "50px",
            background: backgroundColor, //"#fff",
            color: textColor, //"#333",
          },
        });
      });
  };

  return (
    <div className="relative pb-25">
      {/* Remove this for removing magnetic filing */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-screen z-0">
        <MagneticFilings />
      </div>

      <div className="flex-center flex-col margin-top pb-8">
        <img
          className="w-68 custom-shadow rounded-full max-sm:w-56 z-10"
          src={isDark ? DarkModeProfilePic : LightModeProfilePic}
          alt="Alessandro Caula Picture"
        />

        {/* Animate text */}
        <div className="flex gap-2">
          <TypeAnimation
            sequence={["Hi!", () => setShowFirstLine(true)]}
            wrapper="h1"
            speed={40}
            cursor={false}
            repeat={0} // Avoid looping
            className="sm:mt-18 mt-12 z-20 text-secondary font-bold"
          />
          {showFirstLine && (
            <TypeAnimation
              sequence={["I'm Alessandro Caula", () => setShowSecondLine(true)]}
              wrapper="h1"
              speed={40}
              cursor={false}
              repeat={0} // Avoid looping
              className="sm:mt-18 mt-12 z-20"
            />
          )}
        </div>
        {/* Second line animation */}
        {/* Container that reserves the space for the second line animation */}
        <div className="h-[calc(2em+0.5rem)] sm:h-[calc(2.5em+0.5rem)] md:h-[calc(3em+0.5rem)] z-20">
          {showSecondLine && (
            <TypeAnimation
              sequence={["Software Developer and Bioinformatician", 500]}
              wrapper="h2"
              speed={50}
              cursor={false}
              repeat={0} // Avoid looping
              className="font-inter sm:mt-8 mt-6 font-light"
            />
          )}
        </div>

        {/* Render the buttons for the contacts and "socials" */}
        <div className="mt-25 w-full flex-center sm:space-x-4 md:space-x-8 max-sm:flex-col max-sm:space-y-8 max-sm:px-8">
          <SocialButton
            icon={<BsLinkedin className={!isDark ? "text-[#0967C2]" : ""} />}
            label="LinkedIn"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/alessandro-caula-25a20418a/",
                "_blank"
              )
            }
          />
          <SocialButton
            icon={<BsGithub />}
            label="GitHub"
            onClick={() =>
              window.open("https://github.com/AlessandroCaula", "_blank")
            }
          />
          <SocialButton
            icon={<SiGmail className={!isDark ? "text-[#EA4336]" : ""} />}
            label="Email"
            // onClick={() => (window.location.href = "mailto:alecaula96@gmail.com")}
            onClick={() => copyToClipboard("alecaula96@gmail.com")}
          />
          <SocialButton
            icon={<GrDocumentPdf />}
            label="CV"
            onClick={() => window.open("/Alessandro_Caula_CV.pdf", "_blank")}
          />
        </div>

        {/* Scrolling down arrow */}
        {showArrow && (
          <motion.div
            initial={{ opacity: 0.2, y: -5 }}
            animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            viewport={{ once: true }}
            className="absolute bottom-7 left-1/2 -translate-x-1 "
          >
            <ArrowDownCircleIcon className="text-slate-400" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;
