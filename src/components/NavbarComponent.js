import React from 'react';
import '../assets/styles/navbar.css';

const NavbarComponent = props => {
  return (
    <div>
      <div className='topnav'>
        <a className='active' href='/'>
          Home
        </a>
        <a href='/creators'>Creators</a>
        <a href='#contact'>Contact</a>
        <a href='#about'>About</a>
      </div>
    </div>
  )
}

export default NavbarComponent
