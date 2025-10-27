import { useEffect, useState } from "react";
import ThemeSwitcher from "./common/ThemeSwitcher";
import {
  Sheet,
  SheetClose,
  // SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ArrowUpCircle, Menu } from "lucide-react";
// import { BiLeftArrowCircle } from "react-icons/bi";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Nav = () => {
  // Use state that will check if the navBar needs to be visible or not
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrollDirection, scrollY } = useScrollDirection();

  useEffect(() => {
    if (scrollY === 0 || scrollDirection === "up") {
      setIsNavVisible(true);
    } else if (scrollDirection === "down" && scrollY > 50) {
      setIsNavVisible(false);
    }
  }, [scrollY, scrollDirection]);

  const navLinks = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#skills", label: "Skills" },
    // { to: "#studies", label: "Studies" },
    { to: "#experiences", label: "Experiences" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`nav-bar ${isNavVisible ? "show" : "hide"}`}>
      {/* Desktop menu */}
      <div className="links hidden sm:flex">
        {navLinks.map((link) => (
          // With Vertical Scrolling
          <a key={link.to} href={link.to}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="sm:hidden">
          <button className="text-background cursor-pointer">
            <Menu className="ml-5 h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="top" className="bg-foreground border-foreground z-300">
          {/* Hiding the "required" SheetTitle and SheetDescription */}
          <SheetTitle className="text-foreground m-0 p-0 text-[0px]">
            Menu
          </SheetTitle>
          <SheetDescription className="text-foreground m-0 p-0 text-[0px]">
            Navigate through the sections of the site
          </SheetDescription>

          {/* Close button */}
          <SheetClose className="absolute bottom-8 right-8 text-background cursor-pointer rounded-2xl">
            <ArrowUpCircle className="h-6 w-6" />
          </SheetClose>
          {/* Vertical Scrolling */}
          <div className="flex flex-col space-y-6 mt-5 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-background text-lg font-lato ml-8"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex-center space-x-3">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Nav;
