export function initContactForm() {
  if (!window.emailjs) {
    console.warn("EmailJS no está cargado.");
    return;
  }

  emailjs.init("NeZb0r0d4FbwAz97w");

  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm("service_2t0u83d", "template_h9mtefg", this)
      .then(() => {
        alert("Mensaje enviado con éxito 🎉");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al enviar el mensaje. Intenta de nuevo.");
      });
  });
}