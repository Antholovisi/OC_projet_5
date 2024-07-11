import React, { useState } from 'react';
import './LogementsCarousel.scss';

const LogementsCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = images.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesCount - 1 : prevSlide - 1
    );
  };

  if (images.length === 1) {
    return (
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

export default LogementsCarousel;
