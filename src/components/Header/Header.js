import React from 'react'
import './Header.scss'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <div className="header">
      <div className="headerTitle">Ballard Street Cafe</div>
        <Navbar />
    </div>
  )
}

export default Header
