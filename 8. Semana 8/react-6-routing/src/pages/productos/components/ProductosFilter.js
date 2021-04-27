import React, { useRef } from 'react'

const ProductosFilter = ({setTag}) => {

    const refInputTag = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        let tagBuscado = refInputTag.current.value;
        if (tagBuscado.trim()!==''){
            setTag(tagBuscado.trim());
        }
    }

    return (
        <div className='card'>
            <div className="card-header">
                Filtrador de Productos
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <input ref={refInputTag} type="search" className='form-control' placeholder='Busca un producto' aria-label="Search"/>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default ProductosFilter
