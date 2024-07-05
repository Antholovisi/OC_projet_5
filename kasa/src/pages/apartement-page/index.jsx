import React, { useEffect, useState } from 'react';
import Main from '../../components/main';
import ApartmentBanner from '../../components/ApartmentBanner';
import ApartmentInfos from '../../components/ApartmentInfos';
import ApartmentDetails from '../../components/ApartmentDetails';
import { useParams, useNavigate } from 'react-router-dom';

function FicheAppartement() {
  const { id } = useParams();
  const [apartmentData, setApartmentData] = useState(null);
  const [fetchComplete, setFetchComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchApartmentData = async () => {
      try {
        const response = await fetch('/logements.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
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

    return () => {
      isMounted = false;
    };
  }, [id, fetchComplete, navigate]);

  useEffect(() => {
    if (apartmentData) {
      console.log('Apartment Data:', apartmentData);
    }
  }, [apartmentData]);

  if (!fetchComplete) {
    return null;
  }

  return (
    <Main>
      <ApartmentBanner
        images={apartmentData.pictures}
        additionalClass="apartment-banner"
      />
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
