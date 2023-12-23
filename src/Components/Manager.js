import React from 'react'
import { Image3 } from '../Images'
import { Logomark } from '../Logo'

function Manager() {
  return (
    <div className='w-full bg-gray-100 my-40 hidden lg:block'>
        <div className='md:max-w-[1480px] max-w-[600px] flex flex-col items-center gap-8  m-auto  text-center py-20 px-2 md:px-0'>
            <div className='flex justify-center items-center gap-4 text-3xl font-blue-950 '><img src={Logomark} alt="logomark"/> Sisyphus</div>
            <h1 className=' text-5xl leading-tight text-blue-950  font-semibold  '>We've been with unicraft to kick satrt every new project and can't imagine working without it.</h1>
            <img className='w-[50px] h-[50px] rounded-full' src={Image3} alt="profilepic"/>
            <span>
            <p>Candice Wu</p>
            <p className='text-gray-600'>Product Manager, Sisyphus</p>
            </span>
        </div>
    </div>
  )
}

export default Manager