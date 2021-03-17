function ingrediente(_nombre, _cantidad, _unidadMedida){
    this.nombre = _nombre || '';
    this.cantidad = _cantidad || 0;
    this.unidadMedida = _unidadMedida || '';
}

function receta(){
    this.nombre = '';
    this.ingredientes = [
        {nombre:'',cantidad:0,unidadMedida:''},
    ];
    this.tiempo = 0;
    this.tipo = '';
    this.info = function () {
        console.log(`El plato ${this.nombre} es un plato ${this.tipo} y su tiempo de preparacion es de ${this.tiempo} horas`);
    }
    // Con las funciones de flecha con funciona el this
}
// el this sirve para especificar una variable

let ceviche = new receta();
// Con el new creamos un objeto
ceviche.nombre = 'Ceviche';
ceviche.tipo = 'Marino';
ceviche.tiempo = 1;
console.log(ceviche);
ceviche.info();

// Como agregar un ingrediente al ceviche?
// Forma 1: directamente
ceviche.ingredientes.push({nombre:'Pescado',cantidad:1;unidadMedida:'kg'});
ceviche.ingredientes.push({nombre:'Cebollas',cantidad:2;unidadMedida:'cabezas'});
// Forma 2: usando otro objeto
ceviche.ingredientes.push(new ingrediente('Limon',4,'Unidades'));

let chaufaDePollo = new receta();
chaufaDePollo.nombre = 'Chaufa de Pollo';
chaufaDePollo.tipo = 'Oriental';
chaufaDePollo.tiempo = 1.2;
console.log(chaufaDePollo);
chaufaDePollo.info();