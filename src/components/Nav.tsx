import { useEffect, useState } from "react";
import ThemeSwitcher from "./custom/ThemeSwitcher";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { BiLeftArrowCircle } from "react-icons/bi";

const Nav = () => {
  // Use state that will check if the navBar needs to be visible or not
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsNavVisible(true);
      } else if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    // Adding the even to the scroll action
    window.addEventListener("scroll", handleScroll);
    // Run when unmount, unsubscribe from the scroll action
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#studies", label: "Studies" },
    { to: "#experiences", label: "Experiences" },
    { to: "#projects", label: "Projects" },
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
        <SheetContent side="left" className="bg-foreground border-foreground">
          {/* Hiding the "required" SheetTitle and SheetDescription */}
          <SheetTitle className="text-foreground m-0 p-0 text-[0px]">
            Menu
          </SheetTitle>
          <SheetDescription className="text-foreground m-0 p-0 text-[0px]">
            Navigate through the sections of the site
          </SheetDescription>

          {/* Close button */}
          <SheetClose className="absolute bottom-8 right-8 text-background cursor-pointer">
            <BiLeftArrowCircle className="h-8 w-9" />
          </SheetClose>
          {/* Vertical Scrolling */}
          <div className="flex flex-col space-y-6 margin-top">
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
