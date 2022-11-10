import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaAngleLeft } from "react-icons/fa";
import UseTitleHook from "../UseTitleHook/UseTitleHook";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ShowReviews from "../ShowReviews/ShowReviews";
import ReviewCompo from "../ReviewsCompo/ReviewCompo";

const SingleService = () => {
  const {user} = useContext(AuthContext)
  const service = useLoaderData();
  const {_id, img, title, description, price } = service;
  UseTitleHook(`${title}`);

  const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // const url = `http://localhost:5000/review?serviceId=${_id}`
        const url = `http://localhost:5000/reviews`
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
        
    }, [reviews])

  //delete a review
  const handleDelete = id => {
    const procced = window.confirm("Are you sure, you want to delete your product?");
    if(procced){
        fetch(`http://localhost:5000/reviews/${id}`, {
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

  const handlePostReview = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    const name = user?.displayName;
    const img = user?.photoURL;
    console.log(message, name, img)
    const review = {
        serviceId: _id,
        message: message,
        name: name,
        img: img,
        email: user.email
    }

    fetch('http://localhost:5000/reviews', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())        
    .then(data => {
        console.log(data)
        event.target.reset()
    })
    .catch(err => console.error(err));



}

  return (
    <div className="py-14">

    <div className="flex md:justify-end mb-5">
      <Link to='/services'>
      <button className="btn btn-outline btn-primary btn-circle btn-sm "><FaAngleLeft></FaAngleLeft></button>
      </Link>
    </div>      

      <div className="card md:card-side bg-base-100  flex">

        {/* zoom image in react  */}
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
            <button className="btn btn-primary">Check out</button>
          </div>
        </div>
        
      </div>

      <Reviews
        service={service}
        handlePostReview={handlePostReview}
      ></Reviews>

      {/* Reviews table  */}
      <div className="mt-6">
        <ReviewCompo reviews={reviews} handleDelete={handleDelete}></ReviewCompo>
      </div>
    </div>
  );
};

export default SingleService;
