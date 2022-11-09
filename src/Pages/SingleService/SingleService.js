import React from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = () => {
  const service = useLoaderData();
  const { img, title, description, price } = service;
  return (
    <div className="py-14">
      <div className="card card-side bg-base-100 ">
      <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} className="w-96 rounded-xl cursor-zoom-in" alt="Movie" />
      </PhotoView>
    </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <h3 className="text-xl">Price: ${price}</h3>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
        
      </div>

      <Reviews
        service={service}
      ></Reviews>
    </div>
  );
};

export default SingleService;
