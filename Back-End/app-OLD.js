const fetch = require("../node_modules/node-fetch");

const status = 'confirmed';

// status posibles (solo usar para pruebas, este parámetro lo ingresará el equipo de Front-End)
// confirmed
// deaths
// recovery

const country = 'Mexico';

// consulta a histórico
const getApiCovid_history = (country, status) => {
    fetch(`https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=${status}`)
        .then(promiseFetch => promiseFetch.json())
        .then(content_hist => console.log(content_hist));
};

// consulta a acumulado (corte al día anterior)
const getApiCovid_acumulate = country => {
    fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`)
        .then(promiseFetch => promiseFetch.json())
        .then(content_acum => console.log(content_acum));
};

setTimeout(() => console.log('------HISTÓRICO-----\n'),0000);
console.log(getApiCovid_history(country, status));
setTimeout(() => console.log('\n------ACUMULADO-----\n'), 1000);
console.log(getApiCovid_acumulate(country));

