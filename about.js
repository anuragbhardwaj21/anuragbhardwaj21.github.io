import navbar from "./components.js"
const nav = document.getElementById("nav-menu");
nav.innerHTML = navbar();

const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Python', 'Java', 'JavaScript', 'React', 'HTML', 'CSS','Adobe Premire Pro','Adobe After Effects'],
    datasets: [{
      data: [2, 20, 10, 8, 10, 10,15,6],
      borderWidth: 4,
      weight:15,
      spacing:15,
    }]
  },
  options: {
    plugins:{
        legend:{
            display:false
        }
    },
    borderWidth: 12,
    borderRadius:5,
    hoverBorderWidth:0
  }
});