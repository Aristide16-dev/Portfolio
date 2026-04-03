import { MonitorSmartphone, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="navbar-initial flex justify-center md:justify-between items-center p-5 relative">
      <div>
        <a href="#home" className="font-bold text-2xl flex">
          <MonitorSmartphone className="w-10 h-10" />
          Aris<span className="text-accent">Dev</span>
        </a>
      </div>
      <ul className="hidden md:flex md:space-x-3">
        <li>
          <a href="#home" className="btn btn-md btn-ghost">
            Accueil
          </a>
        </li>
        <li>
          <a href="#about" className="btn btn-md btn-ghost">
            À propos
          </a>
        </li>
        <li>
          <a href="#competences" className="btn btn-md btn-ghost">
            Compétences
          </a>
        </li>
        <li>
          <a href="#projects" className="btn btn-md btn-ghost">
            Projets
          </a>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className="btn btn-md btn-ghost absolute top-[-16px] right-[-25px] md:right-[-130px]"
        aria-label="Basculer le thème"
      >
        {theme === "light" ? (
          <Moon className="w-10 h-10" />
        ) : (
          <Sun className="w-10 h-10" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
