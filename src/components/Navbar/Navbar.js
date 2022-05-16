import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navLink">
        Home
      </div>
      <div className="navLink">
        Breakfast
      </div>
      <div className="navLink">
        Lunch
      </div>
      <div className="navLink">
        Dinner
      </div>
      <div className="navLink">
        Reviews
      </div>
    </div>
  )
}

export default Navbar
