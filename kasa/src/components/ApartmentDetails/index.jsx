import React from 'react';
import './ApartmentDetails.scss';

function ApartmentDetails({ additionalClass, title, content }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`apartment-description ${additionalClass}`}>
      <p className="title">
        <span>{title}</span>
        <i
          className={`fa-solid fa-chevron-down ${isOpen ? 'rotate' : ''}`}
          onClick={toggleDescription}></i>
      </p>
      {isOpen && <p className="description-content">{content}</p>}
    </div>
  );
}

export default ApartmentDetails;
