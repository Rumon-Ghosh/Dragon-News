import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center py-2'>
      <img className='max-w-[350px]' src={logo} />
      <p className='text-accent'>Journalism Without Fear or Favour</p>
      <p className='text-accent font-semibold'>{format(new Date(), 'EEEE, MMMM dd, yyyy')}</p>
    </div>
  );
};

export default Header;