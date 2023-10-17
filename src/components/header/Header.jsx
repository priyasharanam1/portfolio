import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import HeaderSocials from '../HeaderSocials'
import avatar from './avatar.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Priya Sharma</h1>
        <h5>a Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
        <img src={avatar} width="350" alt="Pink Dress, Rapunzel png"></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default Header
