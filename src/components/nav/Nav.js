import React from 'react'
import {NavLink } from "react-router-dom";
import './nav.css'
const Nav = () => {
  const checkActive = () =>{
    const name = window.location.pathname;
    console.log(name);
  }

  return (
    <nav className="navigation">
          <NavLink className="btn" onClick ={checkActive} to="/">Home</NavLink>
          <NavLink className="btn" onClick ={checkActive} to="/got">Game Of Thrones</NavLink>
          <NavLink className="btn" to="/tracker">Tracker</NavLink>
          <NavLink className="btn" to="/4">4</NavLink>
          <NavLink className="btn" to="/about">About</NavLink>
      </nav>
  )
}

export default Nav