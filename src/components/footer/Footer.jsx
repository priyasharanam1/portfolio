import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>samadhanaleenam</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookSquare/></a>
        <a href='https://instagram.com'><AiFillInstagram/></a>
        <a href='https://linkedin.com'><BsLinkedin/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; samadhanaleenam. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer
