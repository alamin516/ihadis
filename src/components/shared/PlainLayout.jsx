import React from 'react'
import Navbar from './Navbar'

const PlainLayout = ({children}) => {
  return (
    <>
    <div className='bg-gray-50 dark:bg-hadith-dark-bg style-bn'>
    <Navbar/>
    {children}
    </div>
    </>
  )
}

export default PlainLayout