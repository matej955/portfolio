import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/matej-sabolevski-bb725a203/" target='_blank'><BsLinkedin/></a>
        <a href="htpps://github.com" target='_blank'><IoLogoGithub /></a>
        <a href="htpps://facebook.com" target='_blank'><BsFacebook /></a>
        </div>
  )
}

export default HeaderSocials