import React from 'react';
import '../assets/styles/navbar.css';

const NavbarComponent = props => {
  return (
    <div>
      {/* <div className='topnav'>
        <a className='active' href='/'>
          Home
        </a>
        <a href='/creators'>Creators</a>
        <a href='#contact'>Contact</a>
        <a href='#about'>About</a>
      </div> */}
           <nav className='nav__page'>
          <a href='/' className='nav__page__link'>
            Home
          </a>|
          <a href='/creators' className='nav__page__link'>
            Creators
          </a>

        </nav>
    </div>
  )
}

export default NavbarComponent
