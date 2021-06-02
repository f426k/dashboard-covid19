import React from 'react'
import { Link } from 'react-router-dom';

const Anotherpage: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Anotherpage;
