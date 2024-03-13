const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".primary-nav ul");
const links = document.querySelectorAll(".primary-nav ul li a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    ul.classList.remove("active");
  });
});
