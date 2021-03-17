const inputNombre = document.querySelector('#inputNombre');
const inputApellido = document.querySelector('#inputApellido');
const inputEmail = document.querySelector('#inputEmail');
const formulario = document.querySelector('#formulario');
const selectPais = document.querySelector('#selectPais');
const selectDepartamento = document.querySelector('#selectDepartamento');

let paises = [
    {id:1234, nombre: 'Peru'},    
    {id:12, nombre: 'Mexico'},
    {id:13, nombre: 'China'},
    {id:19, nombre: 'Argentina'}
]
let departamentos = [
    {id:22, nombre:'Lima', idPais:1234, stock: true},
    {id:23, nombre:'Puno', idPais:1234, stock: false},
    {id:24, nombre:'Wuhan', idPais:13, stock: false},
    {id:25, nombre:'Acapulco', idPais:12, stock: true},
    {id:26, nombre:'Fujian', idPais:13, stock: true},
    {id:27, nombre:'Buenos Aires', idPais:19, stock: false},
    {id:28, nombre:'Cordova', idPais:19, stock: true},
    {id:29, nombre:'Tulum', idPais:12, stock: true},
]

// formulario.addEventListener('click',()=>{

// })
// Otro forma de crear un evento

// formulario.onclick = (e)=>{
//     console.log('asdasd');
//     console.log(e);
//     console.log(e.target);
// }

/**
 * oninput
 */

// inputNombre.oninput = (e)=>{
//     console.log(e);
//     console.log('El usuario esta escribiendo algo');
//     console.log(inputNombre.value);
// }

// let myOninput = (e)=>{
//     console.log(e);
//     console.log('El usuario esta escribiendo algo');
//     console.log(inputNombre.value);
// }

// inputNombre.oninput = myOninput;
// las funciones anonimas deben referenciarse
// NO SE PUEDE USAR ----> myOninput()
// let datos = {
//     nombre:'',
//     apellido:'',
// }

// let myOninput = (e) => {
//     let idInput = e.target.getAttribute('id');
//     if(idInput === 'inputApellido'){
//         datos.apellido = e.target.value;
//     }else{
//         datos.nombre = e.target.value;

//     }
//     console.log(datos);
// }

// inputNombre.oninput = myOninput;
// inputApellido.oninput = myOninput;


let datos = {
    nombre:'',
    apellido:'',
    email:''
}

let myOninput = (e) => {
    datos[e.target.name] = e.target.value;
    // target representa el elemento donde ha sucedido el evento
    console.log(datos);
}

inputNombre.oninput = myOninput;
inputApellido.oninput = myOninput;
inputEmail.oninput = myOninput;

/**
 * onsubmit evento que se desencadena cuando se 
 * envia el formulario
 */
formulario.onsubmit = (e)=>{
    /**
     * preventDefault() sirve para detener la ejecucion normal de
     * un evento por defecto
     * Ejm: una etiqueta <a></a> nos direcciona a una pagina con el evento click
     * Ejm: una etiqueta <form></form> actualiza la pagina con el evento onsubmit
     * Ejm: hacer click derecho en el viewport, abre un menu contextual en el evento
     */
    e.preventDefault();
    // Opcion 01 - validacion
    // if(datos.nombre.trim() === '' || datos.apellido.trim() === '' || datos.email.trim() === ''){
    //     alert('Todos los campos deben estar llenos');
    //     return;
    // }
    // Opcion 02 - validacion
    let regexLetras = new RegExp('^[a-zA-Z]+$');
    // RegExp sirve para validar los input
    if(regexLetras.test(datos.nombre)){
        console.log('Nombre correctamente escrito');
        if(regexLetras.test(datos.apellido)){
            console.log('Apellido correctamente escrito');
            // si todo sale bien
            console.log('Haciendo onsubmit');
        }else{
            inputApellido.classList.add('error-input');
        }
    }else{
        inputNombre.classList.add('error-input');
        return;
    }
}

const llenarPaises = ()=>{
    selectPais.innerHTML = "<option value='0' selected>Seleccione un pais</option>";
    paises.forEach((objPais)=>{
        let option = document.createElement('option');
        option.innerText = objPais.nombre;
        option.value = objPais.id;
        selectPais.appendChild(option);
    });
}
llenarPaises();

const llenarDepartamentosByPais = (idPaisSeleccionado)=>{
    selectDepartamento.innerHTML = "<option value='0' selected disabled>Selecciones un departamento</option>"
    if(idPaisSeleccionado === 0){
        selectDepartamento.setAttribute('disable','disable');
        return;
    }
    let depasPorPais = departamentos.filter((objDepa)=>{
        if(objDepa.idPais === idPaisSeleccionado){
            return objDepa;
        }
    });
    depasPorPais.forEach((objDep)=>{
        let option = document.createElement('option');
        option.innerText = objDep.nombre;
        option.value = objDep.id;

        // Otra forma de hacer un if
        !objDep.stock && option.setAttribute('disabled','disabled');
        // Version convencional
        // if(objDep.stock === false){
        //     option.setAttribute('disabled','disabled');
        // }

        selectDepartamento.appendChild(option);
    });
    selectDepartamento.removeAttribute('disabled');
}
/**
 * onchange -> evento que se dispara cuando el valor del select cambia
 */
selectPais.onchange = ()=>{
    let idPaisSeleccionado = +selectPais.value;
    llenarDepartamentosByPais(idPaisSeleccionado);
}