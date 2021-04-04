/**
 * Destructuracion de objetos
 */

let objPersona = {
    nombre:'Julio',
    apellido:'Seminario',
    edad:29,
    direccion:'Calle 3'
};

// crear una variable llamada direccion a partir de la
// copia del campo direccion del objPersona
let {direccion} = objPersona;
console.log(direccion);

let {nombre,apellido} = objPersona;
console.log(nombre,apellido);

// Usando el operador rest (...), obtenemos una copia en 
// una nueva variable de todo el objPersona
let {...copiaPersona} = objPersona;
copiaPersona.nombre = 'Luis';
console.log(copiaPersona);
console.log(objPersona);

// Destructurar algunos atributos con nuevos nombres
let {nombre: names, edad:age} = objPersona;
console.log(names);
console.log(age);
