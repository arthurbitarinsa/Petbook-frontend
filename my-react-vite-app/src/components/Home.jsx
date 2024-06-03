import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './home.css';  // Ensure the correct path to the CSS file

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
        <Link to="/home">Home</Link>
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
  const backgroundImages = [
    'https://th.bing.com/th/id/R.dc1fece15d54b6ee14e4304a409700b6?rik=fodZInz1XG4J1g&pid=ImgRaw&r=0',
    'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    'https://i.pinimg.com/736x/f2/f4/79/f2f47946d072a06a70cd69f9845e98f1--snuggles-best-friends.jpg',
    'https://th.bing.com/th/id/R.0b287c521a3be0370c0383139cc5236c?rik=15biTfOtJ87aMw&pid=ImgRaw&r=0',
    'https://www.thesprucepets.com/thmb/qQXwBv2EU3E3AYe03TvPbiXm0M4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pacific_Parrotlet-5b4c0f9046e0fb0037d13563.jpg',
    'https://th.bing.com/th/id/R.027dba257db6d62a4c2b56527d7aaae6?rik=rLgYEz0atD9tBg&pid=ImgRaw&r=0',
    'https://fthmb.tqn.com/tvPe1GjuUCasntTK2maHH_0FBZo=/1280x853/filters:fill(auto,1)/gouldian-finch-188062467-resized-58a6ea6e5f9b58a3c9190af4.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, [backgroundImages.length]);

  return (
    <div className="home-page">
      <header className="app-title">
        <h1>Pet Book</h1>
      </header>
      <NavBar />
      <div
        className="body"
        style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
      >
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>About Us</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
