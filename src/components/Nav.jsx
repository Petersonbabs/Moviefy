import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    const style ={
        background: "#000",
        color: "white",
        padding: "1rem",
        display: "flex",
        gap: "2rem"

    }

  return (
    <div>
        <div style={style}>
            <Link to={"/"}>Movies</Link>
            <Link to={"tv"}>Tv</Link>
        </div>
    </div>
  )
}

export default Nav