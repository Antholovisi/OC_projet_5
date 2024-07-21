import React from 'react';
import Banner from '../../components/banner';
import Main from '../../components/main';
import ApartmentDetails from '../../components/ApartmentDetails';
import aboutData from '../../data/aboutData';
import imgBanner2 from '../../Assets/img_banner2.png';

// Définition du composant About
function About() {
  // Extraction des contenus de la section "À propos" depuis les données importées
  const { contentFiabilite, contentRespect, contentSecurite } = aboutData;

  return (
    <Main>
      <Banner showText={false} imageUrl={imgBanner2} />{' '}
      <ApartmentDetails
        additionalClass="About-details"
        title="Fiabilité"
        content={contentFiabilite}
      />
      <ApartmentDetails
        additionalClass="About-details"
        title="Respect"
        content={contentRespect}
      />
      <ApartmentDetails
        additionalClass="About-details"
        title="Service"
        content={contentRespect}
      />
      <ApartmentDetails
        additionalClass="About-details"
        title="Sécurité"
        content={contentSecurite}
      />
    </Main>
  );
}

export default About;
