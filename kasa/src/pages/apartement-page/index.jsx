import React from 'react';
import Main from '../../components/main';
import ApartmentBanner from '../../components/ApartmentBanner';
import ApartmentInfos from '../../components/ApartmentInfos';
import ApartmentDetails from '../../components/ApartmentDetails';
import './apartment-page.scss';

function FicheAppartement() {
    return (
        <Main>
            <ApartmentBanner />
            <ApartmentInfos />
            <div className='apartment-details__container'>
            <ApartmentDetails />
            <ApartmentDetails />
            </div>
        </Main>
    );
}

export default FicheAppartement