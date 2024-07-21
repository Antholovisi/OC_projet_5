import React, { useState } from 'react';
import './LogementsCarousel.scss';

// Définition du composant fonctionnel LogementsCarousel
const LogementsCarousel = ({ images }) => {
  // Déclaration de l'état pour suivre l'index de l'image actuelle
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = images.length; // Nombre total d'images

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesCount);
    // Increment l'index de la diapositive actuelle, et revient au début lorsque la fin est atteinte
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesCount - 1 : prevSlide - 1
    );
    // Décrémente l'index de la diapositive actuelle, et va à la fin lorsque le début est atteint
  };

  // Vérifie si il y a une seule image dans le carrousel
  if (images.length === 1) {
    return (
      // Affiche une image sans les contrôles de navigation
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-inner single-image">
            <div className="slide single-image">
              <img src={images[0]} alt={`Slide 1`} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Affiche le carrousel avec les contrôles de navigation si plusieurs images sont présentes
  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-inner">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ zIndex: images.length - index }}>
              <img src={imageUrl} alt={`Slide ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <button className="arrow prev" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="arrow next" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="counter">{`${currentSlide + 1}/${slidesCount}`}</div>
    </div>
  );
};

// Exportation du composant
export default LogementsCarousel;
