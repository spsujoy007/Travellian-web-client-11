import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer mt-20 p-10 bg-neutral  text-white">
  <div>
    <span className="footer-title">Services</span> 
    <Link className="link link-hover">Branding</Link> 
    <Link className="link link-hover">Design</Link> 
    <Link className="link link-hover">Marketing</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a target='blank' href='https://www.facebook.com/spsujoy07' className='text-2xl'><FaFacebook></FaFacebook> </a>
      <a target='blank' href='https://www.facebook.com/spsujoy07' className='text-2xl'><FaGithub></FaGithub> </a>
      <a target='blank' href='https://www.linkedin.com/in/spsujoy/' className='text-2xl'><FaLinkedin></FaLinkedin> </a>
    </div>
      <p className='uppercase mt-3'>all copyright reserved by <span className='text-info'>sujoy paul</span></p>
      <p className="uppercase text-error">Life is love - LOVE is life</p>
  </div>
</footer>
    );
};

export default Footer;