import React from 'react'
import Slider from './Slider'

const Hadis = () => {
  return (
    <div className='container my-[75px] h-fit hadissliderone xss:max-w-full xs:max-w-full xs:px-6 xs:my-10 sm:p-0 sm:max-w-full sm:px-8 md:p-0'>
        <div className={`relative h-11/12 rounded-2xl overflow-hidden bg-[url('/images/sliderbg.svg')] dark:bg-[url('/images/sliderbg-dark.svg')] bg-contain bg-bottom bg-no-repeat sm-max:bg-cover`}>
        <div class="absolute h-full w-full bg-[#2b9e76] dark:bg-hadith-dark-card opacity-90"></div>
        <div className='z-40 flex items-center justify-center w-full h-full'>
            <div className='lg:w-4/6 text-center text-white xss:w-10/12 xs:w-11/12 sm:w-11/12 md:w-11/12 md-max:py-4'>
                    <Slider/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hadis