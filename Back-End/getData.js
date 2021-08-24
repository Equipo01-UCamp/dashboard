//SE DEFINE FUNCION PARA OBTENER DATOS COVID DEL API

// importar librerias
const axios = require('axios');

//Crear Funcion
const getDataCovid = async function () {
    return axios({
      method: 'GET',
    //   url: `https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=${status}`
      url: `https://covid-api.mmediagroup.fr/v1/history`
    }).then(function (response) {
        // console.log(response.data)
        return response.data
    })
  }


// getDataCovid();

//Exportar funcion
module.exports = getDataCovid;