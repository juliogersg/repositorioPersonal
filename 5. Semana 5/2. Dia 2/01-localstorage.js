const formulario = document.querySelector('#formulario');
const inputColor = document.querySelector('#inputColor');
const btnGuardar = document.querySelector('#btnGuardar');
const body = document.querySelector('body');

formulario.onsubmit = (e)=>{
    e.preventDefault();
    let color = inputColor.value;
    body.style.backgroundColor = color;

    // Guardar datos en el localStorage
    // OJO: el localStorage solo guarda strings
    // setItem('clave','valor');
    localStorage.setItem('fondo',color);
}

// Funcion anonima, solo una vez, no se puede volver a referenciar
(()=>{
    // Obtener valores del localStorage
    if(localStorage.getItem('fondo')){
        body.style.backgroundColor = localStorage.getItem('fondo');
        inputColor.value = localStorage.getItem('fondo');
    }

})()

// document.querySelector('#btnBorrar').onclick = (e) =>{
//     localStorage.removeItem('fondo');
//     body.style.backgroundColor = '#ffffff';
//     inputColor.value = #000;
// }