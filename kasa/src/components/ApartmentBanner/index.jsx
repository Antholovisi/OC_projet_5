import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ApartmentBanner.scss';

function ApartmentBanner({ additionalClass, images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={`apartment-banner ${additionalClass}`}>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        onClickItem={() => {}}
        onClickNext={handleNext}
        onClickPrev={handlePrev}
        infiniteLoop={true}
        showStatus={false} // Cacher le compteur de diapositives
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <div className="custom-prev-arrow" onClick={onClickHandler}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div className="custom-next-arrow" onClick={onClickHandler}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          )
        }>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ApartmentBanner;
