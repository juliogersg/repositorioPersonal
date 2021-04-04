import { API as APInuevoNombre, despedida } from "./data.js";
import funcionSaludar from "./data.js";
// el export default nos permite recibir lo exportado con un nombre diferente
import * as funciones from "./data.js";
import miLibreria from "./data2.js"; 


console.log(APInuevoNombre);
funcionSaludar();
despedida();

console.log(funciones.API);

miLibreria.API_BACKEND;
miLibreria.getDatos();
miLibreria.getProductos();