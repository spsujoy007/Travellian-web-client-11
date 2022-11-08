import React from 'react';
import Banner from '../Banner/Banner';
import Photography from '../Photography/Photography';
import AboutSomePlaces from '../AboutSomePlaces/AboutSomePlaces';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>

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