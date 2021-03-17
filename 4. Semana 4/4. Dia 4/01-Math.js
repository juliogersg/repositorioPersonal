// No se puede instanciar esta clase
// La clase math es una clase estatica
// por ende, no se instancian objetos a partir de ella

// Obtener un numero aleatorio entre 50 y 100
let aleatorio = Math.random() * (100-50)+50;
console.log(aleatorio);

// Rendondear un numero
console.log(Math.round(aleatorio));

// Techo de un numero
// Si el numero es:
// 3.1 -> el techo es 4
// 9.002 -> el techo es 10

console.log(Math.ceil(aleatorio));

// Piso de un numero
// Si el numero es:
// 7.99 -> el piso es 7
// 70.89 -> el piso es 70

console.log(Math.floor(aleatorio));

// Raiz cuadrada de un numero

console.log(Math.sqrt(81));