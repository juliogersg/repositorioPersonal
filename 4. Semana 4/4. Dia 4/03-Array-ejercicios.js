/**
 * Funcion que retorna un nuevo arreglo de peliculas 
 * donde cada objPelicula tendra un atributo adicional
 * llamado 'genres' que sera un arreglo que tenga la lista de
 * generos en string (los nombres)
 */
// function agregarGeneros() {
//     let peliculasModificadas = peliculas.map((objPeli) => {
//         let names = objPeli.genre_ids.map((idGenero) => {
//             let objGeneroEncontrado = generos.find((objGenero) => {
//                 if (objGenero.id === idGenero) {
//                     return objGenero;
//                 }
//             });
//             return objGeneroEncontrado.name;
//         });
//         objPeli.genres = names;
//         return objPeli;
//     });
//     console.log(peliculasModificadas);
// };
// agregarGeneros();

/**
 * Funcion que imprime un objeto genero cuyo id sea igual al parametro recibido
 * @param {*} idGenero 
 */
// function getGeneroById(idGenero) {
//     let objGeneroEncontrados = generos.find((objGenero) => {
//         if (objGenero.id = idGenero) {
//             return objGenero;
//         }
//     });
//     console.log(objGeneroEncontrados);
// }

// getGeneroById(16);

/**
 * Funcion que imprime la lista de generos dado un arreglo de ids
 * @param {array} idsGeneros 
 */
function getGenerosByIds(idsGeneros = []) {
    let generosEncontrado = idsGeneros.map((idGenero) => {
        let objGeneroEncontrados = generos.find((objGenero) => {
            if (objGenero.id === idGenero) {
                return objGenero;
            }
        });
        return objGeneroEncontrados;
    });
    generosEncontrado.forEach((el) => {
        console.log(el.name);
    });
}

getGenerosByIds([16, 35, 99]);