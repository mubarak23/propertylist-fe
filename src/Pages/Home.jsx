import React from 'react';
import Footer from '../Components/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <section className='center'>
        <form action='search.html' method='post'>
          <h3>find your perfect home</h3>
          <div className='box'>
            <p>
              enter location <span>*</span>
            </p>
            <input
              type='text'
              name='location'
              required
              maxLength='50'
              placeholder='enter ciyt name'
              className='input'
            />
          </div>
          <div className='flex'>
            <div className='box'>
              <p>
                property type <span>*</span>
              </p>
              <select name='type' className='input' required>
                <option value='flat'>flat</option>
                <option value='house'>house</option>
                <option value='shop'>shop</option>
              </select>
            </div>
            <div className='box'>
              <p>
                how many BHK <span>*</span>
              </p>
              <select name='bhk' className='input' required>
                <option value='1'>1 BHK</option>
                <option value='2'>2 BHK</option>
                <option value='7'>7 BHK</option>
                <option value='8'>8 BHK</option>
                <option value='9'>9 BHK</option>
              </select>
            </div>
            <div className='box'>
              <p>
                maximum budget <span>*</span>
              </p>
              <select name='minimum' className='input' required>
                <option value='5000000'>5 lac</option>
                <option value='1000000'>10 lac</option>
                <option value='90000000'>9 Cr</option>
                <option value='100000000'>10 Cr</option>
                <option value='150000000'>15 Cr</option>
                <option value='200000000'>20 Cr</option>
              </select>
            </div>
            <div className='box'>
              <p>
                maximum budget <span>*</span>
              </p>
              <select name='maximum' className='input' required>
                <option value='5000000'>5 lac</option>
                <option value='1000000'>10 lac</option>
                <option value='2000000'>20 lac</option>
                <option value='3000000'>30 lac</option>
                <option value='4000000'>40 lac</option>
              </select>
            </div>
          </div>
          <input
            type='submit'
            value='search property'
            name='search'
            className='btn'
          />
        </form>
      </section>
      <section className='services'>
        <h1 className='heading'>our services</h1>

        <div className='box-container'>
          <div className='box'>
            <img src='../Assets/images/icon-1.png' alt='' />
            <h3>buy house</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, incidunt.
            </p>
          </div>

          <div className='box'>
            <img src='../Assets/images/icon-2.png' alt='' />
            <h3>rent house</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, incidunt.
            </p>
          </div>

          <div className='box'>
            <img src='../Assets/images/icon-3.png' alt='' />
            <h3>sell house</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, incidunt.
            </p>
          </div>

          <div className='box'>
            <img src='../Assets/images/icon-4.png' alt='' />
            <h3>flats and buildings</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, incidunt.
            </p>
          </div>

          <div className='box'>
            <img src='../Assets/images/icon-5.png' alt='' />
            <h3>shops and malls</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, incidunt.
            </p>
          </div>

          <div className='box'>
            <img src='../Assets/images/icon-6.png' alt='' />
            <h3>24/7 service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, incidunt.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
