import React from 'react'
import { Link } from 'react-router-dom';


function Feed() {
  return (
    <div>
      <h1>FEED</h1>
      <h2><Link to="/newpet">NewPet</Link></h2>
    </div>
    
  )
}

export default Feed