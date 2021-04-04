const titulo = document.getElementById('titulo');
titulo.innerText = 'Cargando...'

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((rpta) => {
        titulo.innerText = 'La data ya llego'
        console.log(rpta);
    }).catch((error) => {
        console.log(error);
        titulo.innerText = 'Tenemos problemas con los datos';
    });

for (const n of [50,13,46,85]) {
    console.log(n);
}

/**
 * Protocolo HTTP
 * REQUEST:
 * 1. url de peticion
 * 2. verbo o metodo de solicitud
 *      get: solicitar o traer recursos
 *      post: crear recursos
 *      put: modificar recursos
 *      delete: borrar recursos
 * OJO: una misma url puede responder a 1 o + verbos http
 * 3. opcionalmente se puede enviar un  body  en la peticio,
 *      es decir, enviar datos al backend
 * 4. opcionalmente se pueden enviar  headers  que son cabeceras 
 *      con informacion adicional
 *      (*) un header por ejemplo, puede especificar el tipo de
 *          dato que enviamos al backend
 *          ejemplo: 'content-type: application Json'
 * RESPONSE:
 * 1. codigo o http status:
 *      200: ok
 *      404: not found
 *      201: created
 * 2. body en el cual recibimos la data que el servidor devuelve
 */


 const listaTODOS = document.getElementById('listaTODOS');
 
 axios.get('https://jsonplaceholder.typicode.com/todos')
     .then((rpta) => {
         const {data} = rpta;
         data.forEach(objTodo => {
            const li = document.createElement('li');
            li.innerText = `${objTodo.title} - ${objTodo.completed ? 'completado' : 'incompleto'}`
            listaTODOS.appendChild(li);    
         });
     }).catch((error) => {
         console.log(error);
         titulo.innerText = 'Tenemos problemas con los datos';
     });
