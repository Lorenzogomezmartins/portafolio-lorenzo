async function loadComponent(selector, htmlPath, cssPath) {
  const container = document.querySelector(selector);
  if (!container) return;

  try {
    // Cargar HTML
    const html = await fetch(htmlPath).then(res => res.text());
    container.innerHTML = html;

    // Cargar CSS solo una vez
    if (cssPath && !document.querySelector(`link[href="${cssPath}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssPath;
      document.head.appendChild(link);
    }
  } catch (error) {
    console.error("Error cargando componente:", htmlPath);
  }
}
