import React from 'react'
import { Adobe, Amazon, Slack, Spotify, Zapier, Zoom } from '../Logo'


function Companies() {
    return (
        <div className='w-full bg-white'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <p className='text-gray-500 text-center py-8'>Trusted by 250+ companies</p>
                <div className='flex justify-center items-center py-8  '>
                <div className='grid md:grid-cols-6 sm:grid-cols-4 md:gap-20 gap-10'>
                    <img src={Zapier} alt="Zapier"/>
                    <img src={Spotify} alt="Spotify"/>
                    <img src={Zoom} className="pt-[10px] pl-[10px]" alt="Zoom"/>
                    <img src={Slack} alt="Slack"/>
                    <img src={Amazon} alt="Amazon"/>
                    <img src={Adobe} alt="Adobe"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Companies