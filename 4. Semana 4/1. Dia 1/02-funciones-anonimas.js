(function (a, b){
    console.log(a+b);
})(5,6)

const sumar = function(a,b){
    return a+b;
}
console.log(sumar(50,60));

function multiplicar(n1, n2){
    let sumatoria = 0;
    for(let i=0;i<n1;i++){
        sumatoria = sumar(sumatoria,n2);
    }
    console.log(sumatoria);
}

multiplicar(5,8);

function multiplicar2(n1, n2, fn){
    let sumatoria = 0;
    for(let i=0;i<n1;i++){
        sumatoria = fn(sumatoria,n2);
    }
    console.log(sumatoria);
}

multiplicar2(5, 6, sumar);
// sumar: mostrar u obtener el valor interno de la variable sumar
// sumar(): ejecuta la funcion que se encuentre dentro de la variable sumar
