import React, { useEffect, useState } from 'react';
import ReviewCompo from '../ReviewsCompo/ReviewCompo';

const AddReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // const url = `http://localhost:5000/review?serviceId=${_id}`
        const url = `http://localhost:5000/reviews`
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
        
    }, [reviews])
    return (
        <div className='mt-10'>
            <ReviewCompo reviews={reviews}></ReviewCompo>
        </div>
    );
};

export default AddReviews;