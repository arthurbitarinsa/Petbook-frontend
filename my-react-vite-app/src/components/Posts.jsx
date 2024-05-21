import React, { useState } from "react";
import axios from "axios";

const Posts = () => {
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [petId, setPetId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      description,
      photo_url: photoUrl,
      pet: parseInt(petId),
    };

    console.log("Submitting post data:", postData);

    try {
        const tokens = localStorage.getItem('authToken')
        const token = "bearer " + tokens 
        const config = {
            headers: {
                 'Authorization': token,
                 'Content-Type': 'application/json'
            }
        }
      const response = await axios.post(
        "https://petbook-back-aa858b6addea.herokuapp.com/api/posts/",
        postData, config
      );
      console.log("Post successful:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            type="text"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Pet ID:</label>
          <input
            type="number"
            value={petId}
            onChange={(e) => setPetId(e.target.value)}
          />
        </div>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default Posts;
