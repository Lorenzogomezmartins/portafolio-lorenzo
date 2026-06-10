export async function loadComponent(selector, htmlPath, cssPath) {
  const container = document.querySelector(selector);

  if (!container) return;

  try {
    const response = await fetch(htmlPath);

    if (!response.ok) {
      throw new Error(`No se pudo cargar ${htmlPath}`);
    }

    const html = await response.text();
    container.innerHTML = html;

    if (cssPath && !document.querySelector(`link[href="${cssPath}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssPath;
      document.head.appendChild(link);
    }

  } catch (error) {
    console.error("Error cargando componente:", error);
  }
}