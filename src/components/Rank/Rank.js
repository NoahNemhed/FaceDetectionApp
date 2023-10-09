import React from 'react'

const Rank = ({name, entries}) => {
  return (
    <div className='container mx-auto max-sm:text-center'>
        <div className='flex justify-center'>
          <div className='flex flex-col pb-0'>
          <h1 className='text-white text-2xl max-sm:text-xl'> {`${name}, your current entry count is...`}</h1>
          <h1 className='text-white text-5xl text-center py-4 max-sm:text-4xl'>{entries}</h1>
          </div>

        </div>
       
    </div>
  )
}

export default Rank
