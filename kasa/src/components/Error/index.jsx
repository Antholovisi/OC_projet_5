import React from 'react';
import Logo from '../../Assets/404.png';
import './error.scss';
import { Link } from 'react-router-dom';

function Error () {
    return (
        <div className='error'>
            <img src={Logo} alt="404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='link-404'>Retournez sur la page d’accueil</Link>
        </div>
    )
}

export default Error