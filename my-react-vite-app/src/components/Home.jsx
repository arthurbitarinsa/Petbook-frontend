import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      {user ? <p>Welcome, {user.username}!</p> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
