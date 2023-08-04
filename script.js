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

// --------------_>
// const resume = document.getElementById("resume-button-1")
// const resum2 = document.getElementById("resume-button-2")
// const resume3=document.querySelector('.ressss')
// resume3.addEventListener('click',downloadResume)
// resume.addEventListener('click',downloadResume)
// resum2.addEventListener('click',downloadResume)
// function downloadResume() {
//   // Create an anchor element
//   const link = document.createElement('a');

//   // Set the download attribute to the file name
//   link.setAttribute('download', 'Anurag_resume.pdf');

//   // Set the href attribute to the file path
//   link.setAttribute('href', 'Anurag_resume.pdf');

//   // Simulate a click on the anchor element to trigger the download
//   link.click();
// }

document
  .getElementById("resume-button-1")
  .addEventListener("click", function () {
    // File URL
    var fileURL = "Anurag_resume.pdf";

    // Open the file in a new tab
    window.open("", "_blank");

    // Create a temporary anchor element to trigger the download
    var link = document.createElement("a");
    link.href = fileURL;
    link.download = "Anurag_resume.pdf"; // Set the desired filename

    // Append the anchor element to the document and simulate a click
    document.body.appendChild(link);
    link.click();

    // Clean up the anchor element after the click event has been processed
    document.body.removeChild(link);
  });

document.querySelector(".resss").addEventListener("click", function() {
  // File URL
  var fileURL = "Anurag_resume.pdf";

  // Open the file in a new tab
  window.open('', '_blank');

  // Create a temporary anchor element to trigger the download
  var link = document.createElement("a");
  link.href = fileURL;
  link.download = "Anurag_resume.pdf"; // Set the desired filename

  // Append the anchor element to the document and simulate a click
  document.body.appendChild(link);
  link.click();

  // Clean up the anchor element after the click event has been processed
  document.body.removeChild(link);
});

// document
//   .getElementById("resume-button-2")
//   .addEventListener("click", function () {
//     // File URL
//     var fileURL = "Anurag_resume.pdf";

//     // Open the file in a new tab
//     window.open("", "_blank");

//     // Create a temporary anchor element to trigger the download
//     var link = document.createElement("a");
//     link.href = fileURL;
//     link.download = "Anurag_resume.pdf"; // Set the desired filename

//     // Append the anchor element to the document and simulate a click
//     document.body.appendChild(link);
//     link.click();

//     // Clean up the anchor element after the click event has been processed
//     document.body.removeChild(link);
//   });
