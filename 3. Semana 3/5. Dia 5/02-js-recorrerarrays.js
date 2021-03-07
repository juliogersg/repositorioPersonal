// Algoritmo que cuenta la cantidad de personas mayores de edad
// en el arreglo
let edades = [15, 20, 34, 56, 14, 85, 41, 10, 38];
let contador = 0;
for (i = 0; i < edades.length; i++) {
    if (edades[i] >= 17) {
        contador++;
    }
}
console.log(`Cantidad de personas menores de edad: ${contador}`);

console.log(`La primera edad registrada es: ${edades[0]}`);
console.log(`La ultima edad registrada es: ${edades[edades.length - 1]}`);

// Del arreglo de las edades, crear un nuevo arreglo que contenga
// el doble de las edades del primer arreglo

let dobles = [];
for (let i = 0; i < edades.length; i++) {
    if (typeof edades[i] === 'number') {
        dobles[i] = edades[i] * 2;
    }
}
console.log(dobles);