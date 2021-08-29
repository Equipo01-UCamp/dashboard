const onLoadParams = () => {
  limiteFecha();
  llenarPais();
};

const limiteFecha = () => {
  let today = new Date ();
  let dd = today.getDate () - 1;
  let mm = today.getMonth () + 1;
  let yyyy = today.getFullYear ();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById ('fechaFin').setAttribute ('max', today);
  document.getElementById ('fechaInicio').setAttribute ('max', today);
};

const validaFechaInicio = () => {
  fechaInicio = document.getElementById('fechaInicio').value;
  fechaFin = document.getElementById('fechaFin').value;
  if (fechaInicio > fechaFin) {
    alert('Fecha Inicio no puede ser mayor a Fecha Fin');
    let inputInicio = document.getElementById('fechaInicio');
    let inputFin = document.getElementById('fechaFin');
    inputInicio.value = '';
    inputFin.value = '';
  };
};

const llenarPais = () => {
    const paises=[
      {"valor":"US","texto":"Estados Unidos de América"}, 
      {"valor":"India","texto":"India"},
      {"valor":"Brazil","texto":"Brasil"},
      {"valor":"Russia", "texto":"Rusia"}, 
      {"valor":"France", "texto":"Francia"},
      {"valor":"United Kingdom","texto":"Reino Unido"},
      {"valor":"Turkey","texto":"Turquía"},
      {"valor":"Argentina", "texto":"Argentina"},
      {"valor":"Colombia", "texto":"Colombia"}, 
      {"valor":"Mexico","texto":"México"}
    ];
    let select = document.getElementById("pais");
    for (let i = 0; i <paises.length; i++) {
        let opt = document.createElement('option');
        opt.value = paises[i].valor;
        opt.text=paises[i].texto;
        select.appendChild(opt);
    };
};

document.getElementById('fechaFin').addEventListener('change', validaFechaInicio);

