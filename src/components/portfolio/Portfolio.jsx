import React from 'react'
import './Portfolio.css'

const data = [
  {
    id: 1,
    image: 'https://cdn.dribbble.com/userupload/4257377/file/original-fb2e7cc6aa642267dd27c525b6a3aae2.jpg?resize=450x338&vertical=center',
    title: 'Crypto Currency Dashboard & Finanicial Visualizaton',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: 'https://cdn.dribbble.com/userupload/2993258/file/original-3d513a71fe4bde652e7fc371bb1fb0f7.jpg?resize=450x338&vertical=center',
    title: 'Charts templates and infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-figma'
  },
  {
    id: 3,
    image: 'https://cdn.dribbble.com/userupload/3279735/file/original-13ccfc539f51983a56061e179467f179.png?resize=450x338&vertical=center',
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: 'https://cdn.dribbble.com/userupload/4214527/file/original-4919e9352add4ae26c0087de454033b2.jpg?resize=450x338&vertical=center',
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: 'https://cdn.dribbble.com/users/1271764/screenshots/16740538/reel-min.png?resize=450x338&vertical=center',
    title: 'Charts templates and infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>

        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}></img>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn'>GitHub</a>
          <a href={demo} className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
