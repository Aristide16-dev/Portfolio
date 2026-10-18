import { MonitorSmartphone } from "lucide-react";
// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
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
    </motion.div>
  );
};

export default Navbar;
