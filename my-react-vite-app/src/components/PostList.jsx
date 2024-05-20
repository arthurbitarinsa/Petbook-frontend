import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PostList.module.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://petbook-back-aa858b6addea.herokuapp.com/api/posts/');
        setPosts(response.data);
      } catch (error) {
        setError('Failed to fetch posts');
      }
    };

    fetchPosts();
  }, []);

  const handleLike = (postId) => {
    // Implement the like functionality here
    console.log(`Liked post with ID: ${postId}`);
  };

  const handleComment = (postId) => {
    // Implement the comment functionality here
    console.log(`Commented on post with ID: ${postId}`);
  };

  return (
    <div className={styles.postList}>
      {error && <p className={styles.error}>{error}</p>}
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <img src={post.photo_url} alt="Post" className={styles.postImage} />
          <p>{post.description}</p>
          <div className={styles.postActions}>
            <button onClick={() => handleLike(post.id)}>Like</button>
            <button onClick={() => handleComment(post.id)}>Comment</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
