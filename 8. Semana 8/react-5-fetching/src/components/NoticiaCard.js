import React from 'react'

const NoticiaCard = ({objNoticia}) => {

    return (
        <div className='card shadow'>
            <img className='card-img-top' src={objNoticia.urlToImage} alt="" height='150'/>
            <div className="card-body">
                <h4 className='card-title'>{objNoticia.title}</h4>
                <p className="card-text">{objNoticia.description}</p>
                <small className='text-muted'>{objNoticia.publishedAt.split('T')[0]}</small>
                <a href={objNoticia.url} target='_blank' rel='noreferrer'>Ver noticia completa</a>
            </div>
        </div>
    )
}

export default NoticiaCard
