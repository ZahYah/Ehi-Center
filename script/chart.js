// import {CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement} from 'chart.js';
// import {Canvas} from 'skia-canvas';
// import fsp from 'node:fs/promises';

// Chart.register([
//   CategoryScale,
//   LineController,
//   LineElement,
//   LinearScale,
//   PointElement
// ]);

// const canvas = new Canvas(400, 300);
 const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
