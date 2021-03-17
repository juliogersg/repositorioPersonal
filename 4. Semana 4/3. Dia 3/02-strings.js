/**
 * Funciones y propiedades de los STRING
 */

let frase = 'Los programadores crean lo que las personas suenan';
console.log(frase);

// Tamano de un string
console.log(`Tamano: ${frase.length}`);

// Retorno de la frase en mayusculas
console.log(frase.toUpperCase());

// Retorno de la frase en minusculas
console.log(frase.toLowerCase());

// Obtener un arreglo de strings dando un separador
console.log(frase.split(' '));

// Obtener la posicion en la que aparece un determinado caracter
// o una determinada cadena
console.log(frase.indexOf('prog'));

// Buscando algo que no existe
console.log(frase.indexOf('mate'));
// Como no existe, se imprime -1

// Obtener la cadena sin los espacios en blanco de los extremos de la cadena
// OJO: no hablamos de espacios internos!!! Solo los externos

let correo = '    jorgegarba@gmail.com';
console.log(correo);
console.log(correo.trim());

// Obtener la subcadena desde la posicion 5, dos caracteres adelante
console.log(frase.substr(5,2));

// Obtener la subcadena desde la posicion 5 hasta la posicion 6 (no incluye la 7)
console.log(frase.substring(5,7));
