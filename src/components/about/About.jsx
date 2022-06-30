import React from 'react'
import './about.css'
import {IoIosSchool} from 'react-icons/io'
import {FaAward} from 'react-icons/fa'
import {ImHappy2} from 'react-icons/im'
import ME from '../../assets/slika.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About me </h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={ME} alt='About image' />
          </div>
      </div>
  
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Experience in web design</h5>
                <small>0 years</small>
              </article>
             

                <article className='about_card'>
                  <IoIosSchool className='about_icon'/>
                    <h5>Education</h5>
                      <small>Algebra University</small>
              </article>

                      <article className='about_card'>
                        <ImHappy2 className='about_icon'/>
                          <h5>Fun guy</h5>
                            <small>100%</small>
                       </article>
        
        </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cupiditate facere libero blanditiis suscipit ipsum adipisci 
              error officia dolore sint cumque voluptate ex accusantium, aperiam dolorem nesciunt, qui consectetur sunt.</p>

              
        </div>
</div>
      </section>
  )
}

export default About