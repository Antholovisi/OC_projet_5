import React from 'react';
import './error.scss';
import { Link } from 'react-router-dom';

function Error () {
    return (
        <div className='error'>
            <p className='pic-404'>404</p>
            <div className='text-404'>
                Oups! La page que
                <span className='second-line'>vous demandez n'existe pas.</span>
                </div>
            <Link to="/" className='link-404'>Retournez sur la page d’accueil</Link>
        </div>
    )
}

export default Error