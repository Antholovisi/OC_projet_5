import React, { useEffect, useState } from 'react';
import Main from '../../components/main';
import LogementsCarousel from '../../components/LogementsCarousel';
import ApartmentInfos from '../../components/ApartmentInfos';
import ApartmentDetails from '../../components/ApartmentDetails';
import { useParams, useNavigate } from 'react-router-dom';

// Définition du composant FicheAppartement
function FicheAppartement() {
  // Extraction de l'ID du logement depuis les paramètres de l'URL
  const { id } = useParams();

  // Déclaration des états pour stocker les données du logement et l'état de chargement
  const [apartmentData, setApartmentData] = useState(null);
  const [fetchComplete, setFetchComplete] = useState(false);
  const navigate = useNavigate();

  // Utilisation du hook useEffect pour charger les données du logement lorsque le composant est monté
  useEffect(() => {
    // Variable pour vérifier si le composant est encore monté lors de la mise à jour de l'état
    let isMounted = true;

    const fetchApartmentData = async () => {
      try {
        // Fetch des données depuis un fichier JSON local
        const response = await fetch(
          `${process.env.PUBLIC_URL}/OC_projet_5/logements.json`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Recherche du logement correspondant à l'ID
        const apartment = data.find((apartment) => apartment.id === id);
        if (isMounted) {
          if (apartment) {
            setApartmentData(apartment);
          } else {
            navigate('/404');
          }
          setFetchComplete(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/404');
      }
    };

    if (!fetchComplete) {
      fetchApartmentData();
    }
    // Nettoyage pour éviter les mises à jour d'état si le composant est démonté
    return () => {
      isMounted = false;
    };
  }, [id, fetchComplete, navigate]);

  // Utilisation du hook useEffect pour afficher les données du logement dans la console lorsque `apartmentData` change
  useEffect(() => {
    if (apartmentData) {
      console.log('Apartment Data:', apartmentData);
    }
  }, [apartmentData]);

  if (!fetchComplete) {
    // Retourne `null` si le chargement des données n'est pas terminé
    return null;
  }

  // Rendu du composant
  return (
    <Main>
      <LogementsCarousel images={apartmentData.pictures} />
      <ApartmentInfos data={apartmentData} />
      <div className="apartment-details__container">
        <ApartmentDetails
          data={apartmentData}
          title="Description"
          content={apartmentData.description}
        />
        <ApartmentDetails
          data={apartmentData}
          title="Equipements"
          content={apartmentData.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        />
      </div>
    </Main>
  );
}

export default FicheAppartement;
