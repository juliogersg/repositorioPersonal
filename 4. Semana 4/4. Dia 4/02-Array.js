// API de la clase Array

let edades = [15, 12, 13, 29, 4, 65, 23, 78, 11];

// arreglo.forEach((elemento, index)=>{});
// forEach recibe un callback
edades.forEach(function (x) {
    console.log(x);
})

/**
 * 1. La funcion forEach itera todos los elementos y no retorna ningun dato
 * 2. No podemos detener un forEach
 */

console.log('------------ Probando forEach ---------------')

edades.forEach((x, i) => {
    console.log(x + ' ' + i);
    if (x === 29) {
        console.log('asfdsf');
    }
})

// arreglo.map((elemento,index)=>{})
/**
 * 1. La funcion map itera todos los elementos
 * 2. Retorna un **** nuevo arreglo **** con la posibilidad de transformar
 * a cada elemento del arreglo
 * 3. Retorna necesariamente el 100% de los elementos
 * 4. El map ejecuta el return para cada elemento del arreglo
 */
console.log('------------ Probando map ---------------')

let nuevasEdades = edades.map((el, i) => {
    console.log(el);
    return el;
    if (el % 2 === 0) {

    }
});
console.log(nuevasEdades);

let nuevasEdades2 = edades.map((el, i) => {
    // supongamos que queremos obtener en un nuevo arreglo
    // a las edades pares con el doble de su valor y los impares
    // con el mismo valor
    if (el % 2 === 0) {
        return el * 2;
    }
    // el map retorna si o si todos los elementos, aunque sea undefined
    return el;
});
console.log(nuevasEdades2);

// El map sirve para crear NUEVOS ARREGLOS
let nuevasEdades3 = edades.map((el, i) => {
    // supongamos que queremos obtener en un nuevo arreglo
    // a las edades pares con el doble de su valor y los impares
    // con el mismo valor
    if (el % 2 === 0) {
        return `Edad ${i} = ${el * 2}`;
    }
    return `Edad ${i} = ${el * 2}`;
});
console.log(nuevasEdades3);

// Funcion Filter
console.log('------------ Probando map ---------------')
/**
 * Arreglo.filter((elemento,i)=>{})
 * Filtra los elementos en cada iteracion y retorna un nuevo 
 * arreglo con los elementos que unicamente han sido filtrados
 * OJO: El filtro debe ser una condicional
 * OJO: Si ningun elemento pasa el filtro, de todos modos se 
 * retorna un arreglo vacio
 * OJO: A cada elemento modificado, no se le puede modificar el 
 * valor, solo retorna el elemento como tal
 */

let mayoresDeEdad = edades.filter((el, i) => {
    if (el >= 17) {
        return el;
    }
})

console.log(mayoresDeEdad);

let mayoresDeEdad2 = edades.filter((el, i) => {
    if (el >= 1000) {
        return el;
    }
})

console.log(mayoresDeEdad2);

/**
 * arreglo.find((elemento,i)=>{})
 * Itera los elementos de un arreglo hasta que la condicion interna
 * se cumpla, cuando esto sucede, se retorna el elemento que haya 
 * cumplido con la condicion
 * OJO: Se retorna el primer elemento que cumpla con la condicion (UNO SOLO)
 * FIND a diferencia de FILTER debe ser usado para encontrar un elemento unico
 * Cuando el elemento no es encontrado, se retorna undefined
 * Si el elemento es encontrado, no puede ser modificado cuando es retornado
 * se retorna el elemento tal cual
*/

let el65 = edades.find((el,i)=>{
    if(el === 65){
        return el;
    }
});

console.log(el65)

/**
 * array.reduce((acumulador, elemento)=>{})
 * 
 */

let sumaTotal = edades.reduce((sumatoria, el)=>{
    return sumatoria + el;
}, 0);
// El cero indica el valor en el cual va a comenzar el acumulador

console.log(sumaTotal);