/**
 * Pagina 44: Ejercicio 2.6
 *
 * Se  requiere  determinar  la  hipotenusa  de  un  triángulo  rectángulo. 
 * ¿Cómo sería el diagrama de flujo y el pseudocódigo que representen el
 * algoritmo  para  obtenerla?    
 * Recuerde  que  por  Pitágoras  se  tiene  que: C2 = A2 + B2.
 */

 let cateto1 = +prompt('Ingrese el cateto 1: ');
 let cateto2 = +prompt('Ingrese el cateto 2: ');

// Todos los datos recibidos por el prompt son STRING
// El mas adelante convierte el valor de STRING a NUMBER

 let hipotenusa;
 
//  let declara las variables. Si no se coloca valor queda undefined

hipotenusa = (cateto1**2 + cateto2**2)**0.5
 
 console.log(`La hipotenusa del triangulo es: ${hipotenusa}`)
 console.log(3_000)
//  Se puede usar el subguion para separar los miles de un numero
// Ayuda a la visualizacion del programador, no afecta en nada el output
