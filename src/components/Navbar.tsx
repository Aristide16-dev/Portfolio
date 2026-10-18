import { MonitorSmartphone, Moon, Sun } from "lucide-react";
// import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  // const [theme, setTheme] = useState("business");

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme") || "business";
  //   setTheme(savedTheme);
  //   document.documentElement.setAttribute("data-theme", savedTheme);
  // }, []);

  // const toggleTheme = () => {
  //   const newTheme = theme === "business" ? "dark" : "business";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme);
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar-initial flex justify-center md:justify-between items-center p-4 relative"
    >
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

      {/* <button
        onClick={toggleTheme}
        className="btn btn-md btn-ghost absolute top-[-16px] right-[-25px] md:right-[-130px]"
        aria-label="Basculer le thème"
      >
        {theme === "light" ? (
          <Moon className="w-10 h-10" />
        ) : (
          <Sun className="w-10 h-10" />
        )}
      </button> */}
    </motion.div>
  );
};

export default Navbar;
