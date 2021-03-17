/**
 * Obtener y settear atributos a los elementos
 */

let div1 = document.querySelector('#div1');

let btnCirculo = document.querySelector('#btnCirculo');
let btnCuadrado = document.querySelector('#btnCuadrado');

btnCirculo.onclick = function(){
    div1.classList.remove('cuadrado');
    div1.classList.add('circulo');
};

btnCuadrado.onclick = function(){
    div1.classList.remove('circulo');
    div1.classList.add('cuadrado');
};

let div2 = document.querySelector('#div2');
let interruptor = document.querySelector('#interruptor');

interruptor.onclick = ()=>{
    div2.classList.toggle('circulo');
    // toggle es un switch, si se da click y esta puesto se quita
    // si se da click y no esta puesto, lo pone
}

let tabla = document.querySelector('#tabla');
let btnBordeMenor = document.querySelector('#btnBordeMenor');
let btnBordeNeutro = document.querySelector('#btnBordeNeutro');
let btnBordeMayor = document.querySelector('#btnBordeMayor');

btnBordeNeutro.onclick = ()=>{
    /**
     * elemento.getAttribute('nombre del atributo');
     * Obtiene el valor del atributo especificado del elemento
     */
    let borde = tabla.getAttribute('border');
    // console.log(borde);
    /**
     * elemento.setAttribute('nombre del atributo', 'valor atributo');
     * para settear un atributo
     */
    if(borde == 0){
        tabla.setAttribute('border','1');
    }else{
        tabla.setAttribute('border','0');
    }
}
btnBordeMayor.onclick = ()=>{
    let borde = +tabla.getAttribute('border');
    borde++;
    tabla.setAttribute('border',borde);
}
btnBordeMenor.onclick = ()=>{
    let borde = +tabla.getAttribute('border');
    if(borde === 0){
        return;
    }    
    borde--;
    tabla.setAttribute('border',borde);
}

let btnMostrarClases = document.querySelector('#btnMostrarClases');

btnMostrarClases.onclick = ()=>{
    // Mostrando las clases de un elemento
    console.log(div1.classList);
    // Averiguando si un elemento tiene una determinada clase
    if(div1.classList.contains('circulo')){
        console.log('Si tiene la clase circulo')
    }
    // Otra forma de mostrar las clases: (solo devuelve un string)
    console.log(div1.getAttribute('class'));
}