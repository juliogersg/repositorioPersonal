import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CarritoPage from './pages/carrito/CarritoPage';
import HomePage from './pages/home/HomePage';
import ProductosPage from './pages/productos/ProductosPage';

// React es una SPA (Single Page Application)

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/productos'>Productos</Link>
            </li>
            <li>
              <Link to='/carrito'>Carrito</Link>
            </li>
          </ul>
        </nav>
      </header>


<Switch>
  <Route path='/productos' component={ProductosPage}/>
  <Route path='/carrito' component={CarritoPage}/>
  <Route path='/' component={HomePage}/>
  {/* Home page debe ser la ultima ruta, sino siempre se queda en el home */}
</Switch>


    </Router>
  )
}

export default App
