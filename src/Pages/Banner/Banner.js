import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full motherCarousel">
    <img src="https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3" className="w-full" alt='banner_img'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full motherCarousel">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDga8-BzA3kbqdKx8nkknbD4G0bEpv_9XqnYHB23S3cr-XRB19-mozViLBcl6eAogP0U&usqp=CAU" className="w-full" alt='banner_img'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full motherCarousel">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeozx28rb0rGgQCBPOdK43zDOZT7C29aesELcQRm8FiZqkhgiErbqKumyDt6TmIWtBZs&usqp=CAU" className="w-full" alt='banner_img'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>


        <div className='my-5'>
            <h2 className='text-2xl font-bold'>Welcome to travellian site</h2>
            <p>Lets visit the world..</p>
        </div>
        </div>
    );
};

export default Banner;