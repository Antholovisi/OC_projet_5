import React from 'react';
import Banner from '../../components/banner';
import Main from '../../components/main';
import ApartementGrid from '../../components/ApartementGrid';



function Home() {
    return (
        <Main>
            <Banner />
            <ApartementGrid />
        </Main>
    );
}

export default Home