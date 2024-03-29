import React from 'react'
import './Nav.css'
import {ImHome3} from 'react-icons/im'
import {BiUserCircle} from 'react-icons/bi'
import {MdMenuBook} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {SiGooglemessages} from 'react-icons/si'
import {useState} from 'react'

function Nav() {

  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome3 /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdMenuBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiGooglemessages /></a>
    </nav>
  )
}

export default Nav