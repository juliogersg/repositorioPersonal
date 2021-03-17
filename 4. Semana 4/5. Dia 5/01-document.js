/**
 * document es un objeto que representa todo el DOM
 * ademas tiene propiedades para crear, modificar y asignar
 * eventos con referencia al DOM
 */
console.log(document);

// Funciones y propiedades

/**
 * document.getElementById('id del elemento')
 * Obtiene una referencia al elemento dado su id
 */

const parrafo1 = document.getElementById('parrafo1');
console.log(parrafo1);

/**
 * document.getElementsByClassName('nombre de la clase de los elementos');
 * Obtiene una coleccion de elementos que coincida con la clase
 * proporcionada
 */
let languageList = document.getElementsByClassName('language');
console.log(languageList);
console.log(languageList[1]);
// languageList.forEach(element => {
//     console.log(element);    
// });
// No funciona porque languageList no es un arreglo, es una coleccion

/**
 * Array.from(iterable) convierte una coleccion de elementos a un
 * arreglo genuino
 */
languageList = Array.from(languageList);
languageList.forEach(element => {
    console.log(element);    
});

/**
 * document.querySelector('selector tipo css');
 * Devuelve un unico elemento que coincida con el selector css
 * que enviemos a la funcion
 */
let logo = document.querySelector('.logo');
console.log(logo);

/**
 * document.querySelectorAll('selector tipo css');
 * Devuelve uno o mas elementos que coincidan con el selector css
 * que enviemos a la funcion
 */

let hijosFooter = document.querySelectorAll('footer>*');
console.log(hijosFooter);

/**
 * document.createElement('nombre de la etiqueta');
 * Devuelve la referencia a un elemento HTML de acuerdo al
 * nombre de la etiqueta pasada como parametro
 * OJO: este elemento no esta en el DOM aun
 */

let header = document.createElement('header');
console.log(header);
let body = document.querySelector('body');
/**
 * element.appendChild(otroElemento) inyecta un nuevo elemento
 * hijo a ese padre
 */
// body.appendChild(header);

/**
 * element.preprend(otroElemento)  inyecta un nuevo elemento
 * hijo como primer hijo (inclusive si yo tenia hijos previamente) 
 */
body.prepend(header);



