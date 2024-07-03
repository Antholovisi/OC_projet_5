import React from 'react';
import ApartmentBanner from '../../components/ApartmentBanner';
import Main from '../../components/main';
import ApartmentDetails from '../../components/ApartmentDetails';
import imgBanner2 from '../../Assets/img_banner2.png';

function About() {
  const contentFiabilité =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.';
  const contentRespect =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
  const contentSecurite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de securité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la securité domestique pour nos clients.";

  // Définissez les images que vous souhaitez afficher dans le carousel
  const images = [imgBanner2]; // Ajoutez d'autres images si nécessaire

  return (
    <Main>
      <ApartmentBanner images={images} additionalClass="about-banner" />
      <ApartmentDetails
        additionalClass="About-details"
        title="Fiabilité"
        content={contentFiabilité}
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
