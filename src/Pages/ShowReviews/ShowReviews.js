import React from 'react';

const ShowReviews = ({review, handleDelete}) => {
    const {_id, email, message, img, name,} = review;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}
              <br />
              <span className="badge badge-ghost badge-sm">{email}</span>
              </div>
            </div>
          </div>
        </td>
        <td>
          {message}
        </td>
        <th>
        <button onClick={() => {handleDelete(_id)}} className="btn btn-primary px-4 py-3">X</button>
        </th>
      </tr>
    );
};

export default ShowReviews;