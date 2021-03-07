// Algoritmo ingresa tres nuevos elementos al arreglo 
// usando la funcion push
// let palabrasCastellano = [];
// for(let i = 0; i<3; i++){
//     let palabra = prompt('Ingrese nueva palabra al diccionario');
//     // arreglo.push(elemento) inyecta un nuevo elemento en el 
//     // arreglo en la ultima posicion que corresponda
//     palabrasCastellano.push(palabra);
// }
// console.log(palabrasCastellano);

// Planteamiento
// El cliente ingresa una opcion (1 o 2):
// 1. El cliente desea traducir una palabra del ingles al castellano
// 1.1. El cliente ingresa una palabra en ingles y el programa 
// da la traduccion en castellano
// 2. El cliente desea traducir una palabra del castellano alingles
// 2.1. El cliente ingresa una palabra en castellano y el programa 
// da la traduccion en ingles
// let castellano = ['hola', 'bien', 'adios', 'manana', 'comer', 'cantar'];
// let ingles = ['hello', 'good', 'bye', 'tomorrow', 'eat', 'sing'];

// let opcion = +prompt('Ingrese una opcion:');
// let palabra = prompt('Ingrese la palabra a traducir:');

// if (opcion === 1) {
//     for (let i = 0; i < ingles.length; i++) {
//         if (ingles[i] === palabra) {
//             console.log(`La traduccion es: ${castellano[i]}`);
//         }
//     }
// } else if (opcion === 2) {
//     for (let i = 0; i < castellano.length; i++) {
//         if (castellano[i] === palabra) {
//             console.log(`La traduccion es: ${ingles[i]}`);
//         }
//     }
// }


let castellano = ["hola", "bien", "adios", "mañana", "comer", "cantar"];
let ingles = ["hello", "good", "bye", "tomorrow", "eat", "sing"];
let opcion = prompt("Ingrese opcion 1 o 2");
let traduccion = "a";
if (opcion === "1") {
    let traducir = prompt("Ingrese la palabra en ingles")
    for (let i = 0; i < ingles.length; i++) {
        if (ingles[i] === traducir) {
            traduccion = castellano[i]
        }
    }
} else if (opcion === "2") {
    let traducir = prompt("Ingrese la palabra en español")
    for (let i = 0; i < castellano.length; i++) {
        if (castellano[i] === traducir) {
            traduccion = ingles[i]
        }
    }
}
console.log(traduccion === "" ?'No hay traduccion' :`La traduccion es:  ${traduccion}`)
// operador ternario:
// aplica solo cuando el if y el else tienen una sola linea de ejecucion

// Usando la estructura forof
// Ejemplo: recorrer el arreglo de palabras en castellano

for (const elemento of castellano) {
    console.log(elemento);
}
