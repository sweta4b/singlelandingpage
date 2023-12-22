import React from 'react';

function Footer() {
    return (
        <div className='w-full bg-white'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto py-20 px-2 md:px-0'>
                <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-[780px]:grid-cols-2 gap-8 max-w-[600px] px-4 md:px-0'>

                    <div className='col-span-5'>
                        <h3 className='text-2xl font-bold mt-10'>UniCraft</h3>
                        <h3 className='py-2 text-gray-600'>Design amazing digital experiences that create more happiness in the world</h3>                        
                    </div>

                    <div className=' col-span-2 md:col-span-2 text-gray-600'>
                            <p>@ 2077 Untitled UI. All rights reserved.</p>
                        </div>

                    <div className='col-span-3 text-gray-600 text-xl '>
                        <i className='fa fa-twitter mr-4'></i>
                        <i className='fa fa-linkedin mr-4'></i>
                        <i className='fa fa-facebook mr-4'></i>
                        <i className='fa fa-github mr-4'></i>
                        <i className='fa fa-instagram mr-4'></i>
                        <i className='fa fa-globe mr-4'></i>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
