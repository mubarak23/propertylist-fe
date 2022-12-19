import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { dispatch, user } = useAuthContext();
  // if (user) {
  //   navigate('/');
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const res = await fetch('http://localhost:3200/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailAddress: email, password }),
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
      dispatch({ type: 'LOGIN', payload: result });
      navigate('/');
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h3>welcome back!</h3>
        <input
          type='text'
          className='box'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Your Email'
        />
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter Your Password'
          className='box'
        />
        <p>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
        {error && <p className='error-message'>{error}</p>}
        {message && <p className='success-message'>{message}</p>}
        <button type='submit' className='btn'>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
