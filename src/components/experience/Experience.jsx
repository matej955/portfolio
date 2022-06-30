import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What skills I have</h5>
      <h2>My experience</h2>

    <div className='container experience_container'>
        <div className='experience_frontend'>
            <h3>Frontend Development</h3>
            <div className='experience_content'>
             
              <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icon' />
                  <div>
                  <h4>HTML</h4>
                   <small className='text-light'>Basic</small>
                  </div>
              </article>

                  <article className='experience_details'>
                    <AiFillCheckCircle className='experience_details_icon' />
                      <div>
                      <h4>CSS</h4>
                        <small className='text-light'>Basic</small>
                      </div>
                 </article>

                    <article className='experience_details'>
                      <AiFillCheckCircle className='experience_details_icon' />
                          <div>
                          <h4>React</h4>
                            <small className='text-light'>Basic</small>
                          </div>
                      </article>
            </div>
        </div>
      <div className='experience_backend'>
      <h3>Backend Development</h3>
            <div className='experience_content'>
             
              <article className='experience_details'>
                <AiFillCheckCircle className='experience_details_icon' />
                  <div>
                  <h4>SQL</h4>
                   <small className='text-light'>Basic</small>
                  </div>
              </article>

                <article className='experience_details'>
                  <AiFillCheckCircle className='experience_details_icon' />
                    <div>
                    <h4>MySQL Workbench</h4>
                    <small className='text-light'>Basic</small>
                    </div>
                </article>

               
            </div>
        </div>
    </div>
    </section>
  )
}

export default Experience