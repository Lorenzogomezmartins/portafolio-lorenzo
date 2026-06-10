import { loadComponent } from "./components.js";

import { renderProjects } from "./renderProjects.js";
import { renderSkills } from "./renderSkills.js";
import { renderExperience } from "./renderExperience.js";
import { renderServices } from "./renderServices.js";

import { initScrollAnimations } from "./animations.js";
import { initContactForm } from "./contact.js";

/* =========================
   COMPONENTES
========================= */

await loadComponent(
  "#navbar-component",
  "components/navbar/navbar.html",
  "components/navbar/navbar.css"
);

await loadComponent(
  "#hero-component",
  "components/hero/hero.html",
  "components/hero/hero.css"
);

await loadComponent(
  "#projects-component",
  "components/projects/projects.html",
  "components/projects/projects.css"
);

await loadComponent(
  "#skills-component",
  "components/skills/skills.html",
  "components/skills/skills.css"
);

await loadComponent(
  "#about-component",
  "components/about/about.html",
  "components/about/about.css"
);

await loadComponent(
  "#experience-component",
  "components/experience/experience.html",
  "components/experience/experience.css"
);

await loadComponent(
  "#services-component",
  "components/services/services.html",
  "components/services/services.css"
);

await loadComponent(
  "#contact-component",
  "components/contact/contact.html",
  "components/contact/contact.css"
);

await loadComponent(
  "#whatsapp-component",
  "components/whatsapp/whatsapp.html",
  "components/whatsapp/whatsapp.css"
);

await loadComponent(
  "#footer-component",
  "components/footer/footer.html",
  "components/footer/footer.css"
);

/* =========================
   RENDERS
========================= */

renderProjects();
renderSkills();
renderExperience();
renderServices();

/* =========================
   INITS
========================= */

initScrollAnimations();
initContactForm();