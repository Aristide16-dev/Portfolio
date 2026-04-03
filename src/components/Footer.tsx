import { MonitorSmartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="footer footer-horizontal footer-center bg-base-400 text-accent-content p-10 bg-base-200  shadow-xl "
      id="footer"
    >
      <aside>
        <MonitorSmartphone className="w-20 h-20" />

        <p className="text-2xl font-bold">
          Aris<span className="text-accent font-bold text-2xl">.DEV</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous les droits réservés</p>
      </aside>
      <nav>
        <div className="flex items-center gap-5 text-gray-400">
          <a
            href="https://www.linkedin.com/in/prince-aristide-bingo-aa339a2b6"
            className="hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-9 h-9 fill-current"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          <a
            href="https://wa.me/2250778461094?text=Bonjour%2FBonsoir%20%F0%9F%91%8B%0AJe%20suis%20Aris.Dev%2C%20developpeur%20full%20stack%20%26%20mobile.%0AComment%20puis-je%20vous%20aider%20%3F"
            className="hover:text-green-500 transition-colors"
            aria-label="WhatsApp"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-9 h-9 fill-current"
            >
              <path d="M12.01 2.01c-5.52 0-10 4.48-10 10 0 1.75.46 3.4 1.26 4.83L2 22l5.3-1.39c1.4.74 3 1.17 4.71 1.17 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.82 14.15c-.25.7-1.43 1.28-1.97 1.36-.49.07-1.13.1-3.25-.77-2.71-1.12-4.46-3.87-4.59-4.05-.13-.18-1.09-1.45-1.09-2.76 0-1.31.69-1.96.94-2.22.25-.26.54-.32.72-.32h.51c.16 0 .38-.01.58.47.2.49.69 1.68.75 1.8.06.12.1.27.02.43-.08.17-.12.27-.25.42-.12.15-.26.33-.38.45-.13.13-.27.27-.12.52.15.25.66 1.09 1.42 1.76.97.87 1.79 1.14 2.05 1.27.25.13.4.11.55-.06.15-.17.65-.75.82-1.01.17-.26.34-.22.58-.13.23.09 1.5.71 1.76.83.26.12.43.18.49.29.07.11.07.65-.18 1.35z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61574952096399"
            className="hover:text-blue-500 transition-colors"
            aria-label="Facebook"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-9 h-9 fill-current"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9V12h2.54V9.41c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
