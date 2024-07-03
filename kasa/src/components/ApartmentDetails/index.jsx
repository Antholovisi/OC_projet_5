import React from 'react';
import './ApartmentDetails.scss';

function ApartmentDetails({ additionalClass, title, content }) {
  return (
    <div className={`apartment-description ${additionalClass}`}>
      <p className="title">
        <span>{title}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </p>
      <p className="description-content">{content}</p>
    </div>
  );
}

export default ApartmentDetails;
