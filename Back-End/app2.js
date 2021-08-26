function doCharts() {

    let fechaStart = document.getElementById('fechaInicio').value;
    let fechaEnd = document.getElementById('fechaFin').value;
    let country = document.getElementById('pais').value;
    var dContagiados= null;
    var dRecuperados= null;
    var dMuertos= null;
    
    
    let url = 'https://covid-api.mmediagroup.fr/v1/history?country=' + country + '&status=confirmed'
            fetch(url)
                .then(promiseFetch => promiseFetch.json())
                .then(content_hist => {
                    dContagiados = content_hist.All.dates[fechaEnd] - content_hist.All.dates[fechaStart];
                    console.log(content_hist)
                    console.log('Contagiados : ' + dContagiados);
                });
    
    
    function cargarDatos(){
    
        const acu = document.getElementById('acumulado').getContext('2d');
        const distCasos = document.getElementById('distCasos').getContext('2d');
        const distMuertes = document.getElementById('distMuertes').getContext('2d');
        const recu = document.getElementById('recuperados').getContext('2d');
        
            const acumulado = new Chart(acu, {
                type: 'bar',
                data: {
                    labels: ['Contagiados', 'Recuperados', 'Muertos'],
                    datasets: [{
                        label: 'No.Personas',
                        data: [dContagiados, 1234567, 1232456],
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
        
            const dateLabel = ['2019', '2020', '2021'];
            const distribucion = new Chart(distCasos, {
                type: 'line',
                data: {
                    labels: dateLabel,
                    datasets: [{
                        label: 'No.Personas',
                        data: [2384561, 1548756, 354211],
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
                    labels: dateLabel,
                    datasets: [{
                        label: 'No.Personas',
                        data: [2384561, 1548756, 354211],
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
        
            const recus = new Chart(recuperados, {
                type: 'line',
                data: {
                    labels: dateLabel,
                    datasets: [{
                        label: 'No.Personas',
                        data: [2384561, 1548756, 354211],
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
                    
    
    }
    
    
    }; 