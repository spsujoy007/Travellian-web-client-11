import React, { } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();

    return (
        <div className='my-20'>
            <div className='text-center py-6'>
                <h1 className='text-5xl uppercase font-semibold mb-3'>Places to visit</h1>
                <p>Lets explore the world of places</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }

            {/* (item, index) => index < 5 &&  */}
        </div>
            <div className='flex justify-center mt-10'>
                <Link to='/services'>
                    <button className='btn btn-outline btn-primary px-20'>See all</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;