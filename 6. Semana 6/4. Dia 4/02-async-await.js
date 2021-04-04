/**
 * Utilizando una funcion async
 */

const apiPeliculas = 'https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa';
const apiGeneros = 'https://api.themoviedb.org/3/genre/movie/list?api_key=105eb79aa1e6df60a2b95878ad2289aa';

const traerDatos = async () => {
    const peticion1 = await fetch(apiPeliculas);
    const peliculas = await peticion1.json();
    const peticion2 = await fetch(apiGeneros);
    const generos = await peticion2.json();

    return {
        peliculas: peliculas,
        generos: generos
    }
}
// todo lo que retorna la funcion async, lo retorna en una promesa

traerDatos().then((rptaFinal) => {
    console.log(rptaFinal);
});