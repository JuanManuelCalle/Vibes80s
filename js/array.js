const btn = document.getElementById('btnArtista');
const ctx = document.getElementById('myChart').getContext('2d');
let myChart = null;

let datos = [];

async function cargarDatos() {
  try {
    datos = [];

    const api_key = "492af8e91386fb7b877521a23d4a9a29";

    const cantante = document.getElementById('cantante').value;

    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${cantante}&api_key=${api_key}&format=json`;

    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();

      let array = data.toptracks.track;

      let count = 0;

      let color = "";

      array.forEach(element => {
        color = generarColor();

        if (count < 10) {
          const song = {
            name: element.name,
            playcount: element.playcount,
            color: color,
            url: element.url
          };
          datos.push(song);
        }
        count++;
      });

      const songNames = datos.map(song => song.name);
      const playcountValues = datos.map(song => song.playcount);
      const colorBar = datos.map(song => song.color);

      if (myChart) {
        myChart.destroy();
      }

      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: songNames,
          datasets: [{
            label: 'Reproducciones',
            data: playcountValues,
            backgroundColor: colorBar
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: 'white'
              }
            },
            x: {
              beginAtZero: true,
              ticks: {
                color: 'white'
              }
            }
          }
        }
      });

      return datos;
    } else {
      console.log(res.status);
    }
  } catch (err) {
    console.log(err);
  }
}

function generarColor() {
  const caracteres = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += caracteres[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener("click", async () => {
  await cargarDatos();

  console.log(datos);
});