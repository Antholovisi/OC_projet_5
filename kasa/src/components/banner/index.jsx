import React from 'react';
import './banner.scss';

function Banner({ showText, imageUrl }) {
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
