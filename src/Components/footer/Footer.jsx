import React from 'react';
import FaSellsy from 'react-icons/fa';
import FaRegEnvelope from 'react-icons/fa';
import FaReact from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='flex'>
        <div className='box'>
          <a href='tel:1234567890'>
            <i className='fas fa-phone'></i>
            <span>123456789</span>
          </a>
          <a href='tel:1112223333'>
            <i className='fas fa-phone'></i>
            <span>1112223333</span>
          </a>
          <a href='mailto:shaikhanas@gmail.com'>
            <i className='FaRegEnvelope'></i>
            <span>shaikhanas@gmail.com</span>
          </a>
          <a href='#'>
            <i className='FaSellsy'></i>
            <span>Kaduna, Nigeria - 400104</span>
          </a>
        </div>
        <div className='box'>
          <a href='home.html'>
            <span>Home</span>
          </a>
          <a href='about.html'>
            <span>About</span>
          </a>
          <a href='contact.html'>
            <span>Contact</span>
          </a>
          <a href='listings.html'>
            <span>All Listings</span>
          </a>
          <a href='#'>
            <span>Saved Properties</span>
          </a>
        </div>

        <div className='box'>
          <a href='#'>
            <span>facebook</span>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='#'>
            <span>twitter</span>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#'>
            <span>linkedin</span>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='#'>
            <span>instagram</span>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>
      <div className='credit'>
        &copy; Copyright @ 2022 by | All Rights Reserved!
      </div>
    </div>
  );
};

export default Footer;
