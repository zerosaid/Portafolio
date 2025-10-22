
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("activo", window.scrollY > 50);
});
