import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import ServiceCard from '../ServiceCard/ServiceCard';
import UseTitleHook from '../UseTitleHook/UseTitleHook';

const AllServices = () => {
    UseTitleHook("Services");
    const [loading, setLoading] = useState(true);
    const [services, setSevices] = useState([]);

   useEffect( () => {
        // fetch('https://travellian-server.vercel.app/services')
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setSevices(data)
            setLoading(false)
        })
    } , [services]);

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
            }
        </div>
    );
};

export default AllServices;