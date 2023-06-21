import navbar from "./components.js";
const nav=document.getElementById("nav-menu");
console.log(nav);
nav.innerHTML=navbar();

const homeLeft = document.getElementById("home-left");
const homeRight = document.getElementById("home-right");

homeLeft.addEventListener("mouseenter", () => {
  homeLeft.style.width = "60%";
  homeRight.style.width = "40%";
  homeRight.style.opacity="0";
});

homeLeft.addEventListener("mouseleave", () => {
  homeLeft.style.width = "50%";
  homeRight.style.width = "50%";
  homeRight.style.opacity="1";
});

homeRight.addEventListener("mouseenter", () => {
  homeLeft.style.width = "40%";
  homeRight.style.width = "60%";
  homeLeft.style.opacity="0";
});

homeRight.addEventListener("mouseleave", () => {
  homeLeft.style.width = "50%";
  homeRight.style.width = "50%";
  homeLeft.style.opacity="1";
});
