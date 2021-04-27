import React from 'react'

const NoticiasTabla = ({ noticias }) => {
    return (
        <div className='col-12'>
            <div className="card shadow">
                <div className="card-body">
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Autor</th>
                                <th>Titulo</th>
                                <th>Descripcion</th>
                                <th>Imagen</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                noticias.map((objNoticia, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{objNoticia.author}</td>
                                            <td>{objNoticia.title}</td>
                                            <td>{objNoticia.description}</td>
                                            <td><img width='150' className='rounded' src={objNoticia.urlToImage} alt={objNoticia.title} /></td>
                                            <td><a href={objNoticia.url}>Link</a></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default NoticiasTabla
