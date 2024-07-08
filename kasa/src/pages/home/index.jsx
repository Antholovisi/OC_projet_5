import React, { useEffect } from 'react';
import Banner from '../../components/banner';
import Main from '../../components/main';
import ApartementGrid from '../../components/ApartementGrid';
import imgBanner1 from '../../Assets/img_banner1.png';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <Banner showText={true} imageUrl={imgBanner1} />
      <ApartementGrid />
    </Main>
  );
}

export default Home;
