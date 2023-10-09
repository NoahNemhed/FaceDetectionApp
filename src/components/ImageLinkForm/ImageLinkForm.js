import React from 'react'
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className='container mx-auto max-sm:text-center'>
        <div className='flex flex-col place-items-center py-2 pb-0'>
        <h1 className='text-3xl max-sm:text-xl text-white'>This app will detect faces in your pictures. </h1>
            <div className='flex py-8 gap-x-4'>
                <input  onChange={onInputChange} type="text" placeholder='URL goes here .jpg' className='w-96 max-sm:w-auto border border-white pl-4 bg-transparent h-12 placeholder-white text-white hover:border-red-800 focus:border-red-800' />
                <button  onClick={onSubmit} className='border border-white w-24 h-12 text-white'>Detect</button>
            </div>
        </div>

    </div>
  )
}

export default ImageLinkForm
