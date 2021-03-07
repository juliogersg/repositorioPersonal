// Un comentario solo en esta linea

/**
 * Un comentario de muchas
 * lineas
 */

console.log('Hola Mundo');
// Variables:
// 1. Las variables solo se crean una vez
// 2. Las varaibles no pueden iniciar con un numero
// 3. Las variables no llevan espacios
// 4. Las variables no deben incluir caracteres especiales (tildes, comas, ñ, etc)


// Tipo de dato = STRING = textos

let nombre = "Julio German";
let apellido = 'Seminario Gastelo';
let direccion = 'Ignacio Merino E-13';

// Concatenar textos (Unir dos textos)
console.log('Nombre: '+ nombre)
// Otra forma de concatenar textos
console.log(`Apellido: ${apellido}`)
console.log(direccion)

// Tipo de dato = NUMBER = numeros(enteros y con decimales)
let edad = 29;
let sueldo = 950;
let sueldoconDescuento = sueldo - (sueldo * 8/100);
console.log(`Mi sueldo con descuento es: ${sueldoconDescuento}`);

// Tipo de dato = BOOLEAN = 2 posibles valores (true|false)
let transaccion = false;
let casado = true;
// Modificando el valor de una variable
transaccion = true;
casado = "SI";
console.log(`Casado?: ${casado}`);
console.log(`Transaccion exitosa: ${transaccion}`);

// Tipo de dato = ARRAY = arreglo = coleccion de elementos
let notas = [5, 2, 10, 8];
console.log(`Las notas son: ${notas}`)
console.log(`La primera nota es : ${notas[0]}`)

// Todas las operacinoes matematicas son iguales que en excel por ejemplo
//  + - * /
//  % (modulo) = esta operacion devuelve el residuo de una division entera de dos numeros
let residuo1 = 50%2;
let residuo2 = 51%2;
console.log(`Residuo o modulo de 50/2: ${residuo1}`);
console.log(`Residuo o modulo de 51/2: ${residuo2}`);
