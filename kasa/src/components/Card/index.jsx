import React from 'react';
import './card.scss';
import { Link } from 'react-router-dom';

function Card({ title, imageUrl, id }) {
  return (
    <Link to={`/FicheAppartement/${id}`} className="card">
      <p>
        <img src={imageUrl} alt={title} />
        <span className="line">{title}</span>
      </p>
    </Link>
  );
}

export default Card;
