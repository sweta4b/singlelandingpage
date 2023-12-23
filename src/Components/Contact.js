import React from 'react'
/**
 * Contact.js
 * For styling and holding data of "Contact Us" section
 * 
 */
function Contact() {
  return (
    <div className='w-full bg-white mt-60 bg-gradient-to-b from-purple-50 via-white to-transparent '>
        <div className='md:max-w-[1480px] max-w-[600px]  m-auto  text-center py-20 px-2 md:px-0 border-b'>
            <h1 className=' text-5xl leading-tight text-blue-950  font-semibold md:text-[80px] '>No long-term contracts.</h1>
            <h1 className=' text-5xl leading-tight text-blue-950  font-semibold md:text-[80px] '>No catches. Simple.</h1>
            <p className=' md:text-2xl py-4 text-gray-500 font-medium'>Start your 30-day free trial. Cancel anytime</p>
            <button className=' my-4 hover:bg-blue-900 hover:scale-100 bg-blue-950 text-white border-slate-400 px-8 py-3 rounded-md font-semibold text-gray-600 hidden md:block m-auto'>Contact Us</button>
        </div>
    </div>
  )
}

export default Contact