import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client/';

const ENPOINT = "https://codigo4-pos.herokuapp.com";

const App = () => {

  // socket siempre debe inicializarse una vez
  // por eso debe hacerse en el useEffect
  useEffect(() => {

    const socket = socketIOClient(ENPOINT);
    socket.on("reporte-dashboard",(data)=>{
      console.log(data);
    });

  }, [])

  return (
    <div>
      Holis
    </div>
  )
}

export default App
