import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './Login.css'; 

const Login = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        'https://petbook-back-aa858b6addea.herokuapp.com/auth/login/',
        inputs
      );
      console.log(response);

      if (response.status === 200 && response.data.tokens) {
        const token = response.data.tokens.access;
        localStorage.setItem('authToken', token);

       

        setSuccess("Login successful! Redirecting to home...");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          setError("Invalid email or password");
        } else if (err.response.status === 404) {
          setError("User not found. Please register first.");
        } else {
          setError("Something went wrong. Please try again later.");
        }
      } 
    }
  };

  return (
    <div className="auth-container">
      <h1 style={{ color: 'lightgreen' }}>PET BOOK</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          required
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit" className="auth-button">Login</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <span>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;