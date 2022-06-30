import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

    <div className='portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG2} alt='' />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_cta">
          <a href="htpps://github.com" className='btn'>I have nothing to show you, this is my first website.</a>
          </div>
          <h4>I will just add random pictures</h4>
        </article>


        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG2} alt='' />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_cta">
          <a href="htpps://github.com" className='btn'>I have nothing to show you, this is my first website.</a>
          </div>
          <h4>I will just add random pictures</h4>
        </article>


        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG2} alt='' />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_cta">
          <a href="htpps://github.com" className='btn'>I have nothing to show you, this is my first website.</a>
          </div>
          <h4>I will just add random pictures</h4>
        </article>


        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG2} alt='' />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_cta">
          <a href="htpps://github.com" className='btn'>I have nothing to show you, this is my first website.</a>
          </div>
          <h4>I will just add random pictures</h4>
        </article>


        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG2} alt='' />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_cta">
          <a href="htpps://github.com" className='btn'>I have nothing to show you, this is my first website.</a>
          </div>
          <h4>I will just add random pictures</h4>
        </article>


        <article className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src={IMG2} alt='' />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_cta">
          <a href="htpps://github.com" className='btn'>I have nothing to show you, this is my first website.</a>
          </div>
          <h4>I will just add random pictures</h4>
        </article>
    </div>
    
    </section>
  )
}

export default portfolio