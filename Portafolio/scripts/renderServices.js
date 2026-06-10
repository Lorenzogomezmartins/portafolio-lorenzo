import { services, cvButtons } from "../data/services.js";

function createServiceCard(service) {
  return `
    <article class="service-card">
      <i class="${service.icon}"></i>
      <h4>${service.title}</h4>
      <p>${service.description}</p>
    </article>
  `;
}

function createCvButton(button) {
  return `
    <a href="${button.href}" class="${button.className}" download>
      <i class="${button.icon}"></i>
      ${button.text}
    </a>
  `;
}

export function renderServices() {
  const servicesContainer = document.querySelector("#services-list");
  const cvButtonsContainer = document.querySelector("#cv-buttons-list");

  if (servicesContainer) {
    servicesContainer.innerHTML = services.map(createServiceCard).join("");
  }

  if (cvButtonsContainer) {
    cvButtonsContainer.innerHTML = cvButtons.map(createCvButton).join("");
  }
}