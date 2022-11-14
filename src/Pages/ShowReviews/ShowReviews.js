import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ShowReviews = ({review, handleDelete, service}) => {
    const {_id} = service;
    const {user} = useContext(AuthContext)
    const {serviceId, email, message, img, name, servicename} = review;
    return (
      <>
      {
        serviceId === _id ? 
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
              <img src={img ? img : 'https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png'} alt="Avatar Tailwind CSS Component" />
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
        {servicename}
      </td>
      <td>
        {message}
      </td>
      <th>
        {
          user?.email === email ? 
          <button onClick={() => {handleDelete(_id)}} className="btn btn-primary px-4 py-3">X</button>
          :
          ""
        }
      </th>
      </tr>
      :
      ''
      }
      </>
    );
};

export default ShowReviews;