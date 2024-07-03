import React from 'react';
import './ApartmentBanner.scss';

function ApartmentBanner({ additionalClass, imageUrl }) {
  return (
    <div className={`apartment-banner ${additionalClass}`}>
      <img src={imageUrl} alt="intérieur de l'appartement" />
    </div>
  );
}

export default ApartmentBanner;
