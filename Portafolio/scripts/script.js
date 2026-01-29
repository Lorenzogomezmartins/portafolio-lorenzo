// =============================
// FADE ON SCROLL
// =============================
const items = document.querySelectorAll('.section, .project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

items.forEach(i => {
  i.style.opacity = 0;
  i.style.transform = 'translateY(30px)';
  observer.observe(i);
});

// =============================
// FORMULARIO CONTACTO EMAILJS
// =============================

// Inicializa EmailJS (asegúrate de cargar el SDK en HTML)
emailjs.init("NeZb0r0d4FbwAz97w"); // reemplaza con tu User ID

const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_2t0u83d', 'template_h9mtefg', this)
      .then(() => {
        alert('Mensaje enviado con éxito 🎉');
        form.reset(); // limpia el formulario
      }, (err) => {
        console.error('Error:', err);
        alert('Error al enviar el mensaje. Intenta de nuevo.');
      });
  });
}
