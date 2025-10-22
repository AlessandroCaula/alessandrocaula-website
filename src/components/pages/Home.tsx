import { BsGithub, BsLinkedin } from "react-icons/bs";
import LightModeProfilePic from "../../assets/Web_Light_Mode.jpeg";
import DarkModeProfilePic from "../../assets/Web_Dark_Mode.jpeg";
import SocialButton from "../custom/SocialButton";
import { SiGmail } from "react-icons/si";
import { GrDocumentPdf } from "react-icons/gr";
import { useTheme } from "@/context/ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Home = () => {
  const { isDark } = useTheme();
  const [showSecondLine, setShowSecondLine] = useState(false);

  return (
    <div className="flex-center flex-col margin-top">
      <img
        className="w-68 custom-shadow rounded-full max-sm:w-56"
        src={isDark ? DarkModeProfilePic : LightModeProfilePic}
        alt="Alessandro Caula Picture"
      />

      {/* Animate text */}
      <TypeAnimation
        sequence={["Hi! I'm Alessandro Caula", () => setShowSecondLine(true)]}
        wrapper="h1"
        speed={40}
        cursor={false}
        repeat={0} // Avoid looping
        className="sm:mt-18 mt-12"
      />
      {/* Second line animation */}
      {/* Container that reserves the space for the second line animation */}
      <div className="h-[calc(2em+0.5rem)] sm:h-[calc(2.5em+0.5rem)] md:h-[calc(3em+0.5rem)]">
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

      <div className="mt-14 sm:mt-20 w-full flex-center sm:space-x-4 md:space-x-8 max-sm:flex-col max-sm:space-y-4 max-sm:px-8">
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
          onClick={() => (window.location.href = "mailto:alecaula96@gmail.com")}
        />
        <SocialButton
          icon={<GrDocumentPdf />}
          label="CV"
          onClick={() =>
            window.open("/public/Alessandro_Caula_CV.pdf", "_blank")
          }
        />
      </div>
    </div>
  );
};

export default Home;
