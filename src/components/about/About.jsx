import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import profile from './profile.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
           <div className='about__me-image'>
           <img src={profile} alt="Rapunzel With Horse PNG" ></img>
           </div>

        </div>

        <div className='about__content'>
           <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Working Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ Completed Projects</small>
            </article>

           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestiae minus quia neque sit eum quam, modi et ut aliquid iusto earum distinctio odit nobis id quos ea, dolor voluptatibus?</p>
            <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
