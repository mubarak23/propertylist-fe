import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='form-container'>
      <form action='' method='post'>
        <h3>welcome back!</h3>
        <input
          type='email'
          name='email'
          required
          maxlength='50'
          placeholder='enter your email'
          className='box'
        />
        <input
          type='password'
          name='pass'
          required
          maxlength='20'
          placeholder='enter your password'
          className='box'
        />
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
        <input type='submit' value='login now' name='submit' className='btn' />
      </form>
    </div>
  );
};

export default Register;
