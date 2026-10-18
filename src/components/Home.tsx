import { Mail } from "lucide-react";
import profileImage from "../assets/moi.webp";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div
      id="home"
      className="content-initial flex flex-col-reverse items-center justify-center my-10 md:my-30 md:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col space-y-4"
      >
        <h2 className="delay-100 mt-4 text-center text-5xl font-bold md:mt-0 md:text-left md:text-6xl">
          Bonjour,
          <br />
          Je suis Aris
          <span className="text-accent">Dev</span>
        </h2>

        <div className="delay-200 text-center text-md md:text-left">
          <div className="badge badge-accent badge-outline basdge-lg mb-2 uppercase font-bold">
            Développeur JavaScript junior{" "}
          </div>
          <span>
            <br />
            les Technologies que j'utilise regulièrement :
            <span className="text-rotate">
              <span className="px-3 font-semibold">
                <span className="bg-blue-400 text-blue-800 px-2">React</span>
                <span className="bg-green-400 text-green-800 px-2">
                  Node.js
                </span>
                <span className="bg-white-400 text-white-800 px-2">
                  Next.js
                </span>
                <span className="bg-blue-200 text-blue-500 px-2">
                  TypeScript
                </span>
                <span className="bg-yellow-400 text-yellow-800 px-2">
                  javascript
                </span>
              </span>
            </span>
          </span>
          <br />
          Passionné par l&apos;innovation et l&apos;optimisation, je transforme
          des idées en solutions numériques performantes et durables.
          Contactez-moi si vous avez besoin de mes services.
        </div>

        <a
          href="https://linktr.ee/aristideDev"
          className="delay-300 btn btn-accent mx-auto flex items-center justify-center md:mx-0 md:w-fit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Me contacter via Linktree (nouvel onglet)"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Me contacter
        </a>
      </motion.div>

      <div className="delay-400 ml-0 md:ml-18">
        <motion.img
          src={profileImage}
          alt="Portrait d'ArisDev"
          width="384"
          height="384"
          className="h-96 w-96 rounded-full border-4 border-accent object-cover shadow-2xl"
          style={{
            borderRadius: "50% 50% 52% 48% / 30% 48% 52% 70%",
          }}
          fetchPriority="high"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
