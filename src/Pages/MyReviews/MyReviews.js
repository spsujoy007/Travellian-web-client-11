import React, { useEffect, useState } from 'react';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    const {user} = useState();
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        // const url = `https://travellian-server.vercel.app/review?serviceId=${_id}`
        const url = `https://travellian-server.vercel.app/reviews`
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
        
    }, [reviews]);

    const handleDelete = id => {
          const procced = window.confirm("Are you sure, you want to delete your review?");
          if(procced){
              fetch(`https://travellian-server.vercel.app/reviews/${id}`, {
                  method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data)
                  if(data.deletedCount > 0){
                      // notify();
                      const remaining = reviews.filter(view => view._id !== id);
                      setReviews(remaining)
                      alert('Review deleted')
                  }
              })
          }
    
        
    }

    return (
        <div className='mb-48'>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Service</th>
        <th>Reviews</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
        reviews.map(review => <MyReviewRow
          key={review._id}
          review={review}
          handleDelete={handleDelete}
          user={user}
        ></MyReviewRow>)
      }
     
    </tbody>
  </table>
      </div>
        </div>
    );
};

export default MyReviews;