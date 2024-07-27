import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
        <div className='header-nav'>
            <div className='nav-logo'>
                <div className='logo'></div>
            </div>
            <div className='nav-list'>
            <div className='home-text font-family cursor line-effect'>Home</div>
            <div className='resturant-list font-family cursor line-effect'>Resturant-List</div>
            <div className='food font-family cursor line-effect'>Food</div>
            <div className='drinks font-family cursor line-effect'>Drinks</div>
            <div className='contact font-family cursor line-effect'>Contact</div>
            <div className='login-div'>
                <div className='login-text font-family cursor'>Login</div>
            </div>
            <div className='registor-div'>
                <div className='registor-text font-family cursor'>Registor</div>
            </div>
            </div>
        </div>
        <div className='body-img'></div>
        <footer className='footer'>
            <div className='footer-div'>Want to build a successful online business?</div>
        </footer>
    </>
    
  )
}

export default Home