import React, { useState } from 'react';
import './ApartmentBanner.scss';

function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}>
          {images.map((imageUrl, index) => (
            <div key={index} className="slide">
              <img src={imageUrl} alt={`Slide ${index + 1}`} />
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
      <div className="counter">{`${currentSlide + 1}/${images.length}`}</div>
    </div>
  );
}

export default Carousel;
