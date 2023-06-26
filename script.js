import { navbar, footer } from "./components.js";
const nav = document.getElementById("nav-menu");
nav.innerHTML = navbar();
const foothome = document.getElementById("footer");
foothome.innerHTML = footer();

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
    video: "./skinstore.mov",
  },
  {
    name: "Healthcare 24/7",
    link: "https://skinstoreclone7.netlify.app/",
    desc: "Convenient, reliable, and accessible online medical store delivering healthcare essentials 24/7.",
    video: "./healthcare247.mov",
  },
];
// ---------------------------------->



function a() {
  projectVideo1.play();
}
function b() {
  projectVideo1.pause();
  projectVideo1.currentTime = 0;
}
var projectVideo1 = document.getElementById("project-image-1");
projectVideo1.playbackRate = 3;
projectVideo1.addEventListener("mouseover", a);
projectVideo1.addEventListener("mouseout", b);

// ---------------------------------->
const ctx = document.getElementById("chart");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [
      "Python",
      "Java",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Adobe Premire Pro",
      "Adobe After Effects",
      "Selenium",
      "Node.js"
    ],
    datasets: [
      {
        data: [2, 20, 15, 8, 10, 10, 15, 6,8,6],
        borderWidth: 4,
        weight: 15,
        spacing: 15,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    borderWidth: 12,
    borderRadius: 5,
    hoverBorderWidth: 0,
  },
});