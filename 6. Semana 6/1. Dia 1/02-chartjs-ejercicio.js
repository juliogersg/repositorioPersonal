import { dataCovid } from './covid-data.js';

let datos = {
    date: [],
    confirmed: [],
    deaths: []
}
let fecha;
let llenarDatos = () => {
    dataCovid.forEach((objDataCovid, i) => {
        datos.confirmed[i] = objDataCovid.Confirmed;
        datos.deaths[i] = objDataCovid.Deaths;
        fecha = new Date(objDataCovid.Date);
        datos.date[i] = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`;
    });
}

llenarDatos();
var ctx = document.getElementById('miGrafico');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: datos.date,
        datasets: [{
            label: '# of Confirmed',
            data: datos.confirmed,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor:
                'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            // yAxisID: "C"
        },
        {
            label: '# of Deaths',
            data: datos.deaths,
            backgroundColor:'rgba(255, 159, 64, 0.2)',
            borderColor:'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            // yAxisID: "F"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    // callback: function(value, index, values){
                    //     return value / 1e6 +'M';
                    // },
                    // id: "C",
                    // position: 'left'
                },
                // ticks: {
                //     beginAtZero: true,
                //     // callback: function(value, index, values){
                //     //     return value / 1e6 +'M';
                //     // },
                //     id: "F",
                //     position: 'right'
                // }
            }]
        }
    }
});