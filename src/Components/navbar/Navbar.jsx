import React from 'react';

const Navbar = () => {
  return (
    <div className='header'>
      <nav className='navbar nav-1'>
        <section className='flex'>
          <a href='home.html' className='logo'>
            <i className='fas fa-house'></i>MyHome
          </a>

          <ul>
            <li>
              <a href='#'>
                post property<i className='fas fa-paper-plane'></i>
              </a>
            </li>
          </ul>
        </section>
      </nav>
      <nav className='navbar nav-2'>
        <section className='flex'>
          <div id='menu-btn' className='fas fa-bars'></div>
          <div className='menu'>
            <ul>
              <li>
                <a href='#'>
                  buy<i className='fas fa-angle-down'></i>
                </a>
                <ul>
                  <li>
                    <a href='#'>house</a>
                  </li>
                  <li>
                    <a href='#'>flat</a>
                  </li>
                  <li>
                    <a href='#'>shop</a>
                  </li>
                  <li>
                    <a href='#'>ready to move</a>
                  </li>
                  <li>
                    <a href='#'>furnished</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  sell<i className='fas fa-angle-down'></i>
                </a>
                <ul>
                  <li>
                    <a href='#'>post property</a>
                  </li>
                  <li>
                    <a href='#'>dashboard</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>rent</a>
                <ul>
                  <li>
                    <a href='#'>house</a>
                  </li>
                  <li>
                    <a href='#'>flat</a>
                  </li>
                  <li>
                    <a href='#'>shop</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>
                  help<i className='fas fa-angle-down'></i>
                </a>
                <ul>
                  <li>
                    <a href='about.html'>about us</a>
                  </li>
                  <li>
                    <a href='contact.html'>contact us</a>
                  </li>
                  <li>
                    <a href='contact.html#faq'>FAQ</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
