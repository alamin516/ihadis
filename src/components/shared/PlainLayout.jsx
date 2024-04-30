import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PlainLayout = ({children}) => {
  return (
    <>
    <div className='bg-gray-50 dark:bg-hadith-dark-bg style-bn'>
    <Navbar/>
    {children}
    <Footer/>
    </div>
    </>
  )
}

export default PlainLayout