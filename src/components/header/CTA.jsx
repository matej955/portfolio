import React from 'react'
import CV from '../../assets/Matej_SabolevskiCV.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Resume </a>
        <a href='#contact' className='btn btn-primary'> Contact me </a>
    </div>
  )
}

export default CTA