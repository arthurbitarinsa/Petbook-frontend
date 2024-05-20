import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

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

      if (response.status === 200 && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        const decodedToken = jwtDecode(token);
        setUser(decodedToken.user);  // Adjust based on your token structure
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
      } else {
        setError("Network error. Please check your internet connection.");
      }
    }
  };

  return (
    <div className="auth">
      <h1>login</h1>
      <h2><Link to="/feed">Feed</Link></h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
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
