import axios from "axios";
console.log('Hola mundo, mi primer proyecto en node');

for (const n of [1,5,3,8]) {
    console.log(n);
}

// fetch('https://regres.in/api/users').then((peticion)=>{
//     return peticion.json();
// }).then((data)=>{
//     console.log(data);
// })
// No se puede usar el fetch porque no es una funcion nativa de node, solo se ejecuta con los navegadores
// Deberemos importar axios

axios.get("https://regres.in/api/users").then((data)=>{
    console.log(data);
})