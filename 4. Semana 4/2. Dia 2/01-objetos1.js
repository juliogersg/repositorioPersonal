let mascotaPerdida = {
    raza: 'Bull Terrier',
    colores: ['negro', 'blanco', 'cafe'],
    encontradoEn: 'Av. Arequipa',
    alturaMetros: 0.5,
    edadAprox: 1.5,
    nroContacto: '974854123',
    genero: 'macho'
}

console.log(`Raza: ${mascotaPerdida.raza}`);
console.log(`Altura aproximada: ${mascotaPerdida['alturaMetros']} metros`);

for (const color of mascotaPerdida.colores) {
    console.log(color);
}

const MascotaConstructor = function () {
    let mascotaPerdida = {
        raza: 'Bull Terrier',
        colores: ['negro', 'blanco', 'cafe'],
        encontradoEn: 'Av. Arequipa',
        alturaMetros: 0.5,
        edadAprox: 1.5,
        nroContacto: '974854123',
        genero: 'macho'
    }
    return mascotaPerdida;
}

let fido = MascotaConstructor();
let sasha = MascotaConstructor();

console.log(fido);
console.log(sasha);

fido.raza = 'Pitbull';
fido.alturaMetros = 0.3;
sasha.genero = 'hembra';
sasha.raza = 'Puddle';

console.log(fido);
console.log(sasha);

console.log('--------------------------------------')

// Forma que NO SE DEBE USAR para crear un objeto
let chancho = mascotaPerdida;
chancho.edadAprox = 0.5;
chancho.colores = ['blanco', 'negro'];

console.log(chancho);
console.log(mascotaPerdida);
// Forma en la que se puede hacer pero NO ES RECOMENDABLE
let kyra = { ...mascotaPerdida };
// Los ... sirven para crear una copia de mascotaPerdida
console.log(kyra);
console.log(mascotaPerdida);

console.log('--------------------------------------')

const MascotaConstructor2 = function (_raza, _colores, _encontradoEn, _alturaMetros, _edadAprox, _nroContacto, _genero) {
    let mascotaPerdida = {
        raza: _raza || '',
        // si _raza es null o undefined -> '', sino siempre se prefiere _raza
        colores: _colores || [],
        encontradoEn: _encontradoEn || '',
        alturaMetros: _alturaMetros || 0,
        edadAprox: _edadAprox || 0,
        nroContacto: _nroContacto || '',
        genero: _genero || ''
    }
    return mascotaPerdida;
}

let fido2 = MascotaConstructor2('Pitbull', ['blanco', 'negro'], 'Av. Progreso',)
let sasha2 = MascotaConstructor2();

console.log(fido2);
console.log(sasha2);
