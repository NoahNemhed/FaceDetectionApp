import React from 'react'

const Navigation = ({onRouteChange}) => {
        return (
            <nav className='flex justify-end py-8 container mx-auto'>
                <button onClick={() => onRouteChange('signin')} className='cursor-pointer text-2xl text-white'>Sign out</button>
            </nav>
          )

    

 

}

export default Navigation
