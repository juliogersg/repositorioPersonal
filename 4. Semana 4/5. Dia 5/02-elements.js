// let parrafo1 = document.getElementById(parrafo1);
let parrafo1 = document.querySelector('#parrafo1');

/**
 * elemento.innerText
 * obtiene o asigna el texto interno de un elemento
 * <p> este textooooooo</p>
 */

console.log(parrafo1.innerText);
// Este es un get (consulta)
parrafo1.innerText = 'Este es el nuevo texto';
// Este es un set (modificacion)

let listaLanguage = document.querySelectorAll('.language');
listaLanguage = Array.from(listaLanguage);

listaLanguage.forEach((li,i)=>{
    li.innerHTML  = `${li.innerHTML} <small><em>${i}</em></small>`;
});

// Ejercicio 
// Iterar la lista de peliculas y agregar dichas peliculas
// como elementos <li></li> al <ul></ul> que contiene los 
// lenguajes de programacion

// const llenarPeliculas = ()=>{
//     const ulLenguajes = document.querySelector('#parrafo1 + ul');
//     peliculas.forEach((objPeli)=>{
//         const li = document.createElement('li');
//         li.innerText = objPeli.original_title;
//         ulLenguajes.append(li);
//     })
// }
// llenarPeliculas();

const llenarGeneros = ()=>{
    const optionGeneros = document.getElementById('selectGeneros');
    generos.forEach((objGenero)=>{
        const option = document.createElement('option');
        option.innerText = objGenero.name;
        optionGeneros.append(option);
    });
}
llenarGeneros();

const llenarPeliculas = ()=>{
    const optionPeliculas = document.getElementById('selectPeliculas');
    peliculas.forEach((objPeli)=>{
        const option = document.createElement('option');
        option.innerText = objPeli.original_title;
        optionPeliculas.append(option);
    });
}
llenarPeliculas();