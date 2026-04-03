import { Mail } from "lucide-react";
import profileImage from "../assets/photo_ia-removebg-preview.png";
export default function Home() {
  return (
    <div
      id="home"
      className="content-initial flex justify-center items-center flex-col-reverse md:flex-row md:my-32 my-10"
    >
      <div className="space-y-4 flex flex-col">
        <h2 className="delay-100 text-5xl md:text-6xl text-center md:text-left font-bold mt-4 md:mt-0">
          Bonjour ,<br />
          Je suis Aris<span className="text-accent">Dev</span>
        </h2>

        <p className="delay-200 text-sm text-center md:text-left">
          Développeur full-stack et mobile junior ,utilisant du{" "}
          <span className="text-accent">React, Node.js et Dango</span> etc ...
          <br />
          Passionné par l'innovation et l'optimisation, je transforme des idées
          en solutions numériques performantes et durables. contactez-moi si
          vous avez besoin de mes services.
        </p>
        <a
          href="https://linktr.ee/aristideDev"
          className="delay-300 btn btn-accent md:w-fit flex items-center justify-center mx-auto md:mx-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="w-4 h-4" />
          Contacter moi
        </a>
      </div>
      <div className="delay-400 ml-0 md:ml-20">
        <img
          src={profileImage}
          alt="Profile"
          className="w-96 h-96 object-cover border-4 border-accent shadow-2xl"
          style={{
            borderRadius: "52% 48% 51% 49% / 32% 30% 70% 68%  ",
          }}
        />
      </div>
    </div>
  );
}
