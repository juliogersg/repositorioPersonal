let dnisDB = ['11111111','22222222','33333333'];
let nombresDB = ['Jorge','Miriam','Patty'];
let placasDB = ['abc-123','pol-789','acx-456'];
let marcaModeloDB = ['Mazda-CX3','Hyundai-Accent','Audi-Lemans'];

function buscaPorDni(consultaDNI){
    for(let i=0; i<dnisDB.length; i++){
        if(consultaDNI === dnisDB[i]){
            console.log(nombresDB[i]);
        }
    }
}

function buscarPorPlaca(consultaPlaca){
    // Desarrollar el algoritmo para buscar una placa en el arreglo
    // de placas y mostrar o imprimir la marcaModelo a la que representa
    if(consultaPlaca){
        for(let i=0;i<placasDB.length;i++){
            if(placasDB[i] === consultaPlaca){
                console.log(marcaModeloDB[i]);
                return;
            }
        }
    } else{
        console.log("La placa es erronea o no se ha enviado");
        return;
    }
    console.log('No se ha encontrado la placa solicitada');
}

let dni = '11111111';
let placa = 'abc-123';

buscaPorDni(dni);
buscarPorPlaca(placa);

/**
 * Funcion que recibe un monto y retorna otro respecto del tipo de cambio o el modo
 * @param {number} monto Cantidad de dinero que se desea cambiar
 * @param {string} modo 'PEN-USD' o 'USD-PEN' retornara el cambio correspondiente. Por defecto el valor del modo es: 'PEN-USD'
 * @return {number} se retorna el valor convertido
 */
function cambioMoneda(monto, modo = 'PEN-USD'){
    let tCambio = 3.7;
    if(modo === 'PEN-USD'){
        return (monto / tCambio).toFixed(2);
    }else if(modo === 'USD-PEN'){
        return (monto * tCambio).toFixed(2);
    }else{
        return -1;
    }
}

let resultado = cambioMoneda(3500,'USD-PEN');
console.log(resultado);
