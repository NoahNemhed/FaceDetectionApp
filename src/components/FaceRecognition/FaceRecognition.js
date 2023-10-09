import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imgURL, box}) => {
  console.log(box)
  return (
    <div className='container mx-auto' style={{ maxWidth: '500px' }}>
      <div className='flex justify-center relative'>
        <img id="image" src={imgURL} alt='' className='w-[500px] h-[400px] max-sm:w-[300px] max-sm:h-[250px] max-md:h-[300px]'/>
        <div className='box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  )
}

export default FaceRecognition
