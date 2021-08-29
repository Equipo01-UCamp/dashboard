# Dashboard COVID de gráficas con canvas, y datos de API

<div style="text-align:center; padding: 1px; margin: 1px;"><img src='./Front-End/images/logo.jpg'></div>

## Equipo 1

- [Dashboard COVID de gráficas con canvas, y datos de API](#dashboard-covid-de-gráficas-con-canvas-y-datos-de-api)
  - [Equipo 1](#equipo-1)
  - [Contexto](#contexto)
  - [Procesamiento del proyecto](#procesamiento-del-proyecto)
    - [Acotaciones](#acotaciones)
    - [Proximos pasos](#proximos-pasos)
  - [Requerimientos](#requerimientos)
  - [Colaboradores](#colaboradores)

***

## Contexto

Proyecto 3 de UCamp. Dashboard COVID.

Para este proyecto se generó un Dashboard informativo de los casos confirmados, muertos y recuperados del Covid-19, por país.

La información se obtuvo de una [API](https://github.com/M-Media-Group/Covid-19-API) que proporciona los datos acummulados e históricos de diversos países, sobre el comportamiento de la pandemia en dicho país.

En la generación de las gráficas se utilizó la librería [Chart.js](https://www.chartjs.org/).

En este repositorio se encuentra distribuido el desarrollo de la aplicación, en dos segmentos principales (Front-End y Back-End), por lo que además de utilizar nodeJs, se emplearon las librerías de [Express](https://expressjs.com/es/), [Axios](https://github.com/axios/axios) y [Fetch](https://www.npmjs.com/package/node-fetch), para el entorno del servidor y consumo de los datos, respectivamente.

***
## Procesamiento del proyecto
1. [Main Index - FrontEnd](https://github.com/Equipo01-UCamp/dashboard/blob/main/Front-End/index.html)
1. [Index JS - FrontEnd](https://github.com/Equipo01-UCamp/dashboard/blob/main/Front-End/front.js)
1. [Charts JS - FrontEnd](https://github.com/Equipo01-UCamp/dashboard/blob/main/Front-End/doCharts.js)
1. [App Server JS - BackEnd](https://github.com/Equipo01-UCamp/dashboard/blob/main/Back-End/app.js)
1. [Get API JS - BackEnd](https://github.com/Equipo01-UCamp/dashboard/blob/main/Back-End/getData.js)
1. [Functions Data JS - BackEnd](https://github.com/Equipo01-UCamp/dashboard/blob/main/Back-End/functions.js)
1. [Package JSON - General](https://github.com/Equipo01-UCamp/dashboard/blob/main/package.json)

### Acotaciones
- La variable *recovered* que proporciona la API, a partir del 14-Ago-21, en la mayoría de los países dejó de ser actualizada <__*DEPRECIATED*__>, por lo que se apreciará una caida en los datos acumulados y distribuidos. 
- Debido a la gran cantidad de países, para este Dashboard solo se dejaron de forma temporal una selección de 10 países, para ejemplificar su uso. Por lo que, no significa que los países que se pueden seleccionar corresponden a todo el universo de datos.

### Proximos pasos
- Agregar bullets informativos y porcentuales, del comportamiento de nuestras variables principales.
- Agregar mapas cloropléticos por país, para identificar su comportamiento de la variable seleccionada.
- Mejorar el cálculo de los recuperados, debido a que actualmente la variable se encuentra en DEPRECIATED.
- Comparar la distribución del Covid vs. su PIB por país, para identificar el grado de afectación ocasionado por la pandemia.
- Agregar tablero Top 10 de los países, de acuerdo a cada variable.
- Agregar todos los países que se encuentran con información dentro de la API.

***
## Requerimientos
Una vez que este repositorio se encuentra clonado de forma local, realizar las siguientes instrucciones:

1. En su IDE de código, abrir su terminal acostumbrada.
1. Seleccionar la carpeta donde se encuentre almacenado el repositorio local.
1. Ingresar el siguiente código: ```npm run server```
1. Una vez que la terminal le confirme ``` Server corriendo en el puerto: 3030```, estará funcionando la aplicación.
1. Con ayuda de _Liver Server_, o abriendo directamente el archivo **Main Index**, podrá ejecutar las validaciones.
1. Seleccione la _Fecha Inicio_, _Fecha Fin_, _Pais_ y dar clic en el botón __Consultar__       


***

## Colaboradores

- Guadalupe Nancira Riaño León
- Rosalba Fuentes Soto
- Stephanie Paola Cortés Sánchez
- Beatriz López González
- Mayra Elizabeth Mejía Anguiano
- Héctor Javier García
- Jorge Lizarraga Reyes
- David Everardo Mireles Luis
- Antonio Guerrero Anguiano
- Irving Cisneros Castillo