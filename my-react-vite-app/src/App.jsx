import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { AuthProvider } from './context/AuthContext';
import Feed from './components/Feed';
import NewPet from './components/NewPet';
import Posts from './components/Posts';
import AllPets from './components/AllPets';
import PostList from './components/PostList';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/newpet" element={<NewPet />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/allpets" element={<AllPets />} />
          <Route path="/postlist" element={<PostList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
