import React from 'react';
import Banner from '../../components/banner';
import Main from '../../components/main';
import '../../components/ApartmentDetails/ApartmentDetails.scss';
import aboutData from '../../data/aboutData';
import imgBanner2 from '../../Assets/img_banner2.png';
import ApartmentDetails from '../../components/ApartmentDetails';

// Définition du composant About
function About() {
  // Extraction des contenus de la section "À propos" depuis les données importées
  const { contentFiabilite, contentRespect, contentSecurite } = aboutData;

  return (
    <Main>
      <Banner showText={false} imageUrl={imgBanner2} />{' '}
      <div className="About-details">
        <ApartmentDetails title="Fiabilité" content={contentFiabilite} />
        <ApartmentDetails title="Respect" content={contentRespect} />
        <ApartmentDetails title="Service" content={contentRespect} />
        <ApartmentDetails title="Sécurité" content={contentSecurite} />
      </div>
    </Main>
  );
}

export default About;
