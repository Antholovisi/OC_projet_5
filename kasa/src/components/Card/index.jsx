import React from "react";
import './card.scss';
import { Link } from 'react-router-dom';



function Card () {
    return (
        <Link to="/FicheAppartement" className="card">
             <p>
                <span className="line">Titre de la</span>
                <span className="line">location</span>
            </p>
        </Link>
    );
}

export default Card