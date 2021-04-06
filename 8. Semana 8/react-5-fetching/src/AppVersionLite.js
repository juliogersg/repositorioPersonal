import React, { useEffect, useState, useRef } from 'react';
import { getNewsByTag } from './services/services';

const AppVersionLite = () => {

  // console.log('INICIO DEL COMPONENTE APP')
  // 1. inicializacion de variables de estado \ 4. obviamente la variable noticias no se inicia nuevamente, ya tiene las noticias de la base de datos
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState('coronavirus');
  const refInputBusqueda = useRef();

  // useEffect es una funcion que limita la cantidad de veces que se ejecuta un determinado codigo
  // por defecto recibe un callback
  // como segundo componente siempre se manda un arreglo. Si esta vacio, el codigo interno solo se ejecutara una vez, lo que implica que es independiente de las variables de estado

  // 3. Se ejecuta el useEffect, llama a la api y cuando la data llega, se usa setNoticias, lo que hace ejecutar el componente nuevamente
  useEffect(() => {
    // console.log('INICIO DEL USEEFFECT')
    getNewsByTag(busqueda).then(rpta => {
      // console.log('LLEGO LA DATA');
      setNoticias(rpta.data.articles);
      setCargando(false);
      // Primero deben cargarse las noticias y luego quitar el cargando...
    });
  }, [busqueda]); //6. como el arreglo dependencias esta vacio, el useEffect ya no se ejecuta [FIN DEL PROCESO]   \Las dependencias hacen que un useEffect se ejecute nuevamente si una o mas de las varibales en el arreglo es modificada \ 
  // A menos que el arreglo de dependencias tenga una o mas variables de estado (separados por comas), cuando estas variables sean modificadas, el useEffect tambien se ejecutara nuevamente. Si se utilizan variables de estado que no estan en el arreglo de dependencias, el useEffect no se ejecutara nuevamente 

  const handleSubmit = (e)=>{
    e.preventDefault();
        let termino = refInputBusqueda.current.value;
        setBusqueda(termino);
        setCargando(true);
  }

  // console.log('ANTES DEL RENDER')
  // 2. se muestra la vista (obviamente sin noticias, porque la variable noticias aun esta vacia) \ 5. se dibuja la vista con la lista de noticias
  // useRef es analogo a usar un id
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" ref={refInputBusqueda}/> 
        <button type='submit'>Buscar</button>
      </form>
      <hr/>
      {
        cargando ?
          <p>CARGANDO...</p>
          :
          noticias.map((n, i) => {
            return <p key={i}>{n.title}</p>
          })
      }

    </div>
  )
}

export default AppVersionLite
