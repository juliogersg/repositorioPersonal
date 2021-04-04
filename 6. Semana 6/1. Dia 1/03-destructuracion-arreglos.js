/**
 * Destructuracion de arreglos
 */

let edades = [12,15,47,20,51,32,14];

let [a,b,...resto] = edades;
// el resto siempre tiene que ser el ultimo elemento
console.log(a);
console.log(b);
console.log(resto);

// Forma par copiar un arreglo
let [...copiaEdades] = edades;
console.log(copiaEdades);

let nuevasEdades = [...edades];
//  ...edades ya es una copia, es un subarreglo de edades
// un arreglo diferente
console.log(nuevasEdades);

/**
 * Simulemos que la funcion getCoords, retorna
 * un arreglo de dos posiciones, en la primera
 * se encuentra la latitud de la ciudad y en la
 * segunda se encuentra la longitud de la ciudad
 */

const getCoords = (ciudad)=>{
    return [-16.234234, -70.234636];
}

const coordenadas = getCoords('Pucallpa');
console.log(coordenadas);

const [latitud,longitud] = getCoords('Pucallpa');
console.log(latitud);
console.log(longitud);

let notas = [[12,15,16],[12,17,20]];
let [[n1,n2,n3],alumno2] = notas;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(alumno2);
