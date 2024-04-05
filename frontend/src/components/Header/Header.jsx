/* eslint-disable no-unused-vars */
import React from 'react'
import "./Header.css";
import Logo from '../../assets/logo.jpg';

export const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt='' className='logo'/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}
