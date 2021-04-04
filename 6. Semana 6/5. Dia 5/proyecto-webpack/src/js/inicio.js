import axios from "axios";

console.log('inicio javascript');

axios.get("https://regres.in/api/users").then((data)=>{
    console.log(data);
})