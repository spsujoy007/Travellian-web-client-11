import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, title, img, description, price } = service;
  return (
    <div className="card card-compact w-82 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)}...</p>
        <h3 className="text-xl text-primary font-semibold">Price: ${price}</h3>
        <div className="card-actions ">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
