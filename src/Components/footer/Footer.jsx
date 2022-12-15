import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='flex'>
        <div className='box'>
          <a href='tel:1234567890'>
            <i class='fas fa-phone'></i>
            <span>123456789</span>
          </a>
          <a href='tel:1112223333'>
            <i class='fas fa-phone'></i>
            <span>1112223333</span>
          </a>
          <a href='mailto:shaikhanas@gmail.com'>
            <i class='fas fa-envelope'></i>
            <span>shaikhanas@gmail.com</span>
          </a>
          <a href='#'>
            <i className='fas fa-map-marker-alt'></i>
            <span>mumbai, india - 400104</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
