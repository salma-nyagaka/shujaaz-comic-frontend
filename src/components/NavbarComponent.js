import React from 'react'
import '../assets/styles/navbar.css'

const NavbarComponent = props => {
  return (
    <div>
      <nav className='nav__page'>
        <a href='/' className='nav__page__link'>
          Home
        </a>
        |
        <a href='/creators' className='nav__page__link'>
          Creators
        </a>
      </nav>
    </div>
  )
}

export default NavbarComponent
