import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello My name is </h5>
        <h1>Matej sabolevski</h1>
        <h5 className='text-light'>Student developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me"/>
      </div>
      <a href='#contact' className='scroll_down'> Scroll down </a>
      </div>
    </header>
  )
}

export default header