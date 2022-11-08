import React from 'react';
import Banner from '../Banner/Banner';
import Photography from '../Photography/Photography';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='py-20'>
            <Photography></Photography>
            </div>
        </div>
    );
};

export default Home;