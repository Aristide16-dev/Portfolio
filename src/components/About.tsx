import Title from "./Title";

import profileImage from "../assets/moi.webp";

import { motion } from "framer-motion";
import {
  CalendarSync,
  LetterText,
  Paintbrush,
  TabletSmartphone,
} from "lucide-react";

const About = () => {
  const aboutSections = [
    {
      id: 1,

      title: "Développeur Frontend",

      description: "Je suis un développeur frontend avec une bonne base.",

      icon: <LetterText className="text-accent scale-150" />,
    },

    {
      id: 2,

      title: "Développeur Backend",

      description:
        "Je maîtrise les bases du développement backend pour créer des APIs robustes.",

      icon: <CalendarSync className="text-accent scale-150" />,
    },

    {
      id: 3,

      title: "Passionné par l'UI/UX",

      description:
        "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",

      icon: <Paintbrush className="text-accent scale-150" />,
    },
    {
      id: 4,

      title: "Développeur Mobile",

      description:
        "Je maîtrise les bases du développement mobile pour créer des applications robustes.",

      icon: <TabletSmartphone className="text-accent scale-150" />,
    },
  ];

  return (
    <div id="about" className="p-10 bg-base-300 mb-13 md:mb-10 ">
      <Title title="À propos" />

      <div className="flex flex-col md:flex-row justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden md:block"
        >
          <img
            src={profileImage}
            alt=""
            className="w-full max-w-md object-cover rounded-2xl h-[400px] shadow-2xl"
          />
        </motion.div>

        <div className="md:ml-4 space-y-2">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-full shadow-xl"
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>

              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>

                <p className="text-sm">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
