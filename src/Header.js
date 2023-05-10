import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='"logo'>ChatBox</div>
           <ul className='nav-links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>About</a></li>
           </ul>
      </nav>
    </div>
  )
}

export default Header;
