import React from 'react'
import Navbar from './Navbar'
/**
 * Hero.js
 * Used for styling and holding data of Hero Section
 * 
 */
function Hero() {
  return (
    <div className='w-full bg-gradient-to-bl from-purple-200 via-white to-transparent '>
      <Navbar/>
        <div className='md:max-w-[1480px] max-w-[600px]  m-auto  text-center py-20 px-2 md:px-0'>
            <h1 className=' text-6xl leading-tight text-blue-950  font-bold md:text-[90px] '>Elevate Your Presence with Seamless Design and Innovation.</h1>
            <p className=' md:text-2xl py-4 text-gray-500 font-medium'>From strategic planning to digital presence, we're your dedicated partner in achieving solo success.</p>
            <button className=' my-4 hover:bg-blue-900  bg-blue-950 text-white border-slate-400 px-8 py-3 rounded-md font-semibold text-gray-600'>View Pricing</button>
        </div>
    </div>
  )
}

export default Hero