import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import './SignInForm.css';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');  // Reset error before submission

    // Input validation
    if (!email || !password) {
      setError('Both email and password are required.');
      setIsLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      // Sending sign-in request to backend
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/login`,  // Adjust your backend URL
        { email, password },
        config
      );
      console.log(data)
      console.log(data.token)
      // If backend response is successful, store user info and navigate to dashboard
      if (data && data.token) {
        localStorage.setItem('userInfo', JSON.stringify(data));  // Store token or user data
        setIsLoading(false);
        navigate('/');  // Redirect after successful login
      } else {
        setError('Login failed, please check your credentials');
        setIsLoading(false);
      }
    } catch (error) {
      // Handle the error if credentials are wrong or server issue
      setError(error.response?.data?.message || 'Invalid email or password');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="signin-container">
        <h2>Sign In</h2>
        {error && <div className="error-message">{error}</div>}
        <form className="signin-form" onSubmit={handleSubmit}>
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
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
