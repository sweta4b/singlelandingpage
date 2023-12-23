import React from 'react'

function Card() {
  return (
    <div className='w-full bg-gradient-to-b from-purple-50 via-white to-transparent' id="pricing">
        <div className='md:max-w-[1480px] max-w-[600px]  m-auto  text-center py-20 px-2 md:px-0'>
            <h1 className=' text-5xl leading-tight text-blue-950  font-semibold md:text-6xl '>Pricing made for collaborative support</h1>
            <p className=' md:text-xl text-center py-4 text-gray-500 '>Plain is made for your entire company. Only pay users that actually message customers. Everyone else is free, forever.</p>
        </div>
        <div className='flex justify-center items-center py-4 '>
        <div className='md:max-w-[1480px] max-w-[600px]  m-auto grid lg:grid-cols-3 md:grid-cols-2 md:gap-20 gap-10'>
            <div className='m-2 p-4 border-gray-200 border border rounded-lg hover:scale-[1.1] ease-in-out duration-300 shadow-xl'>
                <h1 className='text-xl text-blue-950 font-semibold'>Freebie</h1>
                <p className='text-gray-600 font-semibold my-4'>Ideal for individuals who need quick access to basic features</p>
                 
                 <span className='flex items-center gap-2 my-4'>
                <p className='text-5xl text-blue-950'>$0 </p>
                <p className='text-sm text-gray-600'>/ Month</p>
                </span>
                <button className='w-full hover:border-slate-800 border my-8 bg-white border-slate-400 px-8 py-3 rounded-md font-semibold text-gray-600'>Get Started Now</button>
                <ul className='flex flex-col gap-3'>
                    <li><i className='fa fa-check-circle pr-2'></i>20,000+ of PNG & SVG graphics</li>
                    <li><i className='fa fa-check-circle pr-2'></i>Access to 100 million stock images</li>
                    <li className='text-gray-600'><i className='fa fa-check-circle-o pr-2'></i>Upload custom icons and fonts</li>
                    <li className='text-gray-600'><i className='fa fa-check-circle-o pr-2'></i>Unlimited Sharing</li>
                    <li className='text-gray-600'><i className='fa fa-check-circle-o pr-2'></i>Upload graphics & video in up to 4k</li>
                    <li className='text-gray-600'><i className='fa fa-check-circle-o pr-2'></i>Unlimited Projects</li>
                    <li className='text-gray-600'><i className='fa fa-check-circle-o pr-2'></i>Instant Access to our design system</li>
                    <li className='text-gray-600'><i className='fa fa-check-circle-o pr-2'></i>Create teams to collaborate on designs</li>
                </ul>
            </div>
            <div className='m-2 p-4 border-gray-200 border border rounded-lg bg-blue-950 hover:scale-[1.1] ease-in-out duration-300 shadow-xl'>
                <h1 className='text-xl text-white  font-semibold'>Freebie</h1>
                <p className='text-white font-semibold my-4'>Ideal for individuals who need quick access to basic features</p>
                 
                 <span className='flex items-center gap-2 my-4'>
                <p className='text-5xl text-white'>$25 </p>
                <p className='text-sm text-white'>/ Month</p>
                </span>
                <button className='w-full hover:border-slate-800 border my-8 bg-white text-blue-950 border-slate-400 px-8 py-3 rounded-md font-semibold text-gray-600'>Get Started Now</button>
                <ul className='flex flex-col gap-3'>
                    <li className='text-white'><i className='fa fa-check-circle pr-2'></i>20,000+ of PNG & SVG graphics</li>
                    <li className='text-white'><i className='fa fa-check-circle pr-2'></i>Access to 100 million stock images</li>
                    <li className='text-white'><i className='fa fa-check-circle pr-2'></i>Upload custom icons and fonts</li>
                    <li className='text-white'><i className='fa fa-check-circle pr-2'></i>Unlimited Sharing</li>
                    <li className='text-white'><i className='fa fa-check-circle pr-2'></i>Upload graphics & video in up to 4k</li>
                    <li className='text-gray-400'><i className='fa fa-check-circle-o pr-2'></i>Unlimited Projects</li>
                    <li className='text-gray-400'><i className='fa fa-check-circle-o pr-2'></i>Instant Access to our design system</li>
                    <li className='text-gray-400'><i className='fa fa-check-circle-o pr-2'></i>Create teams to collaborate on designs</li>
                </ul>
            </div>
            <div className='m-2 p-4 border-gray-200 border border rounded-lg hover:scale-[1.1] ease-in-out duration-300 shadow-xl'>
                <h1 className='text-xl text-blue-950 font-semibold'>Freebie</h1>
                <p className='text-gray-600 font-semibold my-4'>Ideal for individuals who need quick access to basic features</p>
                 
                 <span className='flex items-center gap-2 my-4'>
                <p className='text-5xl text-blue-950'>$100 </p>
                <p className='text-sm text-gray-600'>/ Month</p>
                </span>
                <button className='w-full hover:border-slate-800 border my-8 bg-white border-slate-400 px-8 py-3 rounded-md font-semibold text-gray-600'>Get Started Now</button>
                <ul className='flex flex-col gap-3'>
                    <li><i className='fa fa-check-circle pr-2'></i>20,000+ of PNG & SVG graphics</li>
                    <li><i className='fa fa-check-circle pr-2'></i>Access to 100 million stock images</li>
                    <li><i className='fa fa-check-circle pr-2'></i>Upload custom icons and fonts</li>
                    <li><i className='fa fa-check-circle pr-2'></i>Unlimited Sharing</li>
                    <li><i className='fa fa-check-circle pr-2'></i>Upload graphics & video in up to 4k</li>
                    <li><i className='fa fa-check-circle pr-2'></i>Create teams to collaborate on designs</li>
                    <li><i className='fa fa-check-circle pr-2'></i>Unlimited Projects</li>
                    <li><i className='fa fa-check-circle pr-2'></i>Instant Access to our design system</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card