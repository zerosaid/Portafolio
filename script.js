
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("activo", window.scrollY > 50);
});

const toggleBtn = document.getElementById('language-toggle');

const textos = {
  es: {
    rol: "Desarrollador Web | Front-End | Full Stack | Creativo Digital.",
    navSobreMi: "Sobre mí",
    navProyectos: "Proyectos",
    navContacto: "Contacto",
    tituloSobreMi: "Sobre mí",
    textoSobreMi: "Desarrollador web en formación con una mentalidad práctica y un fuerte interés por aprender cada día. Apasionado por crear proyectos funcionales que combinan diseño y lógica, y por participar en experiencias que permitan seguir creciendo y fortaleciendo los conocimientos.",
    tituloProyectos: "Proyectos",
    proyecto1Titulo: "Gestor Bancario “Acme Bank”",
    proyecto1Desc: "Aplicación web con login, dashboard y transacciones en Firebase.",
    proyecto1Link: "Ver proyecto",
    proyecto2Titulo: "Tienda My Pet",
    proyecto2Desc: "Plataforma web para la gestión integral de mascotas y sus dueños, con registro, búsqueda y control de datos en tiempo real.",
    proyecto2Link: "Ver proyecto",
    proyecto3Titulo: "Web de Fotografía",
    proyecto3Desc: "Sitio web responsivo para una pareja de fotógrafos de bodas, creado en HTML y CSS puro.",
    proyecto3Link: "Ver proyecto",
    tituloContacto: "Contacto",
    textoContacto: "Puedes contactarme a través de los siguientes medios:",
    footerText: "© 2025 Daniel Santiago González Hernández · Todos los derechos reservados."
  },
  en: {
    rol: "Web Developer | Front-End | Full Stack | Digital Creator.",
    navSobreMi: "About Me",
    navProyectos: "Projects",
    navContacto: "Contact",
    tituloSobreMi: "About Me",
    textoSobreMi: "Web developer in training with a practical mindset and a strong passion for learning every day. Enthusiastic about creating functional projects that combine design and logic, and eager to continue growing and strengthening skills.",
    tituloProyectos: "Projects",
    proyecto1Titulo: "Banking Manager “Acme Bank”",
    proyecto1Desc: "Web application with login, dashboard, and Firebase real-time transactions.",
    proyecto1Link: "View project",
    proyecto2Titulo: "My Pet Store",
    proyecto2Desc: "Web platform for the comprehensive management of pets and their owners, including registration, search, and real-time data control.",
    proyecto2Link: "View project",
    proyecto3Titulo: "Wedding Photography Website",
    proyecto3Desc: "Responsive website for a wedding photographer couple, built using pure HTML and CSS.",
    proyecto3Link: "View project",
    tituloContacto: "Contact",
    textoContacto: "You can contact me through the following channels:",
    footerText: "© 2025 Daniel Santiago González Hernández · All rights reserved."
  }
};

let idioma = localStorage.getItem("idioma") || "es";

function cambiarIdioma(lang) {
  const t = textos[lang];

  document.getElementById("rol").textContent = t.rol;
  document.getElementById("nav-sobre-mi").textContent = t.navSobreMi;
  document.getElementById("nav-proyectos").textContent = t.navProyectos;
  document.getElementById("nav-contacto").textContent = t.navContacto;
  document.getElementById("titulo-sobre-mi").textContent = t.tituloSobreMi;
  document.getElementById("texto-sobre-mi").textContent = t.textoSobreMi;

  document.getElementById("titulo-proyectos").textContent = t.tituloProyectos;
  document.getElementById("proyecto1-titulo").textContent = t.proyecto1Titulo;
  document.getElementById("proyecto1-desc").textContent = t.proyecto1Desc;
  document.getElementById("proyecto1-link").textContent = t.proyecto1Link;
  document.getElementById("proyecto2-titulo").textContent = texts[lang].proyecto2Titulo;
  document.getElementById("proyecto2-desc").textContent = texts[lang].proyecto2Desc;
  document.getElementById("proyecto2-link").textContent = texts[lang].proyecto2Link;
  document.getElementById("proyecto3-titulo").textContent = t.proyecto3Titulo;
  document.getElementById("proyecto3-desc").textContent = t.proyecto3Desc;
  document.getElementById("proyecto3-link").textContent = t.proyecto3Link;

  document.getElementById("titulo-contacto").textContent = t.tituloContacto;
  document.getElementById("texto-contacto").textContent = t.textoContacto;
  document.getElementById("footer-text").textContent = t.footerText;

  toggleBtn.textContent = lang === "es" ? "English 🇺🇸" : "Español 🇪🇸";
  document.documentElement.lang = lang;
  localStorage.setItem("idioma", lang);
}

// Evento del botón
toggleBtn.addEventListener("click", () => {
  idioma = idioma === "es" ? "en" : "es";
  cambiarIdioma(idioma);
});

// Cargar idioma guardado
cambiarIdioma(idioma);
