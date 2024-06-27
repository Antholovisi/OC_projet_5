import React from 'react';
import Main from '../../components/main';
import ApartmentBanner from '../../components/ApartmentBanner';
import ApartmentInfos from '../../components/ApartmentInfos';
import ApartmentRating from '../../components/ApartmentRating';
import ApartmentDetails from '../../components/ApartmentDetails';

function FicheAppartement() {
    return (
        <Main>
            <ApartmentBanner />
            <ApartmentInfos />
            <ApartmentRating />
            <ApartmentDetails />
            <ApartmentDetails />
        </Main>
    );
}

export default FicheAppartement