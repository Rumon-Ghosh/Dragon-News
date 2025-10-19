import React from 'react';
import swimmingImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playGround from '../../assets/playground.png'

const QZone = () => {
  return (
    <div className='bg-base-200 p-2'>
      <h2 className='font-bold mb-5'>QZone</h2>
      <div className='space-y-3'>
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playGround} alt="" />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default QZone;