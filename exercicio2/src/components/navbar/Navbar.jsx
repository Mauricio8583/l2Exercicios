import React from 'react'
import './navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className='navbar'>
            <div className='left'>
               <img src='../../Logo.png' alt='logo' /> 
            </div>
            <div className='center'>
                <ul>
                    <li>Auctions</li>
                    <li>Roadmap</li>
                    <li>Discover</li>
                    <li>Community</li>
                </ul>
            </div>
            <div className='right'>
                <div className='buttons'>
                    <button className='contact'>Contact</button>
                    <button className='account'>My Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
