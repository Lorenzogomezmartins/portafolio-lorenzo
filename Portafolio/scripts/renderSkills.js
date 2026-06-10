import { skills, softSkills } from "../data/skills.js";

function createSkillItem(skill) {
  return `
    <li>
      <i class="${skill.icon} ${skill.className}"></i>
      ${skill.name}
    </li>
  `;
}

function createSkillCard(group) {
  return `
    <article class="skills-card">
      <h4>${group.title}</h4>

      <ul class="skills-list">
        ${group.items.map(createSkillItem).join("")}
      </ul>
    </article>
  `;
}

export function renderSkills() {
  const skillsContainer = document.querySelector("#skills-list");
  const softSkillsContainer = document.querySelector("#soft-skills-list");

  if (skillsContainer) {
    skillsContainer.innerHTML = skills.map(createSkillCard).join("");
  }

  if (softSkillsContainer) {
    softSkillsContainer.innerHTML = softSkills
      .map(skill => `<li>${skill}</li>`)
      .join("");
  }
}