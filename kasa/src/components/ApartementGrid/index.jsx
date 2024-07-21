import React, { useEffect, useState } from 'react';
import './apartement_grid.scss';
import Card from '../Card';

// Définition du composant ApartementGrid
function ApartementGrid() {
  // Déclaration de l'état pour stocker la liste des appartements
  const [apartements, setApartements] = useState([]);

  // Utilisation du hook useEffect pour charger les données des appartements lorsque le composant est monté
  useEffect(() => {
    // Fonction asynchrone pour récupérer les données
    const fetchData = async () => {
      try {
        // Requête fetch pour obtenir les données des appartements depuis un fichier JSON local
        const response = await fetch('/logements.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Conversion de la réponse en JSON
        setApartements(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Appel de la fonction pour récupérer les données
  }, []); // Le tableau de dépendances est vide, donc cet effet s'exécute uniquement lors du premier rendu

  // Rendu du composant
  return (
    <div className="apartement_grid">
      {apartements.map((apartement) => (
        <Card
          key={apartement.id}
          id={apartement.id}
          title={apartement.title}
          imageUrl={apartement.cover}
        />
      ))}
    </div>
  );
}

export default ApartementGrid;
