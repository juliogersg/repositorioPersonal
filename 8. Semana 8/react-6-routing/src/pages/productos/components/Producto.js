import React from 'react'

const Producto = ({objProducto}) => {
    return (
        <div className='card'>
            <img src={objProducto.imagen} alt="" className='card-img-top' height='200'/>
            <div className="card-body">
                <div className="card-title">
                    {objProducto.nombre}
                </div>
                <p className="card-text">
                    {objProducto.descripcion}
                </p>
                <p className="d-flex justify-content-beetween">
                    <small>Precio: S/ {objProducto.precio}</small><small>Stock: {objProducto.stock} unidades</small>
                </p>
            </div>
        </div>
    )
}

export default Producto
