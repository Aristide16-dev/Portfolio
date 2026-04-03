document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  history.replaceState(null, null, " ");

  document.documentElement.style.scrollBehavior = "auto";

  setTimeout(() => {
    initAnimations();
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
      document.documentElement.classList.add("loaded");
    }, 2000);
  }, 500);
});

function initAnimations() {
  const isMobile = window.innerWidth <= 768;
  const observerOptions = {
    threshold: isMobile ? 0.05 : 0.1,
    rootMargin: isMobile ? "0px 0px -30px 0px" : "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");

        const animatedChildren = entry.target.querySelectorAll(
          "[data-animate-delay]",
        );
        animatedChildren.forEach((child, index) => {
          const delay = isMobile
            ? (parseInt(child.dataset.animateDelay) || 0) * 0.5
            : parseInt(child.dataset.animateDelay) || 0;

          setTimeout(() => {
            child.classList.add("animate-visible");
          }, delay);
        });
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));

  const sections = document.querySelectorAll(
    "#about, #competences, #projects, #footer",
  );
  sections.forEach((section) => {
    section.classList.add("animate-on-scroll");
    observer.observe(section);
  });

  window.scrollTo(0, 0);
  history.replaceState(null, null, " ");

  setTimeout(() => window.scrollTo(0, 0), 100);
  setTimeout(() => window.scrollTo(0, 0), 500);
  setTimeout(() => window.scrollTo(0, 0), 1000);

  window.addEventListener("resize", () => {
    const newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== isMobile) {
      setTimeout(() => initAnimations(), 100);
    }
  });
}
