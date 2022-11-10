import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full image-father">
  <div id="slide1" className="flex items-center carousel-item relative w-full motherCarousel">
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Welcome to travellian</h1>
      <p className="mb-5">Travel is the movement of people between distant geographical locations. </p>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide2" className="flex items-center carousel-item relative w-full motherCarousel">
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=2000")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Welcome to travellian</h1>
      <p className="mb-5">Travel is the movement of people between distant geographical locations. </p>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide3" className="flex items-center carousel-item relative w-full motherCarousel">
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3155666.jpg&fm=jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Welcome to travellian</h1>
      <p className="mb-5">Travel is the movement of people between distant geographical locations. </p>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;