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



// function a() {
//   projectVideo1.play();
// }
// function b() {
//   projectVideo1.pause();
//   projectVideo1.currentTime = 0;
// }
function c() {
  if (projectDetails1.style.width == "30%") {
    setTimeout(() => {
      projectDetails1.style.opacity = "0";
    }, 300);
    setTimeout(() => {
      projectDetails1.style.width = "0";
    }, 500);
    
  } else {
    projectDetails1.style.width = "30%";

    setTimeout(() => {
      projectDetails1.style.opacity = "1";
    }, 500);
  }
}
var projectVideo1 = document.getElementById("project-image-1");
// projectVideo1.addEventListener("mouseover", a);
// projectVideo1.addEventListener("mouseout", b);

var projectDetails1 = document.getElementById("project-details-1");
projectVideo1.addEventListener("click", c);




// function a2() {
//   projectVideo2.play();
// }
// function b2() {
//   projectVideo2.pause();
//   projectVideo2.currentTime = 0;
// }
function c2() {
  if (projectDetails2.style.width == "30%") {
    setTimeout(() => {
      projectDetails2.style.opacity = "0";
    }, 300);
    setTimeout(() => {
      projectDetails2.style.width = "0";
    }, 500);
    
  } else {
    projectDetails2.style.width = "30%";

    setTimeout(() => {
      projectDetails2.style.opacity = "1";
    }, 500);
  }
}
var projectVideo2 = document.getElementById("project-image-2");
// projectVideo2.addEventListener("mouseover", a2);
// projectVideo2.addEventListener("mouseout", b2);

var projectDetails2 = document.getElementById("project-details-2");
projectVideo2.addEventListener("click", c2);


