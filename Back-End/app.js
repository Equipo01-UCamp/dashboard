//Importar librerias
const cors = require('cors');
const getDataCovid = require("./getData");
const express = require('express');
const app = express();

//Param Status
    // confirmed
    // deaths
    // recovery

const port = 3030;
app.use(cors());

//Definir funcion para fechas
const databydates = (data, init, end) => {
  const { dates } = data.All;
  const dataFiltered = {};
  for (const date in dates) {
    if (date >= init && date <= end) {
      dataFiltered[date] = dates[date];
    }
  }
  return dataFiltered
};

//Definir consulta "express"
app.get('/api/covid', async function (req, res) {
    try {
      const { country } = req.query;
      const { status } = req.query;
      const { initDate } = req.query;
      const { endDate } = req.query;
      const data = await getDataCovid(country, status);
      const dataFiltered = databydates(data, initDate, endDate);
      res.send(dataFiltered)
    } catch (error) {
      res.status = 500
      res.send({
        message: 'No se pueden obtener Datos sin los parametros de "status" y "country"'
      })
      console.error(error)
    }
  });

  app.listen(port, function () {
    console.log(`Server corriendo en el puerto: ${port}`)
  });
