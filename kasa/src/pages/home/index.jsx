import React, { useEffect } from 'react';
import Banner from '../../components/banner';
import Main from '../../components/main';
import ApartementGrid from '../../components/ApartementGrid';
import imgBanner1 from '../../Assets/img_banner1.png';

// Définition du composant Home
function Home() {
  // Utilisation du hook useEffect pour exécuter un effet secondaire lors du premier rendu du composant
  useEffect(() => {
    // Défilement vers le haut de la page lorsque le composant est monté
    window.scrollTo(0, 0);
  }, []); // Le tableau de dépendances est vide, donc cet effet s'exécute uniquement lors du premier rendu

  // Rendu du composant
  return (
    <Main>
      <Banner showText={true} imageUrl={imgBanner1} />
      <ApartementGrid />
    </Main>
  );
}

// Exportation du composant Home
export default Home;
