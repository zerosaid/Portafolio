// 🎨 Efecto de scroll en el header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (header) header.classList.toggle("activo", window.scrollY > 50);
});

// 🌍 Botón de cambio de idioma global
const toggleBtn = document.getElementById("language-toggle");
let idioma = localStorage.getItem("idioma") || "es";

// 🌐 Función para cambiar el idioma en toda la página
function cambiarIdioma(lang) {
  document.querySelectorAll("[data-es]").forEach((el) => {
    const texto = el.getAttribute(`data-${lang}`);
    if (texto) el.textContent = texto;
  });

  // Cambia texto del botón principal
  if (toggleBtn) {
    toggleBtn.textContent = lang === "es" ? "English 🇺🇸" : "Español 🇪🇸";
  }

  document.documentElement.lang = lang;
  localStorage.setItem("idioma", lang);
}

// 🖱 Evento para alternar idioma
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    idioma = idioma === "es" ? "en" : "es";
    cambiarIdioma(idioma);
  });
}

// 🚀 Cargar idioma guardado al iniciar
cambiarIdioma(idioma);

// 🧩 Mostrar habilidades
function mostrarContenido(tipo) {
  const tecnicas = document.getElementById("tecnicas");
  const blandas = document.getElementById("blandas");
  if (!tecnicas || !blandas) return;

  tecnicas.style.display = tipo === "tecnicas" ? "block" : "none";
  blandas.style.display = tipo === "blandas" ? "block" : "none";
}

// 🍔 Menú responsive
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  // Cierra el menú al hacer clic en un enlace
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });
}

// 🖼️ Cambio de iconos al pasar el cursor
document.querySelectorAll(".icono").forEach((icono) => {
  const normalSrc = icono.src;
  const hoverSrc = icono.dataset.hover;
  if (!hoverSrc) return;

  icono.addEventListener("mouseenter", () => (icono.src = hoverSrc));
  icono.addEventListener("mouseleave", () => (icono.src = normalSrc));
});