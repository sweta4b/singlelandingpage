import React from 'react';
import { Image1, Image2, Image3 } from '../Images';

function Images() {
  const images = [Image1, Image2, Image3, Image2];

  return (
    <div className='w-full bg-white hidden lg:block'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto '>
      <div className='flex gap-4 text-center py-20 px-2 md:px-0 overflow-auto'>
        {images.map((image, index) => (
          <img key={index} src={image} alt="project images" />
        ))}
      </div>
      <button className='border bg-white m-auto block border-slate-400 px-8 py-3 rounded-md font-semibold text-gray-600'>View Recent Work</button>
      </div>
      
    </div>
  );
}

export default Images;
