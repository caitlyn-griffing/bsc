import React from 'react'
import './Navbar.scss'
import navbarItems from './NavbarItems'

function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <ul>
        {
          navbarItems.map(({ cName, src, name }) => {
            // cName = 'navbar-item'
            return(
              <li className={cName}><a href={src}>{name}</a></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Navbar
