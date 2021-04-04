/**
 * Uso de la funcion FETCH
 */

// const API = 'https://reqres.in/api/users?page=2';

// fetch(API).then((peticion)=>{
//     // console.log(peticion);
//     // peticion es un objeto del tipo reponse, no es la data.
//     // hay que usar la funcion json
//     peticion.json().then((data)=>{
//         // json tambien devuelve una promesa y usando then se obtiene la data
//         console.log(data);
//     });
// });

const apiPeliculas = 'https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa';
const apiGeneros = 'https://api.themoviedb.org/3/genre/movie/list?api_key=105eb79aa1e6df60a2b95878ad2289aa';

// fetch(apiPeliculas).then((pet1)=>{
//     pet1.json().then((peliculas)=>{
//         fetch(apiGeneros).then((pet2)=>{
//             pet2.json().then((generos)=>{
//                 console.log(peliculas);
//                 console.log(generos);
//             })
//         })
//     })
// })


/**
 * Encadenamiento de las promesas
 */

fetch(apiPeliculas).then((peticion) => {
    return peticion.json();
}).then((peliculas) => {
    // console.log(peliculas);
    fetch(apiGeneros).then((peticion2) => {
        return peticion2.json();
    }).then((generos) => {
        console.log(peliculas);
        console.log(generos);
    })
})

fetch(apiPeliculas).then((peticion) => {
    return peticion.json();
}).then((peliculas) => {
    console.log(peliculas);
    return fetch(apiGeneros);
}).then((peticion2) => {
    return peticion2.json();
}).then((generos) => {
    console.log(generos);
});
