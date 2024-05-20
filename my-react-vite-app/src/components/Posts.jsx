import React, { useState } from 'react';
import axios from 'axios';
import styles from './Posts.module.css';

const Posts = () => {
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [petId, setPetId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('https://petbook-back-aa858b6addea.herokuapp.com/api/posts/', {
        description,
        photo_url: photoUrl,
        pet: parseInt(petId),
      });

      if (response.status === 201) {
        setSuccess('Post created successfully!');
        setDescription('');
        setPhotoUrl('');
        setPetId('');
      }
    } catch (error) {
      setError('An error occurred while creating the post.');
    }
  };

  return (
    <div className={styles.postsContainer}>
      <h2>Create a New Post</h2>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="photoUrl">Photo URL:</label>
          <input
            type="url"
            id="photoUrl"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="petId">Pet ID:</label>
          <input
            type="number"
            id="petId"
            value={petId}
            onChange={(e) => setPetId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default Posts;
