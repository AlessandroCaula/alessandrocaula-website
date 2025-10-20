/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Initialize state from localStorage
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  // Apply the dark class to document element when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      // Saving the theme in the local storage.
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      // Saving the theme in the local storage.
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
