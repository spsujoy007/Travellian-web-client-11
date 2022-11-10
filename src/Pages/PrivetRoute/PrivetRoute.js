import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <>
            <div className='flex justify-center my-56'>
                <progress className="progress w-56 progress-primary"></progress>
            </div>
              </>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
    
};

export default PrivetRoute;