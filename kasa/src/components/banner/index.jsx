import React from 'react';
import './banner.scss';

// Définition du composant Banner
function Banner({ showText, imageUrl }) {
  // Rendu du composant Banner
  return (
    <div className="banner">
      <img src={imageUrl} alt="paysage banner" />
      {showText && (
        <div className="banner-text">
          <p>
            Chez vous,<span className="second-line"> et partout ailleurs</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Banner;
