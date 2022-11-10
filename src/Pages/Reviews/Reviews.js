import React, { useContext} from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Reviews = ({service, handlePostReview}) => {
    const {_id} = service;

    const {user} = useContext(AuthContext);
       

    return (
        <div>
            <h1 className='uppercase text-2xl mt-10 py-4'>Reviews about {service.title} journey</h1>
            <div className='flex items-center'>
            <div className='flex items-center'>
                <img style={{width: '40px', height: '40px', borderRadius: "60px", border: "3px solid gray"}} src={user?.photoURL ? user.photoURL : 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=612x612&w=0&k=20&c=IJ1HiV33jl9wTVpneAcU2CEPdGRwuZJsBs_92uk_xNs='} alt="" />
                <h2 className='mx-3'>{user?.displayName ? user.displayName : ""}</h2>
                
            </div>

            {/* form input review */}
            <div>
                <form onSubmit={handlePostReview} className='flex items-center'>
                <input name='message' type="text" placeholder="Type here" className="input input-bordered w-full mr-5" required/>
                    {user?.uid ? 
                    <button type='submit' className='btn btn-primary'>Post</button>
                    :
                    <>
                        <button disabled type='submit' className='btn btn-primary'>Post</button>
                    </>
                }
                
                </form>
            </div>
            </div>

      

        </div>
    );
};

export default Reviews;