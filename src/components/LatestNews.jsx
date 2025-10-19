import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className='flex items-center gap-4 mt-3 bg-base-200 p-2'>
      <h1 className='text-base-100 bg-secondary px-3 py-2'>Latest</h1>
      <Marquee speed={20} direction='left' pauseOnHover={`true`} className='flex gap-5'>
        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;