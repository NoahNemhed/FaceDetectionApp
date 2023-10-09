import React from 'react'
import { Tilt } from 'react-tilt'
import './Logo.css'
import Brain from './face-recognition.svg'

const Logo = () => {
  return (
    <div className='container mx-auto max-sm:hidden '>
        <Tilt className="Tilt rounded-md shadow-md w-32 h-36 text-center" options={{max : 50}}>
            <img className='Tilt-inner' src={Brain} alt='brain' />
        </Tilt>
      
    </div>
  )
}

export default Logo
