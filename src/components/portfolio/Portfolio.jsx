import React from 'react'
import './Portfolio.css'

const data = [
  {
    id: 1,
    image: 'https://assets.materialup.com/uploads/7d7db3c3-a539-4793-be46-24bb3dd32157/preview.jpg',
    title: 'Netflix Clone App - ReactJS, TMDB API',
    github: 'https://github.com/priyasharanam1/netflixx',
    demo: 'https://newbie-netflixx.netlify.app/'
  },
  {
    id: 2,
    image: 'https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3',
    title: 'Meme Generator App - ReactJS',
    github: 'https://github.com/priyasharanam1/memes',
    demo: 'https://buildmeme.netlify.app/'
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/564x/ff/7d/f2/ff7df2b682f14ab4e505efe02f7c0ff1.jpg',
    title: 'Expense Tracker App - ReactJS',
    github: 'https://github.com/priyasharanam1/expenses',
    demo: 'https://your-expenses-here.netlify.app/'
  },
  {
    id: 4,
    image: 'https://www.teledataict.com/media/2022/02/blog_online_business.jpg',
    title: 'Blog App - NextJS',
    github: 'https://github.com/priyasharanam1/quickblog',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
    title: 'URL Shortener - NodeJS, MongoDB',
    github: 'https://github.com/priyasharanam1/url-shortener',
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
