import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { dispatch, user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3200/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        password,
      }),
    });
    console.log(res);
    const result = await res.json();
    if (result.status === false) {
      setError(result.message);
      setLoading(false);
    } else {
      setMessage(result.message);
      setLoading(false);
      localStorage.setItem('user', JSON.stringify(result));
      dispatch({ type: 'REGISTER', payload: result });
      navigate('/login');
    }
  };
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h3>Register a New Account!</h3>
        <input
          type='text'
          id='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          maxLength='50'
          placeholder='Enter Your First Name'
          className='box'
        />

        <input
          type='text'
          id='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          maxLength='50'
          placeholder='Enter Your Last Name'
          className='box'
        />

        <input
          type='text'
          id='phoneNumber'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          maxLength='50'
          placeholder='Enter Your Phone Number'
          className='box'
        />

        <input
          type='email'
          id='emailAddress'
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required
          maxLength='50'
          placeholder='Enter Your Email'
          className='box'
        />

        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          maxLength='20'
          placeholder='Enter Your Password'
          className='box'
        />
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
        {error && <p className='error-message'>{error}</p>}
        {message && <p className='success-message'>{message}</p>}
        <button type='submit' className='btn'>
          {loading ? 'Loading...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
