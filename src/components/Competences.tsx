import Title from "./Title";

import { motion } from "framer-motion";

import imgCSS from "../assets/css.webp";

import imgJS from "../assets/js.webp";

import imgREACT from "../assets/react.webp";

import imgHTML from "../assets/html.webp";

import imgNEXT from "../assets/next-js.webp";

import imgNODE from "../assets/node-js.webp";

import imgTYPE from "../assets/Typescript.webp";

import imgTAILWIND from "../assets/tailwind.webp";

import imgPRISMA from "../assets/prisma.webp";

import imgREACTNative from "../assets/React-Native.webp";

import imgDaisyUI from "../assets/DaisyUI_1.webp";

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

    { id: 12, name: "daisyUI", image: imgDaisyUI },

    { id: 13, name: "React Native", image: imgREACTNative },
  ];

  return (
    <div id="competences" className="mt-3">
      <Title title="Competences" />

      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-2/3 mt-4 md:mt-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex justify-center items-center flex-col animate-on-scroll"
            >
              <div className="w-20 h-20 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>

              <p className="text-sm mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competences;
