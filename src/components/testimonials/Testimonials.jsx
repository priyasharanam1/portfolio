import React from 'react'
import './Testimonials.css'
// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
     avatar: 'https://images.wsj.net/im-828663/?width=1278&size=1',
     title: 'Rita Ora',
     review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate iure ex non voluptatum eius libero deserunt. Ipsa quas expedita aperiam iste itaque. Odit, fugit. Repellat temporibus in recusandae quod quos.'
},

{
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Shakira_for_VOGUE_in_2021_2.png/640px-Shakira_for_VOGUE_in_2021_2.png',
  title: 'Shakira',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate iure ex non voluptatum eius libero deserunt. Ipsa quas expedita aperiam iste itaque. Odit, fugit. Repellat temporibus in recusandae quod quos.'
},
{
  avatar: 'https://www.filmibeat.com/img/315x100x396/popcorn/profile_photos/nithya-menon-20191128130446-4015.jpg',
  title: 'Nithya Menen',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate iure ex non voluptatum eius libero deserunt. Ipsa quas expedita aperiam iste itaque. Odit, fugit. Repellat temporibus in recusandae quod quos.'
},
{
  avatar: 'https://images.news18.com/ibnlive/uploads/2022/06/praggnanandhaa-wins-norway-chess-open.jpg',
  title: 'Pragg',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate iure ex non voluptatum eius libero deserunt. Ipsa quas expedita aperiam iste itaque. Odit, fugit. Repellat temporibus in recusandae quod quos.'
}
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
          {
            data.map(({avatar,title,review}, index)=>{
              return(
                <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                <img src={avatar} alt={title}></img>
                </div>
                <h5 className='client__name'>{title}</h5>
                <small className='client__review'>{review}</small>
                </SwiperSlide>
              )
            })
          }
        
        
        
      </Swiper>
    </section>
  )
}

export default testimonials
