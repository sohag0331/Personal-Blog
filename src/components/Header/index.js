import React from 'react'
import './style.css'

/**
* @author Sohag0331
* @function Header
**/

const Header = (props) => {
  return(
   <header className='header'>
       <nav className='headerMenu'>
           <a href='#'>Home</a>
           <a href='#'>About Us</a>
           <a href='#'>Contact Us</a>
       </nav>
       <div>
           Social Media Links
       </div>
   </header>
   )

 }

export default Header