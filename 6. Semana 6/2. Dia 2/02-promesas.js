/**
 * Tipo de datos: PROMESAS
 * Tienen dos partes importantes: creacion y consumo
*/

// creacion de una promesa
const obtenerDeudores = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve(['Max','Bryan','Michelle']);
            reject('Tiempo de espera agotado');
        }, 2500);
    })
}

// consumo de una promesa
obtenerDeudores().then((rpta)=>{
    // la funcion then recibe la respuesta de la promesa en 
    // un callback
    console.log(rpta);
}).catch((error)=>{
    // la funcion catch recibe un error cuando la promesa
    // no se cumple
    console.log(error);
});

/**
 * then se conecta con resolve de la promesa
 * catch se conecta con reject de la promesa
 * Si la promesa se cumple, resolve, sino reject
 */
