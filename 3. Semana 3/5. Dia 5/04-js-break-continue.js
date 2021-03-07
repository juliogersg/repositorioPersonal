// Break
// Finaliza de manera total un ciclo for
// sin importar que a este le quedaran iteraciones por dar

let castellano = ["hola", "bien", "adios", "mañana", "comer", "cantar"];
let busqueda = 'comer';

for (const palabra of castellano) {
    if(busqueda === palabra){
        console.log('Lo encontre');
        break;
    }
}

// continue
// Finaliza la iteracion actual de un ciclo for , pasando 
// de inmediato a la siguiente iteracion

// Entre los numeros del 1 al 6
// Imprimir la tabla de multiplicar de los numeros impares

for (const numero of [1,2,3,4,5,6]) {
    if(numero%2 === 0){
        continue;
    }
    console.log(`Tabla de multiplicar del ${numero}`)
    for (const multiplicador of [1,2,3,4,5,6,7,8,9,10]) {
        console.log(`${numero} x ${multiplicador} = ${numero*multiplicador}`);
    }
}

// averiguar while y do while en javascript