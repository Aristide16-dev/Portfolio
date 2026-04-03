import Title from "./Title";

import imgCSS from "../assets/css.png";

import imgJS from "../assets/js.png";

import imgREACT from "../assets/react.png";

import imgHTML from "../assets/html.png";

import imgNEXT from "../assets/next-js.webp";

import imgNODE from "../assets/node-js.png";

import imgTYPE from "../assets/js.png";

import imgTAILWIND from "../assets/tailwind.png";

import imgPRISMA from "../assets/prisma.webp";

import imgDjango from "../assets/Django.jpg";

import imgPython from "../assets/Python.jpg";

import imgREACTNative from "../assets/React-Native.jpg";

import imgDaisyUI from "../assets/DaisyUI.png";

const Competences = () => {
  const skills = [
    { id: 1, name: "HTML", image: imgHTML },

    { id: 2, name: "CSS", image: imgCSS },

    { id: 3, name: "JavaScript", image: imgJS },

    { id: 4, name: "React", image: imgREACT },

    { id: 5, name: "Node.js", image: imgNODE },

    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },

    { id: 7, name: "TypeScript", image: imgTYPE },

    { id: 8, name: "Next.js", image: imgNEXT },

    { id: 9, name: "Prisma", image: imgPRISMA },

    { id: 10, name: "Django", image: imgDjango },

    { id: 11, name: "Python", image: imgPython },

    { id: 12, name: "daisyUI", image: imgDaisyUI },

    { id: 13, name: "React Native", image: imgREACTNative },
  ];

  return (
    <div id="competences" className="animate-on-scroll">
      <Title title="Competences" />

      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="flex justify-center items-center flex-col animate-on-scroll"
              data-animate-delay={index * 50}
            >
              <div className="w-20 h-20 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>

              <p className="text-sm mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competences;
