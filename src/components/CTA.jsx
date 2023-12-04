import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>Tenes algún proyecto en mente? <br className='sm_block-hidden '/>
      Creemos algo juntos!
      </p>  
      <Link to='/contact' className="btn">
        Contacto
      </Link>
    </section>
  )
}

export default CTA