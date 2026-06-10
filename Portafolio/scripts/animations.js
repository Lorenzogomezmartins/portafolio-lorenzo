export function initScrollAnimations() {
  const items = document.querySelectorAll(".section, .project-card");

  if (!items.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = "translateY(30px)";
    observer.observe(item);
  });
}