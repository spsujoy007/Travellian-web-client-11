import React from 'react';
import ShowReviews from '../ShowReviews/ShowReviews';

const ReviewCompo = ({reviews, handleDelete}) => {
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Message</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
        reviews.map(review => <ShowReviews
          key={review._id}
          review={review}
          handleDelete={handleDelete}
        ></ShowReviews>)
      }
     
    </tbody>
  </table>
      </div>
        </div>
    );
};

export default ReviewCompo;