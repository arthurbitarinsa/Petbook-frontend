import React from 'react'
import { Link } from 'react-router-dom';

function Feed() {
  return (
    <div>
        <h1><Link to="/newpet">NewPet</Link></h1>
        <Link to="/feed">Feed</Link>
    </div>
  )
}

export default Feed