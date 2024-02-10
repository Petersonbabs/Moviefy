import React from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
const {id} = useParams()
console.log(id);

  return (
    <div>
        <h1>Single Movie</h1>
    </div>
  )
}

export default Movie