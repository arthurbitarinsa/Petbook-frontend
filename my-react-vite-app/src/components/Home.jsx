import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './home.css'

const NavBar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/allpets">All Pets</Link>
        <Link to="/postlist">Post List</Link>
      </div>
      {user && (
        <div className="welcome-section">
          <span>Welcome, {user.username}!</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

const HomePage = () => {
  // Background images for alternating
  const backgroundImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  // Randomly select background image
  const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  return (
    <div className="home-page">
      <header className="app-title">
        <h1>Pet Book</h1>
      </header>
      <NavBar />
      <div className="body" style={{ backgroundImage: `url(${randomImage})` }}>
        {/* Body content */}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>All rights reserved</p>
          {/* Add icons or other creative elements */}
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
