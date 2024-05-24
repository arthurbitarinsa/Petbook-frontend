import React, { useState } from 'react';
import axios from 'axios';
import './NewPet.css'

function NewPet() {
  const [petData, setPetData] = useState({
    name: '',
    gender: '',
    birth: '',
    description: '',
    photo_url: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
        const tokens = localStorage.getItem('authToken')
    
        const token = "bearer " + tokens
        
        const config = {
            headers: {
                 'Authorization': token,
                 'Content-Type': 'application/json'
            }
        }
      await axios.post('https://petbook-back-aa858b6addea.herokuapp.com/api/pets/', petData, config);
      setSuccess('Pet added successfully!');
      setPetData({
        name: '',
        gender: '',
        birth: '',
        description: '',
        photo_url: ''
      });
    } catch (err) {
      setError('Failed to add pet. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="add-pet">
      <h2>Add a New Pet</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={petData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={petData.gender}
          onChange={handleChange}
          required
        />

        <label htmlFor="birth">Birth Date:</label>
        <input
          type="date"
          id="birth"
          name="birth"
          value={petData.birth}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={petData.description}
          onChange={handleChange}
        />

        <label htmlFor="photo_url">Photo URL:</label>
        <input
          type="text"
          id="photo_url"
          name="photo_url"
          value={petData.photo_url}
          onChange={handleChange}
        />

        <button type="submit">Add Pet</button>
      </form>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
}

export default NewPet;