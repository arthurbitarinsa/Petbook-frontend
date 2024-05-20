import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [inputs, setInputs] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
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
        'https://petbook-back-aa858b6addea.herokuapp.com/auth/signup/',
        inputs
      );

      if (response.status === 201) {
        setSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (err) {
      if (err.response) {
        setError("Something went wrong. Please try again later.");
      } else {
        setError("Network error. Please check your internet connection.");
      }
    }
  };

  return (
    <div className="auth">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />
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
        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
