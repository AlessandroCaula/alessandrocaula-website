import { MailIcon } from "lucide-react";
import MeAndPiseLight from "../../assets/MeAndPise-light.jpeg";
import MeAndPiseDark from "../../assets/MeAndPise-dark.jpeg";
import { useTheme } from "@/context/ThemeContext";
import MagneticFilings from "../MagneticFiling";

// Final Contacts Section of the portfolio.
// 
const Contacts = () => {
  const { isDark } = useTheme();

  return (
    <div className="pt-20 mx-8 flex sm:flex-row justify-between items-center relative pb-20">

      {/* Remove this for removing magnetic filing */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-screen z-0">
        <MagneticFilings />
      </div>

      <div className="flex flex-col gap-13">
        <h2 className="font-lato font-bold text-4xl sm:text-5xl">
          Wanna get in touch?
        </h2>
        <div className="flex flex-row items-center gap-x-5">
          <MailIcon className="text-orange-400" />
          <a
            href="mailto:alecaula96@gmail.com"
            className="relative group text-foreground underline text-2xl hover:text-orange-400 w-fit font-roboto"
          >
            alecaula96@gmail.com
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background text-foreground text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl ring-1 ring-slate-500/40">
              Email me
            </span>
          </a>
        </div>
      </div>
      <div>
        <img
          src={isDark ? MeAndPiseDark : MeAndPiseLight}   // Change the image based on the theme (dark or light)
          className="sm:w-40 md:w-45 rounded-full max-sm:hidden shadow-xl"
        />
      </div>
    </div>
  );
};

export default Contacts;
