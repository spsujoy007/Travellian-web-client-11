import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();



    return (
        <div className='grid grid-cols-3 gap-10 my-12'>
            {
                services.map((service, index) => index < 3 && <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
            {/* (item, index) => index < 5 &&  */}
        </div>
    );
};

export default Services;