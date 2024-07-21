import React from 'react';
import './ApartmentDetails.scss';

// Définition du composant ApartmentDetails
function ApartmentDetails({ additionalClass, title, content }) {
  // Déclaration de l'état pour gérer l'ouverture et la fermeture de la description
  const [isOpen, setIsOpen] = React.useState(false);

  // Fonction pour basculer l'état d'ouverture/fermeture de la description
  const toggleDescription = () => {
    setIsOpen(!isOpen); // Inverse l'état actuel (ouvert/fermé)
  };

  // Rendu du composant
  return (
    <div className={`apartment-description ${additionalClass}`}>
      <p className="title">
        <span>{title}</span>
        <i
          className={`fa-solid fa-chevron-down ${isOpen ? 'rotate' : ''}`}
          onClick={toggleDescription}></i>
      </p>
      <div className={`description-content ${isOpen ? 'open' : 'closed'}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ApartmentDetails;
