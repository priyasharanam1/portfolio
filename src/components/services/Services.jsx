import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
       <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information Architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Presentation Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphic Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logo Design</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML/CSS Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React.js/Next.js Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Node.js Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Authentication and Authorization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Server Deployment</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>C/C++ Programming</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Structure and Algorithms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Python Basics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Javascript Basics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Indian Politics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>India's International Affairs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Indian Mythology</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Education in India</p>
            </li>
          </ul>
        </article>
       </div>
    </section>
  )
}

export default Services
