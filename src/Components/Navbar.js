import React, { useState } from 'react'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className=' w-full h-[80px]  '>
            <div className='md:max-w-[1480px] max-w-[600px]  m-auto w-full h-full flex justify-between items-center md:px-0 px-8'>
                <h1 className='text-blue-950 text-2xl font-semibold cursor-pointer hover:scale-125'>UniCraft</h1>
                <nav className='flex items-center'>
                    <ul className='hidden md:flex gap-6 text-blue-950 text-lg'>
                        <li className=' hover:scale-125 hover:cursor-pointer'><a href='#howItWorks'>How it Works</a></li>
                        <li className='hover:scale-125 hover:cursor-pointer'><a href="#pricing">Pricing</a></li>
                        <li className='hover:scale-125 hover:cursor-pointer'><a href="#faq">FAQ</a></li>
                    </ul>
                </nav>
                <div className='hidden md:block'>
                    <button className='border bg-white border-slate-400 hover:border-slate-800 px-8 py-3 rounded-md font-semibold text-gray-600'>Contact Us</button>
                </div>
                <div className='md:hidden '>
                    <button className="btn" onClick={() => setShowMenu(!showMenu)}><i className={showMenu ? "fa fa-close" : "fa fa-bars"}></i></button>
                </div>
            </div>

            <div className={showMenu ? "absolute z-10  p-4 h-full backdrop-blur-xl w-full px-8 md:hidden" : "hidden"}>
                <ul className='flex flex-col justify-center items-center '>
                    <li className='p-4 hover:bg-gray-100 cursor-pointer border-b w-full text-center'><a href="#howItWorks">How it Works</a></li>
                    <li className='p-4 hover:bg-gray-100 cursor-pointer border-b w-full text-center'><a href="#pricing">Pricing</a></li>
                    <li className='p-4 hover:bg-gray-100 cursor-pointer border-b w-full text-center'><a href="#faq">FAQ</a></li>
                    <div className='py-4'>
                        <button className='border bg-white border-slate-400 px-8 py-3 rounded-md font-semibold text-gray-600'>Contact Us</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}
