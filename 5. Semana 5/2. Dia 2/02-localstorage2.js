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
        Swal.fire({
            icon: 'error',
            title: 'Ups!',
            text: 'Todos los campos deben estar debidamente llenados',
            // timer: 3000
        });
        return;
    }

    let objTODO = {
        titulo: inputTitulo.value,
        descripcion: inputDescripcion.value,
    }

    arrayTODOS.push(objTODO);

    // guardar el arreglo en el localStorage
    /**
     * JSON.stringify(objJSON)
     * retorna un string que viene a ser el objeto JSON en
     * formato STRING
     */
    let arregloSTRING = JSON.stringify(arrayTODOS);
    localStorage.setItem('todos', arregloSTRING);
    // localStorage solo recibe strings

    this.reset();
    // this no se puede usar con funciones flecha
    dibujarTODOS();
}

/**
 * Funcion que toma el arrayTODOS y lo dibuja en el tbody
 */
const dibujarTODOS = () => {
    // Limpiar el tbody antes de empezar
    tbody.innerHTML = '';
    // Comienzo de la funcion para agregar a la tabla
    arrayTODOS.forEach((objTODO, i) => {
        const tr = document.createElement('tr');
        const tdNro = document.createElement('td');
        const tdTarea = document.createElement('td');
        const tdAcciones = document.createElement('td');
        const btnEliminar = document.createElement('button');

        tdNro.innerText = i + 1;
        tdTarea.innerHTML = /*html */
            `<h3>${objTODO.titulo}</h3>
        <p>${objTODO.descripcion}</p>`;
        btnEliminar.innerText = 'Eliminar';
        // Configurando el evento click para cada boton eliminar
        btnEliminar.onclick = () => {
            eliminarTODO(i);
        }
        tdAcciones.appendChild(btnEliminar);

        tr.appendChild(tdNro);
        tr.appendChild(tdTarea);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    })
}

const eliminarTODO = (posicion) => {
    // array.splice(posicion,nro_elementos)
    // Elimina 'nro_elementos" de un arreglo a partir de la posicion 'posicion'
    arrayTODOS.splice(posicion, 1);
    // actualizar el localStorage
    localStorage.setItem('todos', JSON.stringify(arrayTODOS));
    dibujarTODOS();
}

(() => {
    if (localStorage.getItem('todos')) {
        /**
         * JSON.parse(string-en-formato-json)
         * Devuelve un JSON como tal dado un string
         * (conversion inversa a stringify)
         */
        arrayTODOS = JSON.parse(localStorage.getItem('todos'));
        dibujarTODOS();
    }
    // configurando WAVES.JS
    // se agrega la funcion de waves al btnSubmit
    Waves.attach('#btnSubmit',['waves-button','waves-float']);
    // Waves.attach('#inputTitulo',['waves-button','waves-float']);
    // Waves.attach('#inputDescripcion',['waves-button','waves-float']);

    Waves.init();
})()