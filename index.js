const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const exploreBtn = document.getElementById("explore-btn");

exploreBtn.addEventListener("click", () => {
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});
