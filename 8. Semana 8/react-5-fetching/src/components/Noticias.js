import React, { useState, useEffect } from 'react'
import NoticiasCard from './NoticiasCard';
import NoticiasTabla from './NoticiasTabla';

const Noticias = ({ noticias }) => {

    const [modo, setModo] = useState('tabla');

    useEffect(() => {
        if (localStorage.getItem('modo')==='cards'){
            setModo('cards');
        }
    }, []);

    return (
        <>
            <div className='row mt-4'>
                <div className="col-12 text-end">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button"
                            className={`btn ${modo === 'tabla' ? 'btn-danger' : 'btn-outline-danger'}`}
                            onClick={() => {
                                localStorage.setItem('modo', 'tabla');
                                setModo('tabla');
                            }}>Tabla</button>
                        <button type="button"
                            className={`btn ${modo === 'cards' ? 'btn-danger' : 'btn-outline-danger'}`}
                            onClick={() => {
                                localStorage.setItem('modo', 'cards');
                                setModo('cards');
                            }}>Cards</button>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                {
                    modo === 'tabla'
                        ?
                        <NoticiasTabla noticias={noticias} />
                        :
                        <NoticiasCard noticias={noticias} />
                }
            </div>
        </>
    )
}

export default Noticias
