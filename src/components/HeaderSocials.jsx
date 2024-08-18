import React from 'react'
import { motion } from "framer-motion";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <motion.a
        href='linkedin.com/in/priya-sharma-328a8a225'
        target='_blank'
        rel="noreferrer"
        whileHover={{ scale: 1.3 }}
      >
        <BsLinkedin/>
      </motion.a>
      <motion.a
        href='https://github.com/priyasharanam1'
        target='_blank'
        rel="noreferrer"
        whileHover={{ scale: 1.3 }}
      >
        <BsGithub/>
      </motion.a>
      <motion.a
        href='https://dribble.com'
        target='_blank'
        rel="noreferrer"
        whileHover={{ scale: 1.3 }}
      >
        <FiDribbble/>
      </motion.a>
    </div>
  )
}

export default HeaderSocials
