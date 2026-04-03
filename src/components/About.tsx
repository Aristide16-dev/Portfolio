import Title from "./Title";

import profileImage from "../assets/photo_ia-removebg-preview.png";

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
    <div
      id="about"
      className="p-10 bg-base-300 mb-10 md:mb-32 animate-on-scroll"
    >
      <Title title="À propos" />

      <div className="flex flex-col md:flex-row justify-center">
        <div className="hidden md:block">
          <img
            src={profileImage}
            alt=""
            className="w-full max-w-md object-cover rounded-2xl"
          />
        </div>

        <div className="md:ml-4 space-y-2">
          {aboutSections.map((section, index) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-full shadow-xl animate-on-scroll"
              data-animate-delay={index * 100}
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>

              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>

                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
