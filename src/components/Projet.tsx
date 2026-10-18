import Title from "./Title";

import img1 from "../assets/todo-app.webp";
import img2 from "../assets/image-newsletter.webp";
import img3 from "../assets/projet-spuetenance.webp";

import { Video, GitBranch } from "lucide-react";

import { motion } from "motion/react";

const Project = () => {
  const projects = [
    {
      id: 1,

      title: "Todo-App (Projet-Ecole)",

      description:
        "Application web permettant de gérer efficacement ses tâches quotidiennes. Développée avec React, TypeScript et Tailwind CSS, elle offre une interface moderne, fluide et responsive. Le projet met en pratique la gestion d’état, la manipulation du DOM et le déploiement sur GitHub Pages",

      technologies: [
        "React",
        "TypeScript",
        "DaisyUI",
        "Tailwind CSS",
        "Lucide react",
      ],

      demoLink: "https://aristide16-dev.github.io/Todo-app/",

      repoLink: "https://github.com/Aristide16-dev/Todo-app.git",

      image: img1,
    },
    {
      id: 2,

      title: "Newsletter (personnel)",

      description:
        "Une application full-stack de newsletter qui permet de collecter les emails des utilisateurs, les intégrer dans votre base de données, et envoyer des emails ciblés à vos abonnés.",

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "DaisyUI",
        "Tailwind CSS",
        "Mailchimp",
        "API, Emailing",
        "react toastify",
      ],

      demoLink: "https://newsletter-bjn5m0xse-aristide16-dev.vercel.app/",

      repoLink: "https://github.com/Aristide16-dev/newsletter.git",

      image: img2,
    },
    {
      id: 3,

      title: "GAAP-UVCI (Projet de Soutenance)",

      description:
        "Une application full-stack développé pour la Licence DAS (2026) de l'Université Virtuelle de Côte d'Ivoire, GAAP-UVCI est une application web moderne de gestion automatisée des activités pédagogiques. Elle automatise le calcul complexe des vacations (4 séquences pour 1 heure, coefficients de support et pondérations de conception/mise à jour) tout en éliminant les erreurs manuelles. L'outil intègre un tableau de bord en temps réel pour le suivi des volumes horaires et de la validation des modules. Structurée autour de rôles sécurisés (Administrateur, Secrétaire, Enseignant), la plateforme garantit une transparence absolue et permet l'édition instantanée de rapports officiels normalisés.",

      technologies: [
        "React",
        "TypeScript",
        "DaisyUI",
        "Tailwind CSS",
        "Lucide react",
        "React-toastify",
        "react router DOM",
        "Postgresql",
        "Laravel",
      ],

      demoLink: "https://pct-frontend-7s4q.vercel.app/",

      repoLink: "https://github.com/Aristide16-dev/GAAP-UVCI.git",

      image: img3,
    },
  ];

  return (
    <div className="mb-20 mt-10 mx-10 animate-on-scroll" id="projects">
      <Title title="Projets" />

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg animate-on-scroll"
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
                className="btn btn-accent btn-sm w-2/3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
                <Video className="w-4 h-4" />
              </a>

              <a
                href={project.repoLink}
                className="btn btn-neutral btn-sm w-1/3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le code source sur GitHub"
              >
                <GitBranch className="w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
