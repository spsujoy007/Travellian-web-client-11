import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <>
                <div className='my-56'>
                <h1 className='text-center mb-2 text-2xl'>Loading...</h1>
            <div className='flex justify-center '>
                <progress className="progress w-56 progress-primary"></progress>
            </div>
                </div>
              </>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
    
};

export default PrivetRoute;