import { getPeliculaByName } from './servicios.js'

const formBusqueda = document.getElementById('formBusqueda');
const inputBusqueda = document.getElementById('inputBusqueda');
const resultados = document.getElementById('resultados');

formBusqueda.onsubmit = (e) => {
    e.preventDefault();
    let busqueda = inputBusqueda.value.trim();

    // version 1
    busqueda !== '' && buscarPelicula(busqueda);
    // version2
    // if(busqueda !== ''){
    //     buscarPelicula(busqueda);
    // }
}

const buscarPelicula = (busqueda) => {
    getPeliculaByName(busqueda).then((peliculas) => {
        dibujarPeliculas(peliculas);
    });
}

const dibujarPeliculas = (peliculas) => {
    resultados.innerHTML = '';
    peliculas.forEach(objPelicula => {
        const col = document.createElement('div');
        col.classList.add('col-md-3');
        col.innerHTML = `
        <div class="card mb-3">
                ${objPelicula.poster_path ? `<img src="https://image.tmdb.org/t/p/w500/${objPelicula.poster_path}" alt="" class="card-img-top">` : `<img src="http://placehold.it/200" alt="" class="card-img-top">`}
                    <div class="card-body">
                        <h4 class="card-title">${objPelicula.original_title}</h4>
                        <p class="card-text">${objPelicula.overview.substr(0, 80)} <a href="#">leer mas...</a>
                        </p>

                        <ul class="movie_features">
                            <li><small class="text-muted">
                                <i class="fas fa-calendar"></i> ${objPelicula.release_date}
                                </small></li>
                            <li><small class="text-muted">
                                <i class="fas fa-star text-warning"></i> ${objPelicula.vote_average}
                                </small></li>
                            <li><small class="text-muted">
                                <i class="fas fa-heart text-danger"></i> ${objPelicula.vote_count}
                                </small></li>
                            <li><small class="text-muted">
                                +18
                                ${objPelicula.adult ? `<i class="fas fa-ban text-danger"></i>` : ` <i class="fas fa-check text-success"></i>`}
                                </small></li>
                        </ul>
                    </div>
                </div>
        `;
        resultados.appendChild(col);
    });
}
