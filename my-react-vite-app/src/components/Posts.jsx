import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posts.css';

const Posts = () => {
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [pet, setPet] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const postData = {
      description,
      photo_url: photoUrl,
      pet: parseInt(pet),  // Assuming pet is an ID and should be an integer
    };

    try {
      const response = await axios.post(
        'https://petbook-back-aa858b6addea.herokuapp.com/api/posts/',
        postData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Submitting post data:', postData);
      if (response.status === 201) {
        setSuccess('Post created successfully!');
        setDescription('');
        setPhotoUrl('');
        setPet('');
      } else {
        setError('Failed to create post.');
      }
    } catch (err) {
      console.error('Error posting data:', err);
      setError('Request failed with status code ' + err.response?.status || 500);
    }
  };

  return (
    <div className="posts-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} className="posts-form">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Pet ID"
          value={pet}
          onChange={(e) => setPet(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">Submit</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default Posts;
