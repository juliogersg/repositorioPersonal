const agregarAlCarrito = (producto, cantidad) =>{
    console.log('Listo');
}
// Reemplazamos function por una flecha (=>) despues del parentesis

const otraFuncion = ()=>{
    console.log('Se hizo');
}

const cuboDeNumero = n =>{
    // Se puede omitir el parentesis cuando la funcion solo recibe un parametro
}

const cuadradoDeNumero = n =>(n*n)
// Cuando la funcion es de una linea, se puede omitir las llaves y poner parentesis
console.log(cuadradoDeNumero(5));
