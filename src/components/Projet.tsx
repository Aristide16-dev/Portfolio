import Title from "./Title";

import img1 from "../assets/ProjetT.jpg";

import { Video, GitBranch } from "lucide-react";

const Project = () => {
  const projects = [
    {
      id: 1,

      title: "Todo-App",

      description:
        "application web permettant de gérer efficacement ses tâches quotidiennes. Développée avec React, TypeScript et Tailwind CSS, elle offre une interface moderne, fluide et responsive. Le projet met en pratique la gestion d’état, la manipulation du DOM et le déploiement sur GitHub Pages",

      technologies: ["React", "TypeScript", "DaisyUI", "Tailwind CSS"],

      demoLink: "https://aristide16-dev.github.io/Todo-app/",

      repoLink: "https://github.com/Aristide16-dev/Todo-app.git",

      image: img1,
    },
  ];

  return (
    <div className="mt-10 animate-on-scroll" id="projects">
      <Title title="Projets" />

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg animate-on-scroll"
            data-animate-delay={index * 200}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />

            <div>
              <h1 className="my-2 font-bold">{project.title}</h1>

              <p className="text-sm">{project.description}</p>
            </div>

            <div className="flex gap-2 flex-wrap mt-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge badge-accent badge-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-3">
              <a
                href={project.demoLink}
                className="btn btn-accent btn-sm  w-2/3"
                target="_blank"
              >
                Demo
                <Video className="w-4 h-4 " />
              </a>

              <a
                href={project.repoLink}
                className="btn btn-neutral btn-sm w-1/3 "
                target="_blank"
                aria-label="Voir le code source sur GitHub"
              >
                <GitBranch className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
