import { experienceRows } from "../data/experience.js";

function createTimelineCard(item, type) {
  return `
    <div class="trayectoria-col ${type}">
      <span class="trayectoria-date">${item.date}</span>

      <div class="trayectoria-card">
        <h5>${item.title}</h5>
        <span>${item.subtitle}</span>
        <p>${item.description}</p>
      </div>
    </div>
  `;
}

function createExperienceRow(row) {
  return `
    <div class="trayectoria-row">
      ${createTimelineCard(row.experience, "experiencia")}
      ${createTimelineCard(row.education, "educacion")}
    </div>
  `;
}

export function renderExperience() {
  const container = document.querySelector("#experience-list");

  if (!container) return;

  container.innerHTML = experienceRows.map(createExperienceRow).join("");
}