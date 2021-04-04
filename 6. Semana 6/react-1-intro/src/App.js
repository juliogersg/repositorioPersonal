import React from 'react';
import Header from './Header';
import Usuarios from './Usuarios';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  const tituloApp = 'ReactJS es chevere!';
  const idiomas = ['Español', 'Inglés', 'Árabe', 'Polaco'];

  return (
    <>
      <Header />
      <div>
        <h1>{tituloApp}</h1>
        <hr />
        {idiomas.map((idioma,i) => {
          return <p key={i}>{idioma}</p>;
        })}
      </div>
      <Usuarios />
    </>
  )
}

export default App

// La funcion solo puede retornar una etiqueta padre, no pueden existir dos en el mismo nivel
// Para solucionarlo, se usan las etiquetas <> </> Estas engloban a los elementos hermanos
// Todos las etiquetas en jsx deben tener un cierre!
// React agrupa todos los estilos css en una sola, no hay exclusividad para cada componente.
// Para llenado dinamico del DOM, debemos utilizar el atributo key (Cada elemento debe tener un key unico, react lo usa en el DOM Virtual)
// Entre corchetes podemos colocar codigo js, pero solo comandos de una linea!!!