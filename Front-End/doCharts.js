const doCharts = async () => {

    /*
    Realizado por:
    Stephanie Cortes
    Hector Javier
    Mayra Elizabeth
    Jorge Lizarraga
    Irving Cisneros
    */

    clearCharts();

    const fechaStart = document.getElementById('fechaInicio').value;
    const fechaEnd = document.getElementById('fechaFin').value;
    const country = document.getElementById('pais').value;

    const dTotales = await getResult(country, fechaStart, fechaEnd);
    const dConfirmed = await getHistory(country, "confirmed", fechaStart, fechaEnd);
    const dDeaths = await getHistory(country, "deaths", fechaStart, fechaEnd);
    const dRecovery = await getHistory(country, "recovered", fechaStart, fechaEnd);

    cargarDatos(dTotales, dConfirmed, dDeaths, dRecovery);
};

const cargarDatos = (dataTotales, datesConfirmed, datesDeaths, datesRecovery) => {

    const acu = document.getElementById('acumulado').getContext('2d');
    const distCasos = document.getElementById('distCasos').getContext('2d');
    const distMuertes = document.getElementById('distMuertes').getContext('2d');
    const distRecuperado = document.getElementById('recuperados').getContext('2d');
    const tContagiados= dataTotales['confirmed'];
    const tMuertos= dataTotales['deaths'];
    const tRecuperados= dataTotales['recovery'];

    const acumulado = new Chart(acu, {
        type: 'bar',
        data: {
            labels: ['Contagiados', 'Recuperados', 'Muertos'],
            datasets: [{
                label: 'No.Personas',
                data: [tContagiados, tRecuperados, tMuertos],
                backgroundColor: [
                    'rgba(52, 99, 247, 1)',
                    'rgba(52, 247, 96, 1)',
                    'rgba(247, 52, 52, 1)'
                ],
                borderColor: [
                    'rgba(52, 99, 247, 1)',
                    'rgba(52, 247, 96, 1)',
                    'rgba(247, 52, 52, 1)'
                ],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Acumulado Infecciones Covid-19',
                fontSize:25,
            },
            legend: {
                position: 'top',
                align: 'end',
            }
        }
    });

    const distribucion = new Chart(distCasos, {
        type: 'line',
        data: {
            labels: Object.keys(datesConfirmed),
            datasets: [{
                label: 'No.Personas',
                data: Object.values(datesConfirmed),
                fill: false,
                backgroundColor: ['rgba(52, 99, 247, 1)'],
                borderColor: ['rgba(52, 99, 247, 1)'],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Distribucion Casos Covid-19',
                fontSize:25,
            },
            legend: {
                position: 'top',
                align: 'end',
            }
        }
    });

    const muertes = new Chart(distMuertes, {
        type: 'line',
        data: {
            labels: Object.keys(datesDeaths),
            datasets: [{
                label: 'No.Personas',
                data: Object.values(datesDeaths),
                fill: false,
                backgroundColor: ['rgba(217, 60, 35, 1)'],
                borderColor: ['rgba(217, 60, 35, 1)'],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Muertes por Covid-19',
                fontSize:25,
            },
            legend: {
                position: 'top',
                align: 'end',
            }
        }
    });

    const recus = new Chart(distRecuperado, {
        type: 'line',
        data: {
            labels: Object.keys(datesRecovery),
            datasets: [{
                label: 'No.Personas',
                data: Object.values(datesRecovery),
                fill: false,
                backgroundColor: ['rgba(0, 210, 50, 1)'],
                borderColor: ['rgba(0, 210, 50, 1)'],
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Recuperados de Covid-19',
                fontSize:25,
            },
            legend: {
                position: 'top',
                align: 'end',
            }
        }
    })
};

const clearCharts = () => {
    document.getElementById("c1").innerHTML = '<canvas id="acumulado" height="200"></canvas>';
    document.getElementById("c2").innerHTML = '<canvas id="distCasos" height="200"></canvas>';
    document.getElementById("c3").innerHTML = '<canvas id="distMuertes" height="200"></canvas>';
    document.getElementById("c4").innerHTML = '<canvas id="recuperados" height="200"></canvas>';
};

const getResult = async (country, fechaStart, fechaEnd) => {
    let url = `http://localhost:3030/covid/result?country=${country}&initDate=${fechaStart}&endDate=${fechaEnd}`;
    return await fetch(url)
        .then(promiseFetch => promiseFetch.json())
        .then(content_hist => {
            return content_hist
        });
};

const getHistory = async (country, status, fechaStart, fechaEnd) => {
    let url = `http://localhost:3030/covid/history?country=${country}&status=${status}&initDate=${fechaStart}&endDate=${fechaEnd}`;
    return await fetch(url)
        .then(promiseFetch => promiseFetch.json())
        .then(content_hist => {
            return content_hist;
        });
};