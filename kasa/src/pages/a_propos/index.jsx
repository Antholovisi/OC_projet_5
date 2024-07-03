import React from 'react';
import ApartmentBanner from '../../components/ApartmentBanner';
import Main from '../../components/main';
import ApartmentDetails from '../../components/ApartmentDetails';

function About() {
  return (
    <Main>
      <ApartmentBanner additionalClass="About-banner" />
      <ApartmentDetails additionalClass="About-details" />
      <ApartmentDetails additionalClass="About-details" />
      <ApartmentDetails additionalClass="About-details" />
      <ApartmentDetails additionalClass="About-details" />
    </Main>
  );
}

export default About;
