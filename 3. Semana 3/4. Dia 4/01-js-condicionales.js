// // Ejercicio 1: compra de articulo
// let costoPrenda = 5_000;
// let nombrePrenda = 'Cartera Gucci';
// let creditCardCash = 3_000;

// if(creditCardCash >= costoPrenda){
//     // creditCardCash = creditCardCash - costoPrenda;
//     creditCardCash -= costoPrenda;
//     console.log('Gracias por su compra!');
// }else{
//     console.log('No tiene saldo disponible');
//     console.log(`Le faltan: ${costoPrenda-creditCardCash} soles para pagar el producto`)
// }
// console.log('Hasta pronto')

// Ejercicio 2
// Si el producto tiene un costo mayor o igual a 500 y:
// Es jueves: Se descuenta un 15%
// Es domingo: Se descuenta un 10%
// Cualquier otro dia, no hay descuento
// debugger;
// let dia = 'jueves';
// let precioProducto = 580;
// // El triple igual es para coincidencias exactas, si pones doble igual
// // acepta parecidos ejem: ("5"==5 es True) ("5"===5 es False)
// if (precioProducto >= 500) {
//     if (dia === 'jueves') {
//         console.log(`Total a pagar: ${precioProducto*0.85}`);
//     } else if(dia === 'domingo'){
//         console.log(`Total a pagar: ${precioProducto*0.9}`);
//     }else {
//         console.log(`Total a pagar: ${precioProducto}`);
//     }
// }else{
//     console.log(`Total a pagar: ${precioProducto}`);
// }


// Ejercicio 3 (Mejorando el ejercicio 2)
// Si el producto tiene un costo mayor o igual a 500 y:
// Es jueves: Se descuenta un 15%
// Es domingo: Se descuenta un 10%
// Cualquier otro dia, no hay descuento
// debugger;
// let dia = 'jueves';
// let precioProducto = 580;
// // El triple igual es para coincidencias exactas, si pones doble igual
// // acepta parecidos ejem: ("5"==5 es True) ("5"===5 es False)

// if (precioProducto >= 500 &&dia === 'jueves') {
//     console.log(`Total a pagar: ${precioProducto * 0.85}`);
// } else if (precioProducto >= 500 && dia === 'domingo') {
//     console.log(`Total a pagar: ${precioProducto * 0.9}`);
// } else {
//     console.log(`Total a pagar: ${precioProducto}`);
// }

// Ejercicio 4
// Descuento del 5% bajo 2 condiciones (al menos se debe cumplir una condicion)
//  El producto debe superar los 1000 soles
//  El dia debe ser lunes

// let dia = 'jueves';
// let precioProducto = 900;
// // El triple igual es para coincidencias exactas, si pones doble igual
// // acepta parecidos ejem: ("5"==5 es True) ("5"===5 es False)

// if (precioProducto >= 1000 || dia === 'lunes') {
//     console.log(`Total a pagar: ${precioProducto * 0.95}`);
// } else {
//     console.log(`Total a pagar: ${precioProducto}`);
// }

// Comparadores aritmeticos son:
// > mayor que
// < menor que
// >= mayor o igual que 
// <= menor o igual que
// === igual en valor y en tipo de dato que
// == igual en valor que
// !== diferente que

// Ejemplo 3.5

// Se  requiere  determinar  cuál  de  tres  cantidades  
// proporcionadas  es  la  mayor.  Realizar  su  respectivo  
// algoritmo  y  representarlo  mediante  un  diagrama de flujo, 
// pseudocódigo y diagrama N/S.Las  variables  que  intervienen  
// en  la  solución  de  este  problema  se  muestran en la  
// tabla 3.5.

// let a = +prompt('Ingrese el primer numero');
// let b = +prompt('Ingrese el segundo numero');
// let c = +prompt('Ingrese el tercer numero');

// let m;

// if (a > b) {
//     if (a > c) {
//         m = a;
//     } else {
//         m = c
//     }
// } else {
//     if (b > c) {
//         m = b;
//     } else {
//         m = c
//     }
// }

// console.log(`El numero mayor es: ${m}`)

// Ejemplo 3.8
// El director de una escuela está organizando un viaje de estudios, 
// y requie-re determinar cuánto debe cobrar a cada alumno y cuánto 
// debe pagar a la compañía  de  viajes  por  el  servicio.  La  forma  
// de  cobrar  es  la  siguiente:  si  son 100 alumnos o más, el costo 
// por cada alumno es de $65.00; de 50 a 99 alumnos, el costo es de 
// $70.00, de 30 a 49, de $95.00, y si son menos de  30,  el  costo  
// de  la  renta  del  autobús  es  de  $4000.00,  sin  importar  el  
// número de alumnos.Realice un algoritmo que permita determinar el 
// pago a la compañía de autobuses y lo que debe pagar cada alumno por 
// el viaje (represente en pseudocódigo, diagrama de flujo y diagrama 
//     N/S la solución).Al realizar un análisis del problema, se puede 
//     deducir que las varia-bles  que  se  requieren  como  datos  son
//       el  número  de  alumnos  (NA),  con  lo que se puede calcular 
//       el pago por alumno (PA) y el costo total del viaje (TOT). 
//       Las características de estas variables se muestran en la tabla 
//       3.8

// let cantidadAlumnos = +prompt('Ingrese el numero de alumnos');
// let costoAlumno;
// let costoAutobus;
// if(cantidadAlumnos >= 100){
//     costoAlumno = 65;
// }else if(cantidadAlumnos >= 50){
//     costoAlumno = 70;
// }else if(cantidadAlumnos >=30){
//     costoAlumno  =95;
// }else{
//     costoAutobus = 4000;
//     costoAlumno = costoAutobus/cantidadAlumnos;
// }
// if(costoAutobus !== 4000){
//     costoAutobus = costoAlumno * cantidadAlumnos;
// }
// console.log(`La cantidad a pagar por el autobus es: ${costoAutobus}`)
// console.log(`El precio por alumno es: ${costoAlumno}`)

// SCOPE de una variable o 
// ambito de una variable
// SCOPE es donde empieza y donde termina la variable

// Ingresar cantidad de horas trabajadas
// Ingresar precio por hora
// Resultados:
// Si la cantidad de horas es mayor o igual a 35, el exceso
// se paga al doble del salario normal por hora

// let precioXhoras = 50;
// let horasTrabajadas = 33;
// let pagoTotal;
// // var crea una variable en el scope de toda la aplicacion
// if(horasTrabajadas > 35){
//     pagoTotal = ((horasTrabajadas - 35)*2+ 35)*precioXhoras;
// }else{
//     pagoTotal = horasTrabajadas * precioXhoras;
// }
// console.log(`El pago total es: ${pagoTotal}`)

// Ejercicio 3.4

// El dueño de un estacionamiento requiere un diagrama de flujo 
// con el  algoritmo  que  le  permita  determinar  cuánto  debe  
// cobrar  por  el  uso del estacionamiento a sus clientes. Las 
// tarifas que se tienen son las siguientes:
// Las dos primeras horas a $5.00 c/u.
// Las siguientes tres a $4.00 c/u.
// Las cinco siguientes a $3.00 c/u.
// Después de diez horas el costo por cada una es de dos pesos.

let horasEst = +prompt('Ingrese el numero de horas en el estacionamiento:');
let totalPago;

if(horasEst > 10){
    totalPago = (horasEst - 10)*2 + (5*3) + (3*4) + (2*5);
}else if(horasEst > 5){
    totalPago = (horasEst - 5)*3 + (3*4) + (2*5);
} else if(horasEst > 2){
    totalPago = (horasEst - 2)*4 + (2*5);
} else{
    totalPago = horasEst * 5;
}
console.log(`El total a pagar es: ${totalPago}`);
