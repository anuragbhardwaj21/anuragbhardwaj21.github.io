import navbar from "./components.js";
const nav = document.getElementById("nav-menu");
nav.innerHTML = navbar();

const homeLeft = document.getElementById("home-left");
const homeRight = document.getElementById("home-right");

homeLeft.addEventListener("mouseenter", () => {
  homeLeft.style.width = "60%";
  homeRight.style.width = "40%";
  homeRight.style.opacity = "0";
});

homeLeft.addEventListener("mouseleave", () => {
  homeLeft.style.width = "50%";
  homeRight.style.width = "50%";
  homeRight.style.opacity = "1";
});

homeRight.addEventListener("mouseenter", () => {
  homeLeft.style.width = "40%";
  homeRight.style.width = "60%";
  homeLeft.style.opacity = "0";
});

homeRight.addEventListener("mouseleave", () => {
  homeLeft.style.width = "50%";
  homeRight.style.width = "50%";
  homeLeft.style.opacity = "1";
});
window.addEventListener("load", () => {
  homeLeft.style.animation = "slide-from-left 1s forwards";
  homeRight.style.animation = "slide-from-right 1s forwards";
});

var data = [
  {
    name: "SkinStore",
    link: "https://skinstoreclone7.netlify.app/",
    desc: "One of the first online stores to offer dermatologist-created and recommended products worldwide.",
  },
  {
    name: "Healthcare 24/7",
    link: "https://skinstoreclone7.netlify.app/",
    desc: "Convenient, reliable, and accessible online medical store delivering healthcare essentials 24/7.",
  },
];
// ---------------------------------->


