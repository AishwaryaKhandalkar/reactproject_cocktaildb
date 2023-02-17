import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-center'>
          <Link to="/">
            <img src={logo} alt="Coctail db logo" />
          </Link>
        </div>
        <ul className='nav-links'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar