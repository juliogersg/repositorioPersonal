console.log(peliculas);
console.log(generos);

/**
 * Funcion que recibe un id de pelicula e imprime
 * la lista de generos (nombre de los generos) que
 * pertenecen a esta pelicula
 * @param {number} peliId 
 */
const mostrarGenerosByPeliId = (peliId) => {
    for (const i of peliculas) {
        if (i.id === peliId) {
            for (const j of i.genre_ids) {
                for (const k of generos) {
                    if (j === k.id) {
                        console.log(k.name);
                    }
                }
            }
        }
    }
}

mostrarGenerosByPeliId(464052);

/**
 * Dado el nombre de un genero, imprimir todos los nombres de las peliculas que
 * tengan al menos, ese genero en su lista de generos
 * @param {string} nombreGenero 
 */
const mostrarPelisByGeneroName = (nombreGenero) => {
    let idPivot;
    for (const i of generos) {
        if (nombreGenero === i.name) {
            idPivot = i.id;
        }
    }
    console.log(`Las peliculas del genero ${nombreGenero} son:`);
    for (const i of peliculas) {
        for (const j of i.genre_ids) {
            if (idPivot == j) {
                console.log(i.original_title);
            }
        }
    }
}

mostrarPelisByGeneroName('Adventure');

/**
 * Funcion que imprime la lista de peliculas con un promedio de 
 * calificaciones entre 7 a 10 puntos
 */
const peliculasRecomendadas = ()=>{
    console.log(`Las peliculas con puntuacion mayor a 7 son: `)
    for (const objPelicula of peliculas) {
        if(objPelicula.vote_average >= 7 && objPelicula.vote_average <= 10){
            console.log(objPelicula.original_title)
        }
    }
}

peliculasRecomendadas()