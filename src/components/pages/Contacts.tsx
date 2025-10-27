import { MailIcon } from "lucide-react";
import MeAndPiseLight from "../../assets/MeAndPise-light.jpeg";
import MeAndPiseDark from "../../assets/MeAndPise-dark.jpeg";
import { useTheme } from "@/context/ThemeContext";

const Contacts = () => {
  const { isDark } = useTheme();

  return (
    <div className="mt-20 mx-8 flex sm:flex-row justify-between items-center">
      <div className="flex flex-col gap-13">
        <h2 className="font-lato font-bold text-4xl sm:text-5xl">
          Wanna get in touch?
        </h2>
        <div className="flex flex-row items-center gap-x-5">
          <MailIcon className="text-orange-400" />
          <a
            href="mailto:alecaula@gmail.com"
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
          src={isDark ? MeAndPiseDark : MeAndPiseLight}
          className="sm:w-40 md:w-45 rounded-full max-sm:hidden shadow-xl"
        />
      </div>
    </div>
  );
};

export default Contacts;
