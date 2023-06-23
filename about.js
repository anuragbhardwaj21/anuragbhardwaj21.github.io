import { navbar, footer } from "./components.js";
const nav = document.getElementById("nav-menu");
nav.innerHTML = navbar();
const footabout = document.getElementById("footer");
footabout.innerHTML = footer();

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
