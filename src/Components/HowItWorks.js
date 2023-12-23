import React from 'react';
import { Arrow, One, Three, Two } from '../Images';

/**
 * HowItWorks.js
 * Used for styling and holding data of Hero Section
 * 
 */
function HowItWorks() {
  return (
    <div id="howItWorks" className='w-full mt-40 '>
      <div className='md:max-w-[1480px] max-w-[600px] rounded-md shadow-md border pb-40 m-auto text-center pt-20 px-2 md:px-0'>
        <h1 className='text-blue-950 text-7xl font-semibold'>How It Works</h1>
        <p className='text-gray-600 mt-4 text-xl'>Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
        <div className='grid grid-cols-1 gap-y-20 md:grid-cols-3 lg:grid-cols-5 mx-20 mt-40'>
          <div className='relative text-center'>
            <img src={One} alt="one" className='m-auto block' />
            <div className='absolute top-20 left-0 text-white'>
              <h1 className='text-6xl font-bold text-blue-950'>Subscribe</h1>
              <p className='text-gray-600'>Subscribe to a plan & you'll get instant access to your private Slack Channel.</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center text-center'>
            <img src={Arrow} alt="arrow" className='rotate-90 md:rotate-0'/>
          </div>
          <div className='relative text-center'>
            <img src={Two} alt="two" className='m-auto'/>
            <div className='absolute top-20 left-0 text-white'>
              <h1 className='text-6xl font-bold text-blue-950'>Request</h1>
              <p className='text-gray-600'>Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours.</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center text-center'>
            <img src={Arrow} alt="arrow" className='rotate-90 md:rotate-0'/>
          </div>
          <div className='relative text-center'>
            <img src={Three} alt="one" className='m-auto block' />
            <div className='absolute top-20 left-0 text-white'>
              <h1 className='text-6xl font-bold text-blue-950'>Revise</h1>
              <p className='text-gray-600'>Need changes? We gurantee unlimited revisions until your're 200% satisfied.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
