import React from 'react';
import { Link } from 'react-router-dom';
import './feed.css'; // Importing the CSS file

function Feed() {
  return (
    <div className="feed-container">
      <div className="feed-header">
        <h1 className="feed-title">Pet Book</h1>
        <h2>My feed</h2>
        <Link to="/newpet" className="add-pet-link">Add New Pet</Link>
      </div>
      <div className="feed-content">
        <div className="feed-category">
          <h2 className="feed-category-title">My Pets</h2>
          <p className="feed-category-description">Manage and explore your pets</p>
        </div>
        <div className="feed-categories">
          <h1><Link to="/discover" className="feed-category-link">Discover</Link></h1>
          <Link to="/cats" className="feed-category-link">Cats</Link>
          <Link to="/dogs" className="feed-category-link">Dogs</Link>
          <Link to="/turtles" className="feed-category-link">Turtles</Link>
          <Link to="/birds" className="feed-category-link">Birds</Link>
        </div>
      </div>
    </div>
  );
}

export default Feed;
