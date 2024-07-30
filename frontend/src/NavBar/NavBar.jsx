import React from 'react'
import './NavBar.css'
export const NavBar = () => {
  return (
    <div className='header-nav'>
    <div className='nav-logo'>
        <div className='logo'></div>
    </div>
    <div className='nav-list'>
    <div className='home-text font-family cursor line-effect uplift-effect'>Home</div>
    <div className='resturant-list font-family cursor line-effect uplift-effect'>Resturant-List</div>
    <div className='food font-family cursor line-effect uplift-effect'>Food</div>
    <div className='drinks font-family cursor line-effect uplift-effect'>Drinks</div>
    <div className='contact font-family cursor line-effect uplift-effect'>Contact</div>
    <div className='login-div'>
        <div className='login-text font-family cursor uplift-effect'>Login</div>
    </div>
    <div className='registor-div'>
        <div className='registor-text font-family cursor uplift-effect'>Registor</div>
    </div>
    </div>
</div>
  )
}

export default NavBar