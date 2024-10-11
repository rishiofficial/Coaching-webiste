import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import './SignUpForm.css';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');  // Reset error before submission

    // Input validation
    if (!name || !email || !password) {
      setError('All fields are required.');
      setIsLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/user`,
        { name, email, password },
        config
      );
      console.log("User created successfully")
      // Store token or user info in localStorage
      localStorage.setItem('userInfo', JSON.stringify(data));
      setIsLoading(false);
      navigate('/signin');  // Redirect after successful signup
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="signup-container">
          <h2>Sign Up</h2>
          {error && <div className="error-message">{error}</div>}
          <form className='signup-form' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
            <p>Already have an account? <Link to="/signin">Login</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
