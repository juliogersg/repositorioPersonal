/**
 * Procesos sincronos:
 * Se ejecutan de arriba a abajo y en orden
 */

console.log(1);

console.log(1);

setTimeout(() => {
    console.log(3);
}, 2000);

console.log(4);

console.log(5);

/**
 * Los procesos asincronos nos permite modificar el tiempo en el 
 * que se va a ejecutar una parte del codigo.
 * 
 * Una funcion para hacerlo es setTimeout
 * setTimeout(() => {
 * codigo_a_ejecutar;
 * }, tiempo_en_milisegundos);
 * 
 */

const getCoords = (ciudad, callback)=>{
    let rpta;
    setTimeout(() => {
        rpta =  [-16.23234,-70.342352];
        callback(rpta);
        // El callback es una alternativa a la asincronia
        // Debe estar dentro del proceso asincrono 
    }, 3000);
}

getCoords('Arequipa',(rpta)=>{
    console.log(`Resultado: ${rpta}`);
});

for (const n of ['Jaime','Gaby','Mia']) {
    console.log(n);
}
