/**
 * Trabajamos con la clase date (manejo de fechas)
 */

let fechaHoy = new Date();
console.log(fechaHoy);

// Mostrar el anio de una fecha
console.log(fechaHoy.getFullYear());

// Mostrar el mes de una fecha
console.log(fechaHoy.getMonth());
// En javascript, los meses comienzan desde enero (enero=0, diciembre=11)

// Mostrar el dia de una fecha
console.log(fechaHoy.getDate());

let diaDeLaMadre2021 = new Date(2021,4,9);

// Cuando restamos fechas, el resultado se muestra en milisegundos
// la unidad de medida de tiemop en javascript

console.log(diaDeLaMadre2021 - fechaHoy);

let milisegundos = diaDeLaMadre2021 - fechaHoy;
let segundos = milisegundos/1000;
let minutos = segundos/60;
let horas = minutos/60;
let dias = horas/24;

// averiguar sobre formato unix para representar el tiempo
