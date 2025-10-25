// 🎨 Efecto de scroll en el header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("activo", window.scrollY > 50);
});

// 🌍 Botón de cambio de idioma
const toggleBtn = document.getElementById("language-toggle");
let idioma = localStorage.getItem("idioma") || "es";

// 🌐 Función para cambiar el idioma en toda la página
function cambiarIdioma(lang) {
  // Recorre todos los elementos con data-es o data-en
  document.querySelectorAll("[data-es]").forEach((el) => {
    const texto = el.getAttribute(`data-${lang}`);
    if (texto) el.textContent = texto;
  });

  // Actualiza el texto del botón
  toggleBtn.textContent = lang === "es" ? "English 🇺🇸" : "Español 🇪🇸";

  // Guarda el idioma en localStorage
  document.documentElement.lang = lang;
  localStorage.setItem("idioma", lang);
}

// 🖱 Evento de clic para cambiar idioma
toggleBtn.addEventListener("click", () => {
  idioma = idioma === "es" ? "en" : "es";
  cambiarIdioma(idioma);
});

// 🚀 Cargar idioma guardado al iniciar
cambiarIdioma(idioma);
