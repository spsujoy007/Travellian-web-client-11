import React from 'react';
import Banner from '../Banner/Banner';
import Photography from '../Photography/Photography';
import AboutSomePlaces from '../AboutSomePlaces/AboutSomePlaces';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='py-20'>
                <Photography></Photography>
            </div>
            <div className='py-20'>
                <AboutSomePlaces></AboutSomePlaces>
            </div>
            <TrustedCompanies></TrustedCompanies>
        </div>
    );
};

export default Home;