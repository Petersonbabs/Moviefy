import React from 'react';
import { useParams } from 'react-router-dom';

const SingleTv = () => {
const {id} = useParams()
console.log(id);

  return (
    <div>
        <h1>Single SingleTv</h1>
    </div>
  )
}

export default SingleTv