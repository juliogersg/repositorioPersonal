const formulario = document.getElementById('formulario');
const inputTitulo = document.getElementById('inputTitulo');
const inputDescripcion = document.getElementById('inputDescripcion');
const tbody = document.getElementById('tbody');

let arrayTODOS = [];

formulario.onsubmit = function (e) {
    e.preventDefault();
    if (inputTitulo.value.trim() === '' ||
        inputDescripcion.value.trim() === '') {
        // Mostrar error
        return;
    }

    let objTODO = {
        titulo: inputTitulo.value,
        descripcion: inputDescripcion.value,
    }

    arrayTODOS.push(objTODO);
    this.reset();
    // this no se puede usar con funciones flecha
    dibujarTODOS();
}

/**
 * Funcion que toma el arrayTODOS y lo dibuja en el tbody
 */
const dibujarTODOS = ()=>{
    // Limpiar el tbody antes de empezar
    tbody.innerHTML = '';
    // Comienzo de la funcion para agregar a la tabla
    arrayTODOS.forEach((objTODO,i)=>{
    const tr = document.createElement('tr');
    const tdNro = document.createElement('td');
    const tdTarea = document.createElement('td');
    const tdAcciones = document.createElement('td');
    const btnEliminar = document.createElement('button');

    tdNro.innerText = i+1;
    tdTarea.innerHTML = /*html */
        `<h3>${objTODO.titulo}</h3>
        <p>${objTODO.descripcion}</p>`;
    btnEliminar.innerText = 'Eliminar';
    // Configurando el evento click para cada boton eliminar
    btnEliminar.onclick = ()=>{
        eliminarTODO(i);
    }
    tdAcciones.appendChild(btnEliminar);

    tr.appendChild(tdNro);
    tr.appendChild(tdTarea);
    tr.appendChild(tdAcciones);

    tbody.appendChild(tr);
    })
}

const eliminarTODO = (posicion)=>{
    // array.splice(posicion,nro_elementos)
    // Elimina 'nro_elementos" de un arreglo a partir de la posicion 'posicion'
    arrayTODOS.splice(posicion,1);
    dibujarTODOS();
}