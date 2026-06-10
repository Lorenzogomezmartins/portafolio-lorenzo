import { projects } from "../data/projects.js";

function createTechTag(tech) {
  return `
    <span class="tech">
      <i class="${tech.icon}"></i>
      ${tech.name}
    </span>
  `;
}

function createProjectCard(project) {
  return `
    <article class="project-card">
      <div class="project-image-wrapper">
        <span class="project-badge">${project.category}</span>

        ${project.featured ? `<span class="project-featured">Destacado</span>` : ""}

        <img src="${project.image}" alt="${project.alt}">
      </div>

      <div class="project-content">
        <div class="project-meta">
          <i class="fa-regular fa-calendar"></i>
          <span>${project.status}</span>
        </div>

        <h4>${project.title}</h4>

        <p>${project.description}</p>

        <div class="tech-tags">
          ${project.technologies.map(createTechTag).join("")}
        </div>

        <a href="${project.detailUrl}" class="btn-project">
          Ver detalle →
        </a>
      </div>
    </article>
  `;
}

export function renderProjects() {
  const container = document.querySelector("#projects-list");

  if (!container) return;

  container.innerHTML = projects.map(createProjectCard).join("");
}