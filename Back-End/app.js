//Importar librerias
const cors = require('cors');
const getDataCovid = require("./getData");
const express = require('express');
const app = express();

//Definir Variables
// const status = 'confirmed';
//     // status posibles (solo usar para pruebas, este parámetro lo ingresará el equipo de Front-End)
//     // confirmed
//     // deaths
//     // recovery
// const country = 'Colombia';
const port = 3030;

app.use(cors());

  // async function  Consultar() {
  //     const data = await getDataCovid(country, status);
  //     console.log(data);
  // }

  // Consultar();

//Definir consulta "express"

app.get('/api/covid', async function (req, res) {
    try {
      let country = req.query.country;
      let status = req.query.status;
      const data = await getDataCovid(country, status)
      res.send(data)
    } catch (error) {
      res.status = 500
      res.send({
        message: 'No se pueden obtener Datos sin los parametros de "status" y "country"'
      })
      console.error(error)
    }
  })
  
  app.listen(port, function () {
    console.log(`Server corriendo en el puerto: ${port}`)
  })
  