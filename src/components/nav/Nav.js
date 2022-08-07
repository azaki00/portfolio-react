import React from 'react'
import {Link } from "react-router-dom";
import './nav.css'
const Nav = () => {
  return (
    <nav className="navigation">
        <div className="first">
          <Link to="/">Home</Link>
          <Link to="/got">Game Of Thrones</Link>
        </div>
        <div className="second">
          <Link to="/3">3</Link>
          <Link to="/4">4</Link>
        </div>
        <div className="third">
          <Link to="/about">About</Link>
        </div>
      </nav>
  )
}

export default Nav