import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';

// Définition du composant Card
function Card({ title, imageUrl, id }) {
  // Rendu du composant Card
  return (
    <Link to={`/FicheAppartement/${id}`} className="card">
      <p>
        <img src={imageUrl} alt={title} />
        <span className="line">{title}</span>
      </p>
    </Link>
  );
}

// Exportation du composant Card
export default Card;
