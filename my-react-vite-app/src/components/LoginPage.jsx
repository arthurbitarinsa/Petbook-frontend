// LoginPage.jsx

import React from 'react';
import './LoginPage.css'; // Import CSS file for styling

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1 className="petbook-heading">PETBOOK</h1>
      <p className="tagline">Talk about your pet</p>

      <div className="login-form">
        <h2 className="loginmain">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username" className="green-text">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="green-text">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="green-text">Login</button>
        </form>
        <p className="register-link green-text">Not registered yet? <a href="#">Click here</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
