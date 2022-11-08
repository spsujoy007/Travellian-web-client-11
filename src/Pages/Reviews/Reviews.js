import React from 'react';

const Reviews = ({service}) => {
    return (
        <div>
            <h1 className='uppercase text-3xl mt-10 py-4'>Reviews about {service.title} journey</h1>
            <div className='flex items-center'>
            <div className='flex items-center'>
                <img style={{width: '60px'}} src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=612x612&w=0&k=20&c=IJ1HiV33jl9wTVpneAcU2CEPdGRwuZJsBs_92uk_xNs=" alt="" />
                <h2 className='mx-3'>Mr jhankar</h2>
            </div>

            {/* form input review  */}
            <div>
                <form className='flex items-center'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full  mr-5"/>
                    <button type='submit' className='btn btn-primary'>Post</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Reviews;