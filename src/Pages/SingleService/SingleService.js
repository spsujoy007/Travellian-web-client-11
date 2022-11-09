import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaAngleLeft } from "react-icons/fa";

const SingleService = () => {
  const service = useLoaderData();
  const {img, title, description, price } = service;
  return (
    <div className="py-14">

    <div className="flex md:justify-end mb-5">
      <Link to='/services'>
      <button className="btn btn-outline btn-primary btn-circle btn-sm "><FaAngleLeft></FaAngleLeft></button>
      </Link>
    </div>      

      <div className="card md:card-side bg-base-100  flex">
      <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} className="w-full md:w-96 rounded-xl cursor-zoom-in" alt="Movie" />
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
