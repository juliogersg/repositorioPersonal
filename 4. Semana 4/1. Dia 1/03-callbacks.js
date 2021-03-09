function buscarPorDni(dni) {

    let rpta = 'Julio Seminario G';

    setTimeout(function () { console.log('Ya pasaron 2 segundos') }, 2000);

    return rpta;
}

let encontrado = buscarPorDni('12345678');
console.log(encontrado);

function buscarPorDni2(dni) {

    let rpta = 'en blanco';

    setTimeout(function () { rpta = 'Julio Seminario G' }, 2000);

    return rpta;
}
// El return se adelanta y no se ejecuta el setTimeout por la asincronia

let encontrado = buscarPorDni2('12345678');
console.log(encontrado);

function buscarPorDni3(dni, fn) {

    let rpta = 'en blanco';

    setTimeout(function () {
        rpta = 'Julio Seminario G';
        fn(rpta);
    }, 2000);

}

let encontrado = buscarPorDni3('12345678', function(nombre){console.log(nombre);});
console.log(encontrado);