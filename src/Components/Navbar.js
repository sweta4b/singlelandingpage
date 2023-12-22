import React, { useState } from 'react'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className=' w-full h-[80px] bg-gradient-to-t from-purple-50 via-white to-transparent'>
            <div className='md:max-w-[1480px] max-w-[600px]  m-auto w-full h-full flex justify-between items-center md:px-0 px-8'>
                <h1 className='text-blue-950 text-2xl font-semibold '>UniCraft</h1>
                <nav className='flex items-center'>
                    <ul className='hidden md:flex gap-6 text-blue-950 text-lg'>
                        <li>How it Works</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </nav>
                <div className='hidden md:block'>
                    <button className='border bg-white border-slate-400 px-8 py-3 rounded-md font-semibold text-gray-600'>Contact Us</button>
                </div>
                <div className='md:hidden '>
                    <button className="btn" onClick={() => setShowMenu(!showMenu)}><i className={showMenu ? "fa fa-close" : "fa fa-bars"}></i></button>
                </div>
            </div>

            <div className={showMenu ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden" : "hidden"}>
                <ul className='flex flex-col justify-center items-center '>
                    <li className='p-4 hover:bg-gray-100 cursor-pointer border-b w-full text-center'>How it Works</li>
                    <li className='p-4 hover:bg-gray-100 cursor-pointer border-b w-full text-center'>Pricing</li>
                    <li className='p-4 hover:bg-gray-100 cursor-pointer border-b w-full text-center'>FAQ</li>
                    <div className='py-4'>
                        <button className='border bg-white border-slate-400 px-8 py-3 rounded-md font-semibold text-gray-600'>Contact Us</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}
