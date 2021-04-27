import React, { useRef } from 'react'

const Header = ({ setBusqueda }) => {

    const refInputBusqueda = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        let tagBuscado = refInputBusqueda.current.value;
        if (tagBuscado.trim()!==''){
            setBusqueda(tagBuscado.trim());
        }
    }

    return (
        <header>
            <nav className="navbar navbar-dark bg-danger">
                <div className="container-fluid">
                    <a className="navbar-brand">NoticiasApp</a>
                    <form
                        className="d-flex"
                        onSubmit={handleSubmit}>
                        <input
                            ref={refInputBusqueda}
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Header
