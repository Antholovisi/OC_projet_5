import React from 'react';
import Banner from '../../components/banner';
import Main from '../../components/main';
import ApartmentDetails from '../../components/ApartmentDetails';

function About() {
  return (
    <Main>
      <Banner />
      <ApartmentDetails />
      <ApartmentDetails />
      <ApartmentDetails />
      <ApartmentDetails />
    </Main>
  );
}

export default About;
