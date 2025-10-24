import { BsGithub, BsLinkedin } from "react-icons/bs";
import LightModeProfilePic from "../../assets/Web_Light_Mode.jpeg";
import DarkModeProfilePic from "../../assets/Web_Dark_Mode.jpeg";
import SocialButton from "../custom/SocialButton";
import { SiGmail } from "react-icons/si";
import { GrDocumentPdf } from "react-icons/gr";
import { useTheme } from "@/context/ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDownCircleIcon } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import toast from "react-hot-toast";

const Home = () => {
  const { isDark } = useTheme();
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const { scrollDirection, scrollY } = useScrollDirection();

  useEffect(() => {
    if (scrollDirection === "down" && scrollY > 100) setShowArrow(false);
    console.log(showArrow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY, scrollDirection]);

  const copyToClipboard = (email: string) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Copied to clipboard", {
          style: {
            borderRadius: "50px",
            background: "#fff",
            color: "#333",
          },
        });
      })
      .catch((err: unknown) => {
        console.log("Failed to copy", err);
        toast("Failed to copy the Email. Go in the contact section", {
          icon: "✖️",
          style: {
            borderRadius: "50px",
            background: "#fff",
            color: "#333",
          },
        });
      });
  };

  return (
    <div className="flex-center flex-col margin-top pb-8">
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
            className="font-inter sm:mt-8 mt-6 font-light text-orange-500"
          />
        )}
      </div>

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
          onClick={() =>
            window.open("/public/Alessandro_Caula_CV.pdf", "_blank")
          }
        />
      </div>

      {/* Scrolling down arrow */}
      {showArrow && (
        <motion.div
          initial={{ opacity: 0.2, y: -5 }}
          animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          viewport={{ once: true }}
          className="absolute bottom-5 left-1/2 -translate-x-1 "
        >
          <ArrowDownCircleIcon className="text-slate-400" />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
