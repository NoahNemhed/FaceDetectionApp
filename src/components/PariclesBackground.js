import React from 'react'

import Particles from "react-tsparticles"; 
import particlesOptions from './config/particles-config'
import { loadFull } from "tsparticles";

const PariclesBackground = () => {
    const particlesInit = (engine) => {
        loadFull(engine);
      };
  return (
<Particles init={particlesInit} options={particlesOptions} />
  )
}

export default PariclesBackground
