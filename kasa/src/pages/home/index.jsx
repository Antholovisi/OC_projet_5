import React from 'react';
import Banner from '../../components/banner';
import Main from '../../components/main';
import ApartementGrid from '../../components/Apartement grid';



function Home() {
    return (
        <Main>
            <Banner />
            <ApartementGrid />
        </Main>
    );
}

export default Home