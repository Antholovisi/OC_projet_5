import React, { useEffect, useState } from 'react';
import './apartement_grid.scss';
import Card from '../Card';

function ApartementGrid() {
  const [apartements, setApartements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/logements.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApartements(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
