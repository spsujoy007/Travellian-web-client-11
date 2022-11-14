import React, { useContext} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Reviews.css'

const Reviews = ({service, handlePostReview}) => {

    const {user} = useContext(AuthContext);
	const location = useLocation();

       

    return (
        <div>
            <h1 className='uppercase text-2xl mt-10 py-4'>Reviews about {service.title} journey</h1>
            <div className='md:flex items-center'>
            <div className='flex items-center'>
                <img className='border-4 border-primary' style={{width: '40px', height: '40px', borderRadius: "60px"}} src={user?.photoURL ? user.photoURL : 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=612x612&w=0&k=20&c=IJ1HiV33jl9wTVpneAcU2CEPdGRwuZJsBs_92uk_xNs='} alt="" />
                <h2 className='mx-3'>{user?.displayName ? user.displayName : ""}</h2>
                
            </div>

            {/* form input review */}
            <div className='md:mt-0 mt-4'>
                <form onSubmit={handlePostReview} className='flex items-center'>
                <input name='message' type="text" placeholder="Type your review here" className="md: w-96 input input-bordered w-full mr-5" required/>

                    {user?.uid ? 
                        <button type='submit' className='btn btn-primary'>Post</button>
                    :
                        <NavLink to='/login' state={{from: location}} replace><button type='submit' className='btn'>Post</button></NavLink>
                    }
                
                </form>
            </div>
            </div>

      

        </div>
    );
};

export default Reviews;