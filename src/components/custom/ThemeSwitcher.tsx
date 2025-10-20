import { useTheme } from "@/context/ThemeContext";
import AwakeKoala from "../../assets/Awake_Koala.png";
import SleepyKoala from "../../assets/Sleepy_Koala.png";

const ThemeSwitcher = () => {
  const { isDark, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className={`theme-switch ${isDark ? "bg-background shadow-[0px_2px_8px_#881FFF]" : "bg-slate-300 shadow-[0px_2px_8px_#FFE9A6]"}`}
    >
      <div
        className={`absolute top-0 left-1 w-6 h-6 rounded-full flex-center transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <img className="w-7" src={AwakeKoala} />
        ) : (
          <img className="w-7" src={SleepyKoala} />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
